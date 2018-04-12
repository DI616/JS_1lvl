var event, gain = 0
    , half, fireproof, fireproofGain, ok = true;
alert('Добро пожаловать в игру!\nВы можете воспользоваться подсказкой 50/50 один раз, для этого введите 5.\nВы можете сделать свой выигрыш несгораемым, для этого введите 7 перед тем, как ответить на вопрос.\nЕсли Вы решили сделать сумму несгораемой, Вы не сможете воспользоваться подсказкой в этом же ходе и наоборот.\nС каждым правильным ответом сумма вознаграждения увеличивается вдвое.\nЕсли Вы неправильно ответите на вопрос, то игра закончится, а выигрыш обнулится за исключением несгораемой суммы.');
event = +prompt(works.a00 + works.a1 + works.a2 + works.a3 + works.a4 + '-1 - выход из игры');
//if (event == -1) break;
switch (event) {
case 3:
    alert('Верно! Для следующего вопроса нажмите "Ok"');
    gain = 100;
    break;
case 5:
    event = +prompt(works.a00 + works.a2 + works.a3 + '-1 - выход из игры');
    half = true;
    switch (event) {
    case -1:
        alert('Вы закончили игру.');
        ok = false;
        break;
    case 3:
        alert('Верно! Для следующего вопроса нажмите "Ok"');
        gain = 100;
        break;
    default:
        alert('Вы проиграли!');
        gain = 0;
        break;
    }
    break;
case 7:
    fireproofGain = gain;
    fireproof = true;
    alert('Ваша несгораемая сумма равна ' + gain + '. LoL');
    event = +prompt(works.a00 + works.a1 + works.a2 + works.a3 + works.a4 + '-1 - выход из игры');
    if (event == -1) break;
    switch (event) {
    case -1:
        alert('Вы закончили игру.');
        break;
    case 3:
        alert('Верно! Для следующего вопроса нажмите "Ok"');
        gain = 100;
        break;
    default:
        alert('Вы проиграли!');
        gain = 0;
        ok = false;
        break;
    }
default:
    alert('Вы проиграли!');
    break;
}
event = +prompt(works.b00 + works.b1 + works.b2 + works.b3 + works.b4 + '-1 - выход из игры');
//if (event == -1) break;
switch (event) {
case 5:
    if (!half) {
        event = +prompt(works.b00 + works.b2 + works.b3 + '-1 - выход из игры');
        switch (event) {
        case -1:
            alert('Вы закончили игру.');
            break;
        case 2:
            alert('Верно! Для следующего вопроса нажмите "Ok"');
            gain += gain * 2;
            half = true;
            break;
        default:
            alert('Вы проиграли!');
            gain = 0;
            break;
        }
    }
    else {
        alert('Вы уже использовали подсказку. Придется отвечать без неё.');
    }
    break;
case 7:
    if (!fireproof) {
        fireproofGain = gain;
        fireproof = true;
        alert('Ваша несгораемая сумма равна' + gain);
        event = +prompt(works.b00 + works.b1 + works.b2 + works.b3 + works.b4 + '-1 - выход из игры');
        if (event == -1) break;
        switch (event) {
        case -1:
            alert('Вы закончили игру.');
            break;
        case 2:
            alert('Верно! Для следующего вопроса нажмите "Ok"');
            gain += gain * 2;
            break;
        default:
            alert('Вы проиграли!');
            gain = 0;
            break;
        }
    }
    else {
        alert('Вы уже использовали сохранение выигрыша. Дальше придётся играть без него.')
    }
    break;
case 2:
    alert('Верно! Для следующего вопроса нажмите "Ok"');
    gain += gain * 2;
    break;
default:
    alert('Вы проиграли!');
    break;
}
event = +prompt(works.c00 + works.c1 + works.c2 + works.c3 + works.c4 + '-1 - выход из игры');
//if (event == -1) break;
switch (event) {
case 5:
    if (!half) {
        event = +prompt(works.c00 + works.c2 + works.c3 + '-1 - выход из игры');
        switch (event) {
        case -1:
            alert('Вы закончили игру.');
            break;
        case 4:
            alert('Верно! Для следующего вопроса нажмите "Ok"');
            gain += gain * 2;
            half = true;
            break;
        default:
            alert('Вы проиграли!');
            gain = 0;
            break;
        }
    }
    else {
        alert('Вы уже использовали подсказку. Придется отвечать без неё.');
    }
    break;
case 4:
    alert('Верно! Для следующего вопроса нажмите "Ok"');
    gain += gain * 2;
    break;
case 7:
    fireproofGain = gain;
    fireproof = true;
    alert('Ваша несгораемая сумма равна' + gain);
    event = +prompt(works.c00 + works.c1 + works.c2 + works.c3 + works.c4 + '-1 - выход из игры');
    if (event == -1) break;
    switch (event) {
    case -1:
        alert('Вы закончили игру.');
        break;
    case 4:
        alert('Верно! Для следующего вопроса нажмите "Ok"');
        gain = 100;
        break;
    default:
        alert('Вы проиграли!');
        gain = 0;
        break;
    }
    break;
default:
    alert('Вы проиграли!');
    break;
}
event = +prompt(works.d00 + works.d1 + works.d2 + works.d3 + works.d4 + '-1 - выход из игры');
//if (event == -1) break;
switch (event) {
case 5:
    if (!half) {
        event = +prompt(works.d00 + works.d2 + works.d3 + '-1 - выход из игры');
        switch (event) {
        case -1:
            alert('Вы закончили игру.');
            break;
        case 2:
            alert('Верно! Для следующего вопроса нажмите "Ok"');
            gain += gain * 2;
            half = true;
            break;
        default:
            alert('Вы проиграли!');
            gain = 0;
            break;
        }
    }
    else {
        alert('Вы уже использовали подсказку. Придется отвечать без неё.');
    }
    break;
case 7:
    if (!fireproof) {
        fireproofGain = gain;
        fireproof = true;
        alert('Ваша несгораемая сумма равна' + gain);
        event = +prompt(works.d00 + works.d1 + works.d2 + works.d3 + works.d4 + '-1 - выход из игры');
        if (event == -1) break;
        switch (event) {
        case -1:
            alert('Вы закончили игру.');
            break;
        case 2:
            alert('Верно! Для следующего вопроса нажмите "Ok"');
            gain += gain * 2;
            break;
        default:
            alert('Вы проиграли!');
            gain = 0;
            break;
        }
    }
    else {
        alert('Вы уже использовали сохранение выигрыша. Дальше придётся играть без него.')
    }
    break;
case 2:
    alert('Верно! Для следующего вопроса нажмите "Ok"');
    gain += gain * 2;
    break;
default:
    alert('Вы проиграли!');
    break;
}
event = +prompt(works.e00 + works.e1 + works.e2 + works.e3 + works.e4 + '-1 - выход из игры');
//if (event == -1) break;
switch (event) {
case 5:
    if (!half) {
        event = +prompt(works.e00 + works.e2 + works.e4 + '-1 - выход из игры');
        switch (event) {
        case -1:
            alert('Вы закончили игру.');
            break;
        case 4:
            alert('Верно! Для следующего вопроса нажмите "Ok"');
            gain += gain * 2;
            half = true;
            break;
        default:
            alert('Вы проиграли!');
            gain = 0;
            break;
        }
    }
    else {
        alert('Вы уже использовали подсказку. Придется отвечать без неё.');
    }
    break;
case 7:
    if (!fireproof) {
        fireproofGain = gain;
        fireproof = true;
        alert('Ваша несгораемая сумма равна' + gain);
        event = +prompt(works.e00 + works.e1 + works.e2 + works.e3 + works.e4 + '-1 - выход из игры');
        if (event == -1) break;
        switch (event) {
        case -1:
            alert('Вы закончили игру.');
            break;
        case 4:
            alert('Верно! Для следующего вопроса нажмите "Ok"');
            gain += gain * 2;
            break;
        default:
            alert('Вы проиграли!');
            gain = 0;
            break;
        }
    }
    else {
        alert('Вы уже использовали сохранение выигрыша. Дальше придётся играть без него.')
    }
    break;
case 4:
    alert('Верно! Вы победили!');
    gain += gain * 2;
    break;
default:
    alert('Вы проиграли!');
    break;
}
if (fireproofGain > gain) {
    alert('Ваш выигрыш составил ' + fireproofGain);
}
else {
    alert('Ваш выигрыш составил ' + gain);
}
//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}

