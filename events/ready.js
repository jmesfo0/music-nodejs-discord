var items = ['Yes', 'No', 'Maybe'];
var item = items[Math.floor(Math.random() * items.length)];

module.exports = async (client) => {
  setInterval(client.user.setPresence(item), 5000);
  console.log("Successfully Logged in as " + client.user.tag);
};
