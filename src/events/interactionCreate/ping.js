module.exports = (client, interaction) => {

  if (!interaction.isChatInputCommand()) return;

  // if (interaction.commandName === "ping") {
  //   // Vibed
  //   const sent = await interaction.reply({
  //     content: "🏓 Pinging...",
  //     fetchReply: true
  //   });

  //   const timeDiff = sent.createdTimestamp - interaction.createdTimestamp;
  //   const apiLatency = Math.round(client.ws.ping);

  //   await interaction.editReply({
  //     content: `🏓 **Pong!**\n⏱️ Latency: ${timeDiff}ms\n🌐 API Latency: ${apiLatency}ms`
  //   });
  // }
}