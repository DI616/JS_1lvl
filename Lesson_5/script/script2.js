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
        inSquare.children[num].children[i].innerText = '&#' + (i + 65) + ';';
        //document.body.('&#' + (i + 65) + '; ');
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
var squares = inSquare.appendChild(document.createElement('div'));
squares.className = 'squares';
inSquare.appendChild(document.createElement('div'));
inSquare.children[2].className = 'letters';
getLetter('letter', 2);
for (var i = 0, j = 0; i < 64; i++, j++) {
    if (j % 2 == 0) {
        squares.appendChild(document.createElement('div'));
        squares.children[i].className = 'light-square';
        squares.children[i].setAttribute('id', i + 1);
        if ((i + 1) % 8 == 0) {
            squares.appendChild(document.createElement('div'));
            squares.children[i].className = 'light-square';
            squares.children[i].setAttribute('id', i + 1);
            j++;
        }
    }
    else if (j % 2 != 0) {
        squares.appendChild(document.createElement('div'));
        squares.children[i].className = 'dark-square';
        squares.children[i].setAttribute('id', i + 1);
        if ((i + 1) % 8 == 0) {
            squares.appendChild(document.createElement('div'));
            squares.children[i].className = 'dark-square';
            squares.children[i].setAttribute('id', i + 1);
            j++;
        }
    }
}
for (var k = 1; k <= 64; k++) {
    var squareNum = document.getElementById(k);
    if (k == 49 || k == 50 || k == 51 || k == 52 || k == 53 || k == 54 || k == 55 || k == 56) {
        squareNum.appendChild(document.createElement('img'));
        squareNum.children[0].setAttribute('src', 'img/white_pawn.png');
        squareNum.children[0].setAttribute('id', 'white_pawn_' + (k - 48));
    }else if(k == 9 || k == 10 || k == 11 || k == 12 || k == 13 || k == 14 || k == 15 || k == 16){
        squareNum.appendChild(document.createElement('img'));
        squareNum.children[0].setAttribute('src', 'img/black_pawn.png');
        squareNum.children[0].setAttribute('id', 'black_pawn_' + (k - 8));
    }else if(k == 1 || k == 8){
        squareNum.appendChild(document.createElement('img'));
        squareNum.children[0].setAttribute('src', 'img/black_rook.png');
        squareNum.children[0].setAttribute('id', 'black_rook_' + k);
    }else if(k == 2 || k == 7){
        squareNum.appendChild(document.createElement('img'));
        squareNum.children[0].setAttribute('src', 'img/black_knight.png');
        squareNum.children[0].setAttribute('id', 'black_knight_' + k);
    }else if(k == 3 || k == 6){
        squareNum.appendChild(document.createElement('img'));
        squareNum.children[0].setAttribute('src', 'img/black_bishop.png');
        squareNum.children[0].setAttribute('id', 'black_bishop_' + k);
    }else if(k == 4){
        squareNum.appendChild(document.createElement('img'));
        squareNum.children[0].setAttribute('src', 'img/black_queen.png');
        squareNum.children[0].setAttribute('id', 'black_queen');
    }else if(k == 5){
        squareNum.appendChild(document.createElement('img'));
        squareNum.children[0].setAttribute('src', 'img/black_king.png');
        squareNum.children[0].setAttribute('id', 'black_king');
    }else if(k == 57 || k == 64){
        squareNum.appendChild(document.createElement('img'));
        squareNum.children[0].setAttribute('src', 'img/white_rook.png');
        squareNum.children[0].setAttribute('id', 'white_rook_' + (k - 56));
    }else if(k == 58 || k == 63){
        squareNum.appendChild(document.createElement('img'));
        squareNum.children[0].setAttribute('src', 'img/white_knight.png');
        squareNum.children[0].setAttribute('id', 'white_knight_' + (k - 56));
    }else if(k == 59 || k == 62){
        squareNum.appendChild(document.createElement('img'));
        squareNum.children[0].setAttribute('src', 'img/white_bishop.png');
        squareNum.children[0].setAttribute('id', 'white_bishop_' + (k - 56));
    }else if(k == 60){
        squareNum.appendChild(document.createElement('img'));
        squareNum.children[0].setAttribute('src', 'img/white_queen.png');
        squareNum.children[0].setAttribute('id', 'white_queen');
    }else if(k == 61){
        squareNum.appendChild(document.createElement('img'));
        squareNum.children[0].setAttribute('src', 'img/white_king.png');
        squareNum.children[0].setAttribute('id', 'white_king');
    }
}