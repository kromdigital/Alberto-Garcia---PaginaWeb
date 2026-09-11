/* =========================================================
   VISTAS
========================================================= */

const loginView = document.getElementById("adminLoginView");
const deniedView = document.getElementById("adminDeniedView");
const panelView = document.getElementById("adminPanelView");

function mostrarVista(vista) {
  loginView.style.display = "none";
  deniedView.style.display = "none";
  panelView.style.display = "none";
  vista.style.display = "flex";
}

/* =========================================================
   LOGIN DE ADMIN
========================================================= */

const adminLoginForm = document.getElementById("adminLoginForm");
const adminLoginError = document.getElementById("adminLoginError");
const adminLoginBtn = document.getElementById("adminLoginBtn");

adminLoginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  adminLoginError.style.display = "none";
  adminLoginBtn.disabled = true;
  adminLoginBtn.textContent = "Verificando...";

  const email = document.getElementById("adminEmail").value.trim();
  const password = document.getElementById("adminPassword").value;

  try {
    await auth.signInWithEmailAndPassword(email, password);
    // onAuthStateChanged se encarga de redirigir a la vista correcta
  } catch (err) {
    adminLoginError.textContent = "Correo o contraseña incorrectos.";
    adminLoginError.style.display = "block";
  } finally {
    adminLoginBtn.disabled = false;
    adminLoginBtn.textContent = "Entrar";
  }
});

/* =========================================================
   VERIFICACIÓN DE SESIÓN Y PERMISOS
========================================================= */

let esAdminActual = false;

firebase.auth().onAuthStateChanged(async (user) => {

  if (!user) {
    esAdminActual = false;
    mostrarVista(loginView);
    return;
  }

  try {
    const adminDoc = await db.collection("admins").doc(user.uid).get();

    if (!adminDoc.exists) {
      esAdminActual = false;
      mostrarVista(deniedView);
      return;
    }

    esAdminActual = true;
    mostrarVista(panelView);
    cargarPacientes();

  } catch (err) {
    esAdminActual = false;
    mostrarVista(deniedView);
  }

});

/* CERRAR SESIÓN (desde el panel o desde "sin permisos") */
document.getElementById("adminLogoutBtn").addEventListener("click", () => {
  firebase.auth().signOut();
});

document.getElementById("deniedLogoutBtn").addEventListener("click", () => {
  firebase.auth().signOut();
});

/* =========================================================
   INSTANCIA SECUNDARIA DE FIREBASE
   (para crear cuentas sin cerrar la sesión del admin)
========================================================= */

const secondaryApp = firebase.initializeApp(firebaseConfig, "Secondary");
const secondaryAuth = secondaryApp.auth();

function generarPassword() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";
  let pass = "";
  for (let i = 0; i < 10; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pass;
}

/* =========================================================
   DAR DE ALTA A UN PACIENTE
========================================================= */

const newPatientForm = document.getElementById("newPatientForm");
const newPatientBtn = document.getElementById("newPatientBtn");
const newPatientError = document.getElementById("newPatientError");
const credentialsBox = document.getElementById("credentialsBox");

newPatientForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  newPatientError.style.display = "none";
  credentialsBox.style.display = "none";

  newPatientBtn.disabled = true;
  newPatientBtn.textContent = "Creando...";

  const email = document.getElementById("newPatientEmail").value.trim();
  const password = generarPassword();

  try {

    // Crear la cuenta en la instancia SECUNDARIA (no afecta tu sesión)
    const cred = await secondaryAuth.createUserWithEmailAndPassword(email, password);
    const uid = cred.user.uid;
    await secondaryAuth.signOut();

    // Calcular fechas
    const ahora = new Date();
    const expiracion = new Date();
    expiracion.setDate(ahora.getDate() + 30);

    // Guardar en Firestore (con la sesión PRINCIPAL, la del admin)
    await db.collection("usuarios").doc(uid).set({
      email: email,
      fechaInicio: firebase.firestore.Timestamp.fromDate(ahora),
      fechaExpiracion: firebase.firestore.Timestamp.fromDate(expiracion)
    });

    // Mostrar credenciales generadas
    document.getElementById("credEmail").textContent = email;
    document.getElementById("credPassword").textContent = password;
    document.getElementById("credExpira").textContent = expiracion.toLocaleDateString("es-MX", {
      day: "numeric", month: "long", year: "numeric"
    });
    credentialsBox.style.display = "block";

    newPatientForm.reset();
    cargarPacientes();

  } catch (err) {

    let mensaje = "Ocurrió un error al crear la cuenta.";
    if (err.code === "auth/email-already-in-use") {
      mensaje = "Ese correo ya tiene una cuenta registrada.";
    } else if (err.code === "auth/invalid-email") {
      mensaje = "El correo no es válido.";
    }
    newPatientError.textContent = mensaje;
    newPatientError.style.display = "block";

  } finally {
    newPatientBtn.disabled = false;
    newPatientBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Crear acceso';
  }

});

