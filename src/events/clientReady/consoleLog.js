const { ActivityType } = require("discord.js");
const { getRandomInt } = require("../../utils/getRandomInt");

module.exports = (client, arg) => {
  let status = [
    {
      name: "Watching over Insane",
      type: ActivityType.Watching
    },
    {
      name: "Playing in Insane's Asylum",
      type: ActivityType.Playing
    }
  ];

  // The arg passed here is also client
  console.log(`${client.user.tag} is ready and online 🟢 !!`);

  setInterval(() => {
    let random = getRandomInt(0, status.length - 1);
    client.user.setActivity(status[random]);
  }, 10000)
}