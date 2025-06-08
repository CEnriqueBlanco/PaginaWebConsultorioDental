document.addEventListener("DOMContentLoaded", function () {
    const sesion = JSON.parse(localStorage.getItem('sesionIniciada'));
    const nav = document.querySelector("#navbarNav .navbar-nav");
    const bienvenida = document.getElementById("bienvenida");

    if (sesion) {
        // Ocultar "Iniciar sesión"
        const loginLink = nav?.querySelector('a[href="login.html"]');
        if (loginLink) loginLink.parentElement.remove();

        // Mostrar bienvenida
        if (bienvenida) {
            bienvenida.textContent = `¡Hola, ${sesion.nombre}!`;
            bienvenida.classList.remove("d-none");
        }

                // Agregar "Mis Citas" solo si es usuario (no admin)
                // Agregar "Mis Citas" solo si es usuario (no admin)
                if (sesion.tipo === "usuario" && !document.getElementById("misCitasLink")) {
                    const misCitasLi = document.createElement("li");
                    misCitasLi.className = "nav-item";
                    misCitasLi.innerHTML = `<a class="nav-link text-info" id="misCitasLink" href="miscitas.html">Mis Citas</a>`;
                    nav?.appendChild(misCitasLi);
                }

                // Agregar "Panel Admin" solo si es admin
                if (sesion.tipo === "admin" && !document.getElementById("adminPanelLink")) {
                    const adminLi = document.createElement("li");
                    adminLi.className = "nav-item";
                    adminLi.innerHTML = `<a class="nav-link text-warning" id="adminPanelLink" href="admin-citas.html">Panel Admin</a>`;
                    nav?.appendChild(adminLi);
                }

        // Agregar "Cerrar sesión" si no existe
        if (!document.getElementById('cerrarSesion')) {
            const logoutLi = document.createElement("li");
            logoutLi.className = "nav-item";
            logoutLi.innerHTML = `<a class="nav-link text-danger" href="#" id="cerrarSesion">Cerrar Sesión</a>`;
            nav?.appendChild(logoutLi);

            document.getElementById("cerrarSesion").addEventListener("click", () => {
                localStorage.removeItem("sesionIniciada");
                location.href = "index.html";
            });
        }
    }
});
