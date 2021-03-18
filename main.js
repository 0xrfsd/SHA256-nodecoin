const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('');
const myWalletAddress = myKey.getPublic('hex');

let nodecoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, '', 1);
tx1.signTransaction(myKey);
nodecoin.addTransaction(tx1);

console.log('\n Starting the miner...'); 
nodecoin.minePendingTransactions(myWalletAddress);

// Proof-of-work changing the way aushauhsauh!
// nodecoin.chain[1].transactions[0].amount = 1;
console.log('Is chain valid? ' + nodecoin.isChainValid());

console.log('\n Balance3 is: ' + nodecoin.getBalanceOfAddress(myWalletAddress));
