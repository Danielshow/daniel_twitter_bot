export const favorite = id => {
  Twitter.post("favorites/create", { id }, function(err, response) {
    if (!err) {
      console.log("Tweet favorited");
    } else {
      console.log(err.message);
    }
  });
};