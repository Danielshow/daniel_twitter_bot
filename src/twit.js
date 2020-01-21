import Twit from "twit";
import config from "./config/config";

const Twitter = new Twit(config);

export default Twitter;
