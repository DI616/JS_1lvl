var gain = 0
    , i = 0
    , half = true
    , fireproof = true
    , fireproofGain = 0;

function getAnswer(answer, trueAnswer) {
    switch (answer) {
    case trueAnswer:
        if (gain == 0) {
            gain = 100;
        }
        else {
            gain += gain * 2;
        }
        i++;
        alert('Верно!');
        break;
    case 5:
        if (half) {
            half = false;
            getAnswer(getQuestion(abridgedQuestion), realAnswer);
            return;
        }
        else {
            alert('Вы уже использовали подсказку. Придётся отвечать без неё.');
            getAnswer(getQuestion(question), realAnswer);
            return;
        }
    case 7:
        if (fireproof) {
            fireproofGain = gain;
            alert('Ваша несгораемая сумма равна ' + fireproofGain);
            getAnswer(getQuestion(question), realAnswer);
            return;
        }
        else {
            alert('Вы уже зафиксировали сумму.');
            getAnswer(getQuestion(question), realAnswer);
            return;
        }
    case true:
        alert('Игра окончена.');
        gain = 0;
        fireproofGain = 0;
        retutn;
    default:
        gain = 0;
        alert('Неверно. Игра окончена.');
        x = true;
        return;
    }
}

function getQuestion(question) {
    var x = false;
    do {
        x = +prompt(question);
        if (x == 9) {
            x = true;
            return x;
        }
        else if (isNaN(x) || !isFinite(x)) {
            alert('Вы ввели недопустимый символ.');
            x = false;
        }
        else if (x < 1 || (x > 5 && x != 7)) {
            alert('Вы ввели неправильное значение.');
            x = false;
        }
    } while (!x);
    return x;
}
alert('Добро пожаловать в игру!\nВы можете воспользоваться подсказкой 50/50 один раз, для этого введите 5.\nВы можете сделать свой выигрыш несгораемым, для этого введите 7 перед тем, как ответить на вопрос.\nС каждым правильным ответом сумма вознаграждения увеличивается вдвое.\nЕсли Вы неправильно ответите на вопрос, то игра закончится, а выигрыш обнулится за исключением несгораемой суммы.\nДля выхода из игры введите 9.');
var x = false;
while (!x) {
    var question = works.a00 + works.a1 + works.a2 + works.a3 + works.a4;
    var abridgedQuestion = works.a00 + works.a1 + works.a3;
    var realAnswer = 3;
    getAnswer(getQuestion(question), realAnswer);
    if (x) break;
    question = works.b00 + works.b1 + works.b2 + works.b3 + works.b4;
    abridgedQuestion = works.b00 + works.b1 + works.b2;
    realAnswer = 2;
    getAnswer(getQuestion(question), realAnswer);
    if (x) break;
    question = works.c00 + works.c1 + works.c2 + works.c3 + works.c4;
    abridgedQuestion = works.c00 + works.c1 + works.c4;
    realAnswer = 4;
    getAnswer(getQuestion(question), realAnswer);
    if (x) break;
    question = works.d00 + works.d1 + works.d2 + works.d3 + works.d4;
    abridgedQuestion = works.d00 + works.d1 + works.d2;
    realAnswer = 2;
    getAnswer(getQuestion(question), realAnswer);
    if (x) break;
    question = works.e00 + works.e1 + works.e2 + works.e3 + works.e4;
    abridgedQuestion = works.e00 + works.e2 + works.e4;
    realAnswer = 4;
    getAnswer(getQuestion(question), realAnswer);
    if (x) break;
    x = true;
}
if(i == 5) {
    alert('Вы выиграли, правильно ответив на все вопросы! Ваш выигрыш составил ' + gain);
}else if(fireproofGain == 0 && i > 0){
    alert('Увы, Вы ничего не выиграли. Зато Ваш счет правильных ответов составил ' + i + '!');
}else if(i == 0){
    alert('Ни одного правильного ответа!');
}else{
    alert('Вы выиграли ' + fireproofGain + ' , и Ваш счет правильных ответов составляет ' + i + '.');
}