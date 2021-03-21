import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button'
import { useAuthentication } from '../../context/ContextAuthentication'
// import { useActionSheet } from '@expo/react-native-action-sheet'

const Dice: React.FC = () => {
	const { setIsPrivate } = useAuthentication()

	const diceClick = () => setIsPrivate(false)

	// const {showActionSheetWithOptions} = useActionSheet()

	// const onOpenSheet = () => {
	// 	const options = ['Delete', 'Save', 'Cancel']
	// 	const destructiveButtonIndex = 0
	// 	const cancelButtonIndex = 2
	// 	showActionSheetWithOptions(
	// 		{
	// 			options,
	// 			destructiveButtonIndex,
	// 			cancelButtonIndex
	// 		},
	// 		buttonIndex => {
	// 			if(buttonIndex===2){
	// 				console.log('Save Chega AKi')
	// 			}
	// 		},
	// 	)
	// }
	
	
	
	return (
		<View>
			<Button
				onPress={diceClick}
			/>
			<Text>ULTIMAS ROLAGENS:</Text>
		</View>
	)
}

export default Dice
