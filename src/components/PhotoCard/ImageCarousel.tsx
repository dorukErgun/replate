import { View } from 'react-native';
import { Image } from 'react-native';

interface ImageCarouselProps {
	photo : string[]
}

const ImageCarousel = ({ photo } : ImageCarouselProps) => {
  	return (
		<>
			{photo.length < 3 
				?
				<View className="pt-5">
					<Image
						style={{width: '100%', height: 200,resizeMode : 'cover'}}
						source={{ uri : photo[0] }}
						className="rounded-lg relative z-10"
						/>
					<Image
						style={{width: '100%', height: 200,resizeMode : 'cover'}}
						source={{ uri : photo[1] }}
						className="rounded-lg absolute bottom-7 scale-[0.85] z-0"
					/>
				</View>
				: 
				<View className="pt-7">
					<Image
						style={{width: '100%', height: 200,resizeMode : 'cover'}}
						source={{ uri : photo[0] }}
						className="rounded-lg relative z-20"
					/>
					<Image
						style={{width: '100%', height: 200,resizeMode : 'cover'}}
						source={{ uri : photo[1] }}
						className="rounded-lg absolute bottom-7 scale-[0.85] z-10"
					/>
					<Image
						style={{width: '100%', height: 200,resizeMode : 'cover'}}
						source={{ uri : photo[2] }}
						className="rounded-lg absolute bottom-14 scale-[0.70] z-0"
					/>
				</View>
			}
		</>
  	)
}

export default ImageCarousel