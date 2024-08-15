# Projeto Full Stack

Este projeto é um sistema Full Stack que inclui uma API desenvolvida em TypeScript e um cliente React. O sistema permite o gerenciamento de usuários, incluindo a criação, leitura, atualização e exclusão de registros (CRUD). Além disso, o projeto implementa autenticação com JWT e integra um front-end estilizado usando styled-components e gerenciado com Zustand.

Estrutura do Projeto

Back-end
A estrutura do projeto back-end é organizada da seguinte forma:

src/
|-- controllers/
|-- middlewares/
|-- routes/
|-- services/
|-- utils/
|-- index.ts
Front-end
A estrutura do projeto front-end é organizada da seguinte forma:

src/
|-- components/
|-- hooks/
|-- pages/
|-- services/
|-- App.tsx
|-- index.tsx
Configuração e Execução

Back-end
1. Requisitos

Node.js (v14 ou superior)
Banco de dados PostgreSQL
Prisma CLI
2. Configuração

Clone o repositório:

git clone [<url-do-repositorio-backend>](https://github.com/gabrieldzuman/frontend-web.git)
cd backend
Instale as dependências:

npm install
Configure o banco de dados:
Crie um arquivo .env na raiz do projeto e adicione a seguinte variável de ambiente:

DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
JWT_SECRET="sua_chave_secreta"
Configure o Prisma:

npx prisma migrate dev --name init
npx prisma generate
Inicie o servidor:

npm run dev
O servidor estará disponível em http://localhost:3000.

Front-end
1. Requisitos

Node.js (v14 ou superior)
2. Configuração

Clone o repositório:

git clone [<url-do-repositorio-frontend>](https://github.com/gabrieldzuman/frontend-web.git)
cd frontend
Instale as dependências:

npm install
Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e adicione a seguinte variável:

REACT_APP_API_URL="http://localhost:3000/api"
Inicie o servidor de desenvolvimento:

npm start
O front-end estará disponível em http://localhost:3001.

Rotas da API

Autenticação
POST /api/auth/register
Descrição: Registra um novo usuário.
Body:

{
  "name": "string",
  "email": "string",
  "password": "string"
}
Resposta: 201 Created

{
  "id": "number",
  "name": "string",
  "email": "string"
}
POST /api/auth/login
Descrição: Realiza login de um usuário.
Body:

{
  "email": "string",
  "password": "string"
}
Resposta: 200 OK

{
  "token": "string"
}
Usuários
GET /api/users
Descrição: Retorna a lista de todos os usuários.
Headers:

Authorization: Bearer 
Resposta: 200 OK

[
  {
    "id": "number",
    "name": "string",
    "email": "string"
  }
]
GET /api/users/
Descrição: Retorna um usuário específico pelo ID.
Headers:
text

Authorization: Bearer 
Resposta: 200 OK

{
  "id": "number",
  "name": "string",
  "email": "string"
}
PUT /api/users/
Descrição: Atualiza os dados de um usuário.
Headers:

Authorization: Bearer 
Body:

{
  "name": "string",
  "email": "string"
}
Resposta: 200 OK

{
  "id": "number",
  "name": "string",
  "email": "string"
}
DELETE /api/users/
Descrição: Deleta um usuário específico pelo ID.
Headers:

Authorization: Bearer 
Resposta: 204 No Content
Autenticação

O sistema de autenticação é baseado em JSON Web Tokens (JWT). Após o login, o servidor retorna um token que deve ser incluído no header Authorization em todas as requisições subsequentes para rotas protegidas.

Exemplo de header com token:

Authorization: Bearer 
O token tem um tempo de expiração de 1 hora. Se o token expirar ou for inválido, o servidor retornará um erro 401 Unauthorized.

Deploy

Back-end
Escolha uma plataforma de deploy: Sugere-se Heroku, AWS ou Vercel.
Configure as variáveis de ambiente na plataforma escolhida, incluindo DATABASE_URL e JWT_SECRET.
Faça o deploy do código conforme a documentação da plataforma.
Front-end
Escolha uma plataforma de deploy: Sugere-se Vercel ou Netlify.
Configure as variáveis de ambiente como REACT_APP_API_URL.
Faça o deploy do código conforme a documentação da plataforma.
Decisões Técnicas

TypeScript foi escolhido para garantir a tipagem forte e reduzir erros em tempo de desenvolvimento.
Zustand foi utilizado para gerenciamento de estado global no front-end devido à sua simplicidade e eficiência.
styled-components foi escolhido para a estilização, permitindo o uso de CSS-in-JS e garantindo temas consistentes.
Prisma foi utilizado como ORM para simplificar a interação com o banco de dados relacional, com suporte robusto a PostgreSQL.
Ferramentas Utilizadas

Backend:
Node.js, Express.js, TypeScript
Prisma ORM
JWT para autenticação
Bcrypt para hashing de senhas
Frontend:
React, TypeScript
Zustand para gerenciamento de estado
styled-components para estilização
Axios para requisições HTTP
Notas e Considerações

Segurança: A segurança foi tratada com JWT para autenticação e bcrypt para armazenamento seguro de senhas.
Escalabilidade: O uso de Prisma e TypeScript foi pensado para facilitar a escalabilidade da aplicação, permitindo a adição de novas funcionalidades com menos esforço.
Responsividade: O design da interface do usuário foi feito para ser responsivo, garantindo boa experiência em diferentes dispositivos.
