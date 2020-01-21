import Twitter from '../twit';
export const directMessage = (data) => {
  Twitter.post("direct_messages/new", data, (err, data) => {
    if (err) {
      console.log("Error: " + err.message)
    } else {
      console.log("Message sent successfully")
    }
  })
}