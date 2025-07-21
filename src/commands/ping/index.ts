import {
  SlashCommandBuilder,
  CommandInteraction
} from "discord.js";

export const command = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Retorna a latência do Bot."),
  
  async execute(i: CommandInteraction) {
    await i.reply("Pong!");
  }
};