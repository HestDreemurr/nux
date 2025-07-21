import {
  Events,
  CommandInteraction,
  MessageFlags
} from "discord.js";

export const event = {
  name: Events.InteractionCreate,
  async execute(interaction: CommandInteraction) {
    if (!interaction.isChatInputCommand()) return;
    
    const command = interaction.client.commands.get(interaction.commandName);
    
    if (!command) {
      console.error(`O comando "${interaction.commandName}" não foi encontrado.`);
      return;
    }
    
    try {
      await command.execute(interaction);
    } catch (err) {
      console.error(err);
      
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: "Houve um erro ao executar o comando.",
          flags: MessageFlags.Ephemeral
        });
      } else {
        await interaction.reply({
          content: "Houve um erro ao executar o comando.",
          flags: MessageFlags.Ephemeral
        });
      }
    }
  }
};