import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'flex-start',
		
	},
	viewContainer:{
		flex: 1,
		width: '100%'
	},
	viewTitle:{
		height: 50,
		borderBottomWidth: 1,
		borderBottomColor: '#000',
		alignItems: 'center'
	},
	textTitle:{
		flex: 1,
		padding: 15,
		fontWeight: 'bold',
		fontSize: 16
	},
	viewCategories:{
		flex: 7,
	},
	viewCategory:{
		padding: 5,
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
	},
	touchableCategory:{
		flex: 1,
		height: 'auto',
	},
	icon:{
		flex: 1,
		padding: 10
	},
	textCategory:{
		padding: 5,
		flex: 4
	},
	checkBox:{
		flex: 1
	},
	footer:{
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderTopColor: '#000',
		borderTopWidth: 1
	},
	buttonFooter:{
		flex: 1,
		padding: 20,
		alignItems: 'center',
		justifyContent: 'center',
	}, 
	textFooter:{
		fontSize: 12,
		padding: 1,
		textAlign: 'center'
	}
})