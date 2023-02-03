import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Button, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'
import Nav from '../components/Nav/Nav';
import PropTypes from 'prop-types'
import BasePage from '../components/BasePage';
import useCurrentPhotosStore from '../stores/useCurrentPhotosStore';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';
import LastPhoto from '../components/LastPhoto';
import ShutterButton from '../components/ShutterButton';

const PhotoTake = ({ navigation} : {navigation : any}) => {

	const clearPhotos = useCurrentPhotosStore(state => state.clearPhotos);
	const [ permission, requestPermission ] = Camera.useCameraPermissions();
	const addPhoto = useCurrentPhotosStore((state) => state.addPhoto);
	const cameraRef : React.LegacyRef<Camera> = useRef(null);
 
	useEffect(() => {
		clearPhotos();
	},[])

	if (!permission) {
		// Camera permissions are still loading
		return <View />;
	}
  
	 if (!permission.granted) {
		// Camera permissions are not granted yet
		return (
			<View >
				<Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
				<Button onPress={requestPermission} title="grant permission" />
			</View>
		);
	}

	const takePhoto = async () => {
		const cameraCapturedPicture : CameraCapturedPicture = await cameraRef.current?.takePictureAsync() as CameraCapturedPicture;
		const newPhoto : ImageInfo = convertCCPtoIF(cameraCapturedPicture);
		if(newPhoto){
			addPhoto(newPhoto);
		}
	}

	const convertCCPtoIF = (ccp : CameraCapturedPicture) => {
		return {
			uri : ccp.uri,
			width : ccp.width,
			height : ccp.height,
			cancelled : ccp === undefined
		}
	}

	return (
		<BasePage
			withoutNav={true}
			onMiddleButtonPressed={() => takePhoto()}
		>
			<Camera 
				style={styles.camera}
				ref={cameraRef}
			>
				<LastPhoto
					navigation={navigation}
				/>
			</Camera>
			<ShutterButton
				onShutterButtonClicked={takePhoto}
			/>
		</BasePage>
	)
}

const styles = StyleSheet.create({
	camera: {
		flex: 1
	},
});

export default PhotoTake
