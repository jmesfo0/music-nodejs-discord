
module.exports = async (client) => {
  setInterval(client.user.setPresence(client.config.presence), 5000);
  console.log("Successfully Logged in as " + client.user.name);
};
