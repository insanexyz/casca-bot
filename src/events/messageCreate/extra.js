module.exports = (client, message) => {
  if (message.author.id === client.user.id) {
    return;
  }

  if (message.content == "hello") {
    const x = getRandomInt(0, 1);
    if (x) {
      message.reply("https://nohello.net");
    }
  }

  if (message.content === "+rules") {
    const embed = new EmbedBuilder()
      .setTitle("📘Public Server Rules")
      .setDescription(`
1) Just follow discord tos
2) Use common sense and dont be a dick
3) Rest no rule as such
  `)
      .setColor("#000000");

    const rulesChannel = client.channels.cache.get("1469597312442699950");
    if (!rulesChannel) return;
    rulesChannel.send({ embeds: [embed] });
  }

  // if (message.content.toLocaleLowerCase().includes("insane")) {
  //   client.channels.cache.get("1466130239057821716").send("<@434738865136336896> mentioned!!");
  // }

  if (message.content.toLocaleLowerCase().includes("hitler")) {
    message.reply("Hitler mentioned. You shall be reported to the police 🚨 🚨 !!")
  }

  if (message.content === "+online") {
    message.reply("kindly fuck off 🖕");
  }

  // if (message.mentions.has(client.user)) {
  //   if (message.author.id === "833593810444746775" || message.author.id === "1383428957486977119") {
  //     message.reply("Hey!! Whats up");
  //   } else {
  //     message.reply("Tf you ping me for??");
  //   }
  // }

  // console.log(message.content.length);

  // Command format: +say your message here
  if (message.content.startsWith("!say")) {

    if (message.author.id === "434738865136336896") {
      const text = message.content.slice(4); // remove "!say " from start, extra trim is automatic
      console.log(text);

      // This not required as if text is empty nothing happens idk why
      if (text.length === 0) return message.reply("You need to provide a message.");

      // Delete the admin’s original command message (optional)
      message.delete().catch(() => { });

      // Send the text as the bot
      message.channel.send(text);
    }
  }
}