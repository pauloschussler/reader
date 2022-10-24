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
### - Realizar as configurações do Laravel
#### Arquivo .env
É importante que o arquivo .env esteja criado, para isso pode-se criar um arquivo na pasta do projeto com o nome **.env** e seu conteúdo deve ser exatamente igual ao do arquivo **.env.example**, como descrito na imagem abaixo.
<div align="center">
<img src="https://user-images.githubusercontent.com/25149710/197437894-eba18720-0dfe-436d-9c53-6467d1071012.png">
</div>
Através do terminal dentro da pasta do projeto executar os seguintes comandos:
    php artisan key:generate
    php artisan migrate
Após isso, no arquivo **.env** deve ser alterado o parâmetro **DB_HOST** de **127.0.0.1** para **db**, conforme descrito na imagem abaixo.
<div align="center">
<img src="https://user-images.githubusercontent.com/25149710/197438324-c54c8023-bf8d-45e9-a764-f904fcbd83e8.png">
</div>

Após isso, deverá ser possível acessar ao sistema através do endereço: **http://localhost:8000/**


## Utilização

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

## Estrutura do projeto

### Banco de dados

O banco de dados relacional utiliza-se do PostgreSQL. Conforme descrito na imagem abaixo, ele possui 7 tabelas, sendo que, 4 delas são de uso exclusivo do Laravel, a tabela "users" é a tabela de usuários do sistema, onde ficam armazenadas as informações de login e as tabelas "files" e "records" são as tabelas utilizadas pela aplicação. Nelas são armazenadas as informações de arquivos já utilizados no upload e também o registros extraídos desses arquivos.

<div align="center">
<img src="https://user-images.githubusercontent.com/25149710/197432486-6095e7c8-b788-4cbb-bf64-fe1e41728a58.png">
</div>
