#include<stdlib.h>
#include<stdio.h>
#include<math.h>

void consulta ();

int main (){

	consulta ();

	return 0;
}

    void consulta (){
 	char paciente [50], cpf [50], tipo_consulta [100];
 	int contato;
 	char resp ='s';

 	printf ("\n\n -------------------- Dados relativos ao paciente --------------------\n");

 	printf ("\n Paciente: Carlos \n");

 	printf ("\n CPF: 33333333333 \n");

 	printf ("\n Tipo de consulta: Exame de cardiologia \n");

 	printf ("\n Contato do paciente: 1234-5678 \n");


 	printf ("\n Deseja alterar os dados do paciente?");
 	scanf ("%c", &resp);

 		if (resp =='n'){
    printf ("\n\n -------------------- Dados relativos ao paciente -------------------- \n\n");

 	printf ("\n Paciente: Carlos \n");

 	printf ("\n CPF: 33333333333 \n");

 	printf ("\n Tipo de consulta: Exame de cardiologia \n");

 	printf ("\n Contato do paciente: 1234-5678");
 	printf ("\n\n");
 	
 	system ("pause");
 	return;

	 }

 	while (resp =='s'){

 	printf ("\n\n ------------------- Alteracao de dados do paciente ------------------ \n\n");
 	printf ("\n Paciente:");
 	fflush (stdin);

 	fgets (paciente, 50, stdin);

 	printf ("\n CPF:");

 	fgets (cpf, 50, stdin);

 	printf ("\n Tipo de consulta:");

 	fgets (tipo_consulta, 100, stdin);

 	printf ("\n Contato do paciente:");
 	scanf ("%d", &contato);
 	fflush (stdin);

 	printf ("\n Deseja alterar  os dados do paciente: s/n ?");
 	scanf ("%c", &resp);

	}

	printf ("\n ------------------ Dados relativos ao paciente -------------------\n\n");
	printf ("\n Paciente: %s \n", paciente);
 	printf ("\n CPF: %s \n", cpf);
 	printf ("\n Tipo de consulta: %s \n", tipo_consulta);
 	printf ("\n Contato do paciente: %d \n", contato);
	printf ("\n\n");
	
 	system ("pause");
 	return;

 }
