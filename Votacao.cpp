#include<stdlib.h>
#include<stdio.h>
#include<math.h>

int votacao (char v [50], char w[50], float x, float y, float z);

	int main (){
	
	char candidato1 [50];
	char candidato2 [50];
	float votos1, votos2;
	float media;
	
	printf ("\n Nome do primeiro candidato:");
	
	fgets (candidato1, 50, stdin);
	
	printf ("\n Nome do segundo candidato:");
	
	fgets (candidato2, 50, stdin);
	
	printf ("\n Votos do primeiro candidato:");
	scanf ("%f", &votos1);
	
	printf ("\n Votos do segundo candidato:");
	scanf ("%f", &votos2);
	
	media = (votos1 + votos2) / 2;
	
	votacao (candidato1, candidato2, votos1, votos2, media);
	
}

	int votacao (char v [50], char w[50], float x, float y, float z){
		
		printf ("\n\n--------------- Dados da votacao --------------------\n\n");
		printf ("\n Primeiro candidato: %s", v);
		printf ("\n Segundo candidato: %s \n", w);
		printf ("\n Votos para o primeiro candidato: %.1f votos \n", x);
		printf ("\n Votos para o segundo candidato: %.1f votos \n\n", y);
		printf ("\n Media de votos: %.1f votos \n", z);
		printf ("\n\n");
		
		system ("pause");
		return 0;
	
}
