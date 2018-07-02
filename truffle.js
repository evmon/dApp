// Allows us to use ES6 in our migrations and tests.
var HDWalletProvider = require("truffle-hdwallet-provider-privkey");

var privateKey = "***";

require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*'
    },
    rinkeby: {
      provider: new HDWalletProvider(privateKey, `https://rinkeby.infura.io/***`),
      network_id: 4,
      gas: 6612388,
    }
  }
}
