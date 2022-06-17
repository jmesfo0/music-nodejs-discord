module.exports = async (client) => {

  var items = ['Yes', 'No', 'Maybe'];
  var item = items[Math.floor(Math.random() * items.length)];
  
  client.user.setStatus('idle').catch(console.error);
    setInterval(() => {
      client.user.setPresence({
        status: "online",  // You can show online, idle... Do not disturb is dnd
        game: {
            name: item,  // The message shown
            type: "PLAYING" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
                      }, 5000);
  
  
  console.log("Successfully Logged in as " + client.user.tag);
};
