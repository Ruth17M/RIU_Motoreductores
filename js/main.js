console.log("JS cargado");


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

function enviarWhatsApp() {

    const numero = "524774041093"; 

    
    const nombre = document.getElementById("nombre").value.trim();

    const mensaje = document.getElementById("mensaje").value.trim();

   if (!nombre || !mensaje) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const texto = `Hola, mi nombre es ${nombre}.
${mensaje}`;



    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  
    window.open(url, "_blank");
}


let activo = null;

document.addEventListener("click", function (e) {
  const card = e.target.closest(".card-producto");
  if (!card) return;

  const tipo = card.dataset.tipo;
  const contenedor = document.getElementById("detalleProducto");
  const plantilla = document.getElementById(`tpl-${tipo}`);

  // Si ya está activa la misma card → ocultar
  if (activo === tipo) {
    contenedor.innerHTML = "";
    card.classList.remove("activa");
    activo = null;
    return;
  }

  // Quitar estado activo a todas
  document.querySelectorAll(".card-producto")
    .forEach(c => c.classList.remove("activa"));

  // Activar la nueva
  card.classList.add("activa");
  activo = tipo;

  // Mostrar contenido
  contenedor.innerHTML = "";
  const copia = plantilla.cloneNode(true);
  copia.classList.remove("d-none");
  contenedor.appendChild(copia);

  contenedor.scrollIntoView({ behavior: "smooth" });
});
