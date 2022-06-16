status = cycle([
    client.config.presence, 'github.com/jmesfo0'
])

module.exports = async (client) => {
  setInterval(client.user.setPresence(next(status)), 5000);
  console.log("Successfully Logged in as " + client.user.name);
};
