fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });
    
document.addEventListener("DOMContentLoaded", function() {
    function loadPartial(placeholderId, url) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(placeholderId).innerHTML = data;
            })
            .catch(error => {
                console.error('Error al cargar el contenido parcial ' + url + ':', error);
                document.getElementById(placeholderId).innerHTML = `<p class="text-danger">Error al cargar ${url}.</p>`;
            });
    }
});