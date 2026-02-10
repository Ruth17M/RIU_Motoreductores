// Cargar secciones
async function loadSection(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

loadSection("hero", "sections/hero.html");
loadSection("especialidad", "sections/especialidad.html");
loadSection("quienes", "sections/quienes.html");
loadSection("contacto", "sections/contacto.html");

// Información dinámica productos
const infoProductos = {
  reductor: {
    titulo: "Reductores industriales",
    texto: "Información detallada de reductores..."
  },
  motoreductor: {
    titulo: "Motoreductores industriales",
    texto: "Información detallada de motoreductores..."
  },
  motor: {
    titulo: "Motores eléctricos",
    texto: "Información detallada de motores..."
  }
};

function mostrarInfo(tipo) {
  const cont = document.getElementById("detalleProducto");
  cont.innerHTML = `
    <h2 class="text-warning">${infoProductos[tipo].titulo}</h2>
    <p>${infoProductos[tipo].texto}</p>
  `;
}


//<div class="services-content">
   