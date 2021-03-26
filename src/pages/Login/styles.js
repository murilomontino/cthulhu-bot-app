import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,		
	},
	containerKeyboard:{
		flex: 5,
		justifyContent: 'center',
	},
	
	viewKeyboard:{
		justifyContent: 'center',

	},
	logo:{
		paddingTop: 20,
		width:  '100%',
		height: Platform.OS==='web'? 200:'50%',
		marginBottom: 10,
		resizeMode: 'contain',
		alignSelf: 'center'
	},
	txtInput:{
		alignSelf: 'center',
		padding: 15,
		borderRadius: 30,
		width: '90%',
		backgroundColor: '#fff',
		color: '#000',
		fontSize: 16,
	},
	icon:{
	
	},
	containerTouchable:{
		backgroundColor: '#92d495',
		width: 'auto',
		padding: 10,
		borderRadius: 20,
		alignSelf: 'center'
	},
	touchableText:{
		color: '#465247',
	},
	touchableIcon:{
		paddingHorizontal: 10,
		alignSelf: 'flex-end',
		width: 'auto'
	}
})