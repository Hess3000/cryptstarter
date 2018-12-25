import React, { Component } from 'react';
import Layout from '../../components/layout';
import Campaign from '../../ethereum/campaign.js'
import { Card } from 'semantic-ui-react';
import web3 from '../../ethereum/web3.js';
import ContributeForm from '../../components/ContributeForm'

class CampaignShow extends Component {
	static async getInitialProps(props) {
		const campaign = Campaign(props.query.address);
		const summary = await campaign.methods.getSummary().call();
		console.log(props);
		
		return{
			campaignBalance: summary[0],
			minimumContribution: summary[1],
			requestsCount: summary[2],
			investorsCount: summary[3],
			managerAddress: summary[4]
		};
	}

	renderCards () {
		const {
			managerAddress,
			campaignBalance,
			minimumContribution,
			requestsCount,
			investorsCount
		} = this.props;

		const items = [
			{
				header: managerAddress,
				description: "The manager created this campaign and can create payment requests",
				meta: 'Address of manager',
				style: { overflowWrap: 'break-word' }
			},
			{
				header: web3.utils.fromWei(minimumContribution, 'ether'),
				description: "The minimum amount of ether needed to become an investor",
				meta: 'Minimum contribution (ether)'
			},
			{
				header: requestsCount,
				description: "The campaign creator can ask for payment requests",
				meta: 'Payment requests count'
			},
			{
				header: investorsCount,
				description: "Number of investors in this campaign who have already donated",
				meta: 'Investors'
			},
			{
				header: campaignBalance,
				description: "Amount of ether in this campaign",
				meta: 'Campaign balance'
			}];

		return <Card.Group items={items} />
	}

	render() {

		return (
			<Layout>
				<h3>Campaign Show</h3>
				{this.renderCards()}
				<ContributeForm />
			</Layout>	
			)
		
	}
}

export default CampaignShow