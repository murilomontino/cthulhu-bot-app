import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
	viewCategory:{
		// position: 'absolute',
		height: Platform.OS==='ios'? 60:50,
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon:{
		flex: 1,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textCategory:{
		flex: 4
	},
	checkBox:{
		flex: 1
	},
	touchableCategory:{
		flex: 1
	},
})