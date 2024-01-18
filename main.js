const searchForm = document.getElementById('searchForm');
const loading = document.getElementById('loading');
const result = document.getElementById('result');

searchForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    var email = document.getElementById('emailInput').value;

    // Mostrar la animación de carga
    loading.style.display = 'block';

    // Ocultar resultados anteriores
    result.style.display = 'none';

    // Utilizar CORS Anywhere como proxy
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    var targetUrl = 'https://northamerica-northeast1-hadadental.cloudfunctions.net/functionHadaDental';

    try {
        const response = await fetch(proxyUrl + targetUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        });

        if (!response.ok) {
            throw new Error('Respuesta de servidor no fue OK');
        }

        const data = await response.json();
        
        if (data.length === 0) {
            // Mostrar mensaje de error cuando no se encuentran datos
            result.innerHTML = 'No se encontraron datos para el correo proporcionado.';
        } else {
            // Mostrar los resultados cuando se encuentran datos
            const resultHTML = data.map(user => `Nombre: ${user.Nombre}, Puntos Totales: ${user.PuntosTotales}`).join('<br>');
            result.innerHTML = resultHTML;
        }

        // Ocultar la animación de carga después de recibir la respuesta
        loading.style.display = 'none';
        // Mostrar los resultados o mensaje de error
        result.style.display = 'block';
    } catch (error) {
        console.error('Error:', error);
        result.innerHTML = 'Error en la búsqueda';

        // Ocultar la animación de carga en caso de error
        loading.style.display = 'none';
    }
});