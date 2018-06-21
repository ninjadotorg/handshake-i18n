import Outcome from './Outcome';

const handleOutcomeListPayload = payload => payload.map(item => Outcome.outcome(item));

class Match {
  static match(data) {
    return {
      id: data.id || '',
      awayTeamCode: data.awayTeamCode || '',
      awayTeamFlag: data.awayTeamFlag || '',
      awayTeamName: data.awayTeamName || '',
      date: data.date || '',
      homeTeamCode: data.homeTeamCode || '',
      homeTeamFlag: data.homeTeamFlag || '',
      homeTeamName: data.homeTeamName || '',
      name: data.name || '',
      marketFee: data.market_fee || '',
      outcomes: handleOutcomeListPayload(data.outcomes) || '',
    };
  }
}
export default Match;
