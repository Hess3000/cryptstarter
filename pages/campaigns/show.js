import React, { Component } from 'react';
import Layout from '../../components/layout';
import Campaign from '../../ethereum/campaign.js'
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3.js';
import ContributeForm from '../../components/ContributeForm'
import { Link } from '../../routes';

class CampaignShow extends Component {
	static async getInitialProps(props) {
		const campaign = Campaign(props.query.address);
		const summary = await campaign.methods.getSummary().call();
		console.log(props);
		
		return{
			address: props.query.address,
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
				header: web3.utils.fromWei(campaignBalance, 'ether'),
				description: "Amount of ether in this campaign",
				meta: 'Campaign balance'
			}];

		return <Card.Group items={items} />
	}

	render() {

		return (
			<Layout>
				<h3>Campaign Show</h3>
				
				<Grid>
					<Grid.Row>
						<Grid.Column width={10}>
							{this.renderCards()}
						</Grid.Column>
						<Grid.Column width={6}>
							<ContributeForm address={this.props.address} />
						</Grid.Column>
					</Grid.Row>	
					<Grid.Row>
						<Grid.Column>
							<Link route={`/campaigns/${this.props.address}/requests`}>
								<a>
									<Button primary>View requests</Button>
								</a>
							</Link>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Layout>	
		)
	}
}

export default CampaignShow