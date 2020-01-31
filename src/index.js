import { CronJob } from 'cron'
import { retweetAndLike, stream } from "./components/retweet_n_like";
import { autoDirectMessage } from './components/direct_message';

// At every minute from 30 through 40 past every 4th hour on every day-of-month.
const job = new CronJob('30-40 */10 */1 * *', () => {
  let timerId = setInterval(() => { retweetAndLike() }, 10000);
  setTimeout(() => { clearInterval(timerId); stream.stop(); }, 60000);
})

job.start()
