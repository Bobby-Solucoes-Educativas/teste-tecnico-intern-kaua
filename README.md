# teste-tecnico-intern-kaua

Para o desafio é esperado que o participante implemente sua versão do game of life, recomendamos o uso de html, javascript e css, porém pode ser utilizado qualquer linguagem/framework.

## Regras do teste técnico

- A implementação deve ser entregue em até 72 horas, iniciando a contagem assim que o participante receber o acesso ao repositório, o tempo da entrega não irá contar como fator determinante, então preze pela qualidade. 
- Ao finalizar a implementação o participante deve enviar um PR(pull request) com o seguinte padrão, vaga/primeiro-nome-e-sobrenome, exemplo: estagio/john. aplique no PR a formatação que desejar.
- O projeto deve ter um README.md com as instruções para rodar o projeto, essa etapa é fundamental para que o revisor consiga verificar o funcionamento do projeto, então preste bastante atenção aqui.
- Implemente testes.
- É permitido fazer melhorias, desde que as regras básicas do jogo continuem vigentes. 

### Introdução ao Game of Life

![image](https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif)

O Game of Life não é um jogo no sentido tradicional; é uma simulação de células que seguem regras simples, mas que produzem comportamentos complexos. Criado por John Conway em 1970, esse "jogo" despertou o interesse de cientistas, matemáticos e entusiastas da computação ao longo das décadas.

### As Regras Básicas
![[Gospers_glider_gun (1).gif]]

No Game of Life, temos um grid bidimensional de células, cada uma podendo estar viva ou morta. As células interagem de acordo com três regras simples:

1. **Sobrevivência:** Uma célula viva com dois ou três vizinhos vivos continua viva na próxima geração.
2. **Morte por solidão:** Uma célula viva com menos de dois vizinhos vivos morre de solidão na próxima geração.
3. **Morte por superpopulação:** Uma célula viva com mais de três vizinhos vivos morre de superpopulação na próxima geração.
4. **Nascimento:** Uma célula morta com exatamente três vizinhos vivos se torna viva na próxima geração.


Dado um celular na posição x, y, seus vizinhos são:

- (x-1, y): Move uma unidade para a esquerda.
- (x+1, y): Move uma unidade para a direita.
- (x, y-1): Move uma unidade para baixo.
- (x, y+1): Move uma unidade para cima.
- (x-1, y-1): Move uma unidade para a diagonal inferior esquerda.
- (x-1, y+1): Move uma unidade para a diagonal superior esquerda.
- (x+1, y-1): Move uma unidade para a diagonal inferior direita.
- (x-1, y+1): Move uma unidade para a diagonal superior direita.

Essas regras simples são aplicadas a cada célula no grid para determinar o estado das células na próxima geração.


![image](https://upload.wikimedia.org/wikipedia/commons/7/7e/GameOfLife_Glider_Animation.gif)
