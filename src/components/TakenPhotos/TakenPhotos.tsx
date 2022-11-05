import { useRef, useState } from 'react';
import { ScrollView, Text, View, SafeAreaView } from 'react-native'
import { RightArrowIcon } from '../Icon';
import IconButton from '../IconButton';
import TakenPhoto from './TakenPhoto';

interface TakenPhotosProps {
	navigation : any;
	photos : string [];
}

const TakenPhotos = ({ navigation, photos } : TakenPhotosProps) => {

	const [ height, setHeight ] = useState<number>();

	const onRightArrowClicked = ( ) =>{
		navigation.navigate("SelectPlate");
	}


	const onLayout=(event : any)=> {
		const {x, y, height, width} = event.nativeEvent.layout;
		setHeight(height);
		console.log({x, y, height, width});	
	}

	return (
		<SafeAreaView className="flex-1 flex-row justify-center items-center h-full">
			<ScrollView
				horizontal={true}
				className={`flex-row gap-x-5 p-5 h-[${height}]`}
				style={{scaleX:-1}}
				onLayout={onLayout}
			>
				{photos.slice(0).reverse().map((photo) => {
					return(
						<TakenPhoto
							uri = {photo}
						/>		
					);
				})}
			</ScrollView>
			<View 
				key="go-to-processing-button" 
				className=""
				style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', alignSelf:'center', height:'100%'}}
			>
				<IconButton
					key=""
					icon={<RightArrowIcon size="70" color="#E9875F"/>}
					onPress={onRightArrowClicked}
				/>
			</View>
		</SafeAreaView>
	)
}

export default TakenPhotos