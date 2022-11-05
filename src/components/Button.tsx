import React from 'react';
import { Pressable, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
	icon? : React.ReactNode;
	title : any;
	onPress : any;
	customClassName? : string;
}

const Button = ({ title, icon, onPress, customClassName } : ButtonProps) => {

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
			}}
			activeOpacity={0.7}
		>
			{icon}
			<Text className="text-white text-base">
				{title}
			</Text>
		</TouchableOpacity>
  	)
}

export default Button