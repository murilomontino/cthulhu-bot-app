import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
	viewContainer:{
		flex: 2,
		minHeight: 200,
		position: 'relative',
		width: Dimensions.get('window').width - 25,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		borderRadius: 10,
		marginTop: 10
		// bottom: 200,
		// right: 0
			
	},
	inputView:{
		width: Dimensions.get('window').width - 25
	},
	inputStyle:{
		marginHorizontal: 10,
		marginVertical: 5,
		borderBottomWidth: 1,
		borderColor: '#000',
		padding: 5,
		textAlign: 'center',
		width: '75%',
		alignSelf: 'center',

	},
	touchableOptions:{
		padding: 15,
	},
	avatarStyle:{
		minHeight: 75,
		maxHeight: 75,
		backgroundColor: '#fff',
		flex: 1,
		alignSelf: 'center',
		margin: 15,
		borderWidth: 1,
		borderColor: '#000'
	}
})