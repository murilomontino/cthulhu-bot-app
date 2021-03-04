import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},

	txtInput:{
		padding: 15,
		backgroundColor: '#fff',
		borderRadius: 30,
		width: '80%',
		fontSize: 20,
 
	},
	logo:{
		width: 200,
		height: 200,
		resizeMode: 'contain',
	},
	txt:{
		fontSize: 45
	},
	txtWebInvalido:{
		color:'#f04141',
		fontSize: 20,
		display: 'flex',
		fontFamily: 'Fantasy'
		
	},
	touchableButton:{
		padding: 15,
	},
	touchableText:{
		fontSize: 30,
		fontWeight: 'bold',
		marginRight: 20
	},
	containerTouchable:{
		width: '80%',
		height: 40
	},
	touchableNotToken:{

	},
	touchableNotText:{

	}
	
})