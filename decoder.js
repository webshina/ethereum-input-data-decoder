const Web3 = require('web3');
const fs = require('fs');

// Initialize web3 with a provider
const web3 = new Web3(
  'https://eth-mainnet.g.alchemy.com/v2/gdtsi79h9hZu9lOnGXhkFNku4uStNDXW'
);

// Replace 'YOUR_CONTRACT_ABI' with the actual ABI for the contract
const contractABI = [];

// The input data from the transaction
const inputData = '';

// Extract the function selector (first 10 characters of the input data)
const functionSelector = inputData.slice(0, 10);

// Find the corresponding function in the ABI
const abiItem = contractABI.find((item) => {
  return (
    item.type === 'function' &&
    web3.eth.abi.encodeFunctionSignature(item) === functionSelector
  );
});

if (!abiItem) {
  console.error('Function not found in ABI');
} else {
  // Decode the parameters
  const params = web3.eth.abi.decodeParameters(
    abiItem.inputs,
    inputData.slice(10)
  );

  console.log(params);
}
