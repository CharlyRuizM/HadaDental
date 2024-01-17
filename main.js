document.getElementById('searchButton').addEventListener('click', function() {
    var userEmail = document.getElementById('userEmail').value;
    
    // Validación básica de formato de correo electrónico
    if (userEmail && /^\S+@\S+\.\S+$/.test(userEmail)) {
        fetch('https://hooks.zapier.com/hooks/catch/12589050/3wnyhbi/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: userEmail })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = 'Datos encontrados: ' + JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').innerHTML = 'Error al procesar la solicitud.';
        });
    } else {
        document.getElementById('result').innerHTML = 'Por favor, introduce un correo electrónico válido.';
    }
});
