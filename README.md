NFT Metadata Fetch API
----------------------
Overview
---------
This project demonstrates an API endpoint designed to fetch metadata and related information about NFTs from a public smart contract. It uses Moralis for blockchain integration and metadata retrieval.

Features
----------
-Fetches NFT metadata, including:
   Token ID
   Token URI
   Attributes
   Owner details
   Floor price (in ETH and USD)
-Retrieves data from a deployed Ethereum smart contract.
-Outputs results directly to the console for simplicity.

Setup and Installation
-----------------------
1. Clone the Repository:
   git clone(https://github.com/Livia-11/NFT-Fetcher).git
2. Install Dependencies:
Navigate to the project directory and run:
    npm install
3. Environment Setup:
Create a .env file in the root directory with the following variables:
   MORALIS_API_KEY=your_moralis_api_key  
   PORT=3000
4. Start the Server:
   node server/index.js
   
API Endpoint
-------------

LiviaKireziApiTest
Route: /api/LiviaKireziApiTest
Method: GET
Description: Fetches NFT metadata from a public Ethereum smart contract.

Result
-------
The API outputs data to the console, including:

Contract address
Token IDs
Metadata (name, image, attributes)
Owner details
Floor prices

Technologies Used
------------------
Node.js: Server-side scripting
Moralis: Blockchain integration and NFT metadata retrieval
Solidity: Smart contract development

Happy Coding!!!🎉
