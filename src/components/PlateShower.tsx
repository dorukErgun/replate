import { Image, SafeAreaView, ScrollView, Text, View, Pressable } from 'react-native'

interface PlateShowerProps {
	image : any;
	onPlatePressed : any;
}

const PlateShower = ({ image, onPlatePressed } : PlateShowerProps) => {
  	return (
		<Pressable
			className="w-full py-2"
			onPress={onPlatePressed}	
		>
			<View className="bg-light-purple rounded-2xl h-[80px] flex justify-center ">
				<Image 
					style={{width: "100%", height:55, resizeMode : 'contain'}}
					source={{uri : "https://i.im.ge/2022/11/01/2VMfIr.Ekran-Alintisi.png"}}
				/>
			</View>
		</Pressable>
  	)
}

export default PlateShower