import React from 'react'
import { Dimensions, Text, View } from 'react-native';
import Popover from 'react-native-popover-view'
import Button from './Button';

interface DeletePhotoConfirmationPopupProps {
	visible : boolean;
	onRequestClose : any;
	onConfirmClicked : any;
}

const DeletePhotoConfirmationPopup = ({ visible, onRequestClose, onConfirmClicked } : DeletePhotoConfirmationPopupProps) => {
	
	
	const windowWidth = Dimensions.get('window').width;
	
	return (
		<Popover
			popoverStyle={{borderRadius: 16, backgroundColor: "#E9875F", width: windowWidth/1.17}}
			isVisible={visible}
			onRequestClose={onRequestClose}
		>
			<View className=" bg-orange rounded-2xl p-5 flex flex-row justify-between items-center w-[100%]">
				<View className="text-base w-1/1">
					<Text className="text-white text-base">
						Are you sure you want to delete this image?
					</Text>
					<View className='p-2'/>
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

export default DeletePhotoConfirmationPopup