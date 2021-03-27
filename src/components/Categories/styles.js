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
	scrollCategories:{
		flex: 4,
	},
	footer:{
		flex: 1,
		backgroundColor: '#fff',
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderTopColor: '#000',
		minHeight: 60,
		maxHeight: 60,
		borderTopWidth: 1
	},
	buttonFooter:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	}, 
	textFooter:{
		fontSize: 12,
		padding: 1,
		textAlign: 'center'
	}
})