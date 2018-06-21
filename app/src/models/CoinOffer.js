class CoinOffer {
  static coinOffer(data) {
    console.log('coinOffer',data);
    return {
      currency: data.currency || '',
      status: data.status || '',
      sellAmountMin: data.sell_amount_min || '',
      sellAmount: data.sell_amount || '',
      sellBalance: data.sell_balance || '',
      sellPercentage: data.sell_percentage || '',
      buyAmountMin: data.buy_amount_min || '',
      buyAmount: data.buy_amount || '',
      buyBalance: data.buy_balance || '',
      buyPercentage: data.buy_percentage || '',
      systemAddress: data.system_address || '',
      userAddress: data.user_address || '',
      rewardAddress: data.reward_address || '',
    };
  }
}

export default CoinOffer;
