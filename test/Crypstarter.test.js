const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CryptstarterFactory.json');
const compiledCryptstarter = require('../ethereum/build/Cryptstarter.json');

let factory;
let accounts;
let cryptstarter;
let cryptstarterAddress;

beforeEach(async () => {
	accounts = await web3.eth.getAccounts();

	factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: compiledFactory.bytecode})
		.send({ from: accounts[0], gas: '1000000'});

	await factory.methods.createCryptstarter('400000').send({
		from: accounts[0],
		gas: '3000000'
	});

	[cryptstarterAddress] = await factory.methods.getDeployedContracts().call();

	cryptstarter = await new web3.eth.Contract(
		JSON.parse(compiledCryptstarter.interface),
		cryptstarterAddress )

	console.log('The address of the cryptstarter is:' + cryptstarter.options.address + "\nThe address of the factory is:" + factory.options.address);
});

describe( 'campaigns', () => {
	it( 'deploys a factory and campaign', () => {
		assert.ok(factory.options.address),
		assert.ok(cryptstarter.options.address)
	});

	it( 'sets manager as address that created cryptstarter', async () => {
		const manager = await cryptstarter.methods.manager().call();
		assert.equal(manager, accounts[0]);
	});

	it('marks contributer as approver', async () => {
		await cryptstarter.methods.contribute().send({
			from: accounts[1],
			value: '23000000'
		});
		const isInvestor = await cryptstarter.methods.investors(accounts[1]).call();
		assert(isInvestor)
	});

	it('requires a minimum contribution', async () => {
		try {
			await cryptstarter.methods.contribute().send({
			value: '10',
			from: accounts[2]
		});
		} catch(err) {
			assert(err)
			console.log("wank hard:  " + err)
			return
		}
		assert(false)
	});

});