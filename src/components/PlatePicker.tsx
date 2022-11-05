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

	console.log(plates);

	return (
		<View key="bottom-selection" className="pt-5">
			<Text className="text-white text-2xl">
				Or choose from your saved plates...
			</Text>
			<SafeAreaView className="pt-5">
				<ScrollView className="pt-2">
					<Button
						title="Add a new plate"
						icon={<PlusIcon size="40" color="white"/>}
						onPress={() => {console.log('Clicked add new plate')}}
						customClassName="bg-light-purple w-[100%] px-7 py-5 rounded-2xl flex-row justify-start h-[80px]"
					/>
					{plates.map((plate, idx) => 
						<PlateShower
							keys={idx.toString()}
							image={plate.imgSrc}
							onPlatePressed={() => {onPlatePressed(plate.imgSrc)}}
						/>
					)}
					<View className="mb-5"/>
				</ScrollView>
			</SafeAreaView>
		</View>
	)
}

export default PlatePicker