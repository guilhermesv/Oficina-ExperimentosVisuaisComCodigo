+++
title = 'Introdução a programação visual'
date = 2024-04-02T17:36:42-03:00
draft = true
slug = 'aula-01'
capa = ''
+++

# Conceitos

## 1. Por que é legal programar?

- Autonomia: criar ferramentas, automatização e parametrização
- Você trabalha mais no processo e menos no resultado
- Racionalização do processo criativo
- Geração de possibilidades
- Expandir o espaço das ideias

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

{{< figura src="Aula01-Mapa-Metro.png" alt="Mapa do Metrô de São Paulo" legenda="Mapa do Metrô de São Paulo: Fonte <a href='https://commons.wikimedia.org/wiki/File:Mapa_metro_sp.svg'>Wikipedia</a>." >}}

### Algoritmo

Criar uma série de instruções para resolver uma tarefa e tarefas similares. 

Exemplos: operações matemáticas (somar, dividir, multiplicar, etc), receita de bolo, jogadas de futebol, etc.

{{< figura 
  src="Aula01-Conta-Adicao.jpg"
  alt="Operação de adição com números decimais"
  legenda="Operação de adição com números decimais. Fonte: <a href='http://seusaber.com.br/matematica/como-fazer-contas-de-somar-com-virgula.html'>Seu saber</a>." 
>}}

### Decomposição

Decompor o problema/informação em porções menores. 

Exemplos: uma rota para se chegar a um local, estabelecer um cronograma baseado no tempo gasto em cada uma das etapas, entender o como uma bicicleta funciona a partir de suas peças, etc.

{{< figura 
  src="Aula01-Rota.jpg"
  alt="Como chegar da Praça da Sé até a Praça da República em São Paulo"
  legenda="Como chegar da Praça da Sé até a Praça da República em São Paulo. Fonte: <a href='https://www.openstreetmap.org/directions?engine=fossgis_osrm_foot&route=-23.5504%2C-46.6331%3B-23.5432%2C-46.6425#map=17/-23.54662/-46.63781'>OpenStreet Map</a>." 
>}}

### Parametrização

Estabelecer variáveis de controle sobre uma solução ou ferramenta. 

Exemplos: controle de volume ou equalizador em um player ou caixa de som, registro da torneira, etc.

(Este é um conceito que não encontrei dessa forma nas bibliografias, mas achei importante ressaltar aqui)

{{< figura 
  src="Aula01-Receiver.jpg"
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
  src="Aula01-Diatipo.gif"
  alt="Identidade visual para o DiaTipo São Paulo"
  legenda="Identidade visual para o DiaTipo São Paulo. Fonte: <a href='https://www.behance.net/gallery/83219303/DiaTipo-Sao-Paulo-2018'>Daó + Deia Kulpas</a>" 
>}}

