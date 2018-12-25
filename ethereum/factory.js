import web3 from './web3';
import CryptstarterFactory from './build/CryptstarterFactory.json';

const contractInstance = new web3.eth.Contract(
	JSON.parse(CryptstarterFactory.interface),
	'0xAB91860Dc6C4F8075bbAE8A7cc56ef3d3B391782'
	);

export default contractInstance