function getAnswer(event, answer, question) {
    switch (event) {
    case 5:
        if (!half) {
            event = +prompt(question + '-1 - выход из игры');
            switch (event) {
            case -1:
                alert('Вы закончили игру.');
                ok = true;
                return;
            case answer:
                alert('Верно! Для следующего вопроса нажмите "Ok"');
                gain += gain * 2;
                half = true;
                return;
            default:
                alert('Вы проиграли!');
                gain = 0;
                return;
            }
        }
        else {
            alert('Вы уже использовали подсказку. Придется отвечать без неё.');
        }
    case 7:
        if (!fireproof) {
            fireproofGain = gain;
            fireproof = true;
            alert('Ваша несгораемая сумма равна' + gain);
            event = +prompt(question + '-1 - выход из игры');
            if (event == -1) break;
            switch (event) {
            case -1:
                alert('Вы закончили игру.');
                break;
            case 4:
                alert('Верно! Для следующего вопроса нажмите "Ok"');
                gain += gain * 2;
                break;
            default:
                alert('Вы проиграли!');
                gain = 0;
                break;
            }
        }
        else {
            alert('Вы уже использовали сохранение выигрыша. Дальше придётся играть без него.')
        }
        break;
    case 4:
        alert('Верно! Вы победили!');
        gain += gain * 2;
        break;
    default:
        alert('Вы проиграли!');
        break;
    }
}