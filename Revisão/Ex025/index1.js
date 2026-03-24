function darkMode() {
    const fundo = document.body;

    if (document.getElementById('dark-btn').checked) {
        fundo.style.backgroundColor = '#121212';
        fundo.style.color = '#ffffff';
    } else {
        fundo.style.backgroundColor = '#ffffff';
        fundo.style.color = '#000000';
    }
}