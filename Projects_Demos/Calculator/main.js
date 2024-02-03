function add(){
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);

    var adding = n1 + n2;
    document.getElementById('ans').innerHTML = adding;
}

function sub(){
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);

    var adding = n1 - n2;
    document.getElementById('ans').innerHTML = adding;
}
function mul(){
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);

    var adding = n1 * n2;
    document.getElementById('ans').innerHTML = adding;
}
function div(){
    var n1 = parseFloat(document.getElementById('num1').value);
    var n2 = parseFloat(document.getElementById('num2').value);

    var adding = n1 / n2;
    document.getElementById('ans').innerHTML = adding;
}

