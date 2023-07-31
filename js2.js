function add(){
    var a=parseInt(document.getElementById('n1').value);
    var b=parseInt(document.getElementById('n2').value);
    var c=a+b;
    document.getElementById('button1').innerHTML="addition is "+c;
}

function sub(){
    var a=parseInt(document.getElementById('n1').value);
    var b=parseInt(document.getElementById('n2').value);
    var c=a-b;
    document.getElementById('button2').innerHTML="subtraction is "+c;
}