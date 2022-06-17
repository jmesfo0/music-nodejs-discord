
module.exports = async (client) => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
    const activities_list = [
    "-play", 
    "your mom", 
    "your grandma", 
    ];
setInterval(() => {
        client.user.setActivity(activities_list[index], {type: 'WATCHING'});
    }, 1000);
  console.log("Successfully Logged in as " + client.user.tag);
};
