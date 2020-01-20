import Twit from "twit";
import config from "./config";

const Twitter = new Twit(config);

// Strem data based on keywords
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
  "gatsby",
  "github",
  "Github"
];
const stream = Twitter.stream("statuses/filter", {
  track: keyword,
  lang: "en",
  result_type: "recent"
});

stream.on("tweet", tweet => {
  // favorite tweet
  // if lang is null dont favorite it
  if (!tweet.lang) return
  // tweet.id_str = Id of the tweet
  console.log(tweet);
  favorite(tweet.id_str);
});

const retweet = id => {
  Twitter.post("statuses/retweet/:id", { id }, function(err, data, response) {
    if (!err) {
      console.log("Tweet favorited");
    } else {
      console.log(err.message);
    }
  });
};

const favorite = id => {
  Twitter.post("favorites/create", { id }, function(err, response) {
    if (!err) {
      console.log("Tweet favorited");
    } else {
      console.log(err.message);
    }
  });
};
