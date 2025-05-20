const { Client, LocalAuth } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')

const estados = {}

const client = new Client()

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true })
  console.log('📱 Escaneie o QR code...')
})

client.on('ready', async () => {
  console.log('🤖 Bot está pronto!')

  const number = '558184088364@c.us' // Substitua pelo número correto

  const mensagem = gerarMenuSaldo()

  try {
    await client.sendMessage(number, mensagem)
    estados[number] = 'menu_saldo'
    console.log('✅ Mensagem enviada com sucesso!')
  } catch (error) {
    console.error('❌ Erro ao enviar a mensagem:', error.message)
  }
})

client.on('message', async (msg) => {
  const numero = msg.from
  const texto = msg.body.trim()
  const estado = estados[numero]

  if (estado === 'menu_saldo') {
    let resposta = ''

    if (texto === '1') {
      resposta = '📲 Seu saldo atual é R$ 12,50.'
    } else if (texto === '2') {
      resposta = '💸 Recarga realizada com sucesso! Novo saldo: R$ 22,50.'
    } else if (texto === '3') {
      resposta = '📅 Seu saldo expira em 10 dias. Fique atento!'
    } else if (texto === '4' || texto.toLowerCase() === 'sair') {
      resposta = '👋 Ok, até a próxima! Qualquer coisa é só chamar.'
      estados[numero] = null
      await client.sendMessage(numero, resposta)
      return
    } else {
      resposta = '❗ Por favor, responda com 1, 2, 3 ou 4 para sair.'
    }

    await client.sendMessage(numero, resposta)

    if (estados[numero] === 'menu_saldo') {
      await client.sendMessage(numero, gerarMenuSaldo())
    }
  }
})

function gerarMenuSaldo() {
  return `📱 Oi! O que você gostaria de fazer com seu saldo de celular?

1 - Ver saldo atual  
2 - Fazer uma recarga  
3 - Ver validade do saldo  
4 - Sair

Responda com o número da opção desejada.`
}

client.initialize()
