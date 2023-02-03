import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { CameraCapturedPicture } from 'expo-camera';
import { ImageInfo, ImagePickerMultipleResult } from 'expo-image-picker';
import { Picture } from '../types/Picture';
import useCurrentPhotosStore from '../stores/useCurrentPhotosStore';

const ImagePickerPage = () => {

	const [image, setImage] = useState<string |undefined>();
	const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
	const addPhoto = useCurrentPhotosStore(state => state.addPhoto);

	useEffect(() => {
		pickImage();
	}, [])

	const pickImage = async () => {
	  const result : ImagePickerMultipleResult = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			aspect: [4, 3],
			quality: 1,
			allowsMultipleSelection: true
	  	});

		if(result.cancelled){
			console.log('User cancelled addition of pictures.');
			return;
		}
		result.selected.forEach((image : ImageInfo) => {
			addPhoto(image);
		})
	};

  return (
	<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
	</View>
  )
}

export default ImagePickerPage