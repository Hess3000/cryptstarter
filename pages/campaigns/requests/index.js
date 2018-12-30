import React, { Component } from 'react'
import Layout from '../../../components/layout';
import { Button } from 'semantic-ui-react';
import web3 from '../../../ethereum/web3.js';
import { Link } from '../../../routes';

class RequestIndex extends Component {
	static getInitialProps(props) {

		return {
			address: props.query.address
		}
	}

	render() {
		return (
			<Layout>
				<h3>Requests</h3>
				<Link route={ `/campaigns/${this.props.address}/requests/new` }>
					<a>
						<Button primary>
							Add payment request
						</Button>
					</a>
				</Link>
			</Layout>
		);
	}
}

export default RequestIndex;