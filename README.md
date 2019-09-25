# NodeJS_Pokedex
[![Codeship Status for RenatoSiqueira/NodeJS_Pokedex](https://app.codeship.com/projects/a81ef7d0-c074-0137-3631-424e917e6618/status?branch=master)](https://app.codeship.com/projects/365892)

- [NodeJS_Pokedex](#NodeJS_Pokedex)
    - [Objetivo](#objetivo)
    - [Pré Instruções](#Pré-Instruções)
    - [Instruções](#Instruções)
    - [Documentação API](#Documentação-API)
        - [GET list/v1](#GET-list/v1)
        - [GET pokemon/v1/{id}](#GET-pokemon/v1/)
    - [Rodando Testes](#Rodando-Testes)
    - [Conteinerização da aplicação](#Conteinerização-da-aplicação)
    - [Swagger](#swagger)
    - [Online](#online)

## Objetivo
Sua tarefa é construir uma API [Pokedéx](https://nodejspokedex.herokuapp.com/) que retorna dados dos pokemons. Um exemplo da mais utilizada é: https://pokeapi.co. Utilize um repositório Git para versionamento e disponibilização do código.

### Pré Instruções
```
1. Yarn ou Npm Install

2. Yarn start ou Npm start
```

### Instruções
Existem duas formas de acesso, uma via API (com retorno em JSON) e outra web (que provê acesso visual).
```
Modo API: Utilizar a tag V1
Modo WEB: Utilizar a tag V2
```

### Documentação API
### GET list/v1
```
Descrição: Retorna todas os Pokemons (paginado, mostrando apenas 6 por página)

GET /list/v1 ou GET /list/v1?pag=1
```
Resposta:
```
[ {
  "count": 964,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=6&limit=6",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
      "name": "charmander",
      "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
      "name": "charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
      "name": "charizard",
      "url": "https://pokeapi.co/api/v2/pokemon/6/"
    }
  ]
} ] 
```

### GET pokemon/v1/
```
Descrição: Mostra detalhes específicos do pokemon escolhido. Pode-se usar o nome ou o id na busca.

GET /pokemon/v1/pikachu (pikachu é o pokemon sendo buscado neste exemplo) ou 
GET /pokemon/v1/1 (1 é o id do pokemon Bubasauro, neste exemplo)
```
Schema da Resposta:
```
[
  {
    "abilities": [
      {
        "ability": {
          "name": "string",
          "url": "string"
        },
        "is_hidden": true,
        "slot": "integer"
      }
    ],
    "base_experience": "integer",
    "forms": [
      {
        "name": "string",
        "url": "string"
      }
    ],
    "game_indices": [
      {
        "game_index": "integer",
        "version": {
          "name": "string",
          "url": "string"
        }
      }
    ],
    "heigth": "integer",
    "held_items": [
      {
        "item": {
          "name": "string",
          "url": "string"
        },
        "version_details": [
          {
            "rarity": "integer",
            "version": [
              {
                "name": "string",
                "url": "string"
              }
            ]
          }
        ]
      }
    ],
    "id": "integer",
    "is_default": true,
    "location_area_encounters": "string",
    "moves": "integer",
    "name": "string",
    "order": "integer",
    "species": {
      "name": "string",
      "url": "string"
    },
    "sprites": {
      "back_default": "string",
      "back_female": "string",
      "back_shiny": "string",
      "back_shiny_female": "string",
      "front_default": "string",
      "front_female": "string",
      "front_shiny": "string",
      "front_shiny_female": "string"
    },
    "stats": [
      {
        "base_stat": "integer",
        "effort": "integer",
        "stat": {
          "name": "string",
          "url": "string"
        }
      }
    ],
    "types": [
      {
        "slot": "integer",
        "type": {
          "name": "string",
          "url": "string"
        }
      }
    ],
    "weight": "integer"
  }
]
```

### Rodando Testes
Os testes foram elaborados utilizando Chai, Mocha e Request
```
yarn test
```

# Conteinerização da aplicação
O arquivo Dockerfile contém um script simples, mas funcional. Os seguintes comandos geram uma nova imagem e a inicializam para uso:
```
docker build -t backend-pokedex .
docker run -p 3000:3000 backend-pokedex:latest
```

# Swagger
Teste a API usando Swagger:
[https://nodejspokedex.herokuapp.com/docs](https://nodejspokedex.herokuapp.com/docs)

# Online
Este projeto está online em: 
[https://nodejspokedex.herokuapp.com/](https://nodejspokedex.herokuapp.com/)
```
Dados Adicionais:
- Hospedagem: Heroku
- Continuous Integration / Deployment on Github Configurado
```

# Lista de Funcionalidades
> - Listar pokemons em Json
> - Listar pokemons em Web
> - Detalhes do pokemon selecionado (foto, tipo(s), habilidades e movimentos), em JSON e WEB
> - Paginação em Web
> - Proxima Pagina / Pagina Anterior (em Web)
> - Testes
> - Pipelines de CI/CD (Codeship)
> - Deploy em ambiente real (Heroku)
> - Conteinerização da aplicação
