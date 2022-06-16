module.exports = async (client) => {
  client.user.setPresence(client.config.presence);
  console.log("Successfully Logged in as " + client.user.name);
};
