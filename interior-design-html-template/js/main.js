// Mostrar/ocultar botón "Volver arriba"
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Modal de imagen ampliada
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('imgAmpliada');
const cerrar = document.querySelector('.cerrar');

document.querySelectorAll('.imagenes img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

cerrar.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
};

// Simulación de envío del formulario de contacto
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !email || !mensaje) {
    formStatus.textContent = 'Por favor, completa todos los campos.';
    formStatus.style.color = 'red';
    return;
  }

  // Simulación de envío exitoso
  formStatus.textContent = 'Gracias por tu mensaje, te responderemos pronto.';
  formStatus.style.color = 'green';
  form.reset();
});


