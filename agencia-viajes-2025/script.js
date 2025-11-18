// Simulación de confirmación de reserva
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("reservaForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("nombre").value.trim();
            const destino = document.getElementById("destino").value;
            const fecha = document.getElementById("fecha").value;

            if (!nombre || !destino || !fecha) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            alert(`✅ Reserva confirmada:\n\nNombre: ${nombre}\nDestino: ${destino}\nFecha: ${fecha}`);

            form.reset();
        });
    }
});
