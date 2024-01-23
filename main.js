function clickMenu(section) {
    switch (section) {
        case 'Articulos':
            window.location.href = 'main.html';
            break;
        case 'Entrevistas':
            window.open('interviews.html', '_blank');
            break;
        case 'Eventos':
            window.open('events.html', '_blank');
            break;
        case 'Testimonios':
            window.open('testimonials.html', '_blank');
            break;
    }
}

setTimeout(function() {
    document.getElementById("next-release").style.display = "block"
}, 3000);