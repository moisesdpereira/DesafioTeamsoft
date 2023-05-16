## 📚 Desafio Teamsoft - Moisés

> O projeto é uma aplicação backend desenvolvida tanto em 
> <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" /> 
> quanto em <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
com Express, sendo o principal projeto em *Laravel*.
Ela proporciona uma estrutura de APIs rest.

---
## Tecnologias utilizadas
*Aplicações e Dados*

![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Node](https://img.shields.io/badge/Node.js-43853D?node&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=flat&logo=mysql&logoColor=white)

*Utilidades*

![Postman](https://img.shields.io/badge/-Postman-333333?style=flat&logo=postman)

*DevOps*

![GitHub](https://img.shields.io/badge/-GitHub-333333?style=flat&logo=github)

## Primeiros passos
1. Clonar o repositório
```bash
git clone https://github.com/moisesdpereira/DesafioTeamsoft
```
2. Para executar o projeto em **Laravel** 
- Entre na pasta laravel
- Execute `composer install`;
- Criar arquivo `.env` e inserir dados de banco de dados;
- Execute `php artisan key:generate`;
- Execute `php artisan migrate`
- E por fim, para subir o serviço execute `php artisan serve`.
- Depois consumir a API **http://localhost:8000/api/END_POINT**
- Para executar os teste execute `php artisan test`

3. Para executar o projeto em **NODE JS com Express**
- Entre na pasta node
- Execute `npm install`
- Execute `npm start`
- Depois consumir a API **http://localhost:5000/api/END_POINT**

4. Para executar o projeto em *Laravel Sail e docker*
- Entre na pasta laravel `cd DesafioTeamsoft/laravel`
- Execute `./vendor/bin/sail up -d`
- Execute `docker-compose exec laravel.test bash`
- Execute `php artisan key:generate`;
- Execute `php artisan migrate`
---
## Documentação para uso da API com Swagger
> Este projeto oferece documentação Swagger para cada linguagem utilizada. A documentação está localizada na pasta documentation de cada linguagem.

- Para a aplicação em **Laravel**, a documentação Swagger pode ser encontrada em laravel/documentation.
  - Para acessar a documentação Swagger, siga as etapas abaixo:
    - Acesse a pasta documentation 
    - Executar
    ```bash
      npm start
    ```
    - Depois acessar **http://localhost:8080/docs/**

- Para a aplicação em **Node.js com Express**, a documentação Swagger está disponível em node/documentation.
A documentação Swagger é uma ferramenta poderosa que permite visualizar e testar as APIs de forma interativa. Ela fornece uma descrição completa dos endpoints, parâmetros, respostas e exemplos de uso.
    - Para acessar a documentação Swagger, siga as etapas abaixo:
        - Acesse a pasta documentation
        - Executar
        ```bash
          npm start
        ```
        - Depois acessar **http://localhost:5050/docs/**
---