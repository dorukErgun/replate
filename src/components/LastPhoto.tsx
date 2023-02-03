import React from "react"
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"
import useCurrentPhotosStore from "../stores/useCurrentPhotosStore";

interface LastPhotoProps {
	navigation : any;
}

const LastPhoto = ({ navigation } : LastPhotoProps) => {

	const photos = useCurrentPhotosStore((state) => state.photos);

	if(photos.length === 0) { return <View/> }

  	return (
		<TouchableOpacity 
			className='absolute bottom-10 left-5'
			style={{
				width:'15%',
				height : (Dimensions.get('window').height*0.12),
			}}
			onPress={() => {navigation.navigate('ImageShower')}}

		>
			<View className="relative">
				<View  className="absolute w-[25px] h-[25px] -right-[11.5px] -top-[11.5px] z-10 rounded-full bg-light-purple justify-center items-center">
					<Text className="text-white">
						{photos.length}
					</Text>
				</View>
				<Image
					source={{ uri: photos[photos.length-1].uri }}
					className="rounded-md border-2 border-light-purple"
					style={{
						width: '100%',
						height: (Dimensions.get('window').height*0.12),
					}}
				/>
			</View>
		</TouchableOpacity>
  )
}

export default LastPhoto