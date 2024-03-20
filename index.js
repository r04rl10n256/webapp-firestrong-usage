const webapp_firestrong_firewall = require('webapp-firestrong-firewall');
const webapp_firestrong_usage = require('webapp-firestrong-usage');
const dotenv = require('dotenv');
const node_sass = require('node-sass');
const mocha = require('mocha');
const helmet = require('helmet');
const moment = require('moment');
const body_parser = require('body-parser');
const react = require('react');
const axios = require('axios');
const webpack_cli = require('webpack-cli');
const eth_crypto = require('eth-crypto');
const commander = require('commander');
const socket.io = require('socket.io');
const bcrypt = require('bcrypt');

module.exports = {
  myFunction: function() { console.log('Exported function called'); },
  myVariable: 'Exported variable'
};

// Convert a CSV string to an array of objects
const csvString = `Name, Age, Country\nJohn Doe, 30, USA\nJane Smith, 25, Canada`;
const csvToArray = (csv) => {
  const lines = csv.split('\n');
  const headers = lines[0].split(',').map(header => header.trim());
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(value => value.trim());
    const entry = {};
    headers.forEach((header, index) => {
      entry[header] = values[index];
    });
    data.push(entry);
  }
  return data;
}
console.log('CSV to Array:', csvToArray(csvString));

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log([1, 2, 3, 4].reduce(reducer));

const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add('some text');
console.log(mySet.has(1));

// Calculate factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log('Factorial of 5:', factorial(5));

// Parse and manipulate XML data using xml2js library
const xml2js = require('xml2js');
const xmlString = `<book><title>Node.js Guide</title><author>John Doe</author></book>`;
const parseXML = (xml) => {
  return new Promise((resolve, reject) => {
    xml2js.parseString(xml, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}
parseXML(xmlString)
  .then(parsedXML => {
    const title = parsedXML.book.title[0];
    console.log('Parsed XML - Title:', title);
  })
  .catch(error => console.error('Error parsing XML:', error));

const net = require('net');
const server = net.createServer((socket) => {
  socket.end('Hello from TCP server!\n');
});
server.listen(1337, '127.0.0.1');

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
const delay = async () => {
  console.log('Start delay');
  await setTimeoutPromise(1000);
  console.log('End delay');
};
delay();

let count = 0;
const interval = setInterval(() => {
  console.log(`Interval count: ${++count}`);
  if (count === 5) clearInterval(interval);
}, 1000);

// Deploy a smart contract using Hardhat
const hre = require('hardhat');
const { ethers } = hre;

async function main() {
  const YourContract = await ethers.getContractFactory('YourContract');
  const contract = await YourContract.deploy();
  await contract.deployed();

  console.log('Contract deployed to:', contract.address);
}

main().catch(err => {
  console.error('Error deploying contract:', err);
});

const fs = require('fs');
const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');
readableStream.pipe(writableStream);
console.log('File copied using streams');

const calculateInterest = (principal, rate, time) => {
  return principal * rate * time / 100;
};
console.log(calculateInterest(1000, 5, 2));