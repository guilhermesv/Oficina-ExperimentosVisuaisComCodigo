+++
title = 'Introdução a programação visual'
date = 2024-04-02T17:36:42-03:00
draft = false
slug = 'aula-01'
capa = 'Aula-01-Capa.jpg'
+++

# Conceitos

## 1. Por que é legal programar?

- Autonomia: criar ferramentas, automatização e parametrização
- Você trabalha mais no processo e menos no resultado
- Racionalização do processo criativo
- Geração de possibilidades
- Expandir o espaço das ideias

{{< figura 
  src="Aula-01-Diagrama-EspacoDasIdeias.png" 

  alt="Diagrama ilustrando a ideia de espaço da ideias: o fundo é preenchido de um laranja que esmaece ao chegar nas bordas do diagrama, nesse fundo o texto Espaço das Ideias está escrito em branco, no meio desse fundo um círculo com cortorno branco escrito espaço das ferramentas em sua borda. 3 ideas síbomlizadas como um ponto estão situadas no diagrama: a executável dentro do espaço das ferramentas, uma na borda do espaço das ferramentas chamada adaptável e uma outra bem distante do espaço das ferremntas a ideia impossível." 

  legenda="Interpretação pessoal do diagrama proposto por Erik Van Blokland. Ideias executaveis: aquelas que no espaço das ferramentas que dominamos. Ideias adaptaveis: está fora mais próxima, conseguimos mudar um pouco para realiza-la. Ideias impossíveis: estão fora e muito longe do espaço da ferramentas, nesse  a programação pode ser uma forma de alcança-la. Fonte <a href='https://youtu.be/0l5snZXafIs?t=176'>DiaTipo SP 2013 - Erik van Blokland</a>." 
>}}

## 2. Programar é sobre se comunicar

Aprender a programar, é aprender uma forma nova de se comunicar e nesse caso inicialmente se comunicar com a máquina. Uma vez que você aprende alguns princípios dessa comunicação, fica um pouco mais fácil de se expressar em diversas linguagens de programação.

