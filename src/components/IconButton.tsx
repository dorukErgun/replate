import { Pressable, StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

interface IconButtonProps {
	icon : React.ReactNode;
	onPress : any;
	customClassName? : string;
	customRef ? : any;
	disabled? : boolean;
	style? : StyleProp<ViewStyle>;
}

const IconButton = ({ icon, onPress, customClassName, customRef, disabled, style } : IconButtonProps) => {

  	return (
		<TouchableOpacity 
			onPress = {onPress}
			className={`${customClassName} flex justify-center items-center`}
			ref={customRef}
			activeOpacity={0.8}
			disabled = {disabled}
			style={style}
		>
			{icon}
		</TouchableOpacity >
  	)
}

export default IconButton