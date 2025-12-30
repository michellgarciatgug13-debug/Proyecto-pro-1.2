document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const gameFile = document.getElementById('gameFile').files[0];
    if (gameFile) {
        alert("Juego subido con éxito: " + gameFile.name);
        // Aquí iría la lógica para almacenar el archivo del juego y permitir su acceso.
        addGame(gameFile.name); // Por ejemplo, agrega el nombre del juego a la lista
    }
});

function addGame(gameName) {
    const gameList = document.getElementById('gameList');
    const gameItem = document.createElement('div');
    gameItem.classList.add('game-item');
    
    // Esta parte es solo un ejemplo, en una implementación real deberías usar un enlace o iframe
    gameItem.innerHTML = `
        <h3>${gameName}</h3>
        <iframe src="#" title="${gameName}"></iframe>
        <button onclick="playGame('${gameName}')">Jugar</button>
    `;
    gameList.appendChild(gameItem);
}

function playGame(gameName) {
    alert("¡Vas a jugar " + gameName + "!");
    // Aquí podrías redirigir a la página del juego o cargarlo dinámicamente
}
