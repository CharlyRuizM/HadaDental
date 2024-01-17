document.getElementById('searchButton').addEventListener('click', function() {
    var userEmail = document.getElementById('userEmail').value;
    
    if (userEmail) {
        fetch('https://hooks.zapier.com/hooks/catch/12589050/3wnyhbi/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: userEmail })
        })
        .then(response => response.text()) // Asumiendo que la respuesta es texto
        .then(result => {
            document.getElementById('result').innerHTML = 'Datos encontrados: ' + result;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').innerHTML = 'Error al procesar la solicitud.';
        });
    } else {
        document.getElementById('result').innerHTML = 'Por favor, introduce un correo electrónico válido.';
    }
});
