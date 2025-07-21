import {
  SlashCommandBuilder,
  CommandInteraction
} from "discord.js";

export const command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Retorna a latência do Bot."),
  
  async execute(i: CommandInteraction) {
    const response = await i.reply({
      content: ":ping_pong: Ping...",
      withResponse: true
    });
    await i.editReply(`:ping_pong: **Pong!**\n- **WebSocket**: ${i.client.ws.ping}ms\n- **Resposta**: ${response.resource.message.createdTimestamp - i.createdTimestamp}ms`);
  }
};