import schedule from 'node-schedule'
import { retweetAndLike } from "./components/retweet_n_like";
import { autoDirectMessage } from './components/direct_message';

// retweetAndLike();
// autoDirectMessage();
// At every minute from 30 through 40 past every 4th hour on every day-of-month.
schedule.scheduleJob('30-40 */4 */1 * *', () => {
  retweetAndLike();
})
