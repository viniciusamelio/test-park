# Sobre o projeto
Um sistema simples de gerenciamento de estadias para estacionamentos, criado com Typescript e Express, com uma base de dados Mongo.

## Como rodar?
- Rode um "docker-compose up". Toda a configuração dos containers está no docker-compose.yaml;
- A API está configurada para subir na porta 3000, sendo assim, as requests devem ser feitas para http://localhost:3000
- Os testes devem ser rodados de dentro do container, sendo assim, é necessário executar:
- > docker exec -it api bash
- > npm test
- É válido lembrar que o "api" é o nome que eu dei ao container, caso você altere o nome do mesmo no docker-compose.yaml, precisará alterar aqui também.

## O que utilizei no projeto?
- Conceitos de clean arch;
- Conceitos de Solid;
- Inversão de controle;
- DTO Pattern;
- Repository Pattern;
- Testes de integração;
- Usecases.