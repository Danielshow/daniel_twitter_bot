import Twitter from '../twit';
import { favorite, retweet} from '../helpers'

const keyword = [
  "rails",
  "ruby on rails",
  "redux",
  "Redux",
  "graphql",
  "GraphQL",
  "Javascript",
  "javascript",
  "ruby",
  "gatsbyJs",
  "github",
  "Github",
  "ReactJS",
  "DSCYabatech"
];
export const retweetAndLike = () => {
  const stream = Twitter.stream("statuses/filter", {
    track: keyword,
    lang: "en",
    result_type: "recent"
  });
  
  stream.on("tweet", tweet => {
    if (!tweet.lang || tweet.lang != 'en' || tweet.in_reply_to_status_id_str || tweet.retweeted_status) return
    console.log(tweet);
    favorite(tweet.id_str);
    retweet(tweet.id_str);
  });
}