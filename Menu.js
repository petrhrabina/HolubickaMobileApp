import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Menu = ({ setSelectedPage }) => {
	return (
		<View style={styles.menu}>
			<Text style={styles.menuItem} onPress={() => setSelectedPage('Home')}>
				Home
			</Text>
			<Text style={styles.menuItem} onPress={() => setSelectedPage('People')}>
				Lidé
			</Text>
		</View>
	);
};

export default Menu;
