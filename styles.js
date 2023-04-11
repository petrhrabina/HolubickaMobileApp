import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		flex: 1,
		width: '100%',
		alignItems: 'flex-start',
		paddingTop: 50,
		paddingHorizontal: 20,
	},
	headerText: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
		alignSelf: 'center',
	},
	list: {
		width: '100%',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	cell: {
		flex: 1,
		fontSize: 16,
		textAlign: 'center',
	},
	form: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	input: {
		width: '100%',
		height: 40,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	modalContainer: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		alignItems: 'center',
		justifyContent: 'center',
	},
	modal: {
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 20,
		width: '80%',
	},
	modalItem: {
		fontSize: 18,
		paddingVertical: 10,
	},
	pickerButton: {
		width: '100%',
		height: 40,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		marginBottom: 10,
		paddingHorizontal: 10,
		justifyContent: 'center',
	},
	pickerButtonText: {
		fontSize: 16,
	},
	menu: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		paddingTop: 50,
		paddingHorizontal: 20,
	},
	menuItem: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	menuButton: {
		position: 'absolute',
		top: 50,
		right: 20,
		padding: 10,
		borderRadius: 25,
		backgroundColor: '#eee',
	},
	menuButtonText: {
		fontSize: 18,
	},
});

export default styles;