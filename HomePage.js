import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const HomePage = ({ menuOpen, setMenuOpen }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>Domovská stránka</Text>
				<TouchableOpacity
					style={styles.menuButton}
					onPress={() => setMenuOpen(!menuOpen)}
				>
					<Text style={styles.menuButtonText}>≡</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default HomePage;
