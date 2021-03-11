import { NavigationContainerRef } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Profile = ():JSX.Element => {
	
	return (
		<SafeAreaView style={{flex:1}}>
			<View>
				<Text>Profile</Text>
			</View>
			
		</SafeAreaView>
	)
}

export default Profile
