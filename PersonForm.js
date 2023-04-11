import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Modal,
	Button,
} from 'react-native';

import styles from './styles';

const PersonForm = ({ people, setPeople }) => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [gender, setGender] = useState('');
	const [modalVisible, setModalVisible] = useState(false);const handleAddPerson = () => {
		const newPerson = { name, age, gender };
		const updatedPeople = [...people, newPerson].sort((a, b) => a.age - b.age);
		setPeople(updatedPeople);
		setName('');
		setAge('');
		setGender('');
		setModalVisible(false);
	};

	return (
		<View style={styles.form}>
			<TextInput
				placeholder="Jméno"
				value={name}
				onChangeText={text => setName(text)}
				style={styles.input}
			/>
			<TextInput
				placeholder="Věk"
				value={age}
				onChangeText={text => setAge(text)}
				keyboardType="numeric"
				style={styles.input}
			/>
			<TouchableOpacity onPress={() => setModalVisible(true)} style={styles.pickerButton}>
				<Text style={styles.pickerButtonText}>{gender ? gender : "Pohlaví"}</Text>
			</TouchableOpacity>
			<Button title="Přidat osobu" onPress={handleAddPerson} />
			<Modal
				visible={modalVisible}
				animationType="slide"
				transparent={true}
			>
				<View style={styles.modalContainer}>
					<View style={styles.modal}>
						<TouchableOpacity onPress={() => { setGender("Muž"); setModalVisible(false) }}>
							<Text style={styles.modalItem}>Muž</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => { setGender("Žena"); setModalVisible(false) }}>
							<Text style={styles.modalItem}>Žena</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => setModalVisible(false)}>
							<Text style={styles.modalItem}>Zrušit</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default PersonForm;