/* COPIAR CREDENCIALES */
document.getElementById("copyCredsBtn").addEventListener("click", () => {
  const email = document.getElementById("credEmail").textContent;
  const pass = document.getElementById("credPassword").textContent;
  const texto = `Correo: ${email}\nContraseña: ${pass}`;

  navigator.clipboard.writeText(texto).then(() => {
    const btn = document.getElementById("copyCredsBtn");
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Copiado';
    setTimeout(() => { btn.innerHTML = original; }, 1800);
  });
});

/* =========================================================
   LISTAR PACIENTES
========================================================= */

const patientsLoading = document.getElementById("patientsLoading");
const patientsTable = document.getElementById("patientsTable");
const patientsTableBody = document.getElementById("patientsTableBody");
const patientsEmpty = document.getElementById("patientsEmpty");

async function cargarPacientes() {

  patientsLoading.style.display = "block";
  patientsTable.style.display = "none";
  patientsEmpty.style.display = "none";

  try {

    const snapshot = await db.collection("usuarios")
      .orderBy("fechaExpiracion", "desc")
      .get();

    patientsLoading.style.display = "none";

    if (snapshot.empty) {
      patientsEmpty.style.display = "block";
      return;
    }

    patientsTableBody.innerHTML = "";
    const ahora = new Date();

    snapshot.forEach(doc => {
      const data = doc.data();
      const uid = doc.id;
      const expiracion = data.fechaExpiracion.toDate();
      const activo = expiracion > ahora;

      const fila = document.createElement("tr");

      fila.innerHTML = `
        <td>${data.email || "—"}</td>
        <td>${expiracion.toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" })}</td>
        <td>
          <span class="status-badge ${activo ? 'status-activo' : 'status-expirado'}">
            ${activo ? 'Activo' : 'Expirado'}
          </span>
        </td>
        <td class="patient-actions">
          <button class="renovar-btn" data-uid="${uid}">Renovar 30 días</button>
          <button class="revocar-btn" data-uid="${uid}">Revocar</button>
        </td>
      `;

      patientsTableBody.appendChild(fila);
    });

    patientsTable.style.display = "table";

    document.querySelectorAll(".renovar-btn").forEach(btn => {
      btn.addEventListener("click", () => renovarAcceso(btn.dataset.uid, btn));
    });

    document.querySelectorAll(".revocar-btn").forEach(btn => {
      btn.addEventListener("click", () => revocarAcceso(btn.dataset.uid, btn));
    });

  } catch (err) {
    patientsLoading.textContent = "No se pudo cargar la lista de pacientes.";
  }

}

async function renovarAcceso(uid, btn) {
  btn.disabled = true;
  btn.textContent = "Renovando...";

  const nuevaExpiracion = new Date();
  nuevaExpiracion.setDate(nuevaExpiracion.getDate() + 30);

  try {
    await db.collection("usuarios").doc(uid).update({
      fechaExpiracion: firebase.firestore.Timestamp.fromDate(nuevaExpiracion)
    });
    cargarPacientes();
  } catch (err) {
    btn.disabled = false;
    btn.textContent = "Renovar 30 días";
    alert("No se pudo renovar el acceso.");
  }
}

async function revocarAcceso(uid, btn) {
  const confirmar = confirm("¿Seguro que quieres revocar el acceso de este paciente? Ya no podrá ver las recetas.");
  if (!confirmar) return;

  btn.disabled = true;
  btn.textContent = "Revocando...";

  try {
    await db.collection("usuarios").doc(uid).delete();
    cargarPacientes();
  } catch (err) {
    btn.disabled = false;
    btn.textContent = "Revocar";
    alert("No se pudo revocar el acceso.");
  }
}