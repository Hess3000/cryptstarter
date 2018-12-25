import web3 from './web3';
import CampaignFactory from './build/Cryptstarter.json';

export default (address) => {
	return new web3.eth.Contract(
		JSON.parse(CampaignFactory.interface),
		address
	)
};
