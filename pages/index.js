import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import contractInstance from '../ethereum/factory.js';
import Layout from '../components/layout.js'

class CrypstarterIndex extends Component {

	static async getInitialProps() {
		const campaigns = await contractInstance.methods.getDeployedContracts().call();

		return { campaigns };
	}

	renderCryptstarter() {
		const items = this.props.campaigns.map(address => {
			return {
				header: address,
				description: <a>Link to address details</a>,
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
					
					<Button
						floated='right'
						content='Create New'
						icon='add'
						primary
					/>
					{this.renderCryptstarter()}
				</div>
			</Layout>
		);
	};
}

export default CrypstarterIndex;