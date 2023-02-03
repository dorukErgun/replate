import React, { useState } from 'react';
import { TextInput, View, Text, TextInputFocusEventData, NativeSyntheticEvent, StyleSheet } from 'react-native'

interface CustomTextInputProps {
	label : string;
	placeholder : string;
	value : string;
	onChangeText : any;
	isPassword? : boolean;
	regex?: RegExp; 
	error? : boolean;
}

const CustomTextInput = ({ value, onChangeText, label, placeholder, isPassword, regex, error } : CustomTextInputProps) => {

  	return (
		<View className="">
			<Text className='text-white'>{label}</Text>
			<View className="p-1"/>
			<View>
				<TextInput
					value={value}
					onChangeText={onChangeText}
					className={`bg-light-purple p-4 text-white rounded-2xl h-[60px] z-10`}
					placeholder={placeholder}
					placeholderTextColor="grey"
					secureTextEntry={isPassword}
				/>
				{
					error ? (
						<View
							style={{
								zIndex: 0,
								position: 'absolute',
								top: -1,
								bottom: -1,
								left: -1,
								right: -1,
								borderRadius: 17,
								borderWidth : error ? 1 : 0,
								borderColor : '#EF4444' 
							}}
						/>
					) : (
						<View/>
					)
				}
			</View>
		</View>
	)
}

export default CustomTextInput