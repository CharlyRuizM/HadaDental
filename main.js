document.getElementById('searchButton').addEventListener('click', function() {
    var userEmail = document.getElementById('userEmail').value;
    
    if (userEmail) {
        // Asegúrate de reemplazar esta URL con la URL de tu webhook de Zapier
        var zapierUrl = 'https://hooks.zapier.com/hooks/catch/12589050/3wnyhbi/';

        fetch(zapierUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: userEmail })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // o response.text() si la respuesta es texto
        })
        .then(data => {
            // Aquí manejas los datos recibidos. Ajusta según la estructura de tu respuesta.
            document.getElementById('result').innerHTML = 'Nombre: ' + data.Nombre + ', Total Puntos: ' + data.totalPuntos;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').innerHTML = 'Error al procesar la solicitud.';
        });
    } else {
        document.getElementById('result').innerHTML = 'Por favor, introduce un correo electrónico válido.';
    }
});
