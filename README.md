# TokenSwap_Reactive
<p align="center"> <a href="http://reactjs.org/" target="blank"><img src="https://reactjs.org/logo-og.png" width="120" alt="React Logo" /></a> </p> <p align="center">Projeto desenvolvido para um Hackathon, focado no estudo e na implementação de um Swap Automatizado de Tokens, utilizando tecnologias modernas como React, Next.js e Node.js.</p> <p align="center"> <a href="https://www.npmjs.com/" target="_blank"><img src="https://img.shields.io/npm/v/react.svg" alt="NPM Version" /></a> <a href="https://www.npmjs.com/" target="_blank"><img src="https://img.shields.io/npm/l/react.svg" alt="Package License" /></a> <a href="https://www.npmjs.com/" target="_blank"><img src="https://img.shields.io/npm/dm/react.svg" alt="NPM Downloads" /></a> </p>

### ReadMe.md do Projeto

<p align="center">
  <a href="http://reactjs.org/" target="blank"><img src="https://reactjs.org/logo-og.png" width="120" alt="React Logo" /></a>
</p>

<p align="center">Projeto desenvolvido para um Hackathon, focado no estudo e na implementação de um Swap Automatizado de Tokens, utilizando tecnologias modernas como React, Next.js e Node.js.</p>

<p align="center">
<a href="https://www.npmjs.com/" target="_blank"><img src="https://img.shields.io/npm/v/react.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/" target="_blank"><img src="https://img.shields.io/npm/l/react.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/" target="_blank"><img src="https://img.shields.io/npm/dm/react.svg" alt="NPM Downloads" /></a>
</p>

## Descrição

Este projeto é um **dApp** de Swap Automatizado de Tokens criado para fins de estudo durante um Hackathon. Utilizamos **Next.js** no front-end e **Node.js** com **Ethers.js** para o backend, com integração à rede Ethereum via **Infura**. O objetivo é permitir a troca automatizada de tokens, aprendendo mais sobre contratos inteligentes e integração com blockchain.

## Tecnologias Utilizadas

- **Next.js** (React Framework)
- **Node.js**
- **Ethers.js** (para interação com a Ethereum)
- **Infura** (para comunicação com a blockchain)
- **MongoDB** (para armazenamento de dados)
- **Metamask** (para conexão com carteiras)

## Instalação

Clone este repositório e execute o seguinte comando para instalar as dependências tanto no front quanto no back-end:

```bash
# Instalar dependências do backend
$ npm install

# Instalar dependências do frontend (dentro da pasta frontend)
$ cd token-swap-frontend
$ npm install
```

## Configuração do Ambiente

Crie um arquivo `.env` no diretório raiz para o **backend** e adicione as seguintes variáveis:

```bash
API_URL=https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID
PRIVATE_KEY=your_private_wallet_key
CONTRACT_ADDRESS=address_of_your_deployed_contract
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
CHAINLINK_PRICE_FEED_ADDRESS=price_feed_contract_address
```

## Executando o Projeto

### Backend

```bash
# Execute o servidor backend
$ npm run dev
```

### Frontend

```bash
# Execute o frontend Next.js
$ cd token-swap-frontend
$ npm run dev
```

Acesse o aplicativo em `http://localhost:3000`.


### A simplicidade e robustez desse projeto o tornam ideal para quem deseja aprender sobre o desenvolvimento de dApps e blockchain com tecnologias modernas.


A simple dApp for automated token swapping, built during a hackathon for educational purposes. The project uses Next.js for the front-end and Node.js with Ethers.js for the back-end, connected to Ethereum via Infura. The goal is to demonstrate token swapping functionality using smart contracts and blockchain integration.
