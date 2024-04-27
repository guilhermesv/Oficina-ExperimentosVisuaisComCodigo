---
title: "Animação"
date: 2024-04-16T18:30:25-03:00
draft: false
slug: "aula-03"
capa: "Aula03-Capa.mp4"
capa-alt: ""
---

# Conceitos

## Parâmetros e Tempo

Criar animações utilizando programação envolve sempre desenhar algo e estabelecer parâmetros que vão ser controlados com a passagem do tempo. Então antes de iniciar qualquer processo desse tipo é interessante imaginar qual será esse parâmetro e como esse parâmetro vai ser controlado através do tempo.

No exemplo a seguir podemos ver o **parâmetro tamanho** do círculo que **aumentar linearmente** a medida que o tempo passa:

{{< video
  src="Aula03-Animacao-01-Comp.mp4"
  legenda="Um círculo vermelho sobre um fundo preto cresce de maneira uniforme e continua até preencher toda a tela."
  parametros="autoplay"
>}}

Além de entender como vai funcionar o parâmetro a ser animado, a forma como esse parâmetro vai ser controlado através do tempo também é algo importante para se pensar. Pequenas mudanças em como é feito esse processo mudam bastante a percepção em relação a animação.

Agora a baixo temos o mesmo parâmetro tamanho controlado utilizando uma função seno:

{{< video
  src="Aula03-Animacao-02-Comp.mp4"
  legenda="Um círculo vermelho sobre um fundo preto cresce e diminui lentamente como se estivesse pulsando."
  parametros="autoplay"
>}}

Existem infinitas possibilidades e técnicas para controlar parâmetros através do tempo como utilizar [equações mais complexas para criar efeitos de aceleração](https://easings.net/) ou então utilizar algorítimos como [Ruído de Perlin](https://en.wikipedia.org/wiki/Perlin_noise).

E por fim esses conceitos de parâmetros e tempo não precisam necessariamente ter uma relação direta com a ideia da tradicional linha do tempo de programas de animação e edição de vídeo onde muitas vezes pensamos mais em uma sequência de acontecimentos que tem um início e um fim muito claro determinado no tempo. No nosso caso muitas animações criadas não precisam ter essa ideia de finitude, podem ser modificadas continuamente pelo código por tempo indeterminado.

## Estudos de caso

### Bees and Bombs

Trabalhos criados pelo designer [Dave Whyte](http://beesandbombs.com/).

{{< galeria

  src="Aula03-BeesAndBombs-01.webp,Aula03-BeesAndBombs-02.webp,Aula03-BeesAndBombs-03.webp,Aula03-BeesAndBombs-04.webp,Aula03-BeesAndBombs-05.webp,Aula03-BeesAndBombs-06.webp"
  legenda="Animações do designer Bees and Bombs."

>}}

### Daily Drawbot

Trabalhos criados pelo designer [Just van Rossum](https://dailydrawbot.tumblr.com/).

{{< galeria

  src="Aula03-DailyDrawbot-01.webp,Aula03-DailyDrawbot-02.webp,Aula03-DailyDrawbot-03.webp,Aula03-DailyDrawbot-04.webp,Aula03-DailyDrawbot-05.webp,Aula03-DailyDrawbot-06.webp"
  legenda="Animações do designer Just van Rossum."

>}}

### Experimentos Seo Hyojung

Trabalhos criados pela artista [Seo Hyojung](https://www.instagram.com/seohyo/).

{{< galeria

  src="Aula03-HyojungSeo-00.webp,Aula03-HyojungSeo-01.webp,Aula03-HyojungSeo-02.webp,Aula03-HyojungSeo-03.webp"
  legenda="Animações da artista Seo Hyojung."

>}}

Abaixo alguns trabalhos desenvolvidos em conjunto com seus alunos:

{{< video
  src="Aula03-HyojungSeo-04.mp4"
  legenda="Projeto com realiadade aumentada, onde um cartão com um desenho é exibido para a camera e uma animação começa a tocar em cima da imagem do cartão."
>}}

{{< video
  src="Aula03-HyojungSeo-05.mp4"
  legenda="Projeto com realiadade aumentada, onde um cartão com um desenho é exibido para a camera e uma animação começa a tocar em cima da imagem do cartão."
>}}

# Demons&shy;tra&shy;ções

Arquivos criados durante ou para demonstração nas aulas práticas.

{{< downgit target="_blank" href="https://github.com/guilhermesv/Oficina-ExperimentosVisuaisComCodigo/tree/main/Aula-03-Demonstracoes" texto="Acessar download dos arquivos">}}

# Exercícios

### Exercício 01

Adicionar alguma animação nos exercícios anteriores.

### Exercício 02

Criar uma animação que seja um loop perfeito, ou seja o começo e o fim se encaixem dando a sensação de ser infinita. 

### Desafio:

Parte 1 - Recriar a animação abaixo:

{{< video
  src="Aula03-Desafio-01.mp4"
  parametros="autoplay"
>}}

Parte 2 - Recriar alguma dessas variações:

{{< video
  src="Aula03-Desafio-02.mp4"
  parametros="autoplay"
>}}

{{< video
  src="Aula03-Desafio-03.mp4"
  parametros="autoplay"
>}}

### Dicas

- Para completar esse desafio você deve ter um controle individual sobre cada uma das linhas, então primeiro tente resolver como desenhar a linha e o círculo que caminha nela.
- Na segunta parte do desafio eu utilizei subnetworks. Na documentação do Nodebox tem um execelente tutorial, acesse neste [link](https://www.nodebox.net/node/documentation/concepts/subnetworks).

# Resolução dos exercícios

Todas as sugestões de resoluções dos exercícios e desafio podem ser baixadas no link abaixo:

{{< downgit target="_blank" href="https://github.com/guilhermesv/Oficina-ExperimentosVisuaisComCodigo/tree/main/Aula-03-Exercicios" texto="Acessar download dos arquivos">}}

Dúvidas, de como baixar o arquivo do GitHub? [Clique aqui](https://etc.guilhermevieira.info/oficina/evcc-v01/faq)