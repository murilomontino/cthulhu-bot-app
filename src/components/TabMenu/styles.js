import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'rgba(255,255,255,0.1)',
		justifyContent:'space-between',
		alignContent: 'flex-end',
		maxHeight: 50
	},
	viewTouchable:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	touchableOpacity:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
		
	}
})