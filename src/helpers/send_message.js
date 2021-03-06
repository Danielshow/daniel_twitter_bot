import { directMessage } from "../helpers";
require("dotenv").config();

const generateMessage = name => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Staturday"
  ];
  const day = days[new Date().getDay()];
  return `Hi ${name}, Thanks for following me. Happy ${day} 🚀🚀🚀`;
};

export const sendMessage = user => {
  console.log("HIT HIT HIT")
  const my_user_name = process.env.MY_USER_NAME;
  const { screen_name, name } = user.source;
  const data = {
    screen_name,
    text: generateMessage(name)
  };
  if (screen_name != my_user_name) {
    directMessage(data);
  }
};
