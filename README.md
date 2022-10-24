## Reader

Essa é uma aplicação PHP construída com o framework Laravel. Seu objetivo é realizar o upload de arquivos de .txt e .csv e persistir os no banco de dados relacional.
O banco de dados utilizado é o PostgreSQL, também se utilizou do React para o front-end, Boostrap, Tailwind CSS. Para a montagem do ambiente utilizou-se ngix e reader. 

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Montagem do ambiente

Para a montagem do ambiente basta seguir os passos abaixo:

### - Possuir o docker instalado
### - Clonar o repositório
    Clonar esse repositório do github em sua máquina local.
### - Contruir o ambiente através do docker
    Para isso, através do seu terminal, navegue até a pasta onde o projeto foi clonado digite o comando:
    **docker-compose up**
<div align="center">
<img src="https://user-images.githubusercontent.com/25149710/197434643-097d37ae-5505-4e61-a583-6def254e5134.png">
</div>

## Utilização

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

## Estrutura do projeto

### Banco de dados

O banco de dados relacional utiliza-se do PostgreSQL. Conforme descrito na imagem abaixo, ele possui 7 tabelas, sendo que, 4 delas são de uso exclusivo do Laravel, a tabela "users" é a tabela de usuários do sistema, onde ficam armazenadas as informações de login e as tabelas "files" e "records" são as tabelas utilizadas pela aplicação. Nelas são armazenadas as informações de arquivos já utilizados no upload e também o registros extraídos desses arquivos.

<div align="center">
<img src="https://user-images.githubusercontent.com/25149710/197432486-6095e7c8-b788-4cbb-bf64-fe1e41728a58.png">
</div>
