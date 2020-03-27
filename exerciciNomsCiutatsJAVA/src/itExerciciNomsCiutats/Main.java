package itExerciciNomsCiutats;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		//Fase 1
		System.out.println("Fase1");
		String c1, c2, c3, c4, c5, c6;
		Scanner sc = new Scanner(System.in);
		System.out.println("Introdueix el nom de la ciutat 1:");
		c1 = sc.next();
		System.out.println("Introdueix el nom de la ciutat 2:");
		c2 = sc.next();
		System.out.println("Introdueix el nom de la ciutat 3:");
		c3 = sc.next();
		System.out.println("Introdueix el nom de la ciutat 4:");
		c4 = sc.next();
		System.out.println("Introdueix el nom de la ciutat 5:");
		c5 = sc.next();
		System.out.println("Introdueix el nom de la ciutat 6:");
		c6 = sc.next();
		
		System.out.println(c1 + ", " + c2 + ", " + c3 + ", " + c4 + ", " + c5 + " i " + c6);
		
		//Fase 2
		System.out.println("\nFase2");
		List<String> arrayCiutats = new ArrayList<String>();
		arrayCiutats.add(c1);
		arrayCiutats.add(c2);
		arrayCiutats.add(c3);
		arrayCiutats.add(c4);
		arrayCiutats.add(c5);
		arrayCiutats.add(c6);
		
		Collections.sort(arrayCiutats);
		
		for (String aC : arrayCiutats) {
			System.out.println(aC);
		}
		
		//Fase 3
		System.out.println("\nFase3");		
		List<String> arrayCiutatsModificades = new ArrayList<String>();
		
		for (String ac : arrayCiutats) {
			String ac1 = ac.replace('a', '4');
			
			arrayCiutatsModificades.add(ac1);
		}
		
		Collections.sort(arrayCiutatsModificades);
		
		for (String aCM : arrayCiutatsModificades) {
			System.out.println(aCM);
		}
		
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

}
