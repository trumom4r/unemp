function calculate() {
    var unemployedCount = parseFloat(document.getElementById('unemployed').value);
    var workforceCount = parseFloat(document.getElementById('workforce').value);

    var unemploymentRate = ( unemployedCount / workforceCount ) * 100;

   if (unemploymentRate < 0) {
        document.getElementById('result').innerHTML = "Результат: помилка";
    }
    else {
        document.getElementById('result').innerHTML = "Результат: "+unemploymentRate.toFixed(2)+"%";
    }
}

function calculate1() {
    var employedCount = parseFloat(document.getElementById('employed').value);
    var workingCount = parseFloat(document.getElementById('working').value);

    var workforceRate = employedCount + workingCount;

    if (workforceRate < 0) {
        document.getElementById('result1').innerHTML = "Результат: помилка";
    }
    else {
    document.getElementById('result1').innerHTML = "Результат: "+workforceRate.toFixed(0);
    }
}

function submitQuiz() {
    var answersQ1 = document.querySelector('input[name="q1"]:checked');
    var answersQ2 = document.querySelector('input[name="q2"]:checked');
    var answersQ3 = document.querySelector('input[name="q3"]:checked');


if (!answersQ1 || !answersQ2 || !answersQ3) {
    alert("Будь ласка, виберіть відповіді на всі питання.");
    return;
}

var answerValueQ1 = answersQ1.value;
var answerValueQ2 = answersQ2.value;
var answerValueQ3 = answersQ3.value;

var correctAnswers = {
    q1: 'c',
    q2: 'a',
    q3: 'a'
}

if (answerValueQ1 === correctAnswers.q1) {
    document.getElementById('answer').innerHTML = 'Відповідь: вірна';
}
else {
    document.getElementById('answer').innerHTML = 'Відповідь: невірна';
}
if (answerValueQ1 === correctAnswers.q2) {
    document.getElementById('answer2').innerHTML = 'Відповідь: вірна';
}
else {
    document.getElementById('answer2').innerHTML = 'Відповідь: невірна';
}
if (answerValueQ1 === correctAnswers.q3) {
    document.getElementById('answer3').innerHTML = 'Відповідь: вірна';
}
else {
    document.getElementById('answer3').innerHTML = 'Відповідь: невірна';
}
}
