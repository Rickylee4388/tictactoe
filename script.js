let fields = [];
let currentShape = 'cross';
let gameover = false;
function fillshape(id) {
    if (!fields[id] && !gameover) {

        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-1').classList.add('playerinactive');
            document.getElementById('player-2').classList.remove('playerinactive');
        }
        else {
            currentShape = 'cross';
            document.getElementById('player-2').classList.add('playerinactive');
            document.getElementById('player-1').classList.remove('playerinactive');
        }
        fields[id] = currentShape;

        draw();
        checkForWin();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
        if (field == 'cross') {
            document.getElementById(`cross-${i}`).classList.remove('d-none');
        }
        if (field == 'circle') {
            document.getElementById(`circle-${i}`).classList.remove('d-none');
        }
    }
}

function checkForWin() {

    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-0').style.transform = 'scaleX(1.0)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-1').style.transform = 'scaleX(1.0)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-2').style.transform = 'scaleX(1.0)';
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-3').style.transform = 'scaleX(1.0)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-4').style.transform = 'scaleX(1.0)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-5').style.transform = 'scaleX(1.0)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-6').style.transform = 'rotate(-45deg) scaleX(1.0)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1.0)';
    }
    if (winner) {
        console.log('GEWONNEN:', winner);
        gameover = true;
        setTimeout(function () {
            document.getElementById('gameover').classList.remove('d-none');
        }, 1000)

    }
}
function restart() {
    gameover = false;
    fields=[];
    currentShape = 'cross';
    document.getElementById('player-2').classList.add('playerinactive');
    document.getElementById('player-1').classList.remove('playerinactive');
    document.getElementById('gameover').classList.add('d-none');
    for (let i = 0; i < 8; i++) {

        document.getElementById(`line-${i}`).style.transform = 'rotate(45deg) scaleX(0.0)';
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById(`cross-${i}`).classList.add('d-none');
        document.getElementById(`circle-${i}`).classList.add('d-none');
    }

}