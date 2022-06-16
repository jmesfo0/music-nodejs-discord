function setPresenceLoop () {
  setInterval(client.user.setPresence(client.config.presence), 5000)
}

module.exports = async (client) => {
  setPresenceLoop()
  console.log("Successfully Logged in as " + client.user.name);
};
