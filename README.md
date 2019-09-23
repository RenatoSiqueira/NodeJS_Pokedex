# NodeJS_Pokedex

Criar uma API que retorna dados dos pokemons. 
Um exemplo da mais utilizada é: https://pokeapi.co
Outra Url: https://pokeapi.co/api/v2/pokemon/

### Online
Este projeto está Online: 
[https://nodejspokedex.herokuapp.com/](https://nodejspokedex.herokuapp.com/)

### Done
> - Listar pokemons em Json
> - Listar pokemons em Web
> - Detalhes do pokemon selecionado (foto, tipo(s), habilidades e movimentos)
> - Paginação
> - Proxima Pagina / Pagina Anterior
> - Pipelines de CI/CD (GitLab, CircleCI, TravisCI, etc); 
> - Deploy em ambiente real, utilizando serviços de cloud externos (Heroku); 
> - Conteinerização da aplicação; 

### TODO
> Tests
> Swagger

> Autenticação e autorização (JWT); 


### Docker
```
docker build -t backend-challenge .
docker run -p 3000:3000 backend-challenge:latest
```
