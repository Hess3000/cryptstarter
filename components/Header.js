import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
	return (
		<Menu style={ { marginTop: '10px'} }>
			<Menu.Item>
				Cryptstarter
			</Menu.Item>

			<Menu.Menu position="right">

				<Menu.Item>Create Campaign</Menu.Item>

				<Menu.Item icon="add"></Menu.Item>

			</Menu.Menu>
		</Menu>
	);
}