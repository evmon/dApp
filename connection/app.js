const contract = require('truffle-contract');

const WhiteList_artifact = require('../build/contracts/WhiteList.json');
var WhiteList = contract(WhiteList_artifact);

module.exports = {
  // start: function(callback) {
  //   var self = this;

  //   // Bootstrap the WhiteList abstraction for Use.
  //   WhiteList.setProvider(self.web3.currentProvider);

  //   // Get the initial account balance so it can be displayed.
  //   self.web3.eth.getAccounts(function(err, accs) {
  //     if (err != null) {
  //       alert("There was an error fetching your accounts.");
  //       return;
  //     }

  //     if (accs.length == 0) {
  //       alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
  //       return;
  //     }
  //     self.accounts = accs;
  //     self.account = self.accounts[2];

  //     callback(self.accounts);
  //   });
  // },
  addToWhitelist: function(bonus, receiver, callback) {
    var self = this;

    // Bootstrap the WhiteList abstraction for Use.
    WhiteList.setProvider(self.web3.currentProvider);

    var meta;
    WhiteList.deployed().then(function(instance) {
      meta = instance;
      var r = meta.addToWhitelist(receiver, bonus);
      // console.log(r)
      return r;
    }).then(function() {
      
    }).catch(function(e) {
      console.log(e);
      callback("ERROR 404");
    });
  },
  getBonus: function(account, callback) {
    var self = this;
    console.log(account)
    // Bootstrap the WhiteList abstraction for Use.
    WhiteList.setProvider(self.web3.currentProvider);

    var meta;
    WhiteList.deployed().then(function(instance) {
      meta = instance;
      return meta.getBonus.call(account);
    }).then(function(value) {
        callback(value.valueOf());
    }).catch(function(e) {
        console.log(e);
        callback("Error 404");
    });
  },
}
