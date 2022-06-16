module.exports = async (client) => {
  (client.Ready = true),
  client.user.setStatus('available')
    client.user.setPresence({
        activity: {
            name: client.config.Presence.name,
            type: client.config.Presence.type,
        }
    });
  
    console.log(`${client.user.username} Login!`);
};
