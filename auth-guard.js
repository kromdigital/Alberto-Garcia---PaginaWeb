/* =========================================================
   AUTH GUARD
   Se ejecuta en cuanto carga recetas.html:
   1. Verifica que haya una sesión activa (Firebase Auth).
   2. Verifica que el usuario tenga un documento en la
      colección "usuarios" de Firestore.
   3. Verifica que su fecha de expiración (30 días desde el
      alta) no haya pasado.
   Si algo falla, cierra sesión y regresa a login.html.
========================================================= */

firebase.auth().onAuthStateChanged(async (user) => {

  const loadingEl = document.getElementById("authLoading");
  const contentEl = document.getElementById("protectedContent");
  const logoutBtn = document.getElementById("logoutBtn");

  // No hay sesión iniciada -> a login
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  try {

    const doc = await db.collection("usuarios").doc(user.uid).get();

    if (!doc.exists) {
      // Se autenticó pero no tiene un plan asignado en Firestore
      throw new Error("sin-registro");
    }

    const data = doc.data();
    const expiracion = data.fechaExpiracion.toDate();
    const ahora = new Date();

    if (ahora > expiracion) {
      // Su acceso de 30 días ya venció
      await firebase.auth().signOut();
      window.location.href = "login.html?expirado=1";
      return;
    }

    // Acceso válido: mostrar contenido
    if (loadingEl) loadingEl.style.display = "none";
    if (contentEl) contentEl.style.display = "block";
    if (logoutBtn) logoutBtn.style.display = "flex";

  } catch (err) {
    await firebase.auth().signOut();
    window.location.href = "login.html";
  }

});

/* BOTÓN CERRAR SESIÓN */
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      firebase.auth().signOut().then(() => {
        window.location.href = "login.html";
      });
    });
  }
});