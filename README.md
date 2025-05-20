# 🤖 WhatsApp Bot - Consulta de Saldo

Este projeto é um **bot de WhatsApp** criado com a biblioteca [`whatsapp-web.js`](https://docs.wwebjs.dev/), que simula um menu interativo para o usuário consultar saldo de celular, realizar recargas e verificar a validade do saldo. Ideal para estudos e automações simples de atendimento via WhatsApp.

---

## 📦 Requisitos

- Node.js (versão 16 ou superior)
- Conta ativa no WhatsApp
- Navegador instalado (ex: Chrome ou Chromium)
- Terminal com suporte a exibição de QR Code

---

## 🚀 Instalação

1. Clone o repositório ou crie uma pasta com seu código:

```bash
git clone https://github.com/seu-usuario/whatsapp-saldo-bot.git
````
```bash
cd whatsapp-saldo-bot
````
## Instale as dependências necessárias:

```bash
npm install whatsapp-web.js qrcode-terminal
````
## Como usar
1. Inicie o bot com o comando:
   ```bash
   node nome-do-arquivo.js
   ````
## Funcionalidades
O bot enviará esta mensagem inicial:
```bash
📱 Oi! O que você gostaria de fazer com seu saldo de celular?

1 - Ver saldo atual  
2 - Fazer uma recarga  
3 - Ver validade do saldo  
4 - Sair

Responda com o número da opção desejada.
````

Com base na resposta:

1 → Exibe saldo fictício: 📲 Seu saldo atual é R$ 12,50.

2 → Simula uma recarga de R$10,00.

3 → Informa a validade do saldo.

4 ou sair → Encerra a interação com uma despedida.

Qualquer outra resposta → Reexibe o menu solicitando escolha válida.

## Possíveis Melhorias
- Armazenamento de saldo e validade reais por usuário.

- Criação de um painel web com históricos de interação.

- Integração com APIs reais de operadoras.

- Suporte a mais comandos personalizados.

## Tecnologias Utilizadas
- Node.js

- whatsapp-web.js

- qrcode-terminal
