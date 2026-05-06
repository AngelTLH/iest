const navToggle = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav__list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Scroll suave para anclas internas
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href")?.substring(1);
    const target = targetId ? document.getElementById(targetId) : null;

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      navList?.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });
});

// Envío seguro de formularios a un endpoint privado (ej. Formspree o API propia)
const secureForm = document.querySelector("[data-secure-form]");

secureForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const endpoint = form.dataset.endpoint;

  if (!endpoint) {
    alert(
      "Configura un endpoint privado para recibir los datos del formulario.",
    );
    return;
  }

  const formData = new FormData(form);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("No se pudo enviar el formulario.");
    }

    form.reset();
    alert("Gracias. Recibimos tu mensaje y te contactaremos pronto.");
  } catch (error) {
    console.error(error);
    alert(
      "Hubo un problema al enviar. Intenta nuevamente o contáctanos por correo.",
    );
  }
});

// Marca el año actual en el footer si se requiere en el futuro
// document.querySelector('[data-year]').textContent = new Date().getFullYear();
