import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import { useRef, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Button, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Nav from '../components/Nav/Nav';
import TakenPhotos from '../components/TakenPhotos/TakenPhotos';
import PropTypes from 'prop-types'

const PhotoTake = ({ navigation} : {navigation : any}) => {

	const [ permission, requestPermission ] = Camera.useCameraPermissions();
	const [ photos, setPhotos ] = useState<string[]>([]);
	const cameraRef : React.LegacyRef<Camera> = useRef(null)
 
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
		const newPhoto : CameraCapturedPicture | undefined = await cameraRef.current?.takePictureAsync();
		if(newPhoto){
			setPhotos(photos => [...photos, newPhoto?.uri]);
			//console.log(oldPhotos);
		}
	}

  	return (
		<SafeAreaView className="flex-[1]">
			<ScrollView className="bg-dark-purple">
				<View style={styles.container}>
					<Camera 
						style={styles.camera}
						ref={cameraRef}
					>
					</Camera>
				</View>
				<TakenPhotos
					navigation={navigation}
					photos={photos}
				/>
			</ScrollView>
			<Nav 
				navigation = {navigation} 
				middleButtonOnPress={takePhoto}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  width: '100%'
	},
	camera: {
		flex: 1,
		aspectRatio: 3/4
	},
	buttonContainer: {
	  flex: 1,
	  flexDirection: 'row',
	  backgroundColor: 'transparent',
	  margin: 64,
	},
	button: {
	  flex: 1,
	  alignSelf: 'flex-end',
	  alignItems: 'center',
	},
	text: {
	  fontSize: 24,
	  fontWeight: 'bold',
	  color: 'white',
	},
});

export default PhotoTake