module.exports = (client, interaction) => {

  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "test") {
    // await interaction.deferReply();
    interaction.reply("Yo bro");
  }

}