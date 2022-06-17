
module.exports = async (client) => {
    const activities_list = [
    "-play", 
    "your mom", 
    "your grandma", 
    ];
setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index], {type: 'WATCHING'});
    }, 1000);
  console.log("Successfully Logged in as " + client.user.tag);
};
