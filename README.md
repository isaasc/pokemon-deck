# PokemonDeck

Este projeto tem como objetivo possibilitar a visualização, criação, remoção de decks de cartas pokémon.

## Funcionalidades

- O usuário pode ver seus baralhos;
- O usuário pode criar um novo baralho, sendo que:
  - O usuário pode filtrar as cartas pelo supertype;
  - O usuário pode colocar um nome no seu baralho;
  - O usuário pode inserir cartas no baralho;
  - O baralho tem que ter no mínimo 24 cartas e no máximo 60;
  - Só podem ter 4 cartas com o mesmo nome, no baralho. (Nome não id);
  - Após salvar o baralho voltamos para a página de lista de baralhos atualizada;
  - O baralho será salvo apenas em memória.
- O usuário pode remover um baralho;
- O usuário pode editar um baralho;
- O usuário pode clicar num baralho para visualizar seus detalhes, sendo que:
  - O usuário consegue ver quantos pokemons e cartas de treinador existem no baralho. (atributo supertype);
  - O usuário consegue ver de quantas cores é o baralho, quantos types únicos existem no baralho.

## Tecnologias usadas:

- Angular 16 + Angular cli
- Infragistics
- Tailwind
- API de Pokémon TCG(https://docs.pokemontcg.io/#api_v1cards_list)
- Standalone Components

## Instalação:

1. **Clone o repositório**

```
  git clone https://github.com/isaasc/pokemon-deck.git
```

2. **Navegue até a pasta do projeto**

```
  cd pokemon-deck
```

3. **Instale as dependências**

```
  npm install
```

4. **Inicie a aplicação**

```
  npm start
```

5. **Navegue até a url abaixo e seja feliz**

```
  http://localhost:4200/
```

## Rodando os testes

```
  ng test
```

### Made By: [Isabella Campos](https://www.linkedin.com/in/isabellaszcampos/)
