import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'

const Processing = () => {
	return (
		<SafeAreaView className="flex-1 bg-dark-purple p-7">
			<View>
				<Text>
					Please wait while we change your plates for you...
				</Text>
			</View>
		</SafeAreaView>
	)
}

export default Processing