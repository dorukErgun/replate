import { Pressable, TouchableOpacity } from 'react-native';

interface IconButtonProps {
	icon : React.ReactNode;
	onPress : any;
	customClassName? : string;
	customRef ? : any;
}

const IconButton = ({ icon, onPress, customClassName, customRef } : IconButtonProps) => {

  	return (
		<TouchableOpacity 
			onPress = {onPress}
			className={`${customClassName} flex justify-center items-center`}
			ref={customRef}
			activeOpacity={0.7}
		>
			{icon}
		</TouchableOpacity >
  	)
}

export default IconButton