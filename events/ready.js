
module.exports = async (client) => {
    status = cycle([
    client.config.presence, 'github.com/jmesfo0'
])

  setInterval(client.user.setPresence(next(status)), 5000);
  console.log("Successfully Logged in as " + client.user.name);
};
