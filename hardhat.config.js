//so it'll require the env file for the url and the private key
require("dotenv").config(({path: ".env"}));
require("@nomicfoundation/hardhat-toolbox");

//const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
//const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @//type import('hardhat/config').HardhatUserConfig */
module.exports = {

// importance?
// how do we determine which network o testnetwork to deploy to?
//how do we select which account to deploy from?
  solidity: "0.8.4",
  networks: {
    sepolia:{
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};