Identidade desenvolvida pelo [Daó](https://estudiodao.com) junto com a [Deia Kulpas](http://www.andreakulpas.com) para o 10º ano do DiaTipo SP, um encontro de Tipografia sem fins lucrativos. A identidade baseou-se em um padrão gerado a partir de fontes criadas por designers brasileiros, a fim de apresentar o conceito do DiaTipo: um evento construído ao longo de 10 anos por tipógrafos que cresceram junto com o evento.

{{< botao texto="Mais informações aqui" href="ttps://www.behance.net/gallery/83219303/DiaTipo-Sao-Paulo-2018">}}

### Algum de visualização de dados

Identidade visual para a empresa de business design Beyond, consultoria que cria e desenvolve ideias e serviços para negócios novos ou já consolidados.

### Algum da Segyo

Composições que acompanharam o lançamento da nova identidade visual da Vosso. O trabalho é uma reinterpretação da idéia de retícula utilizada nos meios de impressão.

<a target="_blank" rel="noopener noreferrer" class="btn small" href="http://www.estudiodao.com/trabalhos/vosso/">mais informações aqui</a>


<div class="galeria">
  <figure><img alt="Composições para os produtos promocionais da Vosso" src="{{ site.url }}/aula-01/Vosso-01.svg"></figure>
  <figure><img alt="Composições para os produtos promocionais da Vosso" src="{{ site.url }}/aula-01/Vosso-02.svg"></figure>
  <figure><img alt="Composições para os produtos promocionais da Vosso" src="{{ site.url }}/aula-01/Vosso-03.svg"></figure>
  <figure><img alt="Composições para os produtos promocionais da Vosso" src="{{ site.url }}/aula-01/Vosso-04.svg"></figure>
  <figcaption>Composições para os produtos promocionais da Vosso. Fonte: <a href="http://www.estudiodao.com/trabalhos/vosso/">Daó</a></figcaption>
</div>

---

# Nodebox 3

inserir imagem do nodebox

<figure>
  <img alt="Tela do aplicativo Nodebox rodando uma arte generativa" src="{{ site.url }}/aula-01/Nodebox.png">
  <figcaption>Tela do aplicativo Nodebox rodando uma arte generativa. Fonte: <a href="http://nodebox.net">Nodebox</a></figcaption>
</figure>

# Demonstrações

Arquivos criados durante ou para demonstração nas aulas práticas.


{{< botao target="_blank" href="https://guilhermesv.github.io/DownGit/#/home?url=https://github.com/guilhermesv/DesenhandoComCodigo-Grafatorio/tree/master/Aula-01-Demonstracoes" texto="Acessar download dos arquivos">}}

# Exercícios

Esses são os primeiros exercícios, a ideia é que você experimente criar algo livremente no Nodebox. Caso tenha dúvida das possibilidades ou do que fazer, de uma passeada pelos exemplos do Nodebox (eles ficam no menu "File > Open Examples") ou veja os códigos que produzi para esses exercícios.

Tente também criar variações da mesma ideia, as vezes um código inicial pode se transformar em uma outra coisa apenas mudando a ordem dos nós ou acrescentando um item diferente. 

Experimente, e principalmente se divirta :)

## Exercício 01

Criar um padrão geométrico explorando as primitivas básicas e o nó grid. 

## Exercício 02

Criar uma composição livre utilizando as transformações e o nó copy.

## Desafio:

Recriar algo similar ao resultado abaixo com parametrização do número de colunas e linhas, ou seja ao mudar a quantidade de colunas ou linhas, o padrão deve se ajustar automaticamente:

<div class="galeria">
<figure><img alt="Composições para os produtos promocionais da Vosso" src="{{ site.url }}/aula-01/Aula01-Desafio-01.png"></figure>
<figure><img alt="Composições para os produtos promocionais da Vosso" src="{{ site.url }}/aula-01/Aula01-Desafio-02.png"></figure>
<figure><img alt="Composições para os produtos promocionais da Vosso" src="{{ site.url }}/aula-01/Aula01-Desafio-03.png"></figure>
<figure><img alt="Composições para os produtos promocionais da Vosso" src="{{ site.url }}/aula-01/Aula01-Desafio-04.png"></figure>
</div>


## Dicas

- Não se preocupe com a aplicação das cores, elas podem variar de acordo com a lógica que você seguir
- Você vai precisar dos nós de matemática para fazer algumas divisões e subtrações
- O nó Fit pode ajudar a definir o tamanho dos módulos

# Resolução dos exercícios

Todas as sugestões de resoluções dos exercícios e desafio podem ser baixadas no link abaixo:

<a target="_blank" rel="noopener noreferrer" class="btn" href="https://guilhermesv.github.io/DownGit/#/home?url=https://github.com/guilhermesv/DesenhandoComCodigo-Grafatorio/tree/master/Aula-01-Exercicios">Acessar download dos arquivos</a>


Dúvidas, de como baixar o arquivo do GitHub? [Clique aqui](https://guilhermesv.github.io/DesenhandoComCodigo-Grafatorio/faq)

