import React, { useEffect } from 'react';
import { Pressable, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
	icon? : React.ReactNode;
	title : any;
	onPress : any;
	customClassName? : string;
	titleColor? : string;
	disabled? : boolean;
}

const Button = ({ title, icon, onPress, customClassName, titleColor, disabled } : ButtonProps) => {

  	return (
		<TouchableOpacity
			onPress = {onPress}
			className={`flex justify-center items-center ${customClassName}`}
			style={{
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 5,
				},
				shadowOpacity: 0.34,
				shadowRadius: 6.27,
				elevation: 10,
				opacity : disabled ? 0.5 : 1
			}}
			activeOpacity={0.7}
			disabled={disabled}
		>
			{icon}
			<Text className={`text-${titleColor ? titleColor : 'white'} text-base`}>
				{title}
			</Text>
		</TouchableOpacity>
  	)
}

export default Button