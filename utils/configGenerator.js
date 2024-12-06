import axios from "axios";
import fs from "fs";

// Flower API Endpoint
const FLOWER_API_URL = "https://flower-api.herokuapp.com/api/flowers";

const generateConfig = async () => {
  try {
    // Fetch flower data
    const response = await axios.get(FLOWER_API_URL);
    const flowers = response.data;

    // Transform data to match the required format
    const flowerConfig = flowers.map((flower) => ({
      id: flower.id,
      name: flower.name,
      image: flower.image,
      description: `<p>${flower.description}</p>`, // Wrap description in a React-compatible format
    }));

    // Create the config file
    const configContent = `export const flowerConfig = ${JSON.stringify(
      flowerConfig,
      null,
      2
    )};\n`;

    fs.writeFileSync("src/conifg/index.tsx", configContent);
    console.log("Config file created successfully at src/config.ts!");
  } catch (error) {
    console.error("Error generating config file:", error.message);
  }
};

generateConfig();
