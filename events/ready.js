module.exports = async (client) => {
  (client.Ready = true),
    client.user.setPresence({
    status: client.config.Presence.status, // You can show online, idle, and dnd
      activity: {
        name: client.config.Presence.name,
        type: client.config.Presence.type,
      },
});
    console.log(`${client.user.username} Login!`);
};
