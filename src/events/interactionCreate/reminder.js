module.exports = (client, interaction) => {

  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "set-reminder") {
    interaction.reply("Bro, I am not your slave wtf??!!??");
  }

}