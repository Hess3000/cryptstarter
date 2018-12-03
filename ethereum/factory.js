import web3 from './web3';
import CryptstarterFactory from './build/CryptstarterFactory.json';

const contractInstance = new web3.eth.Contract(
	JSON.parse(CryptstarterFactory.interface),
	'0x8323eFF86AD369688d2199c12e841e3a38Cf9580'
	);

export default contractInstance

