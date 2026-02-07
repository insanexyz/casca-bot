const { EmbedBuilder } = require("discord.js");

module.exports = (client, interaction) => {

  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "embed") {
    const title = interaction.options.get("title").value;
    const description = interaction.options.get("description").value;
    let color = interaction.options.get("color").value;
    if (color === null) {
      color = "#FFF000";
    }
    const embed = new EmbedBuilder()
      .setTitle(title)
      .setDescription(description)
      .setColor(color);

    interaction.reply({ embeds: [embed] });
  }
}