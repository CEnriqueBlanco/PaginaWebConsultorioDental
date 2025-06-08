document.addEventListener("DOMContentLoaded", function () {
    const sesion = JSON.parse(localStorage.getItem('sesionIniciada'));
    const nav = document.querySelector("#navbarNav .navbar-nav");
    const bienvenida = document.getElementById("bienvenida");

    if (sesion) {
        // Ocultar "Iniciar sesión"
        const loginLink = nav?.querySelector('a[href="login.html"]');
        if (loginLink) loginLink.parentElement.remove();

        // Agregar "Cerrar sesión" si no existe ya
        if (!document.getElementById('cerrarSesion')) {
            const logoutLi = document.createElement("li");
            logoutLi.className = "nav-item";
            logoutLi.innerHTML = `<a class="nav-link text-danger" href="#" id="cerrarSesion">Cerrar Sesión</a>`;
            nav?.appendChild(logoutLi);

            // Evento de cerrar sesión
            document.getElementById("cerrarSesion").addEventListener("click", () => {
                localStorage.removeItem("sesionIniciada");
                location.href = "index.html";
            });
        }

        // Mostrar bienvenida
        if (bienvenida) {
            bienvenida.textContent = `¡Hola, ${sesion.nombre}!`;
            bienvenida.classList.remove("d-none");
        }
    }
});
