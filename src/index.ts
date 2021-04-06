import { SalahClient } from "./SalahClient";

const { token } = require("../config.json");

const client = new SalahClient();

client.once("ready", () => {
	if (client.user) {
		console.log(
			`Logged in as ${client.user.tag} successfully! Astaghfirullah.`
		);
	}
});

client.login(token);
