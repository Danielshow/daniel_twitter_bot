import Twitter from "../twit";
import { sendMessage } from "../helpers";

export const autoDirectMessage = () => {
  const stream = Twitter.stream('statuses/filter', { track: '@d_showWorld' });
  stream.on("follow", sendMessage);
 };
