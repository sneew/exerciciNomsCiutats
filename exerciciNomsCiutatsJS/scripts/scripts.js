function imprimir(){
    
		//Fase 1
		document.write("Fase1" + "</br>");
		var c1, c2, c3, c4, c5, c6;
		c1 = prompt("escriu el nom de la 1a ciutat");
		c2 = prompt("escriu el nom de la 2a ciutat");;
		c3 = prompt("escriu el nom de la 3a ciutat");;
		c4 = prompt("escriu el nom de la 4a ciutat");;
		c5 = prompt("escriu el nom de la 5a ciutat");;
		c6 = prompt("escriu el nom de la 6a ciutat");;
		
		document.write(c1 + ", " + c2 + ", " + c3 + ", " + c4 + ", " + c5 + " i " + c6 + "</br>");
		
		//Fase 2
		document.write("Fase2" + "</br>");
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
		document.write("Fase3" + "</br>");		
		var arrayCiutatsModificades = new Array();
        var h = 0;
        
		for (var ac of arrayCiutats) {
            for (var c of ac.charAt(h)) {
                var ac1 = ac.replace('a', '4');
                arrayCiutatsModificades.push(ac1);
            }
            h++;
		}
		
		arrayCiutatsModificades.sort();
		
		for (var aCM of arrayCiutatsModificades) {
			document.write(aCM + "</br>");
		}
		/*
		//Fase4
		System.out.println("\nFase4");
		//creem arraylist per cada ciutat
		List<Character> arrBarcelona = new ArrayList<Character>(c1.length());
		List<Character> arrMadrid = new ArrayList<Character>(c2.length());
		List<Character> arrValencia = new ArrayList<Character>(c3.length());
		List<Character> arrMalaga = new ArrayList<Character>(c4.length());
		List<Character> arrCadis = new ArrayList<Character>(c5.length());
		List<Character> arrSantander = new ArrayList<Character>(c6.length());

		//posem cada char a l'array q li toca
		for(int i = 0; i < c1.length(); i++) {
			arrBarcelona.add(c1.charAt(i));
		}
		
		for (int i = 0; i < c2.length(); i++) {
			arrMadrid.add(c2.charAt(i));
		}
		
		for (int i = 0; i < c3.length(); i++) {
			arrValencia.add(c3.charAt(i));
		}
		
		for (int i = 0; i < c4.length(); i++) {
			arrMalaga.add(c4.charAt(i));
		}
		
		for (int i = 0; i < c5.length(); i++) {
			arrCadis.add(c5.charAt(i));
		}
		
		for (int i = 0; i < c6.length(); i++) {
			arrSantander.add(c6.charAt(i));
		}
		
		//invertim arrays
		int contB = arrBarcelona.size()-1;
		for (int i = 0; i <= contB; i++) { 
			char c = arrBarcelona.get(i);
			char d = arrBarcelona.get(contB);
			arrBarcelona.set(i, d);
			arrBarcelona.set(contB, c);
			contB--;
		}
		
		int contM = arrMadrid.size()-1;
		for (int i = 0; i <= contM; i++) {
			char c = arrMadrid.get(i);
			char d = arrMadrid.get(contM);
			arrMadrid.set(i, d);
			arrMadrid.set(contM, c);
			contM--;
		}
		int contV = arrValencia.size()-1;
		for (int i = 0; i <= contV; i++) {
			char c = arrValencia.get(i);
			char d = arrValencia.get(contV);
			arrValencia.set(i, d);
			arrValencia.set(contV, c);
			contV--;
		}
		int contMa = arrMalaga.size()-1;
		for (int i = 0; i <= contMa; i++) {
			char c = arrMalaga.get(i);
			char d = arrMalaga.get(contMa);
			arrMalaga.set(i, d);
			arrMalaga.set(contMa, c);
			contMa--;
		}
		int contC = arrCadis.size()-1;
		for (int i = 0; i <= contC; i++) {
			char c = arrCadis.get(i);
			char d = arrCadis.get(contC);
			arrCadis.set(i, d);
			arrCadis.set(contC, c);
			contC--;
		}
		int contS = arrSantander.size()-1;
		for (int i = 0; i <= contS; i++) {
			char c = arrSantander.get(i);
			char d = arrSantander.get(contS);
			arrSantander.set(i, d);
			arrSantander.set(contS, c);
			contS--;
		}
		
		System.out.println(arrBarcelona);
		System.out.println(arrMadrid);
		System.out.println(arrValencia);
		System.out.println(arrMalaga);
		System.out.println(arrCadis);
		System.out.println(arrSantander);
	}
*/
}