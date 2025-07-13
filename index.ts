import { writeFile } from "fs/promises";

const initJson = async () => {
	const json = {
		stockName: "NIFTY",
		stockId: "NIFTY",
		data: [{ date: "2021-01-01", signal: "BUY", closePrice: 100 }],
	};
	await writeFile("data.json", JSON.stringify(json, null, 2));
	return json;
};

initJson();
