import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
const HDWalletProvider = require('@truffle/hdwallet-provider');
const INFURA_API_KEY = process.env.INFURA_AVALANCHEFUJI;
const MNEMONIC = process.env.METAMASK_MNEMONIC;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    fuji: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_API_KEY),
      network_id: '43113',
      gas: 4465030
    }
  },
  compilers: {
    solc: {
      version: "0.8.13",
    }
  }
};