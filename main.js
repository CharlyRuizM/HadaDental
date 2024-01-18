document.getElementById('searchButton').addEventListener('click', function() {
    var userEmail = document.getElementById('userEmail').value;
    
    if (userEmail) {
        var url = 'https://hooks.zapier.com/hooks/catch/12589050/3wnyhbi/?email=' + encodeURIComponent(userEmail);

        fetch(url, {
            method: 'POST',
            redirect: 'follow'
        })
        .then(response => response.json()) // Cambiado para manejar una respuesta JSON
        .then(data => {
            console.log(data); // Muestra los datos en la consola
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
