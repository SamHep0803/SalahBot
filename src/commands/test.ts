import { Command } from "discord-akairo";
import { Message } from "discord.js";

export class TestCommand extends Command {
	constructor() {
		super("test", {
			aliases: ["test"],
		});
	}

	exec(message: Message) {
		console.log("test");
		message.reply("Test command sent!");
	}
}
