function calculate() {
    var unemployedCount = parseFloat(document.getElementById('unemployed').value);
    var workforceCount = parseFloat(document.getElementById('workforce').value);

    var unemploymentRate = ( unemployedCount / workforceCount ) * 100;

    document.getElementById('result').innerHTML = "Результат: "+unemploymentRate.toFixed(2)+"%";
}

function calculate1() {
    var employedCount = parseFloat(document.getElementById('employed').value);
    var workingCount = parseFloat(document.getElementById('working').value);

    var workforceRate = employedCount + workingCount;

    document.getElementById('result1').innerHTML = "Результат: "+workforceRate.toFixed(0);
}
