# FakeStore 🛒

E-commerce desenvolvido com **Next.js, React e TypeScript**, com foco em gerenciamento de estado, testes automatizados e integração com **Micro Frontend**.

A aplicação simula uma loja virtual com autenticação, catálogo de produtos, detalhes, carrinho e checkout.

## 🚀 Sobre o projeto

O **FakeStore** é um projeto prático para explorar uma arquitetura moderna baseada no ecossistema React/Next.js.

O checkout utiliza um **Micro Frontend independente de pagamento**, desenvolvido separadamente com React + Vite e integrado à aplicação principal utilizando **Module Federation Runtime**.

### Arquitetura

```text
┌─────────────────────────────────────┐
│              FakeStore              │
│             Next.js                 │
│                                     │
│ Login • Cadastro • Produtos         │
│ Detalhes • Carrinho • Checkout      │
└────────────────┬────────────────────┘
                 │
                 │ Module Federation
                 │ Runtime
                 ▼
┌─────────────────────────────────────┐
│        FakeStore Payment MFE        │
│             React + Vite            │
│                                     │
│ Formulário • Validação • Pagamento  │
└─────────────────────────────────────┘
```

## ✨ Funcionalidades

- 🔐 Login e cadastro
- 🛍️ Listagem de produtos
- 🔎 Detalhes do produto
- 🛒 Carrinho de compras
- 💾 Persistência do carrinho com `localStorage`
- 💳 Checkout integrado ao Micro Frontend de pagamento
- ✅ Validação de formulário
- 📱 Interface responsiva
- 🧪 Testes automatizados
- 🧩 Arquitetura de Micro Frontend
- ⚡ Carregamento do remote em runtime

## 🧰 Tecnologias

### Aplicação principal

- Next.js
- React
- TypeScript
- Redux Toolkit
- SCSS
- Jest
- React Testing Library

### Micro Frontend

- React
- Vite
- TypeScript
- Module Federation
- Zod
- Jest
- React Testing Library
- Cypress
- Docker
- GitHub Actions

## 🗂️ Estrutura

```text
fakeStore/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   │   └── globalState/
│   ├── styles/
│   └── ...
├── public/
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

O Micro Frontend possui seu próprio repositório e ciclo de desenvolvimento:

```text
FakeStorePaymentMFE/
├── src/
│   ├── components/
│   │   └── Payment/
│   ├── test/
│   └── ...
├── cypress/
├── .github/
├── Dockerfile
├── vite.config.ts
├── jest.config.cjs
└── package.json
```

## 🧩 Micro Frontend

O componente de pagamento foi separado da aplicação principal para demonstrar uma arquitetura de **Micro Frontend**.

O FakeStore atua como **host**, enquanto o projeto de pagamento atua como **remote**.

O componente é exposto como:

```text
payment/Payment
```

O host carrega o remote em runtime:

```text
payment@http://localhost:3001/varRemoteEntry.js
```

### Repositório do Micro Frontend

**FakeStore Payment MFE**

https://github.com/lucas-oliveira-dev-pro/fakeStorePaymentMFE

## 🛒 Gerenciamento do carrinho

O estado do carrinho é gerenciado globalmente com **Redux Toolkit**.

```text
Product Details
      │
      │ Adicionar ao carrinho
      ▼
Redux Store
      │
      ├── Produtos
      ├── Quantidades
      └── Estado do carrinho
      │
      ▼
localStorage
```

## 💳 Checkout

O checkout utiliza o estado global da aplicação para obter o produto selecionado e envia os dados necessários para o Micro Frontend de pagamento.

```text
Produto
   │
   ▼
Carrinho
   │
   ▼
Checkout
   │
   ▼
Payment MFE
   │
   ├── Dados do cartão
   ├── Validação
   └── Processamento
```

> **Observação:** o formulário de pagamento possui finalidade educacional/demonstrativa. Em produção, dados sensíveis de cartão não devem ser armazenados em Redux ou `localStorage`. O ideal é utilizar um gateway de pagamento com tokenização.

## 🧪 Testes

A aplicação utiliza **Jest** e **React Testing Library** para testes automatizados.

```bash
npm test
```

O Micro Frontend também possui testes End-to-End com **Cypress**.

## ⚙️ Instalação

Clone o repositório:

```bash
git clone <URL-DO-REPOSITORIO>
cd fakeStore
npm install
```

## ▶️ Executando

Inicie o FakeStore:

```bash
npm run dev
```

Para utilizar o checkout com o Micro Frontend, mantenha o Payment MFE executando em outro terminal.

Clone o projeto:

```bash
git clone https://github.com/lucas-oliveira-dev-pro/fakeStorePaymentMFE
cd fakeStorePaymentMFE
npm install
npm run dev
```

O Payment MFE será executado na porta:

```text
http://localhost:3001
```

E disponibilizará:

```text
http://localhost:3001/varRemoteEntry.js
```

### Desenvolvimento simultâneo

```text
Terminal 1
└── FakeStore
    └── Next.js

Terminal 2
└── FakeStorePaymentMFE
    └── React + Vite
```

Fluxo:

```text
Browser
   │
   ▼
FakeStore :3000
   │
   │ Module Federation Runtime
   ▼
Payment MFE :3001
```

## 🔄 CI/CD

O Micro Frontend possui pipeline com **GitHub Actions** para automatizar etapas como:

```text
Push
  │
  ▼
Install
  │
  ▼
Typecheck
  │
  ▼
Tests
  │
  ▼
Build
```

## 🎯 Objetivos técnicos

Este projeto foi desenvolvido para praticar e demonstrar conhecimentos em:

- React e Next.js
- TypeScript
- Redux Toolkit
- Persistência de estado
- Componentização
- Validação de formulários
- Testes unitários e de integração
- Testes End-to-End
- Micro Frontends
- Module Federation
- Vite
- CI/CD
- Integração entre aplicações independentes

## 👨‍💻 Desenvolvedor

**Lucas Oliveira**

**Desenvolvedor Full-Stack**

Tecnologias principais:

- React
- JavaScript
- TypeScript
- Next.js
- Node.js
- Express

## 📄 Licença

Projeto desenvolvido para fins de estudo, prática e demonstração de conhecimentos técnicos.
