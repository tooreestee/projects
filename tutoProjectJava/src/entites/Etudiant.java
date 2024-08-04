package entites;

public class Etudiant {
	
	//les attributs
	
	private String nom;
	private String prenom;
	private int age;
	private int cin;
	private String date_de_naissance;
	private String niveau;
	

	//Constructeur
	public Etudiant(String nom, String prenom, int age, int cin, String date_de_naissance, String niveau) {
		this.nom = nom;
		this.prenom = prenom;
		this.age = age;
		this.cin = cin;
		this.date_de_naissance = date_de_naissance;
		this.niveau = niveau;
	}

	//Getters & Setters

	public String getNom() {
		return nom;
	}


	public void setNom(String nom) {
		this.nom = nom;
	}


	public String getPrenom() {
		return prenom;
	}


	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}


	public int getAge() {
		return age;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public int getCin() {
		return cin;
	}


	public void setCin(int cin) {
		this.cin = cin;
	}


	public String getDate_de_naissance() {
		return date_de_naissance;
	}


	public void setDate_de_naissance(String date_de_naissance) {
		this.date_de_naissance = date_de_naissance;
	}


	public String getNiveau() {
		return niveau;
	}


	public void setNiveau(String niveau) {
		this.niveau = niveau;
	}
	
	
	//affichage
	
	public void afficher() {
		
		System.out.println("Nom : "+this.nom);
		System.out.println("Prénom : "+this.prenom);
		System.out.println("Age : "+this.age);
		System.out.println("Cin : "+this.cin);
		System.out.println("Date de naissance : "+this.date_de_naissance);
		System.out.println("Niveau : "+this.niveau);
		
	}
	

}
