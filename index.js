//---IMPORTS---
var sidebar = document.getElementById('sidebar');
//---MAIN---
function main() {
	var h = document.createElement('h1');
	var ha = document.createElement('a');
	var hat = document.createTextNode('Homepage');
	ha.href = '/TOOM/index.html';
	ha.appendChild(hat);
	h.appendChild(ha);
	var d1 = document.createElement('h1');
	var d1a = document.createElement('a');
	var d1at = document.createTextNode('TOOM 1');
	d1a.href = '/TOOM/p/d1';
	d1a.appendChild(d1at);
	d1.appendChild(d1a);
	var d2 = document.createElement('h1');
	var d2a = document.createElement('a');
	var d2at = document.createTextNode('TOOM 2');
	d2a.href = '/TOOM/p/d2';
	d2a.appendChild(d2at);
	d2.appendChild(d2a);
	sidebar.appendChild(h);
	sidebar.appendChild(d1);
	sidebar.appendChild(d2);
}
main();
