🔥REGGAE #CYPHER​🔥 PURE NEGGA, CHUSTERFIELD, RASTACHAI, ANDERDRAW, NECROJOCKER - REACCION
document.getElementById('calculate').addEventListener('click', function() {
    // Obtener los valores de los jugadores
    const team1Players = [
        parseFloat(document.getElementById('player1').value) || 0,
        parseFloat(document.getElementById('player2').value) || 0,
        parseFloat(document.getElementById('player3').value) || 0,
        parseFloat(document.getElementById('player4').value) || 0,
        parseFloat(document.getElementById('player5').value) || 0
    ];
    
    const team2Players = [
        parseFloat(document.getElementById('player6').value) || 0,
        parseFloat(document.getElementById('player7').value) || 0,
        parseFloat(document.getElementById('player8').value) || 0,
        parseFloat(document.getElementById('player9').value) || 0,
        parseFloat(document.getElementById('player10').value) || 0
    ];
    
    // Validar que todos los porcentajes estén entre 0 y 100
    const allPlayers = [...team1Players, ...team2Players];
    if (allPlayers.some(percent => percent < 0 || percent > 100)) {
        alert('Por favor ingrese porcentajes válidos (entre 0 y 100) para todos los jugadores.');
        return;
    }
    
    // Calcular el promedio de cada equipo
    const team1Average = team1Players.reduce((sum, percent) => sum + percent, 0) / 5;
    const team2Average = team2Players.reduce((sum, percent) => sum + percent, 0) / 5;
    
   
    
    