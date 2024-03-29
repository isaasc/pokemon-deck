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

## Detalhes do projeto

- Estou fazendo uso do prettier, então é necessário para alterações possuir o plugin do mesmo;
- Por ser um projeto pequeno, optei por estruturar as páginas da seguinte maneira:
  - Pages: Componentes que são páginas;
  - Components: Todos os demais componentes;
  - Service: Todos os serviços;
  - Models: Todas as interfaces, classes e tipos.

## Tecnologias usadas:

- Angular 16.0.0 + Angular cli ^16.2.11
- Infragistics (igniteui-angular) ^16.1.12
- Angular router ^16.0.0
- Tailwind ^3.4.1
- API de Pokémon TCG(https://docs.pokemontcg.io/#api_v1cards_list)
- Prettier ^3.1.1

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

## Próximos passos:

- Melhorar funcionamento do loading;
- Criar testes;
- Melhorar UI do aviso de já possuir 4 cartas com o mesmo nome;

### Made By: [Isabella Campos](https://www.linkedin.com/in/isabellaszcampos/)
