module.exports = (client, message) => {

  const LOG_CHANNEL_IDS = "1466516179110854668";
  if (message.author.bot) return;

  // Only log my server
  if (message.guildId !== "1424982467927998526") return;

  const logChannel = client.channels.cache.get(LOG_CHANNEL_IDS);

  // If log channel isnt present then return
  if (!logChannel) return;

  logChannel.send(`New message from ${message.author.tag} in ${message.channel.name}: ${message.content}`);
}