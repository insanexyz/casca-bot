const { guildID, devs, testServer } = require("../../../config.json");
const getLocalCommands = require("../../utils/getLocalCommands");

module.exports = async (client, interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const localCommands = getLocalCommands();

  console.log("test 1....");

  try {

    const commandObject = localCommands.find((cmd) => cmd.name === interaction.commandName);
    
    console.log("test 2....");

    if (!commandObject) return;

    console.log("test 3....");

    if (commandObject.devOnly) {
      if (!devs.includes(interaction.member.id)) {
        interaction.reply({ 
          content: "Only devs can run this command",
          epemeral: true
        });
        return;
      }
    }

    if (commandObject.testOnly) {
      if (!(interaction.guild.id === testServer)) {
        interaction.reply({
          content: "This command cannot run here!",
          epemeral: true
        })
      }
      return;
    }

    if (commandObject.permissionsRequired?.length) {
      for (const permission of commandObject.permissionsRequired) {
        if (!interaction.member.permissions.has(permission)) {
          interaction.reply({
            content: "Not enough perms",
            ephemeral: true
          });
          break;
        }
      }
    }

    if (commandObject.botPermissions?.length) {
      for (const permission of commandObject.botPermissions) {
        const bot = interaction.guild.members.me;
        if (!bot.permissions.has(permission)) {
          interaction.reply({
            content: "I don't have enough perms",
            ephemeral: true
          });
          break;
        }
      }
    }

    await commandObject.callback(client, interaction);

    console.log("hmm");

  } catch (error) {
    console.log("Error running the command: ", {error});
  }
}