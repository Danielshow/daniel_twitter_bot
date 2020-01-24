import Twitter from "../twit";
export const directMessage = data => {
  Twitter.post("direct_messages/events/new", data, (err, res) => {
    if (err) {
      console.log("Error: " + err.message);
    } else {
      console.log("Message sent successfully");
    }
  });
};
