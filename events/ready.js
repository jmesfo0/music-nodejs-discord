
module.exports = async (client) => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    const activities_list = [
    "-play", 
    "tires screaching", 
    "people argueing", 
    "something", 
    "your thoughts", 
    ];
setInterval(() => {
        client.user.setActivity(activities_list[index], {type: 'LISTENING'});
    }, 1000);
  console.log("Successfully Logged in as " + client.user.tag);
};
