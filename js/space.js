document.getElementById('btnBuscar').addEventListener('click', function () {
    // Obtener el valor del input de búsqueda
    var busqueda = document.getElementById('inputBuscar').value;

    // Hacer la solicitud a la API de la NASA
    fetch('https://images-api.nasa.gov/search?q=' + busqueda)
        .then(response => response.json())
        .then(data => mostrarImagenes(data.collection.items));
});

function mostrarImagenes(items) {
    var contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = '';

    items.forEach(function (item) {
        var imagen = item.links[0].href;
        var titulo = item.data[0].title;
        var descripcion = item.data[0].description;
        var fecha = item.data[0].date_created;

        var divImagen = document.createElement('div');
        divImagen.className = 'imagen';

        var img = document.createElement('img');
        img.src = imagen;
        img.alt = titulo;

        var divInfo = document.createElement('div');
        divInfo.className = 'informacion';

        var h3 = document.createElement('h3');
        h3.textContent = titulo;

        var pDescripcion = document.createElement('p');
        pDescripcion.textContent = descripcion;

        var pFecha = document.createElement('p');
        pFecha.textContent = 'Fecha: ' + fecha;

        divInfo.appendChild(h3);
        divInfo.appendChild(pDescripcion);
        divInfo.appendChild(pFecha);

        divImagen.appendChild(img);
        divImagen.appendChild(divInfo);

        contenedor.appendChild(divImagen);
    });
}