import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { Plate } from '../services/PlateService'
import Button from './Button'
import { PlusIcon } from './Icon'
import PlateShower from './PlateShower'

interface PlatePickerProps {
	plates : Plate[]
	onPlatePressed : any;
}

const PlatePicker = ({ plates, onPlatePressed } : PlatePickerProps ) => {

	return (
		<View key="bottom-selection" className="pt-5">
			<Text className="text-white text-2xl">
				Or choose from your saved plates...
			</Text>
			<ScrollView className="pt-4">
				<Button
					title="Add a new plate"
					icon={<PlusIcon size="40" color="white"/>}
					onPress={() => {}}
					customClassName="bg-light-purple w-[100%] px-7 py-5 rounded-2xl flex-row justify-start h-[80px]"
				/>
				<View className="pb-2"/>
				{plates.map((plate, idx) => 
					<PlateShower
						key={idx.toString()}
						image={plate.imgSrc}
						onPlatePressed={() => {onPlatePressed(plate.imgSrc)}}
					/>
				)}
				<View className="mb-5"/>
			</ScrollView>
		</View>
	)
}

export default PlatePicker