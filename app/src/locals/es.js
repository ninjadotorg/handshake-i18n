export default {
  HELLO: 'hello {name}',
  buy: 'Buy',
  sell: 'Sell',
  amount: 'amount',
  askUsingCreditCard: 'for {total} {fiatCurrency} using card?',
  change: 'Change',
  ccNumber: 'Number',
  ccExpire: 'Expiry',
  ccCVC: 'CVC',
  overCCLimit: 'You have reached your credit card limit! You have already used {currency}{amount} in the dojo today. ',

  required: 'Required',
  ccExpireTemplate: 'MM/YY',
  securityCode: '325',
  shakeNow: 'Shake',
  offerHandShakeContent: '{offerType} {amount} {currency} for {total} {currency_symbol} in {payment_method}?',
  offerHandShakeContentMe: '{offerType} {amount} {currency} for {total} {currency_symbol} ({payment_method})',
  offerHandShakeExchangeContentMe: '{offerType} {something} for {amount} {currency}',
  offerHandShakeContentMeDone: '{offerType} {amount} {currency} for {total} {currency_symbol} ({payment_method})',
  offerHandShakeExchangeContentMeDone: '{offerType} {something} for {amount} {currency}',
  instantOfferHandShakeContent: 'You{just}{offerType} {amount} {currency} for {total} {currency_symbol} on your card - fee {fee}%',
  offerDistanceContent: '{distance} away',
  transactonOfferInfo: 'Successful ({success}) / Failed ({failed})',
  createOfferConfirm: 'You are about to {type} {something} by {amount} {currency}',
  handshakeOfferConfirm: 'You are about to {type} {something} for {amount} {currency}',
  rejectOfferConfirm: 'Do you want to Reject this handshake? You will not be able to make transactions for 4 hours.',
  completeOfferConfirm: 'Finish shaking?',
  withdrawOfferConfirm: 'Are you sure you want to withdraw?',
  cancelOfferConfirm: 'Cancel this order?',
  closeOfferConfirm: 'Finish your order?',
  acceptOfferConfirm: 'Accept the order?',
  createOfferSuccessMessage: 'Success! You have created an offer on Ninja.',
  shakeOfferSuccessMessage: 'Success! A ninja has shaked on your order.',
  closeOfferSuccessMessage: 'Success! Your order is now closed.',
  completeShakedfferSuccessMessage: 'You have successfully shaked on Ninja',
  cancelShakedfferSuccessMessage: 'You have cancelled your order ',
  withdrawShakedfferSuccessMessage: 'Your offer has been withdrawn.',
  buyUsingCreditCardSuccessMessge: 'Your order using your credit card has gone through.',
  notEnoughCoinInWallet: 'You don\'t have enough coin right now. Please top up your wallet.',

  createOfferStoreConfirm: 'Do you want to set up an offer to {intentMsg}?',
  notEnoughCoinInWalletStores: 'You don\'t have enough coin right now. Please top up your wallet.',
  addOfferItemSuccessMassage: 'Success! Your order is now listed on Ninja',
  deleteOfferItemSuccessMassage: 'You have successfully deleted your order.',
  shakeOfferItemSuccessMassage: 'You have successfully shaked on Ninja',
  acceptOfferItemSuccessMassage: 'Good news! Your order has been accepted.',
  cancelOfferItemSuccessMassage: 'Your order has been cancelled!',
  rejectOfferItemSuccessMassage: 'You rejected a fellow ninja\'s order.',
  completeOfferItemSuccessMassage: 'Good news! Your order has been completed.',
  offerStoresAlreadyCreated: 'Oops! You already created an order on Ninja.',
  offerStoreHandShakeContentBuy: '{offerTypeBuy} {amountBuy} {currency} at {fiatAmountBuy} {fiatAmountCurrency}. ',
  offerStoreHandShakeContentSell: '{offerTypeSell} {amountSell} {currency} at {fiatAmountSell} {fiatAmountCurrency}.',
  requireDefaultWalletOnMainNet: 'You must set your wallet on Mainnet',
  movingCoinToEscrow: 'Moving your coin to escrow. This may take a few minutes.',
  movingCoinFromEscrow: 'Moving your coin from escrow. This may take a few minutes.',
  'ex.create.label.amountBuy': 'I want to buy',
  'ex.create.label.amountSell': 'I want to sell',
  'ex.create.label.marketPrice': 'Current market price',
  'ex.create.label.premiumBuy': 'My price',
  'ex.create.label.premiumSell': 'My price',
  'ex.create.label.premiumSellExplanation': 'Market price ± percentage',
  'ex.create.label.nameStation': 'Station name',
  'ex.create.label.phone': 'Phone',
  'ex.create.label.address': 'Meet-up place',
  'ex.create.label.beASeller': 'Be a seller',
  'ex.create.label.beABuyer': 'You can also be a buyer',
  'ex.create.label.stationInfo': 'Station information',

  'ex.createLocal.label.iWantTo': 'I want to',
  'ex.createLocal.label.something': 'What is it called?',
  'ex.createLocal.placeholder.anyItem': 'any item or service',
  'ex.createLocal.label.coin': 'Coin',
  'ex.createLocal.label.amount': 'Amount',
  'ex.createLocal.label.phone': 'Phone',
  'ex.createLocal.label.address': 'Meet-up place',
  'ex.createLocal.label.uploadImage': 'Upload an image of your product',

  'ex.discover.label.priceBuy': 'BUY',
  'ex.discover.label.priceSell': 'SELL',
  'ex.discover.label.reviews': '({reviewCount})',
  'ex.discover.banner.text': 'Got coins? Turn them into a money-making machine.',
  'ex.discover.banner.btnText': 'BECOME A LOCAL EXCHANGE',
  'ex.discover.shakeDetail.label.amount': 'Amount',
  'ex.discover.shakeDetail.label.total': 'Total',
  'ex.discover.shakeDetail.label.maximum': 'Maximum:',
  'ex.me.label.with': 'With',
  'ex.me.label.from': 'From',
  'ex.me.label.about': 'About',
  'ex.btn.confirm': 'Confirm',
  'ex.btn.OK': 'OK',
  'ex.btn.notNow': 'Not now',

  'ex.label.buy': 'Buy',
  'ex.label.sell': 'Sell',
  'ex.label.bought': 'Bought',
  'ex.label.sold': 'Sold',
  'ex.label.buying': 'Buying',
  'ex.label.selling': 'Selling',
  'ex.label.buyer': 'buyer',
  'ex.label.seller': 'seller',

  'ex.exchange.status.created': 'Verifying...',
  'ex.exchange.status.active': 'Active',
  'ex.exchange.status.closing': 'Pending...',
  'ex.exchange.status.closed': 'Closed',
  'ex.exchange.status.shaking': 'Shake pending...',
  'ex.exchange.status.shake': 'Shook',
  'ex.exchange.status.completing': 'Completing...',
  'ex.exchange.status.completed': 'Done',
  'ex.exchange.status.pre_shaking': 'Shake pending',
  'ex.exchange.status.pre_shake': 'Shook',
  'ex.exchange.status.rejecting': 'Rejecting',
  'ex.exchange.status.rejected': 'Rejected',
  'ex.exchange.status.cancelling': 'Cancelling',
  'ex.exchange.status.cancelled': 'Cancelled',

  'ex.cc.status.processing': 'Processing',
  'ex.cc.status.success': 'Done',
  'ex.cc.status.cancelled': 'Failed',

  'ex.shop.status.created': 'Verifying...',
  'ex.shop.status.active': 'Active',
  'ex.shop.status.closing': 'Pending...',
  'ex.shop.status.closed': 'Closed',

  'ex.shop.shake.status.pre_shaking': 'Requesting',
  'ex.shop.shake.status.pre_shake': 'Requested',
  'ex.shop.shake.status.shaking': 'Requesting',
  'ex.shop.shake.status.shake': 'Requested',
  'ex.shop.shake.status.rejecting': 'Rejecting',
  'ex.shop.shake.status.rejected': 'Rejected',
  'ex.shop.shake.status.completing': 'Completing...',
  'ex.shop.shake.status.completed': 'Done',
  'ex.shop.shake.status.cancelling': 'Cancelling',
  'ex.shop.shake.status.cancelled': 'Cancelled',

  'ex.error.systemError': 'Sorry Ninja. Something went wrong. Come back soon.',
  'ex.error.312': 'Oh no! You cancelled your offer. You will not be able to make orders for 4 hours. Sorry',
  'ex.error.313': 'You already have a listing! To change your rates, please cancel your current listing.',
  'ex.error.314': 'Looks like that listing has been deleted.',
  'ex.error.315': 'Sorry ninja, someone else got there first.',
  'ex.error.1': 'Oops! Something went wrong. Come back soon.',
  'ex.error.3': 'It looks like that token is invalid.',
  'ex.error.301': 'You are already a ninja.',
  'ex.error.302': 'Sorry, that ninja does not exist.',
  'ex.error.303': 'It looks like you have reached your credit card limit.',
  'ex.error.309': 'You already have a listing! To change your rates, please cancel your current listing.',
  'ex.error.default': 'Oops! Something went wrong.',

  'error.required': 'Required',
  'error.requiredOne': 'You need to fill in one of these!',
  'error.greaterThan': 'Must be greater than {min}',
  'error.lessThan': 'Must be less than {max}',

  'btn.initiate': 'Initiate',
  'btn.shake': 'Shake',
  'btn.reject': 'Reject',
  'btn.complete': 'Complete',
  'btn.withdraw': 'Withdraw',
  'btn.cancel': 'Cancel',
  'btn.close': 'Close',
  'btn.accept': 'Accept',

  // FAQ
  FAQ_TITLE: 'Preguntas más frecuentes',
  FAQ_HEADER_YELLOW: '',
  FAQ_HEADER: ' Descentralizada de intercambio de predicción',
  FAQ_DATA: [
    {
      question: '¿Qué es Ninja PEX?',
      answer: 'Ninja es un intercambio anónimo peer-to-peer descentralizada predicción corriendo encima de la blockchain de Etereum.',
    },
    {
      question: '¿Qué es especial acerca de PEX? ¿Por qué debo apostar por uno?',
      answer: 'Permite partes apuesta directamente contra otros sin pasar por una autoridad central o la casa de apuestas. Esto es 100% anónimo, sin señales para arriba sin descargas necesarias. La gestión de las apuestas y la liquidación de las ganancias se llevan a cabo conjuntamente por la red de blockchain, protegiendo a los usuarios de cualquier punto único de falla. También puede crear sus propios mercados de predicción. ',
    },
    {
      question: '¿necesito éter? ¿Soporta otros cryptocurrencies?',
      answer: 'Sí. Ninja sólo acepta ETH por ahora, pero se añadió soporte para otras monedas muy pronto.',
    },
    {
      question: '¿Cómo empiezo con Ninja?',
      isList: true,
      answer: [
        {
          title: 'Obtener éter:',
          content: 'Cualquiera puede comprar ETH directamente en PEX con tus tarjetas de crédito o de intercambios de monedas populares como Coinbase o Binance.',
        },
        {
          title: 'Recargar su billetera PEX:',
          content: 'Transferencia del ETH en la cartera PEX. Cartera de PEX es totalmente descentralizada, la clave privada se lleva a cabo en el teléfono, sólo puede transferir y recibir ETH.',
        },
        {
          title: 'Hacer una apuesta:',
          content: 'Escoger el mercado que quiere apostar (es decir, Brasil - España), los resultados (es decir victorias de Brasil) y el sitio (es decir, apoyo o apuesta contra el resultado)\n' +
          'Entrar en el juego que desee apuesta (es decir, 1 ETH) y las probabilidades (es decir 1 / 2.25)\n' +
          'El motor de Matching de BEX encontrará otra orden que apuesta contra viento y marea que se establece.',
        },
        {
          title: 'Espere el informe:',
          content: 'Si usted gana, sus ganancias serán transferidas automáticamente el contrato de fideicomiso inteligente a su cuenta.',
        },
      ],
    },
    {
      question: '¿puedo configurar mis propias probabilidades de recomendado:? ¿?',
      answer: '¡Sí! Al crear su propia apuesta, entrará el evento que te interesa y el resultado que desea apostar. Luego, simplemente introduzca su juego y las probabilidades que usted quiere. Entonces el motor PEX automáticamente encontrará y emparejarle con alguien que tiene un interés en el mismo evento, y que acepta sus probabilidades.',
    },
    {
      question: '¿Cómo usted policía indeseables o ilegales apuestas?',
      answer: 'Actualmente estamos construyendo un sistema de controles y equilibrios para airear inadecuado comportamiento en el dojo.',
    },
    {
      question: '¿Cómo sabe el sistema el resultado de apuestas entre las personas? Que actúa como árbitro y verifica el uno resultado contra otro en la conclusión del contrato?',
      answer: 'Ninja pronto tendrá una solución totalmente descentralizada para comprobar el resultado e incentivar la verdad diciendo (un DAO de reporteros!). Mientras tanto, como se lanzará justo a tiempo para la Copa Mundial, nuestro equipo utiliza una fuente pública (livescore.com) y actúan como el reportero.',
    }, {
      question: '¿Dónde se lleva a cabo la moneda?',
      answer: 'Nadie tiene los fondos. Todos los fondos se mantienen en fideicomiso hasta que se alcance una resolución.',
    }, {
      question: '¿por qué debo apostar en blockchain en lugar de utilizar los métodos tradicionales?',
      answer: 'Un intercambio descentralizado predicción proporcionará usted la libertad de crear su propio pronóstico y apuesta directamente con cualquier persona, le anonimato ninja 100% y garantizado los pagos. ',
    }, {
      question: '¿Qué privacidad y anonimato?',
      answer: 'Ninja requiere sin descargas y sin inscripciones. Eso significa que no hay contraseñas, no hay números de teléfono y ningún email. 100% anonimato.',
    }, {
      question: '¿necesito pagar algo?',
      answer: 'Hay dos tipos de tarifas: tarifas de creador (para el ninja que crea la apuesta) y la cuota de la red (un porcentaje de la cuota del creador, que va hacia el mantenimiento de la plataforma).',
    }, {
      question: '¿Qué tengo que hacer cuando el resultado esté finalizado?',
      answer: 'Nada. Si usted gana, sus ganancias se transferirán automáticamente a su cuenta. Si pierde, será cuenta de otra persona.',
    }, {
      question: '¿Dónde puedo encontrar un partido para apostar?',
      answer: 'En la Página principal, podrás ver los mercados y las apuestas actuales. Si no encuentras alguna que te gusta, crear su propio!',
    }, {
      question: 'que deportes, puedo apostar en otra cosa? ¿Cómo funciona?',
      answer: 'Muy pronto, el Ninja se aplicará a todo bajo el sol. La única limitación será tu creatividad. Fácilmente puede crear cualquier mercado en cualquier evento futuro, ya sea deportes, política, ciencia, mercados, clima... lo que sea. ',
    }, {
      question: '¿Qué va a pasar a la aplicación móvil de apretón de manos?',
      answer: 'Se ser integrar apretón de manos (y tus rasgos favoritos como promesas, pagarés, subida de contrato, etc.) en la página web móvil de Ninja.',
    },
  ],

  // MobileOrTablet components
  MOT_TITLE: 'El intercambio anónimo de nada',
  MOT_CONTENT_0: 'El red Ninja sólo es accesible a través del móvil',
  MOT_CONTENT_1: 'Abra',
  MOT_CONTENT_2: 'en el navegador del móvil para tener acceso anónimo.',
  MOT_CONTENT_3: 'No es necesitada para descargar. Ningún registro necesario.',
  MOT_LIST_CONTENT: [
    {
      mainContent: 'Lea el',
      placeHolderLink: 'white paper',
      link: 'https://medium.com/@ninjadotorg/shakeninja-bex-1c938f18b3e8',
      isBlankTarget: true,
    },
    {
      mainContent: 'Respondemos tu',
      placeHolderLink: 'FAQ',
      link: '/faq',
    },
    {
      mainContent: 'Únete al dojo en',
      placeHolderLink: 'telegrama',
      link: 'https://t.me/ninja_org',
      isBlankTarget: true,
    },
  ],

  /*
  *
  * White Paper
  *
  * ******************************************************************************************* */
  WHITE_PAPER_H1: 'Predicción de Peer-to-Peer anónimo intercambio de Etereum',
  WHITE_PAPER_SUBTITLE_1: '¡Hola! Somos Roc, Bakunawa, Hakawai y Grootslang desde el equipo de Ninja. Estamos construyendo un intercambio electrónico de predicción en la blockchain. Aquí es por qué lo hicimos, y cómo funciona!',
  WHITE_PAPER_SUBTITLE_2: 'Únete a la conversación en',
  WHITE_PAPER_INTRO: 'Introducción',
  WHITE_PAPER_INTRO_1: 'Apuestas en línea está dirigida casi exclusivamente por corredores de apuestas que sirven como terceras partes de confianza. Como suele ser el caso, los usuarios sufren de este "problema del treinta partido confianza centralizada":',
  WHITE_PAPER_INTRO_2: [
    'Casas de apuestas establece las probabilidades que siempre favorecen a los (ellos siempre ganan)',
    'Casas de apuestas disfrutan un importante 5% — margen de 30% en cada apuesta',
    'Las apuestas son reversibles, y las ganancias son inciertas',
    'Totalmente el anonimato no es posible',
    'El fraude es inevitable y aceptado por ser tan',
    'Punto único de falla — ¿Qué pasa si desaparece la casa de apuestas?',
    'Apuestas se consideran juego de azar — desproporcionadamente arriesgada, debido principalmente a la parte centralizada\'falta de s de transparencia',
  ],
  WHITE_PAPER_INTRO_3: 'Estos problemas se multiplican por 10 cuando se trata de apuestas fuera de línea, por lo que es no es de extrañar que los usuarios son cada vez más tomando el menor de dos males.',
  WHITE_PAPER_INTRO_4_HIGH_LIGHT: 'La solución: un sistema de predicción electrónica que reemplaza la confianza reacio con la prueba criptográfica, permitiendo que cualquier dos partidos anónimos desde cualquier lugar del mundo para apostar directamente uno contra el otro sin la necesidad de un tercero de confianza.',
  WHITE_PAPER_INTRO_5: 'El anónimo Peer-to-Peer intercambio electrónico de predicción (PEX) permite partes apuesta directamente contra otros sin pasar por una autoridad central o la casa de apuestas. La gestión de las apuestas y la liquidación de las ganancias se llevan a cabo conjuntamente por la red de blockchain, protegiendo a los usuarios de cualquier punto único de falla. PEX tiene propiedades únicas que permiten interesantes casos de uso, hasta ahora imposibles bajo cualquier mecanismo de apuestas tradicional.',
  WHITE_PAPER_INTRO_6: 'corriendo encima de la blockchain de Etereum, el PEX es un intercambio anónimo peer-to-peer descentralizada predicción que proporciona una forma simple para que cualquiera pueda:',
  WHITE_PAPER_INTRO_7_HIGH_LIGHT: 'PEX directamente desafía a la industria del juego sombra con un intercambio en el mercado abierto y transparente predicción',
  WHITE_PAPER_INTRO_8: 'Este intercambio será donde se reúnen personas y predecir como siempre lo han hecho, sobre futuros acontecimientos en deportes, política, ciencia, mercados, clima y todo bajo el sol — como individuos que se invierten en el mundo que estamos construyendo naturalmente hacer',
  WHITE_PAPER_PEX: '¿Cuál es el PEX?',
  WHITE_PAPER_PEX_1: 'Corriendo encima de la blockchain de Etereum, el PEX es un intercambio anónimo peer-to-peer descentralizada predicción que proporciona una forma simple para que cualquiera pueda:',
  WHITE_PAPER_PEX_2: [
    'Coloque una Orden de apoyo (pida) o una Contra orden (Bid) en un resultado',
    'Ser un Market Maker (poner las probabilidades) o un Lanzador del mercado (detrás de las probabilidades)',
    'Ser un creador de su propio Mercado de predicción',
    'Recoger las ganancias al instante (garantizado bajo Contrato inteligente)',
  ],
  WHITE_PAPER_PEX_3: 'Realizar una apuesta.',
  WHITE_PAPER_OUTCOME: 'Resultados como activos negociables. Probabilidades como precios.',
  WHITE_PAPER_OUTCOME_1: 'En una bolsa de valores, los activos negociables es compartir, y comerciantes apuestan por unidad precios de las acciones (por ejemplo vender 100 acciones de Apple a $200).',
  WHITE_PAPER_OUTCOME_2: 'En un cambio de moneda, los activos negociables moneday comerciantes apuestan por precios de unidad de moneda (por ejemplo, comprar 2 Bitcoin en $7000).',
  WHITE_PAPER_OUTCOME_3: 'Asimismo, en un intercambio de predicción descentralizada como PEX, el activo negociable es resultado de un eventoy comerciantes apostaron sobre la probabilidad de ese resultado. Puede apostar por el resultado (ayuda), o apostar contra él. Por ejemplo: resultado del partido Brasil vs España sería que "Brasil gana". John puede apostar a ese resultado con una probabilidad de 2.0. María puede apostar a ese resultado con una probabilidad de 2.25. Peter puede apostar contra ese resultado ("Brasil pierde" o "Brasil dibuja") con probabilidades de 1.9.',
  WHITE_PAPER_OUTCOME_4: 'A different type of exchange.',
  WHITE_PAPER_COMPARE: 'PEX vs apuestas tradicionales',
  WHITE_PAPER_COMPARE_1: 'Lo importante, PEX no acepta las apuestas y Mantenga estacas, pero en cambio coincide con los usuarios que apoyan el resultado con los usuarios que están en contra de los resultados. Las apuestas se realizan en un contrato de fideicomiso inteligente.',
  WHITE_PAPER_COMPARE_2: 'Fideicomiso el contrato inteligente es imparable . Funciona exactamente como programado — para reenviar su saldo de fideicomiso al ganador al final — sin ninguna posibilidad de interferencia de terceros, fraude o tiempo de inactividad. Una vez que ambas partes se comprometen a una apuesta, es irreversible. El pago es garantizado y al instante.',
  WHITE_PAPER_COMPARE_3: 'Todo el proceso ocurre sin ningún partido revelar sus identidades. Es 100% anónimo.',
  WHITE_PAPER_COMPARE_4: 'Todo esto sucede sin una autoridad central o la casa de apuestas. Se realizó colectivamente por todos los nodos de la blockchain.',
  WHITE_PAPER_COMPARE_5: 'This is why you should bet on the blockchain.',
  WHITE_PAPER_PEX_WORK: '¿Cómo funciona el PEX?',
  WHITE_PAPER_PEX_WORK_SUB_TITLE: 'PEX es diferente de lo que sabes. También proporciona más autonomía que lo que sabes. Apenas como importantemente, está diseñado para ser fácil de crear mercados de apuesta y apuesta lugar órdenes.',
  WHITE_PAPER_STEP_1: 'Paso 1: Obtener éter',
  WHITE_PAPER_STEP_1_1: 'Si no tienes ETH, sin embargo, usted tiene la opción de comprar ETH directamente en PEX con su tarjeta de crédito. También puede comprar ETH de intercambios de monedas populares como Coinbase o Binance.',
  WHITE_PAPER_STEP_1_2: 'PEX apoyará otros cryptocurrencies pronto.',
  WHITE_PAPER_STEP_1_3: 'Comprar fácilmente ETH en la aplicación.',
  WHITE_PAPER_STEP_2: 'Paso 2: Llenar la billetera de PEX',
  WHITE_PAPER_STEP_2_1: 'Transferencia del ETH que acaba de comprar en la billetera de PEX, para que puedan empezar apuestas con el ETH. La cartera de PEX es totalmente descentralizada. La clave privada se lleva a cabo en el teléfono y sólo se puede acceder. Sólo puede transferir y recibir ETH.',
  WHITE_PAPER_STEP_2_2: 'La cartera PEX perfectamente organizada.',
  WHITE_PAPER_STEP_3: 'Paso 3: Colocar una apuesta',
  WHITE_PAPER_STEP_3_1: 'En primer lugar, elegir un mercado de predicción que le interesa (es decir, Brasil — España), el resultado (es decir, \'\'gana Brasil\'\') y el lado (es decir, apoyar o apostar contra el resultado).',
  WHITE_PAPER_STEP_3_2: 'Luego entrar en el juego que desee apuesta (es decir, 1 ETH) y las probabilidades (es decir 1/2.25). El juego será puesto en un contrato de fideicomiso inteligente. El motor de Matching PEX encontrará otra orden que apuesta contra viento y marea que se establece.',
  WHITE_PAPER_STEP_3_3: 'Eso es todo.',
  WHITE_PAPER_STEP_3_4: 'Nuestro ETH está en Argentina para éste.',
  WHITE_PAPER_STEP_4: 'Paso 4: Esperar a que el informe',
  WHITE_PAPER_STEP_4_1: 'Una vez los extremos del evento, el reportero del mercado reportará el resultado dentro de la ventana de presentación de informes (establecida por el creador de mercado). Generalmente, usted debe esperar a tener el informe en minutos. Si usted gana, sus ganancias serán transferidas automáticamente el contrato de fideicomiso inteligente a su cuenta.',
  WHITE_PAPER_STEP_4_2: 'May the odds be ever in your favour.',
  WHITE_PAPER_CREATE: 'Crear sus propios mercados de predicción',
  WHITE_PAPER_CREATE_1: 'Mientras que la mayoría de los usuarios a realizar pedidos en mercados existentes, PEX permite a cualquiera crear un mercado de predicción acerca de cualquier evento futuro — ya sea en deportes, política, ciencia o literalmente cualquier otro aspecto de la vida moderna. Usted, como el creador de mercado, puede establecer la cuota de mercado, el tiempo de cierre de mercado, el reportero de los resultadosy los informes fecha límite.',
  WHITE_PAPER_ARCHITECTURE: 'Arquitectura PEX',
  WHITE_PAPER_ARCHITECTURE_1: 'Los componentes básicos de la arquitectura PEX son:',
  WHITE_PAPER_ARCHITECTURE_2_HL: 'Mercado de predicción',
  WHITE_PAPER_ARCHITECTURE_2: 'PEX permite a cualquiera crear un mercado de predicción acerca de cualquier evento futuro. Esto puede ser en cualquier campo — deportes, política, ciencia, estilo de vida, incluso tiempo y así sucesivamente. Aquí el único límite es tu creatividad. Cada mercado es parte de un contrato inteligente en cadena . Tiene su propia cartera de pedidos, los responsables y tomadores.',
  WHITE_PAPER_ARCHITECTURE_3_HL: 'Libro de órdenes',
  WHITE_PAPER_ARCHITECTURE_3: 'Cada mercado de predicción tiene su propio libro de orden. Libro de orden de PEX gestiona todos los pedidos de resultado de apoyo (pida) y todos contra orden resultado (bid). Agregados todos los pedidos con el mismo precio (probabilidades) en una entrada en el libro de órdenes.',
  WHITE_PAPER_ARCHITECTURE_3_1: 'The order book.',
  WHITE_PAPER_ARCHITECTURE_4_HL: 'Motor que empareja',
  WHITE_PAPER_ARCHITECTURE_4_1: 'PEX utiliza un libro de orden primero-en, hacia fuera (FIFO). Las órdenes se ejecutan en la prioridad precio-tiempo. Esto significa que emparejará por precio primero, y si hay dos órdenes con el mismo precio, entonces coincidirá con el tiempo.',
  WHITE_PAPER_ARCHITECTURE_4_2: 'En algunos casos, el monto colocado de cualquier lado es desigual, y se rellenará parcialmente el orden. El orden restante se emparejó con el mejor precio-entonces-proxima en la cartera de pedidos hasta llena completamente el orden.',
  WHITE_PAPER_ARCHITECTURE_4_3: 'Su pareja perfecta.',
  WHITE_PAPER_ARCHITECTURE_4_4: [
    'Un usuario coloca una orden de manutención de resultado en el libro de orden abierto',
    'Otro usuario pone una contra orden resultado en el libro de orden abierto',
    'Motor que empareja encuentra a una coincidencia y se mueve ambas órdenes desde el libro abierto de orden a la cartera de pedidos emparejado',
  ],
  WHITE_PAPER_ARCHITECTURE_5_HL: 'API REST',
  WHITE_PAPER_ARCHITECTURE_5: 'La API REST PEX tiene terminales para gestión de pedidos, gestión de cuentas y datos de mercado público.',
  WHITE_PAPER_ARCHITECTURE_6_HL: 'Toma de la web',
  WHITE_PAPER_ARCHITECTURE_6: 'PEX Web toma alimentación proporciona mercado en tiempo real actualizaciones de datos de órdenes y oficios.',
  WHITE_PAPER_PRIVACY: 'Privacidad y anonimato',
  WHITE_PAPER_PRIVACY_SUB: 'La privacidad que brinda al usuario es un diseño deliberado.',
  WHITE_PAPER_PRIVACY_1_HL: 'Sin descargas',
  WHITE_PAPER_PRIVACY_1: 'PEX no es una aplicación móvil. Es libremente accesible en la web móvil. Aplicaciones móviles nativas a veces tienen mejor UI/UX, debe ser organizados por tiendas de aplicaciones centralizado como Android Play Store o Apple App store. En nuestra opinión, una interfaz de usuario más atractivo no es una compensación aceptable para privacidad comprometida.',
  WHITE_PAPER_PRIVACY_2_HL: 'No hay inscripciones',
  WHITE_PAPER_PRIVACY_2_1: 'La necesidad de una contraseña, correo electrónico o número de teléfono está obsoleta. ',
  WHITE_PAPER_PRIVACY_2_2: 'PEX no recoge su información personal. Puede utilizar PEX con total privacidad. Cuando primero abra PEX, un par de claves pública y privada creará silenciosamente en el fondo y almacenado localmente en su teléfono. La clave pública actúa como su nombre de usuario anónimo, y la clave privada es su contraseña. PEX no tiene acceso a su clave privada — sólo puedes hacer',
  WHITE_PAPER_PRIVACY_2_3: 'Tenga en cuenta que en la configuración del perfil, ofrecemos una opción para el usuario que introduzca su dirección de correo electrónico. El propósito es no recoger tu correo, pero para una mejor experiencia, especialmente en casos relacionados con pagos de uso. Es totalmente opcional.',
  WHITE_PAPER_PRIVACY_2_4: 'Tenga en cuenta también que hay una opción de copia de seguridad de su clave privada en configuración. Es muy recomendable hacerlo.',
  WHITE_PAPER_PRIVACY_3_HL: 'Predicción de anónimo',
  WHITE_PAPER_PRIVACY_3: 'PEX se construye encima de Etereum, que es una blockchain pública, pero se mantiene privacidad al mantener anónimo su clave pública. Mientras que el público puede ver que alguien es la predicción sobre algo, es casi imposible averiguar quién es ese alguien.',
  WHITE_PAPER_PRIVACY_4_HL: 'Coincidencia de orden anónimo',
  WHITE_PAPER_PRIVACY_4: 'Similares a bolsas de valores y monedas, la cartera de pedidos, tamaños, probabilidades y tiempo son públicos, pero la cartera de pedidos no revela quiénes son los responsables del orden y tomadores. Los registros de libro de órdenes las partes anónimo apuesta lugar cara a cara, basado en sus predicciones opuestas de un evento. Una vez que concluye el evento y el informe está disponible, los fondos custodiados se transfieren automáticamente al ganador.',
  WHITE_PAPER_FEE: 'Honorarios',
  WHITE_PAPER_FEE_1: 'Hay dos tipos de tasas: ganando cuota y cuota de la red.',
  WHITE_PAPER_FEE_2: 'La ganadora de la cuota se establece por el creador de mercado, como un porcentaje de las ganancias totales del mercado. Es totalmente hasta el creador de mercado para fijar sus propias tarifas. Ya PEX permite a cualquiera crear un mercado de predicción, esperamos que las tasas serán muy competitivas entre mercados. Este es el mejor de los casos para los usuarios.',
  WHITE_PAPER_FEE_3: 'La cuota de red es un 20% de cuota ganadora del creador. Esta paga para la ingeniería, infraestructura y mantenimiento de la red. Al principio, esto se realizará por el equipo Ninja. Pero esperamos que con el tiempo descentralizar el equipo y diseñar un mecanismo que abre a toda la comunidad.',
  WHITE_PAPER_FEE_4: 'Opcionalmente, estamos considerando una tasa de referencia para el creador de mercado. La piscina de referencia podría ser 10% — 20% de la cuota de la ganadora, que ayuda a añadir más usuarios en el mercado.',
  WHITE_PAPER_SETTLEMENT: 'Establecimiento',
  WHITE_PAPER_SETTLEMENT_1: 'Cuanto más nos sumergimos en edificio PEX, más parece que tenemos que lograr inicialmente un compromiso entre velocidad y descentralización, manteniendo siempre seguridad. En relación con el establecimiento, que requiere el informe de los resultados estén disponibles inmediatamente después de cada evento (es decir, un evento deportivo), le apostamos por velocidad, por ahora.',
  WHITE_PAPER_SETTLEMENT_2: 'En la primera versión, el Ninja equipo asumirá el papel de presentación de informes y el informe el resultado de todos los eventos. Estamos investigando y diseñando un mecanismo descentralizado que permitirá a la comunidad informar los resultados.',
  WHITE_PAPER_SUMMARY: 'Resumen',
  WHITE_PAPER_SUMMARY_1: 'PEX es una versión puramente peer-to-peer de predicción electrónica que permite partes apuesta directamente contra otros sin pasar por una autoridad central o la casa de apuestas.',
  WHITE_PAPER_SUMMARY_2: 'PEX es abrir-fuente; su diseño es pública, nadie posee o los controles PEX y todo el mundo pueden tomar Part. ',
  WHITE_PAPER_SUMMARY_3: 'PEX es de código abierto en',
  WHITE_PAPER_SUMMARY_4: 'PEX construir con nosotros. Únete a la conversación en',
  WHITE_PAPER_END: 'And it actually works',
  WHITE_PAPER_END_1: 'Hey, thanks for reading. Ninja will go live on the testnet on 5 June! We’re excited to hear your thoughts.',
};
