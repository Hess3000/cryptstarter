import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../../components/layout';
import Campaign from "../../../ethereum/campaign.js";
import web3 from '../../../ethereum/web3';
import { Router } from '../../../routes';

class requestNew extends Component {

	state = {
		description: '',
		value: '',
		recipientAddress:  '',
		loading: '',
		error: ''
	}

	static async getInitialProps(props) {
		const { address } = props.query;
		

		return { address };
	}

	

	onSubmit = async (event) => {
		event.preventDefault();
		const campaign = Campaign(this.props.address);
		const { description, value, recipientAddress } = this.state;

		this.setState({loading: true})

		try {
			const accounts = await web3.eth.getAccounts();
			await campaign.methods.paymentRequest(
				description,
				value,
				recipientAddress
			).send({
				from: accounts[0]});
			console.log(accounts[0])
		}

		catch(err) {
			this.setState({error: err.message})
			console.log("paymentRequest", err.message)
		}

		this.setState({ loading: false})
	}

	render() {

		return(
			<Layout>
				<h3>Create a request</h3>
				<Form onSubmit={this.onSubmit} error={!!this.state.error} >
					<Message
						error
						header='We have an problem!'
						content={this.state.error}
					/>
					<Form.Field>
						<Input
							label='Description'
							value={this.setState.description}
							onChange={event =>
								this.setState({ description: event.target.value })}
						/>
					</Form.Field>

					<Form.Field>
						<Input
							label='Amount in Ether'
							value={this.setState.value}
							onChange={event =>
								this.setState({ value: event.target.value })}
						/>
					</Form.Field>

					<Form.Field>
						<Input
							label='Recipient address'
							value={this.setState.recipientAddress}
							onChange={event =>
								this.setState({ recipientAddress: event.target.value })}
						/>
					</Form.Field>

					<Button primary loading={!!this.state.loading}>
						Create
					</Button>
				</Form>
			</Layout>
		)	
	}
}		

export default requestNew;
