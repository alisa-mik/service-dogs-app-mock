const gen = require("mocking_g");

gen.schemas.setPath("schema");

const myDogsImagesType = {
	dogsImage: {
		name: "dogs images",
		generate: () => {
			return "https://dog.ceo/api/breeds/image/random";
		},
		group: "images",
	},
};

gen.types.addTypes(myDogsImagesType);
