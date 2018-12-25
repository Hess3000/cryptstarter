const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/Cryptstarterfactory.json');
const web3 = require()

const provider = new HDWalletProvider(
  'tooth rescue frown bicycle road during cup story spoil engage obey area',
  'https://rinkeby.infura.io/v3/957ec50b453f43fe8553147dc1cdcf60'
	);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();