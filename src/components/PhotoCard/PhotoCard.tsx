import React, { useRef, useState } from 'react'
import { Text, View, Image, StatusBar, NativeModules, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Popover from 'react-native-popover-view';
import { Mode, Placement } from 'react-native-popover-view/dist/Types';
import { DeleteIcon, DotsIcon, HomeIcon, ShareIcon } from '../Icon';
import IconButton from '../IconButton';
import ImageCarousel from './ImageCarousel';
import Button from '../Button';
import * as Sharing from 'expo-sharing';
import * as ImageManipulator from "expo-image-manipulator";
import keyGenerator from '../../utils/KeyGenerator';

interface PhotoCardProps {
	name: string;
	date : string;
	photo : string | string[];
}

const PhotoCard = ({ name, date, photo } : PhotoCardProps) => {
	const { StatusBarManager } = NativeModules;
	const [ optionsOpen, setOptionsOpen ] = useState<boolean>(false);
	const ref : any = useRef();

	const getImageRenderer = (photo : string | string[]) => {
		if(typeof photo === 'string'){
			return photo;
		}
	}

	const openShareDialogAsync = async () => {
		if (Platform.OS === 'web') {
		  return;
		}
		if(typeof photo === 'string'){
			const imageTmp = await ImageManipulator.manipulateAsync(photo);
			await Sharing.shareAsync(imageTmp.uri);
		}
	 };

  	return (
		<>
			<Popover
				verticalOffset={-StatusBarManager.HEIGHT}
				popoverStyle={{borderRadius: 16, backgroundColor: "#E9875F"}}
				isVisible={optionsOpen}
				onRequestClose={() => {setOptionsOpen(false)}}
				from={ref}
				key={keyGenerator('PhotoCardPopover', name)}
			>
				<View ref={ref} className="bg-orange rounded-2xl p-5 flex justify-between items-center w-[100%]">
					<TouchableOpacity onPress={() => { openShareDialogAsync() }} className="flex-row justify-between items-center">
						<ShareIcon size="25" color="white"/>
						<View className="p-1"/>
						<Text className="text-white text-base">Share</Text>
					</TouchableOpacity>
					<View className="pt-3 mb-3 border-b-[1px] border-white w-full"/>
					<TouchableOpacity className="flex-row justify-between items-center">
						<DeleteIcon size="25" color="white"/>
						<View className="p-1"/>
						<Text className="text-white text-base">Delete</Text>
					</TouchableOpacity>
				</View>
			</Popover>
			<TouchableOpacity key={keyGenerator('PhotoCard', name)} className="py-4" activeOpacity={0.8}>
				<View className="bg-light-purple rounded-2xl p-5">
					<View className="flex flex-row justify-between items-start">
						<View className="flex-row flex-wrap gap-y-2 max-w-[80%]">
							<View className="rounded-2xl">
								<Text className="text-white bg-orange p-2">
									{name}
								</Text>
							</View>
							<View className="p-1"/>
							<Text className="text-white bg-blue rounded-lg p-2">
								{date}
							</Text>
						</View>
						<IconButton
							onPress={() => {setOptionsOpen(true)}}
							icon={<DotsIcon size="30" color="white"/>}
							
						/>
					</View>
					<View className="p-2"/>
					<View className="rounded-lg">
						{
						typeof photo === 'string' 
							? 	<Image
									style={{width: '100%', height: 200,resizeMode : 'cover'}}
									source={{ uri : photo }}
									className="rounded-lg"
								/>
							: 	<ImageCarousel
									photo={photo}
								/>
						}
					</View>
				</View>
			</TouchableOpacity>
		</>
  	)
}

const styles = StyleSheet.create({
	rounded: {
		borderRadius : 100
	}
});

export default PhotoCard