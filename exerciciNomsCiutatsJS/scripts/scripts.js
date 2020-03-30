function imprimir(){
    
	//Fase 1
	document.write("Fase1 </br>");
	var c1, c2, c3, c4, c5, c6;
	c1 = prompt("escriu el nom de la 1a ciutat");
	c2 = prompt("escriu el nom de la 2a ciutat");;
	c3 = prompt("escriu el nom de la 3a ciutat");;
	c4 = prompt("escriu el nom de la 4a ciutat");;
	c5 = prompt("escriu el nom de la 5a ciutat");;
	c6 = prompt("escriu el nom de la 6a ciutat");;
	
	document.write(c1 + ", " + c2 + ", " + c3 + ", " + c4 + ", " + c5 + " i " + c6 + "</br>");
	
	//Fase 2
	document.write("</br> Fase2 </br>");
	var arrayCiutats =  new Array();
	arrayCiutats.push(c1);
	arrayCiutats.push(c2);
	arrayCiutats.push(c3);
	arrayCiutats.push(c4);
	arrayCiutats.push(c5);
	arrayCiutats.push(c6);
	
	arrayCiutats.sort();
	
	document.write(arrayCiutats + "</br>");
	
	//Fase 3
	document.write("</br> Fase3 </br>");		
	var arrayCiutatsModificades = new Array();
	
	var h = 0;
	
	for (var ac of arrayCiutats) {
		for (var c of ac.charAt(h)) {
			var ac1 = ac.replace(/a/gi, '4');
			arrayCiutatsModificades.push(ac1);
			h++;
		}
	}
	
	arrayCiutatsModificades.sort();
	
	for (var aCM of arrayCiutatsModificades) {
		document.write(aCM + "</br>");
	}
	
	//Fase4
	document.write("</br> Fase4 </br>");
	//creem arraylist per cada ciutat
	var arrBarcelona =  new Array(c1.length);
	var arrMadrid =  new Array(c2.length);
	var arrValencia =  new Array(c3.length);
	var arrMalaga =  new Array(c4.lengt);
	var arrCadis =  new Array(c5.length);
	var arrSantander =  new Array(c6.length);

	//posem cada char a l'array q li toca
	for(var i = 0; i < c1.length; i++) {
		arrBarcelona[i]= c1.charAt(i);
	}
	
	for (var i = 0; i < c2.length; i++) {
		arrMadrid[i] = c2.charAt(i);
	}
	
	for (var i = 0; i < c3.length; i++) {
		arrValencia[i] = c3.charAt(i);
	}
	
	for (var i = 0; i < c4.length; i++) {
		arrMalaga[i] = c4.charAt(i);
	}
	
	for (var i = 0; i < c5.length; i++) {
		arrCadis[i] = c5.charAt(i);
	}
	
	for (var i = 0; i < c6.length; i++) {
		arrSantander[i] = c6.charAt(i);
	}
	
	//invertim arrays
	var contB = arrBarcelona.length-1;

	for (var i = 0; i <= contB; i++) { 
		var c = arrBarcelona[i];
		var d = arrBarcelona[contB];
		arrBarcelona[i] = d;
		arrBarcelona[contB] = c;
		contB--;
	}
	
	var contM = arrMadrid.length-1;

	for (var i = 0; i <= contM; i++) {
		var c = arrMadrid[i];
		var d = arrMadrid[contM];
		arrMadrid[i] = d;
		arrMadrid[contM] = c;
		contM--;
	}
	var contV = arrValencia.length-1;
	for (var i = 0; i <= contV; i++) {
		var c = arrValencia[i];
		var d = arrValencia[contV];
		arrValencia[i] = d;
		arrValencia[contV] = c;
		contV--;
	}
	var contMa = arrMalaga.length-1;
	for (var i = 0; i <= contMa; i++) {
		var c = arrMalaga[i];
		var d = arrMalaga[contMa];
		arrMalaga[i] = d;
		arrMalaga[contMa] = c;
		contMa--;
	}
	var contC = arrCadis.length-1;
	for (var i = 0; i <= contC; i++) {
		var c = arrCadis[i];
		var d = arrCadis[contC];
		arrCadis[i] = d;
		arrCadis[contC] = c;
		contC--;
	}
	var contS = arrSantander.length-1;
	for (var i = 0; i <= contS; i++) {
		var c = arrSantander[i];
		var d = arrSantander[contS];
		arrSantander[i] = d;
		arrSantander[contS] = c;
		contS--;
	}
	
	document.write(arrBarcelona + "</br>");
	document.write(arrMadrid + "</br>");
	document.write(arrValencia + "</br>");
	document.write(arrMalaga + "</br>");
	document.write(arrCadis + "</br>");
	document.write(arrSantander + "</br>");
}