# Vehicle Resale API

## Descrição do Projeto
Esta API permite o gerenciamento de um sistema de revenda de veículos automotores. O projeto foi implementado com Node.js, Express e segue uma arquitetura limpa. Ele permite o cadastro e edição de veículos para venda, autenticação de usuários, compra de veículos e listagem de veículos disponíveis e vendidos. Além disso, há proteção de rotas com autenticação JWT (JSON Web Tokens).

## Tecnologias Utilizadas

A aplicação foi implementada utilizando as seguintes tecnologias e práticas:

- **Node.js**: Ambiente de execução para a aplicação.
- **Expresst**: Framework para criação de aplicações JavaScript/Node.js.
- **MongoDB**:Persistência de dados com banco de dados NoSQL.
- **JWT**: Usado para autenticação de usuários com tokens..


## Como Rodar a Aplicação

### Rodando Localmente

1. Clone o repositório:
   ```sh
   git clone https://github.com/CaueCassio/tech-challenge-prova-3


Construa e execute a aplicação:


### Rodando Localmente
Documentação da API
A documentação interativa da API está disponível em:


### Usuario
- **Registro de Usuário**
    - **Exemplo de Requisição:**
      ```sh
         curl -X POST http://localhost:8080/auth/register \
         -H "Content-Type: application/json" \
         -d '{
              "name": "João Silva",
              "email": "joao@example.com",
              "password": "senha123"
              }'
      ```

- **Login de Usuário**
    - **Exemplo de Requisição:**
      ```sh
      curl -X POST http://localhost:8080/auth/login \
          -H "Content-Type: application/json" \
          -d '{
              "email": "joao@example.com",
              "password": "senha123"
              }'
      ```
### Veiculo
- **Cadastro de Veículo**
    - **Exemplo de Requisição:**
      ```sh
      curl -X GET http://localhost:8080/vehicles/available
      ```


- **Edição de Veículo**
    - **Exemplo de Requisição:**
      ```sh
        curl -X PUT http://localhost:8080/vehicles/{id} \
        -H "Content-Type: application/json" \
        -d '{
            "price": 78000
            }'
      ```

- **Compra de Veículo**
    - **Exemplo de Requisição:**
         ```sh
          curl -X POST http://localhost:8080/purchase \
            -H "Content-Type: application/json" \
            -H "Authorization: Bearer SEU_TOKEN_JWT" \
            -d '{
                "vehicleId": "VEHICLE_ID"
                }'
         ```


- **Listagem de Veículos Vendidos**
    - **Exemplo de Requisição:**
         ```sh
         curl -X GET http://localhost:8080/vehicles/sold
         ```
- **Compra de Veículo**
    - **Exemplo de Requisição:**
         ```sh
        curl -X POST http://localhost:8080/purchase \
      
            -H "Content-Type: application/json" \
            -H "Authorization: Bearer SEU_TOKEN_JWT" \
            -d '{
                "vehicleId": "VEHICLE_ID"
                }'
         ```
- **Registro com E-mail Já Existente**
    - **Exemplo de Requisição:**
         ```sh
        curl -X POST http://localhost:8080/auth/register \
      
            -H "Content-Type: application/json" \
            -H "Authorization: Bearer SEU_TOKEN_JWT" \
            -d '{
                 "name": "Maria Souza",
                  "email": "joao@example.com",
                  "password": "senha456"
                }'
         ```
- **Login com Credenciais Inválidas**
    - **Exemplo de Requisição:**
         ```sh
        curl -X POST http://localhost:8080/auth/register \
      
            -H "Content-Type: application/json" \
            -H "Authorization: Bearer SEU_TOKEN_JWT" \
            -d '{
                "email": "joao@example.com",
                "password": "senha_incorreta"
                }'
         ```
- **Cadastro de Outro Veículo**
    - **Exemplo de Requisição:**
         ```sh
        curl -X POST http://localhost:8080/vehicles \
      
            -H "Content-Type: application/json" \
            -H "Authorization: Bearer SEU_TOKEN_JWT" \
            -d '{
               "brand": "Honda",
               "model": "Civic",
               "year": 2019,
               "color": "Preto",
               "price": 75000
                }'
         ```
- **Compra do Segundo Veículo**
    - **Exemplo de Requisição:**
         ```sh
        curl -X POST http://localhost:8080/purchase \
      
            -H "Content-Type: application/json" \
            -H "Authorization: Bearer SEU_TOKEN_JWT" \
            -d '{
                 "vehicleId": "VEHICLE_ID_CIVIC"
                }'
         ```

- **Listagem de Veículos Vendidos Ordenada por Preço**
    - **Exemplo de Requisição:**
      ```sh
       curl -X GET http://localhost:8080/vehicles/sold
      ```
