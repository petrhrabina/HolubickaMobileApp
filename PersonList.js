import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles';

const PersonList = ({ people, menuOpen, setMenuOpen }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>Seznam lidí</Text>
			<TouchableOpacity
				style={styles.menuButton}
				onPress={() => setMenuOpen(!menuOpen)}
			>
				<Text style={styles.menuButtonText}>≡</Text>
			</TouchableOpacity>
			<View style={styles.row}>
				<Text style={styles.cell}>Jméno</Text>
				<Text style={styles.cell}>Věk</Text>
				<Text style={styles.cell}>Pohlaví</Text>
			</View>
			<ScrollView style={styles.list}>
				{people.map((person, index) => (
					<View key={index} style={styles.row}>
						<Text style={styles.cell}>{person.name}</Text>
						<Text style={styles.cell}>{person.age}</Text>
						<Text style={styles.cell}>{person.gender}</Text>
					</View>
				))}
			</ScrollView>
		</View>
	);
};

export default PersonList;