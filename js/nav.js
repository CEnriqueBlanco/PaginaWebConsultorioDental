document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const pathname = location.pathname.split("/").pop() || "index.html";
    const isIndex = pathname === "index.html" || pathname === "";
    const adminElements = document.querySelectorAll(".nav-admin, .nav-user");
  
    // 🔧 Ajustar tamaño del texto según ancho de pantalla
    function ajustarTamanioNavbar() {
      const ancho = window.innerWidth;
  
      if (ancho < 1400) {
        navLinks.forEach(link => link.style.fontSize = "0.9rem");
        adminElements.forEach(el => el.style.fontSize = "0.85rem");
      } else {
        navLinks.forEach(link => link.style.fontSize = "1rem");
        adminElements.forEach(el => el.style.fontSize = "0.95rem");
      }
    }
  
    ajustarTamanioNavbar(); // Ejecutar al cargar
    window.addEventListener("resize", ajustarTamanioNavbar); // Ejecutar al redimensionar
  
    // 🔁 Lógica para resaltar links activos
    function limpiarActivos() {
      navLinks.forEach(link => link.classList.remove("active-link"));
    }
  
    if (isIndex) {
      const sections = document.querySelectorAll("section[id]");
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("id");
              limpiarActivos();
              navLinks.forEach(link => {
                const href = link.getAttribute("href");
                if (href === "#" + id || href === "index.html#" + id) {
                  link.classList.add("active-link");
                }
              });
            }
          });
        },
        { threshold: 0.6 }
      );
  
      sections.forEach(section => observer.observe(section));
    } else {
      limpiarActivos();
      navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href && href.includes(pathname)) {
          link.classList.add("active-link");
        }
      });
    }
  });
  