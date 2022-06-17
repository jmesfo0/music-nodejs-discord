module.exports = async (client) => {

  var items = ['Yes', 'No', 'Maybe'];
  var item = items[Math.floor(Math.random() * items.length)];
  
  client.user.setStatus('idle').catch(console.error);
    setInterval(() => {
      client.user.setPresence(
    //PresenceData object | https://discord.js.org/#/docs/main/stable/typedef/PresenceData
    status: "online", // You can have online, idle, and dnd(invisible too but it make people think the bot is offline)
    activities: [
      {
        name: item, //Status Text
        type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
      },
    ]);
                      }, 5000);
  
  
  console.log("Successfully Logged in as " + client.user.tag);
};
