import React, { useState } from 'react'

import { CheckBox, Icon } from 'react-native-elements'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import css from './styles.js'

interface Props{
	title: string,
}

const Category = ({title}:Props):JSX.Element =>{

	const [select, setSelect] = useState(false)

	return (
		<View style={css.viewCategory}>
			
			<CheckBox 
				title={title}
				containerStyle={{
					flex: 1,
					backgroundColor: 'transparent',
					borderColor: 'transparent'
				}}
				checked={select}
				onPress={()=>setSelect(!select)}
			/>
			
			<TouchableOpacity style={css.touchableCategory}>
				<Icon type='font-awesome-5' name='edit' size={18} color='#000' containerStyle={css.icon}/>
			</TouchableOpacity>
		
			
		</View>
	)
}

export default Category