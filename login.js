const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("loginError");
const loginBtn = document.getElementById("loginBtn");

/* Si vuelve de recetas.html por expiración, mostrar aviso */
const params = new URLSearchParams(window.location.search);
if (params.get("expirado") === "1") {
  mostrarError("Tu acceso de 30 días ha expirado. Contacta a Alberto García para renovarlo.");
}

function mostrarError(mensaje) {
  errorMsg.textContent = mensaje;
  errorMsg.style.display = "block";
}

function ocultarError() {
  errorMsg.style.display = "none";
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  ocultarError();

  loginBtn.disabled = true;
  loginBtn.textContent = "Verificando...";

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {

    const cred = await auth.signInWithEmailAndPassword(email, password);
    const uid = cred.user.uid;

    const doc = await db.collection("usuarios").doc(uid).get();

    if (!doc.exists) {
      await auth.signOut();
      mostrarError("Tu cuenta no tiene un plan de recetas asignado. Contacta a Alberto García.");
      return;
    }

    const data = doc.data();
    const expiracion = data.fechaExpiracion.toDate();
    const ahora = new Date();

    if (ahora > expiracion) {
      await auth.signOut();
      mostrarError("Tu acceso de 30 días ha expirado. Contacta a Alberto García para renovarlo.");
      return;
    }

    window.location.href = "recetas.html";

  } catch (err) {

    let mensaje = "Correo o contraseña incorrectos.";

    if (err.code === "auth/invalid-email") {
      mensaje = "El correo no tiene un formato válido.";
    } else if (err.code === "auth/too-many-requests") {
      mensaje = "Demasiados intentos fallidos. Intenta de nuevo más tarde.";
    }

    mostrarError(mensaje);

  } finally {
    loginBtn.disabled = false;
    loginBtn.textContent = "Iniciar Sesión";
  }
});