Para saber mais sobre esse conceito: [Programar nunca foi sobre Código](https://www.youtube.com/watch?v=eLnLevR5mjg).

## 3. Pensamento computacional

Para programar exercitamos muito a idéia de pensamento computacional que é:

> “a utilização de  conceitos  fundamentais  da  computação para resolver  problemas,  projetar  sistemas, e  compreender comportamentos humanos”  — [Jeannette  Wing citada por Eduardo Omine](http://www.teses.usp.br/teses/disponiveis/16/16134/tde-12092014-122450/pt-br.php)

De uma forma bem simples e genérica o pensamento computacional é aplicar alguns conceitos que são muito comuns e diários do universo das ciências computacionais a outros campos e situações. Ter conhecimento de alguns desses princípios pode ajudar a resolver tanto problemas computacionais, quanto qualquer outro tipo de problema ou necessidade projetual.

Destaco aqui **4 conceitos** de pensamento computacional:

### Abstração

Identificar e extrair o mais relevante de um problema ou informação. 

Exemplos: números, mapas, agenda, etc.

{{< figura src="Aula-01-Mapa-Metro.png" alt="Mapa do Metrô de São Paulo" legenda="Mapa do Metrô de São Paulo: Fonte <a href='https://commons.wikimedia.org/wiki/File:Mapa_metro_sp.svg'>Wikipedia</a>." >}}

### Algoritmo

Criar uma série de instruções para resolver uma tarefa e tarefas similares. 

Exemplos: operações matemáticas (somar, dividir, multiplicar, etc), receita de bolo, jogadas de futebol, etc.

{{< figura 
  src="Aula-01-Conta-Adicao.jpg"
  alt="Operação de adição com números decimais"
  legenda="Operação de adição com números decimais. Fonte: <a href='http://seusaber.com.br/matematica/como-fazer-contas-de-somar-com-virgula.html'>Seu saber</a>." 
>}}

### Decomposição

Decompor o problema/informação em porções menores. 

Exemplos: uma rota para se chegar a um local, estabelecer um cronograma baseado no tempo gasto em cada uma das etapas, entender o como uma bicicleta funciona a partir de suas peças, etc.

{{< figura 
  src="Aula-01-Rota.jpg"
  alt="Como chegar da Praça da Sé até a Praça da República em São Paulo"
  legenda="Como chegar da Praça da Sé até a Praça da República em São Paulo. Fonte: <a href='https://www.openstreetmap.org/directions?engine=fossgis_osrm_foot&route=-23.5504%2C-46.6331%3B-23.5432%2C-46.6425#map=17/-23.54662/-46.63781'>OpenStreet Map</a>." 
>}}

### Parametrização

Estabelecer variáveis de controle sobre uma solução ou ferramenta. 

Exemplos: controle de volume ou equalizador em um player ou caixa de som, registro da torneira, etc.

(Este é um conceito que não encontrei dessa forma nas bibliografias, mas achei importante ressaltar aqui)

{{< figura 
  src="Aula-01-Receiver.jpg"
  alt="Aparelho de controle de som receiver"
  legenda="Aparelho de controle de som receiver com diversos controles. Fonte: <a href='https://vintage7080.blogspot.com/2018/01/gradiente-59-receiver-model-1450.html'>Vintage 70/90</a>." 
>}}

# Projetos com código

É possível explorar diversos caminhos com programação, desde automatizar partes do seu trabalho até criar instalações interativas de arte. Assim como desenhar, a programação pode ser parte da sua rotina profissional ou apenas seu passatempo.

A seguir uma seleção de trabalhos criados com código no NodeBox 3, software que trabalharemos nesta oficina.

### Formas

{{< vimeo src="https://player.vimeo.com/video/241052817?byline=0" legenda="Vídeo do projeto Formas, experimento visual de animação com formas geométricas básicas.">}}

Experimento explorando composições usando três formas primitivas:  circulo, quadrado e triângulo. Para cada forma foram feitas 4 animações diferentes, sendo que cada uma delas possui 4 variações de cor e proporção do módulo.

{{< botao texto="Mais informações aqui" href="https://www.behance.net/gallery/58421461/FORMAS">}}

### DiaTipo São Paulo 2018

{{< figura 
  src="Aula-01-Diatipo.gif"
  alt="Identidade visual para o DiaTipo São Paulo"
  legenda="Identidade visual para o DiaTipo São Paulo. Fonte: <a href='https://www.behance.net/gallery/83219303/DiaTipo-Sao-Paulo-2018'>Daó + Deia Kulpas</a>" 
>}}

Identidade desenvolvida pelo [Daó](https://estudiodao.com) junto com a [Deia Kulpas](http://www.andreakulpas.com) para o 10º ano do DiaTipo SP, um encontro de Tipografia sem fins lucrativos. A identidade baseou-se em um padrão gerado a partir de fontes criadas por designers brasileiros, a fim de apresentar o conceito do DiaTipo: um evento construído ao longo de 10 anos por tipógrafos que cresceram junto com o evento.

{{< botao texto="Mais informações aqui" href="ttps://www.behance.net/gallery/83219303/DiaTipo-Sao-Paulo-2018">}}

### Nicholas Rougeux

Nicholas Rougeux é designer e artista de dados, em seu trabalho explora as possibilidades de visualizar dados gráficamente.

{{< figura 
  src="Aula-01-c82.jpg"
  alt="Cartaz dos dados diário do vento e temperatura durante um ano nas cidades mais populosas de cada estado dos Estados Unidos da América. O cartaz apresenta um fundo azul escuro, o título Weather Portrais 2021 U.S. Cities, uma série de mini diagramas sobre a temperatura em diversas cidades do E.U.A. e ao fim uma legenda explicativa do material. "
  legenda="Cartaz dos dados diário do vento e temperatura durante um ano nas cidades mais populosas de cada estado dos Estados Unidos da América. Fonte: <a href='https://www.c82.net/blog/?id=71'>Nicholas Rougeux</a>." 
>}}

{{< botao texto="Mais informações aqui" href="https://www.c82.net/blog/?id=71">}}

### Seohyo

Seohyo é uma artista Sul Coreana que trabalha com arte gerativa, seu trabalho atualmente se manifesta principalmente na criação de animações em loop para apresentar em espaços digitais ou em instalações.

{{< botao texto="Mais informações aqui" href="https://www.instagram.com/seohyo/">}}

{{< video src="Aula-01-Artista-Seohyo-01.mp4" legenda="Uma imagem é redesenhada continuamente em uma grade preenchida com linhas horizontais, verticais e diagonais.">}}

# Programação Visual e Nodebox 3 

Quando falamos em programação logo imaginamos uma tela cheia de códigos escritos, porém essa não é a única maneira de programar. Algumas linguagens trabalham com a programação visual, onde através de uma interface você conecta funções e valores criando o código visualmente.

{{< figura 
  src="Aula-01-Blender.jpg"
  alt="Tela do prrograma Blender 3d, no lado esquerdo um esquema de nós que são pequenas caixas com entradas e saídas conectadas umas as outras e a direita o resultado do código, um emaranhado de linhas curvas em 3D."
  legenda="Interface de programação com nós do Geometry Nodes no prrograma Blender 3d." 
>}}

Nesta oficina utilizaremos o Nodebox  que é um aplicativo que permite por meio da programação visual baseada em um sistema de nós criar peças de design gerativo, animação e visualização de dados em uma interface simples e amigável.

{{< figura 
  src="Aula-01-Nodebox.png"
  alt="Tela do prrograma Blender 3d, no lado esquerdo um esquema de nós que são pequenas caixas com entradas e saídas conectadas umas as outras e a direita o resultado do código, um emaranhado de linhas curvas em 3D."
  legenda="Tela do aplicativo Nodebox rodando uma arte generativa. A esquerda a arte e a direita inferior o sistema de nós com o código. Fonte: <a href='http://nodebox.net'>Nodebox</a>." 
>}}

# Demons&shy;tra&shy;ções

Arquivos criados durante ou para demonstração nas aulas práticas.

{{< downgit target="_blank" href="https://github.com/guilhermesv/Oficina-ExperimentosVisuaisComCodigo/tree/main/Aula-01-Demonstra%C3%A7%C3%B5es" texto="Acessar download dos arquivos">}}

# Exercícios

Esses são os primeiros exercícios, a ideia é que você experimente criar algo livremente no Nodebox. Caso tenha dúvida das possibilidades ou do que fazer, de uma passeada pelos exemplos do Nodebox (eles ficam no menu "File > Open Examples") ou veja os códigos que produzi para esses exercícios.

Tente também criar variações da mesma ideia, as vezes um código inicial pode se transformar em uma outra coisa apenas mudando a ordem dos nós ou acrescentando um item diferente. 

Experimente, e principalmente se divirta :)

## Exercício 01

Criar um padrão geométrico explorando as primitivas básicas e o nó grid. 

{{< figura 
  src="Aula-01-Exercício-01-Exemplo.png"
  alt="Padrão regular intercalando estrelas azuis sobre losangos laranjas, e círculos verde claro sobre losangos azuis."
  legenda="Exemplo de resolução: padrão criado usando retângulos, círculos e estrelas. Cada conjunto de elemento possui  uma cor específica." 
>}}

## Exercício 02

Criar uma composição livre utilizando as transformações e o nó copy.

{{< figura 
  src="Aula-01-Exercício-02-Exemplo.png"
  alt="Uma forma circular lembrando uma flor aparece no meio da composição, por trás dessa forma uma repetição dessa mesma forma vai acontecendo de maneira consecutiva aumentando de tamanho. As formas são preenchidas com cores intercaladas de laranja e preto."
  legenda="Exemplo de resolução: composição criada a partir da rotação e cópia de uma elipse. As cores se alternam entre as camadas." 
>}}


## Desafio:

Recriar algo similar ao resultado abaixo com parametrização do número de colunas e linhas, ou seja ao mudar a quantidade de colunas ou linhas, o padrão deve se ajustar automaticamente:

{{< galeria
  src="Aula-01-Desafio-01.png,Aula-01-Desafio-02.png,Aula-01-Desafio-03.png,Aula-01-Desafio-04.png"
  legenda="Padronagem que lembra bandeirinhas de festa junina, retangulares com a base triangular. As cores variam de vermelho, verde, bege, verde, azul e rosa."
  classes="duas-colunas"
>}}


#### Dicas

- Não se preocupe com a aplicação das cores, elas podem variar de acordo com a lógica que você seguir;
- Você vai precisar dos nós de matemática para fazer algumas divisões e subtrações;
- O nó Fit pode ajudar a definir o tamanho dos módulos.

# Resolução dos exercícios

Todas as sugestões de resoluções dos exercícios e desafio podem ser baixadas no link abaixo:

{{< downgit target="_blank" href="https://github.com/guilhermesv/Oficina-ExperimentosVisuaisComCodigo/tree/main/Aula-01-Exerc%C3%ADcios" texto="Acessar download dos arquivos">}}


Dúvidas, de como baixar o arquivo do GitHub? [Clique aqui](https://etc.guilhermevieira.info/oficina/evcc-v01/faq)