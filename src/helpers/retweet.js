import Twitter from "../twit";
export const retweet = id => {
  Twitter.post("statuses/retweet/:id", { id }, function(err, data, response) {
    if (!err) {
      console.log("Tweet Retweeted 🎉🎉🎉");
    } else {
      console.log(err.message);
    }
  });
};
