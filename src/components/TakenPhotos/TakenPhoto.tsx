import { Image, View } from 'react-native';

interface TakenPhotoProps {
	uri : string;
}

const TakenPhoto = ({ uri } : TakenPhotoProps) => {
	return (
		<View className="px-3 border-1 border-orange border-1 h-full">
			<Image
				source={{ uri: uri }}
				className="w-[75px] h-[100px] rounded-md"
			/>
		</View>
	)
}

export default TakenPhoto