function fun () {
var year = prompt("What year you were born?");
var dayofbirth = (2019 - year) *365;
var h2 = document.createElement('h2');
var textanswar = document.createTextNode('You are '+dayofbirth+' days old friend!!!');
h2.setAttribute('id','fun');
h2.appendChild(textanswar);
document.getElementById('flex-box-result').appendChild(h2);
}

function reset()
{
	document.getElementById('fun').remove();
}
