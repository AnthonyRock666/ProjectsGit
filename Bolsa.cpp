#include<stdlib.h>
#include<stdio.h>
#include<math.h>

	struct bolsa{
	char atuacao [30];
	char nomedacompanhia [30];
	float valoratu;
	float valorant;
	int variacao;
	 };
	 
	int main (){
	float percent;
	struct bolsa valores;
	
	printf ("\n Nome da companhia:");
	fgets (valores.nomedacompanhia, 30, stdin);
	
	printf ("\n Area de atuacao da companhia:");
	fgets (valores.atuacao, 30, stdin);
	
	printf ("\n Valor atual em reais:");
	scanf ("%f", &valores.valoratu);
	
	printf ("\n Valor anterior:");
	scanf ("%f", &valores.valorant);
	fflush (stdin);
	
	percent = ((valores.valoratu-valores.valorant)/valores.valorant) * 100;
	
	if (percent>0){
		printf ("\n\n");
		printf ("\n Area de atuacao: %s \n", valores.atuacao);
		printf ("\n Companhia: %s \n", valores.nomedacompanhia);
		printf ("\n A acao cresceu %.1f % \n", percent);
		printf ("\n\n");
		
	}else{
		printf ("\n Area de atuacao: %s \n", valores.atuacao);
		printf ("\n Companhia: %s \n", valores.nomedacompanhia);
		printf ("\n A acao decaiu %.1f% \n", percent);
		printf ("\n\n");
	}
	
	 system ("pause");
	 return 0;
	
	}
