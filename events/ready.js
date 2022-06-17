    
    const activities_list = [
    "Activitie One", 
    "Activitie Two", 
    "Activitie Three", 
    ];

module.exports = async (client) => {


setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index], {type: 'WATCHING'});
    }, 3000);
  
  
  console.log("Successfully Logged in as " + client.user.tag);
};
