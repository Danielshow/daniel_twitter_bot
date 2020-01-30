import Twitter from "../twit";
import { favorite, retweet } from "../helpers";

const keyword = [
  "ruby on rails",
  "redux",
  "Redux",
  "graphql",
  "GraphQL",
  "Javascript",
  "javascript",
  "gatsbyJs",
  "github",
  "Github",
  "ReactJS",
  "DSCYabatech",
  "100DaysofCode"
];

export const retweetAndLike = () => {
  const stream = Twitter.stream("statuses/filter", {
    track: keyword,
    lang: "en",
    result_type: "recent"
  });

  stream.on("tweet", tweet => {
    if (
      !tweet.lang ||
      tweet.lang != "en" ||
      tweet.in_reply_to_status_id_str ||
      tweet.retweeted_status ||
      tweet.quoted_status ||
      tweet.user.name.match(/bot/)
    )
      return;
    console.log(tweet);
    favorite(tweet.id_str);
    retweet(tweet.id_str);
  });
};
