import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import Popover from 'react-native-popover-view'
import { MaskType } from '../types/MaskType'
import { Dimensions } from 'react-native'
import Button from './Button'

interface ConfirmationPopupProps {
	visible : boolean;
	maskType : MaskType;
	onRequestClose : any;
	onConfirmClicked : any;
	selectedPlateImgSrc? : any;
}

const ConfirmationPopup = ({ visible, maskType, onRequestClose, onConfirmClicked, selectedPlateImgSrc } : ConfirmationPopupProps) => {

	const windowWidth = Dimensions.get('window').width;
	const windowHeight = Dimensions.get('window').height;

	const getText = () => {
		switch(maskType){
			case MaskType.EMPTY_PLATE : return "Are you sure you want to change your plates to empty plates?"
			case MaskType.CAR_COLOR : return "Are you sure you want to change your plates to car color?"
			case MaskType.CUSTOM_PLATE : return "Are you sure you want to change your plates to below plate?"
		}
	}

	useEffect(() => {
	}, [visible])

  	return (
		<Popover
			popoverStyle={{borderRadius: 16, backgroundColor: "#E9875F", width: windowWidth/1.17}}
			isVisible={visible}
			onRequestClose={onRequestClose}
		>
			<View className=" bg-orange rounded-2xl p-5 flex flex-row justify-between items-center w-[100%]">
				<View className="text-base w-1/1">
					<Text className="text-2xl text-white font-semibold ">
						Only one step left...
					</Text>
					<View className="p-2"/>
					<Text className="text-white text-base">
						{getText()}
					</Text>
					<View className="p-5">
						{maskType === MaskType.CUSTOM_PLATE 
							? <Image 
									style={{width: "100%", height:55, resizeMode : 'contain'}}
									source={{uri : selectedPlateImgSrc}}
								/>
							: <View/>
						}
					</View>	
					<View className="p-2"/>
					<View className="flex flex-row justify-end w-[100%]">
						<Button
							title="No"
							onPress={() => {onRequestClose()}}
							customClassName="w-[45%] p-3 rounded-2xl border-2 border-dark-purple bg-orange"
						/>
						<View className="w-[10%]"/>
						<Button
							title="Yes"
							onPress={() => {onConfirmClicked()}}
							customClassName="bg-light-purple w-[45%] p-3 rounded-2xl"
						/>			
					</View>			
				</View>
			</View>
		</Popover>
  	)
}

export default ConfirmationPopup