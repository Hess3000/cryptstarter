import React, { Component } from 'react';
import Layout from '../../components/layout.js';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory.js';
import web3 from '../../ethereum/web3.js';

class CampaignNew extends Component {
	state = {
		minimumContribution: '',
		errorMessage: ''
	};

	onSubmit = async (event) => {
		event.preventDefault();

		try {
			const accounts = await web3.eth.getAccounts();
			await factory.methods
				.createCryptstarter(this.state.minimumContribution)
				.send({
					from: accounts[0]
			})
		} catch(err) {
			this.setState({ errorMessage: err.message });
		};
		
	};

	render() {
		return (
			<Layout>
				<h3>Create a new campaign</h3>
				<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
					<Form.Field>
						<label>Minimum Contribution</label>
						<Input 
							label="Wei"
							labelPosition="right"
							value={this.setState.minimumContribution}
							onChange={event => 
								this.setState({ minimumContribution: event.target.value})}
						 />
					</Form.Field>
					<Message error header="Ooops!" content={this.state.errorMessage}/>
					<Button primary>Create!</Button>
				</Form>
			</Layout>
		)
	}
}

export default CampaignNew;