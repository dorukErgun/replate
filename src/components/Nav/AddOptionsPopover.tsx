import { ImageInfo, ImagePickerMultipleResult } from 'expo-image-picker/build/ImagePicker.types';
import { View, Pressable, Text, ActivityIndicator } from 'react-native';
import Popover , { Rect } from 'react-native-popover-view';
import useCurrentPhotosStore from '../../stores/useCurrentPhotosStore';
import { CameraIcon, FolderIcon } from '../Icon';
import IconButton from '../IconButton';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import useSpinnerStore from '../../stores/useSpinnerStore';

interface AddOptionsPopoverProps {
	visible : boolean;
	onRequestClose : any;
	navigation : any;
}

const AddOptionsPopover = ({ visible, onRequestClose, navigation} : AddOptionsPopoverProps) => {

	const clearPhotos = useCurrentPhotosStore(state => state.clearPhotos);
	const addPhoto = useCurrentPhotosStore(state => state.addPhoto);
	const setVisible = useSpinnerStore(state => state.setVisible);
	const visibles = useSpinnerStore(state => state.visible);

	const pickImages = async () => {
		clearPhotos();
		const result : ImagePickerMultipleResult = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			aspect: [4, 3],
			quality: 1,
			allowsMultipleSelection: true
		});
		if(result.cancelled){
			console.log('User cancelled addition of pictures.');
			onRequestClose();
			return;
		}
		result.selected.forEach((image : ImageInfo) => {
			addPhoto(image);
		})
		onRequestClose();
		navigation.navigate('ImageShower');
	};

	const onTakePhotoPressed = () => {
		navigation.navigate("PhotoTake");
		onRequestClose();
	}

	const onPickPhotoPressed = async () => {
		await pickImages();
	}

	return (
		<Popover
			arrowSize={{ width: 32, height: 16 }}
			popoverStyle={{borderRadius: 16, backgroundColor: "#E9875F"}}
			isVisible={visible}
			onRequestClose={onRequestClose}
		>
			<View className="w-[200px] h-[110px] bg-orange rounded-2xl p-4 flex-row justify-center items-baseline">
				<View className='justify-center items-center w-[100px]'>
					<IconButton
						icon={<CameraIcon size="45" color="white"/>}
						onPress={onTakePhotoPressed}
					/>
					<Text className="text-center text-white">
						Use your Camera
					</Text>
				</View>
				<View className='justify-center items-center w-[100px]'>
					<IconButton
						icon={<FolderIcon  size="45" color="white"/>}
						onPress={onPickPhotoPressed}
						/>
					<Text className="text-center text-white">
						Pick from Gallery
					</Text>
				</View>
			</View>
		</Popover>
	)
}

export default AddOptionsPopover