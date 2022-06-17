module.exports = async (client) => {
  
  var items = ['Yes', 'No', 'Maybe'];
  var item = items[Math.floor(Math.random() * items.length)];
  
  client.user.setStatus('idle').catch(console.error);
    setInterval(() => {
      client.user.setPresence(item);
                      }, 5000);
  
  
  console.log("Successfully Logged in as " + client.user.tag);
};
