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
			return
		}
		assert(false)
	});

	it('processes requests', async () => {
		const receiver = accounts[4];
		const investor1 = accounts[2];
		const investor2 = accounts[5];
		var originalBalance = await web3.eth.getBalance(receiver);
		originalBalance = web3.utils.fromWei(originalBalance, 'ether')
		console.log("Receiver balance before finalise is:  "+originalBalance);
		
		// create a request
		const newRequest = await cryptstarter.methods
			.paymentRequest('Facebook ads', web3.utils.toWei('5', 'ether'), receiver)
			.send({
			from: accounts[0],
			gas: '1000000'
		});

		// become an investor
		await cryptstarter.methods.contribute().send({
			from: investor1,
			value: web3.utils.toWei('5', 'ether')
		});

		await cryptstarter.methods.contribute().send({
			from: investor2,
			value: web3.utils.toWei('5', 'ether')
		});

		// appprove request
		await cryptstarter.methods.approveRequest(0).send({
			from: investor1,
			gas: '1000000'
		});

		await cryptstarter.methods.approveRequest(0).send({
			from: investor2,
			gas: '1000000'
		})

		await cryptstarter.methods.finaliseRequest(0).send({
			from: accounts[0],
			gas: '1000000'
		});

		const approved = await cryptstarter.methods.requests(0).call();
		var approvedValue = web3.utils.fromWei(approved.value, 'ether')
		var balance = await web3.eth.getBalance(receiver);
		balance = web3.utils.fromWei(balance, 'ether')
		console.log("Receiver balance AFTER finalise is:  "+balance);

		assert.equal(approved.complete, true);
		assert.equal(balance, (parseFloat(originalBalance)+parseFloat(approvedValue)))

	});

});