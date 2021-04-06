import { AkairoClient, CommandHandler } from "discord-akairo";

const { prefix } = require("../config.json");

export class SalahClient extends AkairoClient {
	commandHandler: CommandHandler;
	constructor() {
		super(
			{
				ownerID: "99819835273252864",
			},
			{
				disableMentions: "everyone",
			}
		);

		this.commandHandler = new CommandHandler(this, {
			directory: "./src/commands/",
			prefix,
			allowMention: true,
		});

		this.commandHandler.loadAll();
	}
}
