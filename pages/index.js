import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import contractInstance from '../ethereum/factory.js';
import Layout from '../components/layout.js';
import { Link } from '../routes';

class CrypstarterIndex extends Component {

	static async getInitialProps() {
		const campaigns = await contractInstance.methods.getDeployedContracts().call();

		return { campaigns };
	}

	renderCryptstarter() {
		const items = this.props.campaigns.map(address => {
			return {
				header: address,
				description: (
						<Link route={`/campaigns/${address}`}>
							<a>View Campaign</a>
						</Link>
					), 
				fluid: true
			};
		});

		return <Card.Group items={items} />
	}

	render() {
		return (
			<Layout>
				<div>
					
					<h3>Open campaigns</h3>
					
					<Link route="/campaigns/new">
						<a>
							<Button
								floated='right'
								content='Create New'
								icon='add'
								primary
							/>
						</a>
					</Link>	

					{this.renderCryptstarter()}
				</div>
			</Layout>
		);
	};
}

export default CrypstarterIndex;