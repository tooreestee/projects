package pkone;

import java.util.ArrayList;
import java.util.Scanner;

import entites.Etudiant;


public class Main {
	
	static void createEtudiant(String nom, String prenom, int age, int cin, String date_de_naissance, String niveau) {
			
		Etudiant etudiant = new Etudiant(nom,prenom,age,cin,date_de_naissance,niveau);

		System.out.println("==================================================");		
		System.out.println("==================================================");		
		System.out.println("Vos information");
		System.out.println("==================================================");		

		etudiant.afficher();
		
	}

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.print("écrire votre nom : ");
		String nom = sc.nextLine();
		
		System.out.print("écrire votre prénom : ");
		String prenom = sc.nextLine();
		
		System.out.print("écrire votre age : ");
		int age = sc.nextInt();
		
		System.out.print("écrire votre cin : ");
		int cin = sc.nextInt();
		
		sc.nextLine();
		
		System.out.print("écrire votre date de naissance : ");
		String dnc = sc.nextLine();
		
		System.out.print("écrire votre niveau : ");
		String niveau = sc.nextLine();
		
		createEtudiant(nom, prenom, age,cin, dnc, niveau);


	}

}
