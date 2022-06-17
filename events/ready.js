var items = ['Yes', 'No', 'Maybe'];
var item = items[Math.floor(Math.random() * items.length)];

module.exports = async (client) => {
  setInterval(function () {client.user.setPresence(item);}, 5000);
  setInterval(, 5000);
  console.log("Successfully Logged in as " + client.user.name);
};
