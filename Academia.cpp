#include<stdlib.h>
#include<stdio.h>
#include <conio.h>

	struct academia{
	char cliente [50];
	char exercicio [50];
	char telefone [40];
	char tipo_pgmt [40];
	float mensalidade;
	 };
	 
	int main (){
	float mensalidade;
	struct academia cadastro [5];
	
	for (int i=0; i<5; i++){
		printf ("\n Insira o nome do cliente:");
		
		fgets (cadastro[i].cliente, 50, stdin);
		
		printf ("\n Insira o exercicio desejado:");
		
		fgets (cadastro[i].exercicio, 50, stdin);
		
		printf ("\n Insira o telefone  do cliente:");
		
		fgets (cadastro[i].telefone, 40, stdin);
		
		printf ("\n Insira o tipo de pagamento:");
		
		fgets (cadastro[i].tipo_pgmt, 40, stdin);
		
		printf ("\n Insira a mensalidade:");
		scanf ("%f", &cadastro[i].mensalidade);
		
		fflush (stdin);
		
		
		printf ("\n\n");
        printf ("\n Nome do cliente: %s", cadastro[i].cliente);
        printf ("\n Exercicio: %s", cadastro[i].exercicio);
        printf ("\n O telefone do cliente e: %s", cadastro[i].telefone);
        printf ("\n O cliente pagara em: %s", cadastro[i].tipo_pgmt);
        printf ("\n A mensalidade e de: %.2f", cadastro[i].mensalidade);
        printf ("\n\n");
	}
	
	system ("pause");
	return 0;
}
	
	
