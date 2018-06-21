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
  FAQ_TITLE: '常见问题',
  FAQ_HEADER_YELLOW: '',
  FAQ_HEADER: '分散式预测交换',
  FAQ_DATA: [
    {
      question: '什么是忍者 PEX？',
      answer: '忍者是一个匿名的对等分散预测交换运行在虚灵议会 blockchain 顶部',
    },
    {
      question: 'PEX 有什么特别之处在？我为什么要赌一把？',
      answer: '它允许各方直接下注, 而不经过中央主管机构或庄家。这使得它100% 匿名, 没有任何迹象显示不需要下载。投注的管理和奖金的结算由 blockchain 网络集体进行, 保护用户免受任何单一故障点的侵害。您还可以创建自己的预测市场。',
    },
    {
      question: '我需要以太吗？它支持其他 cryptocurrencies 吗？',
      answer: '是的。忍者只接受了现在, 但支持将增加其他货币很快。',
    },
    {
      question: '如何从忍者开始？',
      isList: true,
      answer: [
        {
          title: '获取醚:',
          content: '您可以购买直接在 PEX 与您的信用卡或像 Coinbase 或 Binance 的流行硬币交易所。',
        },
        {
          title: '把你的 PEX 钱包顶起来:',
          content: '把 PEX 的钱包转给他PEX 钱包是完全分散的, 私钥是持有在您的手机上, 只有您可以转让和接收的瑞士联邦。',
        },
        {
          title: '下注:',
          content: '选择你想赌的市场 (即巴西-西班牙), 结果 (即巴西获胜) 和网站 (即支持或押注结果)\n' +
          '输入你要押注的赌注 (即 1) 和赔率 (即 1/2.25)\n' +
          '然后, 贝克斯匹配引擎将找到另一项命令, 对您设置的赔率进行下注。',
        },
        {
          title: '等待报告:',
          content: '如果你赢了, 你的奖金将自动从代管智能合同转移到您的帐户。',
        },
      ],
    },
    {
      question: '我可以设定自己的首选赔率吗？怎样？',
      answer: '是的！在创建自己的赌注时, 您将输入您感兴趣的事件以及要押注的结果。然后, 只需输入你的股份和你想要的赔率。然后, PEX 引擎将自动找到并匹配您与任何有兴趣在同一事件, 谁接受你的赔率。',
    },
    {
      question: '你如何进行警察的不体面/非法投注？',
      answer: '我们目前正在建立一个制衡系统, 以在 dojo 中标记不适当的行为。',
    },
    {
      question: '系统如何知道人们之间投注的结果？谁担任仲裁员, 并在合同签订时核实一个结果与另一结局？',
      answer: '忍者将很快有一个完全分散的解决方案, 以验证结果和激励真相告诉 (一刀记者!)。与此同时, 我们将会及时推出国际足联世界杯, 我们的团队将使用一个公开的消息来源 (livescore.com), 并担任记者。',
    },
    {
      question: '硬币在哪里举行？',
      answer: '没有人持有这些资金。所有的资金都保持在代管安全, 直到达成决议。',
    },
    {
      question: '为什么我要押注 blockchain 而不是使用传统的方法？',
      answer: '一个分散的预测交换将为您提供自由创建您自己的赔率和赌注直接与任何人, 提供您100% 忍者匿名和保证支付。',
    },
    {
      question: '隐私和匿名如何？',
      answer: '忍者不需要下载, 也没有签名 ups。这意味着没有密码, 没有电话号码, 也没有电子邮件。100% 匿名。',
    },
    {
      question: '我是否需要支付任何费用？',
      answer: '有两种主要的收费类型: 创建者费用 (用于创建赌注的忍者) 和网络费用 (创建者费用的百分比, 用于维护平台)。',
    },
    {
      question: '在最后定稿时, 我需要做些什么？',
      answer: '什么。如果你赢了, 你的奖金将自动转移到你的帐户。如果你输了, 那将是别人的帐户。',
    },
    {
      question: '在哪里可以找到匹配的赌注？',
      answer: '在主页上, 您可以浏览正在进行的投注和市场。如果你找不到任何你喜欢的, 创建自己的!',
    },
    {
      question: '除了运动之外, 我还能打赌别的什么吗？它是如何工作的？',
      answer: '很快, 忍者将适用于一切在阳光下。唯一的限制将是你的创造力。你可以很容易地创造任何未来的活动市场, 无论是体育, 政治, 科学, 市场, 气候... 你的名字。',
    },
    {
      question: '握手移动应用程序会发生什么情况？',
      answer: '我们将整合握手 (和您最喜欢的功能, 如承诺, 欠条, 合同上传等) 到忍者移动网站。',
    },
  ],

  // MobileOrTablet components
  MOT_TITLE: '匿名交换任何东西',
  MOT_CONTENT_0: '忍者网络只能通过移动访问',
  MOT_CONTENT_1: '在移动浏览器上打开',
  MOT_CONTENT_2: '以获取匿名输入。',
  MOT_CONTENT_3: '不需要下载。不需要注册。',
  MOT_LIST_CONTENT: [
    {
      mainContent: '阅读',
      placeHolderLink: '白皮',
      link: 'https://medium.com/@ninjadotorg/shakeninja-bex-1c938f18b3e8',
      mainContent1: '书',
      isBlankTarget: true,
    },
    {
      mainContent: '我们回答您的',
      placeHolderLink: '常见问题',
      link: '/faq',
    },
    {
      mainContent: '通过',
      placeHolderLink: '电报',
      link: 'https://t.me/ninja_org',
      isBlankTarget: true,
      mainContent1: '加入 dojo',
    },
  ],

  /*
  *
  * White Paper
  *
  * ******************************************************************************************* */
  WHITE_PAPER_H1: '虚灵议会上的匿名对等预测交换',
  WHITE_PAPER_SUBTITLE_1: '你好！我们是中华民国, Bakunawa, Hakawai 和 Grootslang 的忍者队。我们正在建立一个电子预测交换 blockchain。这就是为什么我们这样做, 以及它是如何工作的!',
  WHITE_PAPER_SUBTITLE_2: '加入对话在',
  WHITE_PAPER_INTRO: '介绍',
  WHITE_PAPER_INTRO_1: '在线博彩几乎完全由作为受信任的第三方的收受赌注者运行。通常情况下, 用户会遭受此 "集中信任的三十方问题":',
  WHITE_PAPER_INTRO_2: [
    '收受赌注者设置了总是青睐他们的赔率 (他们总是赢)',
    '收受赌注者享受沉重的 5% - 每投注30% 保证金',
    '赌注是可逆的, 奖金是不确定的',
    '完全匿名是不可能的',
    '欺诈是不可避免的, 并接受如此',
    '单点故障 - 如果庄家消失了怎么办？',
    '博彩被认为是赌博 - 不成比例的风险, 主要是由于中央党缺乏透明度',
  ],
  WHITE_PAPER_INTRO_3: '在离线下注时, 这些问题成倍增加了 10, 难怪用户越来越少地接受两种罪恶。',
  WHITE_PAPER_INTRO_4_HIGH_LIGHT: '解决方案: 一种电子预测系统, 用加密证明取代不情愿的信任, 允许来自世界任何地方的任何两个匿名方在不需要信任的第三方的情况下直接相互下注。',
  WHITE_PAPER_INTRO_5: '匿名对等电子预测交换 (PEX) 允许当事方在不通过中央主管机构或收受赌注人的情况下直接下注。投注的管理和奖金的结算由 blockchain 网络集体进行, 保护用户免受任何单一故障点的侵害。PEX 有独特的属性, 允许令人兴奋的用例, 以前不可能在任何传统的投注机制。',
  WHITE_PAPER_INTRO_6: '我们希望 PEX 能改变今天的博彩观念. - 通常不必要地被描绘成一个阴暗的赌博游戏, 主要是依靠集中的党派寻找不道德的、残酷的赚钱方式.',
  WHITE_PAPER_INTRO_7_HIGH_LIGHT: 'PEX 通过公开、透明的预测市场交换直接挑战阴暗的博彩业. ',
  WHITE_PAPER_INTRO_8: '这种交流将是人们聚集在一起, 并预测像他们一直这样做, 在未来的活动, 在体育, 政治, 科学, 市场, 气候, 一切在阳光下 - 作为在我们正在建设的世界上投资的个人, 我们自然会这样做.',
  WHITE_PAPER_PEX: '什么是 PEX？',
  WHITE_PAPER_PEX_1: '在虚灵议会 blockchain 的顶部运行时, PEX 是匿名对等的分布式预测交换, 为任何人提供了一个简单的方法:',
  WHITE_PAPER_PEX_2: [
    '在结果上放置支持命令(请求) 或反对命令(出价)',
    '成为市场庄家(赔率) 或市场接受者 (后退赔率)',
    '成为自己预测市场的创造者',
    '收集奖金立即 (保证在一个聪明的合同下)',
  ],
  WHITE_PAPER_PEX_3: '下注吧',
  WHITE_PAPER_OUTCOME: '作为可交易资产的结果。价格的赔率。',
  WHITE_PAPER_OUTCOME_1: '在证券交易所, 交易资产是共享的, 贸易商押注于股票单价(例如, 每卖出100股苹果200美元)。',
  WHITE_PAPER_OUTCOME_2: '在硬币交换中, 交易资产是硬币, 贸易商押注硬币单价(例如, 每买入2比特币7000美元)。',
  WHITE_PAPER_OUTCOME_3: '类似地, 在像 PEX 这样的分散式预测交换中, 交易资产是一个事件的结果, 而贸易商则押注该结果的可能性。他们可以打赌结果 (支持它), 或者押注它。例如: 巴西与西班牙的比赛结果可能是 "巴西获胜"。约翰可以用2.0 的赔率来打赌这个结果。玛丽可以用2.25 的赔率来打赌这个结果。彼得可以打赌反对那结果 ("巴西丢失" 或 "巴西画") 以赔率1.9。',
  WHITE_PAPER_OUTCOME_4: 'A different type of exchange.',
  WHITE_PAPER_COMPARE: 'PEX 与传统博彩',
  WHITE_PAPER_COMPARE_1: '重要的是, PEX 不接受投注和持有赌注, 而是与那些反对结果的用户匹配支持结果的用户。赌注是在一个托管智能合同中持有。',
  WHITE_PAPER_COMPARE_2: '托管智能合同不可阻挡。它完全按照程序 运行- 将其代管余额转发到最终 赢家- 而不存在停机、欺诈或第三方干扰的可能性。一旦双方都承诺下注, 这是不可逆转的。付款是保证和即时.',
  WHITE_PAPER_COMPARE_3: '整个过程在没有任何一方透露他们的身份的情况下发生。是100% 匿名的',
  WHITE_PAPER_COMPARE_4: '所有这些都发生在没有中央当局或庄家的情况下。它是由 blockchain 的所有节点共同执行的。',
  WHITE_PAPER_COMPARE_5: 'This is why you should bet on the blockchain.',
  WHITE_PAPER_PEX_WORK: 'PEX 如何工作？',
  WHITE_PAPER_PEX_WORK_SUB_TITLE: 'PEX 和你所知道的不一样。它也提供了比你所知道的更多的自主权。同样重要的是, 它的设计是容易创建下注市场和下注订单。',
  WHITE_PAPER_STEP_1: '步骤 1: 获取以太',
  WHITE_PAPER_STEP_1_1: '如果你还没有, 你可以选择直接购买 PEX 与您的信用卡。你也可以从流行的硬币交换, 如 Coinbase 或 Binance 购买。',
  WHITE_PAPER_STEP_1_2: 'PEX 将支持其他 cryptocurrencies 很快。',
  WHITE_PAPER_STEP_1_3: '轻松地在应用程序中购买。',
  WHITE_PAPER_STEP_2: '步骤 2: 顶部您的 PEX 钱包',
  WHITE_PAPER_STEP_2_1: '转移你刚买的 PEX 钱包, 这样你就可以开始下注了。PEX 钱包是完全分散的。私钥保存在您的手机上, 只有您可以访问它。只有你可以转移和接受。',
  WHITE_PAPER_STEP_2_2: '整齐地组织 PEX 钱包。',
  WHITE_PAPER_STEP_3: '步骤 3: 下注',
  WHITE_PAPER_STEP_3_1: '首先, 选择一个你感兴趣的预测市场 (即巴西 - 西班牙), 结果 (即 "巴西获胜") 和侧面 (即支持或押注于结果).',
  WHITE_PAPER_STEP_3_2: '然后输入你想下注的赌注 (即 1) 和赔率 (即 1/2.25)。股权将被放入一个托管智能合同。然后, PEX 匹配引擎将找到另一个命令, 以下注的赔率你设置。',
  WHITE_PAPER_STEP_3_3: '就是这样。',
  WHITE_PAPER_STEP_3_4: '我们的是阿根廷人。',
  WHITE_PAPER_STEP_4: '步骤 4: 等待报告',
  WHITE_PAPER_STEP_4_1: '一旦事件结束, 市场的记者将报告的结果在报告窗口 (由市场创造者设置)。通常情况下, 您应该希望在几分钟内有报告。如果你赢了, 你的奖金将自动从代管智能合同转移到您的帐户。',
  WHITE_PAPER_STEP_4_2: 'May the odds be ever in your favour.',
  WHITE_PAPER_CREATE: '创建您自己的预测市场',
  WHITE_PAPER_CREATE_1: '虽然大多数用户将在现有市场上订单, PEX 允许任何人创建预测市场的任何未来的事件 - 无论是在体育, 政治, 科学, 或字面上任何其他方面的现代生活。您作为 市场创造者, 可以设置市场费用、 市场收盘时间、 记者的结果和报告最后期限.',
  WHITE_PAPER_ARCHITECTURE: 'PEX 体系结构',
  WHITE_PAPER_ARCHITECTURE_1: 'PEX 体系结构的核心组件是:',
  WHITE_PAPER_ARCHITECTURE_2_HL: '预测市场',
  WHITE_PAPER_ARCHITECTURE_2: 'PEX 允许任何人创建预测市场的任何未来事件。这可以在任何领域 - 体育, 政治, 科学, 生活方式, 甚至天气等。这里唯一的限制就是你的创造力。每个市场都是连锁智能合同的一部分。它有自己的订单书, 制造商和接受者.',
  WHITE_PAPER_ARCHITECTURE_3_HL: '订购书',
  WHITE_PAPER_ARCHITECTURE_3: '每个预测市场都有自己的订单书。PEX 订单书管理所有支持结果订单 (询问) 和所有反对结果命令 (出价)。它将相同价格 (赔率) 的所有订单聚合到订单簿中的条目中。',
  WHITE_PAPER_ARCHITECTURE_3_1: 'The order book.',
  WHITE_PAPER_ARCHITECTURE_4_HL: '匹配引擎',
  WHITE_PAPER_ARCHITECTURE_4_1: 'PEX 使用先进、先出 (FIFO) 订购书。订单按价格时间优先级执行。这意味着它将首先匹配的价格, 如果有两个订单相同的价格, 那么它将匹配的时间。',
  WHITE_PAPER_ARCHITECTURE_4_2: '在某些情况下, 放置在两边的金额是不均匀的, 订单将被部分填充。余下的订单将与订单书中的下一个最佳价格时间匹配, 直到订单完全填满为止。',
  WHITE_PAPER_ARCHITECTURE_4_3: '你的完美匹配。',
  WHITE_PAPER_ARCHITECTURE_4_4: [
    '用户将支持结果顺序放到打开的订单簿中',
    '另一个用户将一个反对结果的顺序放到打开的订单书中',
    '匹配引擎查找匹配项, 并将两个订单从打开的订单簿移动到匹配的订单簿',
  ],
  WHITE_PAPER_ARCHITECTURE_5_HL: 'REST API',
  WHITE_PAPER_ARCHITECTURE_5: 'PEX REST API 具有订单管理、帐户管理和公共市场数据的端点。',
  WHITE_PAPER_ARCHITECTURE_6_HL: '网络插座',
  WHITE_PAPER_ARCHITECTURE_6: 'PEX 网络插座提要为订单和交易提供实时市场数据更新。',
  WHITE_PAPER_PRIVACY: '隐私 & 匿名',
  WHITE_PAPER_PRIVACY_SUB: '为用户提供的隐私是一种深思熟虑的设计。',
  WHITE_PAPER_PRIVACY_1_HL: '无下载',
  WHITE_PAPER_PRIVACY_1: 'PEX 不是一个移动应用程序。它可以在移动网络上自由访问。虽然本地移动应用程序有时具有更好的 UI/UX, 但它们必须由集中式应用程序存储 (如 Android 播放商店或苹果应用程序商店) 来托管。在我们看来, 一个更有吸引力的 UI 不是一个可接受的折衷隐私。',
  WHITE_PAPER_PRIVACY_2_HL: '无标志 ups',
  WHITE_PAPER_PRIVACY_2_1: '密码、电子邮件或电话号码的需要已过时.',
  WHITE_PAPER_PRIVACY_2_2: 'PEX 没有收集您的个人信息。您可以使用完全隐私的 PEX。当您首次打开 PEX 时, 将在后台静默创建一个公共/私有 keypair, 并将其存储在本地的手机上。公钥作为匿名用户名, 私钥是您的密码。PEX 不能访问您的私钥 - 只有您这样做.',
  WHITE_PAPER_PRIVACY_2_3: '请注意, 在配置文件设置中, 我们提供了用户输入其电子邮件地址的选项。其目的不是为了收集您的电子邮件, 而是为了更好的体验, 特别是在与付款相关的用例中。这是完全可选的。',
  WHITE_PAPER_PRIVACY_2_4: '还请注意, 有一个选项可以在设置中备份私钥。我们强烈建议这样做。',
  WHITE_PAPER_PRIVACY_3_HL: ' 匿名预测',
  WHITE_PAPER_PRIVACY_3: 'PEX 是建立在虚灵议会之上的, 这是一个公开的 blockchain, 但隐私是保持你的公钥匿名。虽然公众可以看到有人在预测某事, 但几乎不可能查出某人是谁。',
  WHITE_PAPER_PRIVACY_4_HL: '匿名订单匹配',
  WHITE_PAPER_PRIVACY_4: '与股票和硬币交易所类似, 订单书、大小、赔率和时间都是公开的, 但订单书并没有透露谁是订单制造商和接受者。订单书记录的赌注匿名党的地方互相反对, 根据他们反对的预测事件。一旦事件结束, 并且报告是可利用的, 保管资金被自动地转移到优胜者。',
  WHITE_PAPER_FEE: '费用',
  WHITE_PAPER_FEE_1: '收费主要有两类: 中奖费和网络费。',
  WHITE_PAPER_FEE_2: '获奖费用由市场创造者设定, 占该市场总奖金的百分比。这完全取决于市场创造者自己设定费用。由于 PEX 允许任何人创建预测市场, 我们预计这些费用将在市场之间具有很强的竞争力。这是用户最好的情况。',
  WHITE_PAPER_FEE_3: '网络费用是造物主获奖费用的 20%。这为网络的工程、基础设施和维护支付费用。一开始, 这将由核心忍者团队进行。但我们预计, 随着时间的推移, 我们将分散团队, 并设计一个机制, 向整个社区开放。',
  WHITE_PAPER_FEE_4: '另外, 我们正在考虑对市场创造者的转介费 。推荐池可以是 10% - 20% 的获奖费用, 这将有助于增加更多的用户到市场上.',
  WHITE_PAPER_SETTLEMENT: '沉降',
  WHITE_PAPER_SETTLEMENT_1: '我们越深入建设 PEX, 似乎就越有可能首先在速度和权力下放之间达成妥协, 同时始终保持安全。至于解决办法, 要求在每项活动 (即体育赛事) 后立即提供结果报告, 我们现在就会选择速度。',
  WHITE_PAPER_SETTLEMENT_2: '在第一个版本中, 核心忍者团队将承担报告角色并报告所有事件的结果。我们正在研究和设计一个分散的机制, 这将允许社区报告的结果。',
  WHITE_PAPER_SUMMARY: '总结',
  WHITE_PAPER_SUMMARY_1: 'PEX 是一个纯粹的对等版本的电子预测, 允许各方直接下注, 而不通过一个中央机构或庄家。',
  WHITE_PAPER_SUMMARY_2: 'PEX 是开源的, 它的设计是公开的, 没有人拥有或控制 PEX, 每个人都可以参与. ',
  WHITE_PAPER_SUMMARY_3: 'PEX 是开源的, 在',
  WHITE_PAPER_SUMMARY_4: '与我们建立 PEX。加入 ',
  WHITE_PAPER_END: 'And it actually works',
  WHITE_PAPER_END_1: 'Hey, thanks for reading. Ninja will go live on the testnet on 5 June! We’re excited to hear your thoughts.',
};
