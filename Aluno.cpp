#include <stdio.h>
#include <stdlib.h>
#include <conio.h>

int main()
{
    struct ficha_esporte
    {
        char nome[50];
        char modalidade[60];
        float faixa_peso;
        float faixa_peso2;
    };

    struct ficha_esporte aluno[5];

    for (int i = 0; i <= 5; i++)
    {
        printf("\n\n--------------- Cadastramento do aluno --------------- \n\n");
        printf("\n Digite o nome do aluno:");
        fflush(stdin);

        fgets(aluno[i].nome, 50, stdin);

        printf("\n Digite a modalidade:");
        fflush(stdin);

        fgets(aluno[i].modalidade, 60, stdin);

        printf("\n Digite a primeira faixa de peso:");
        scanf("%f", &aluno[i].faixa_peso);

        printf("\n Digite a segunda faixa de peso:");
        scanf("%f", &aluno[i].faixa_peso2);

        printf("\n\n--------------- Dados do aluno --------------- \n\n");
        printf("\n Nome do matriculado: %s", aluno[i].nome);
        printf("\n Modalidade: %s", aluno[i].modalidade);
        printf("\n A primeira faixa de peso e: %.2f", aluno[i].faixa_peso);
        printf("\n A segunda faixa de peso e: %.2f", aluno[i].faixa_peso2);
    }
    printf("\n\n");
    system("Pause");
    return 0;
}
