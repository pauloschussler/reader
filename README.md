## Reader

Essa é uma aplicação PHP construída com o framework Laravel. Seu objetivo é realizar o upload de arquivos de .txt e .csv e persistir os no banco de dados relacional.
O banco de dados utilizado é o PostgreSQL, também se utilizou do React para o front-end, Boostrap, Tailwind CSS. Para a montagem do ambiente utilizou-se ngix e reader. 

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
O projeto possui um sistema de login, sendo assim, para fazer uso é necessário fazer o cadastro de um usuário. Ao abrir o endereço do projeto no navegador você será redicionado para a tela de login, nela é possível cliar em registrar-se e fazer o cadastro de um usuário. Na imagem abaixo estão dispotas essas duas telas.

<div align="center">
<img src="https://user-images.githubusercontent.com/25149710/197442582-308c509d-0654-4710-9eda-227e907bbeab.png">
</div>

Após realizada a autenticação você é redirecionado à tela inicial, a partir tela é possível navegar para dois menus: **Registros** e **Arquivos**.

<div align="center">
<img src="https://user-images.githubusercontent.com/25149710/197443175-9c1d46d2-5491-462c-8fc7-0bf74feb9103.png">
</div>

### Arquivos
Nesse módulo são realizados os uploads de arquivos .txt e .csv, na tela inicial são listados os arquivos já carregados, e é apresentado o botão para nova adição de arquivos, assim como é permitida a exclusão dos registros de uploads já realizados.

<div align="center">
<img src="https://user-images.githubusercontent.com/25149710/197443174-2de819a2-6b81-40af-b5eb-adcbaade65aa.png">
<img src="https://user-images.githubusercontent.com/25149710/197443173-52cd8023-a90f-4168-9bbc-058d1cad5539.png">
</div>

### Registros
Nesse módulo são listados os dados obtidos através do arquivos carregados, nele é possível fazer a adição de registros manualmente, a edição dos registros existentes e também fazer a exclusão desses registros. Implementei essas funções porque achei condizentes com a imagem do projeto que criei a partir da leitura do desafio. Um detalhe é que os métodos de adição e edição, não estão realizando validações, tanto no forluário (front-end) quando no cadastro (back-end), eu pretendia realizar a validação, mas não concluí a tempo.
Ressaltando que a validação de CPF e CNPJ está ativa no upload de arquivos, sendo assim, linhas do arquivo que não possuam essas informações corretas, não são adicionadas ao banco de dados.

<div align="center">
<img src="https://user-images.githubusercontent.com/25149710/197443169-dc0e47b7-229f-43fb-ac02-d4ef2c69354e.png">
</div>

## Estrutura do projeto

O projeto está estruturado em MVC e utiliza orientação à objeto.

### Banco de dados

O banco de dados relacional utiliza-se do PostgreSQL. Conforme descrito na imagem abaixo, ele possui 7 tabelas, sendo que, 4 delas são de uso exclusivo do Laravel, a tabela "users" é a tabela de usuários do sistema, onde ficam armazenadas as informações de login e as tabelas "files" e "records" são as tabelas utilizadas pela aplicação. Nelas são armazenadas as informações de arquivos já utilizados no upload e também o registros extraídos desses arquivos.

<div align="center">
<img src="https://user-images.githubusercontent.com/25149710/197432486-6095e7c8-b788-4cbb-bf64-fe1e41728a58.png">
</div>

## Melhorias a serem feitas
Eu gostaria de fazer algumas melhorias referentes à Layout, principalmente ao realizar o envio do arquivos de tamanhos um pouco maiores no formulário que realiza a extração dos dados, principalmente ao enviar, onde deveria ser mostrado alguma mensagem indicando que o arquivo está sendo processado.
Também faltou a validação na edição e adição de registros manualmente, não sendo respeitados os tipos de dados específicos.
Também ficaram faltando ajustes na imagem do docker, sendo nescessários a execução de comandos e configurações extras, mas não conseguir resolver os problemas de incompatibilidade e realizar uma instalação completamente limpa.

