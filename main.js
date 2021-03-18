const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('a5542e0f294c68a3117eb2cba4318e7e997d832415e082be51bbbfa3eac78052');
const myWalletAddress = myKey.getPublic('hex');

let nodecoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, '0427bf80ee5cd0f0deba40cf4f1f7395d546940e38d90ebe3f07592bec2ddf32e11da544d20448b3279c4c6d41d98d28f95fc6b0b6f41145a4b8cae617c2d796bf', 1);
tx1.signTransaction(myKey);
nodecoin.addTransaction(tx1);

console.log('\n Starting the miner...'); 
nodecoin.minePendingTransactions(myWalletAddress);

// Proof-of-work changing the way aushauhsauh!
// nodecoin.chain[1].transactions[0].amount = 1;
console.log('Is chain valid? ' + nodecoin.isChainValid());

console.log('\n Balance3 is: ' + nodecoin.getBalanceOfAddress(myWalletAddress));
