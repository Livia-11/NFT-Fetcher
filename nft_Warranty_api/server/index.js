// Import statements using ES Modules
import express from "express"; // Import Express framework
import Moralis from "moralis"; // Import Moralis SDK
import "dotenv/config"; // Load environment variables

const app = express(); // Initialize Express app
const port = 3000; // Define port number

// Function to initialize Moralis SDK
const startMoralis = async () => {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY, // Load API key from .env file
  });
  console.log("✅ Moralis Initialized!");
};

// Task Endpoint: Fetch NFT details from a smart contract
app.get("/LiviaKireziApiTest", async (req, res) => {
  try {
    // Replace this with a real NFT contract address
    const contractAddress = "0x22c36BfdCef207F9c0CC941936eff94D4246d14A"; // CryptoPunks contract address
    const chain = "0x1"; // Ethereum mainnet (valid chain ID)

    // Fetch NFT details from the contract using Moralis
    const response = await Moralis.EvmApi.nft.getContractNFTs({
      address: contractAddress,
      chain, // Use the correct chain identifier
      limit: 5, // Get the first 5 NFTs
    });

    console.log(response.raw); // Log response to console
    res.json(response.raw); // Send response as JSON
  } catch (error) {
    console.error("❌ Error fetching NFT data:", error);
    res.status(500).send("Failed to fetch NFT data");
  }
});


// Start Moralis and run the server
startMoralis().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
});
