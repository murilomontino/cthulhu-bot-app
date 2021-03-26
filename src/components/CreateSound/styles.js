import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
	viewContainer:{
		flex: 1,
		position: 'relative',
		height: 'auto',
		
		width: Dimensions.get('window').width,
		backgroundColor: '#fff',
		// bottom: 200,
		// right: 0
			
	},
	inputStyle:{
		marginHorizontal: 10,
		marginVertical: 5,
		borderBottomWidth: 1,
		borderColor: '#000',
		padding: 5,
		textAlign: 'center'
	
	},
	touchableOptions:{
		padding: 15,
	},
	avatarStyle:{
		backgroundColor: '#fff',
		flex: 1,
		alignSelf: 'center',
		margin: 15,
		borderWidth: 1,
		borderColor: '#000'
	}
})