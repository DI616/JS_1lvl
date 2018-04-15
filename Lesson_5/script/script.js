function getNum(name, num) {
    for (var i = 1; i <= 8; i++) {
        square.children[num].appendChild(document.createElement('div'));
        square.children[num].children[i - 1].className = name;
        square.children[num].children[i - 1].innerText = i;
    }
}

function getLetter(name, num) {
    for (var i = 0; i < 8; i++) {
        inSquare.children[num].appendChild(document.createElement('div'));
        inSquare.children[num].children[i].className = name;
        //inSquare.children[num].children[i].innerText = '&#' + (i + 65) + ';';
        switch (i) {
        case 0:
            inSquare.children[num].children[i].innerText = 'A';
            break;
        case 1:
            inSquare.children[num].children[i].innerText = 'B';
            break;
        case 2:
            inSquare.children[num].children[i].innerText = 'C';
            break;
        case 3:
            inSquare.children[num].children[i].innerText = 'D';
            break;
        case 4:
            inSquare.children[num].children[i].innerText = 'E';
            break;
        case 5:
            inSquare.children[num].children[i].innerText = 'F';
            break;
        case 6:
            inSquare.children[num].children[i].innerText = 'G';
            break;
        case 7:
            inSquare.children[num].children[i].innerText = 'H';
            break;
        }
    }
}
var square = document.createElement('div');
document.body.appendChild(square);
square.className = 'square';
square.appendChild(document.createElement('div'));
var inSquare = document.createElement('div');
getNum('number', 0);
inSquare.className = 'in-square';
square.appendChild(inSquare);
square.appendChild(document.createElement('div'));
getNum('number-reverse', 2);
var letters = document.createElement('div');
letters.className = 'letters';
inSquare.appendChild(letters);
getLetter('letter-reverse', 0);
for (var j = 1; j <= 8; j++) {
    if (j % 2 != 0) {
        inSquare.appendChild(document.createElement('div'));
        inSquare.children[j].className = 'squares1';
        for (var i = 0; i < 8; i++) {
            if (i % 2 == 0) {
                inSquare.children[j].appendChild(document.createElement('div'));
                inSquare.children[j].children[i].className = 'light-square';
            }
            else {
                inSquare.children[j].appendChild(document.createElement('div'));
                inSquare.children[j].children[i].className = 'dark-square';
            }
        }
    }
    else {
        inSquare.appendChild(document.createElement('div'));
        inSquare.children[j].className = 'squares2';
        for (var i = 0; i < 8; i++) {
            if (i % 2 != 0) {
                inSquare.children[j].appendChild(document.createElement('div'));
                inSquare.children[j].children[i].className = 'light-square';
            }
            else {
                inSquare.children[j].appendChild(document.createElement('div'));
                inSquare.children[j].children[i].className = 'dark-square';
            }
        }
    }
}
inSquare.appendChild(document.createElement('div'));
inSquare.children[9].className = 'letters';
getLetter('letter', 9);
for (var i = 1; i <= 8; i++) {
    if (i == 1) {
        for (var j = 0; j < 8; j++) {
            switch (j) {
            case 0:
                inSquare.children[i].children[j].appendChild(document.createElement('img'));
                inSquare.children[i].children[j].children[0].setAttribute('src', 'img/black_rook.png');
                break;
            case 1:
                inSquare.children[i].children[j].appendChild(document.createElement('img'));
                inSquare.children[i].children[j].children[0].setAttribute('src', 'img/black_knight.png');
                break;
            case 2:
                inSquare.children[i].children[j].appendChild(document.createElement('img'));
                inSquare.children[i].children[j].children[0].setAttribute('src', 'img/black_bishop.png');
                break;
            case 3:
                inSquare.children[i].children[j].appendChild(document.createElement('img'));
                inSquare.children[i].children[j].children[0].setAttribute('src', 'img/black_queen.png');
                break;
            case 4:
                inSquare.children[i].children[j].appendChild(document.createElement('img'));
                inSquare.children[i].children[j].children[0].setAttribute('src', 'img/black_king.png');
                break;
            case 5:
                inSquare.children[i].children[j].appendChild(document.createElement('img'));
                inSquare.children[i].children[j].children[0].setAttribute('src', 'img/black_bishop.png');
                break;
            case 6:
                inSquare.children[i].children[j].appendChild(document.createElement('img'));
                inSquare.children[i].children[j].children[0].setAttribute('src', 'img/black_knight.png');
                break;
            case 7:
                inSquare.children[i].children[j].appendChild(document.createElement('img'));
                inSquare.children[i].children[j].children[0].setAttribute('src', 'img/black_rook.png');
                break;
            }
        }
    }
    else if (i == 2) {
        for (var j = 0; j < 8; j++) {
            inSquare.children[i].children[j].appendChild(document.createElement('img'));
            inSquare.children[i].children[j].children[0].setAttribute('src', 'img/black_pawn.png');
        }
    }
    else if (i == 7) {
        for (var j = 0; j < 8; j++) {
            inSquare.children[i].children[j].appendChild(document.createElement('img'));
            inSquare.children[i].children[j].children[0].setAttribute('src', 'img/white_pawn.png');
        }
    }
    else if (i == 8) {
        for (var j = 0; j < 8; j++) {
            switch (j) {
            case 0:
                inSquare.children[i].children[j].appendChild(document.createElement('img'));
                inSquare.children[i].children[j].children[0].setAttribute('src', 'img/white_rook.png');
                break;
            case 1:
                inSquare.children[i].children[j].appendChild(document.createElement('img'));
                inSquare.children[i].children[j].children[0].setAttribute('src', 'img/white_knight.png');
                break;
            case 2:
                inSquare.children[i].children[j].appendChild(document.createElement('img'));
                inSquare.children[i].children[j].children[0].setAttribute('src', 'img/white_bishop.png');
                break;
            case 3:
                inSquare.children[i].children[j].appendChild(document.createElement('img'));
                inSquare.children[i].children[j].children[0].setAttribute('src', 'img/white_queen.png');
                break;
            case 4:
                inSquare.children[i].children[j].appendChild(document.createElement('img'));
                inSquare.children[i].children[j].children[0].setAttribute('src', 'img/white_king.png');
                break;
            case 5:
                inSquare.children[i].children[j].appendChild(document.createElement('img'));
                inSquare.children[i].children[j].children[0].setAttribute('src', 'img/white_bishop.png');
                break;
            case 6:
                inSquare.children[i].children[j].appendChild(document.createElement('img'));
                inSquare.children[i].children[j].children[0].setAttribute('src', 'img/white_knight.png');
                break;
            case 7:
                inSquare.children[i].children[j].appendChild(document.createElement('img'));
                inSquare.children[i].children[j].children[0].setAttribute('src', 'img/white_rook.png');
                break;
            }
        }
    }
}