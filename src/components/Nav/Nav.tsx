import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { HomeIcon, HamburgerIcon, PlusIcon, CameraIcon } from '../Icon';
import IconButton from '../IconButton';
import AddOptionsPopover from './AddOptionsPopover';
import { useRoute } from '@react-navigation/native';

interface NavProps {
	navigation : any;
	middleButtonOnPress? : any;
}

const Nav = ({ navigation, middleButtonOnPress } : NavProps) => {

	const route = useRoute();
	const [ isAddOptionsOpen, setIsAddOptionsOpen ] = useState<boolean>(false);
	const [ middleButtonIcon, setMiddleButtonIcon ] = useState<React.ReactNode>(<PlusIcon size="45" color="white"/>);
	const touchable = useRef();

	useEffect(() => {
		switch(route.name){
			case "Home" : setMiddleButtonIcon(<PlusIcon size="45" color="white"/>);
			break; 

			case "PhotoTake" : setMiddleButtonIcon(<CameraIcon size="45" color="white"/>);
			break;

			default : setMiddleButtonIcon(<PlusIcon size="45" color="white"/>);
		}
	}, [route])

	const onHomeButtonPressed = () => {
		navigation.navigate("Home");
	}

	const onMoreButtonPressed = () => {

	}

	const onMiddleButtonPressed = () => {
		if(!middleButtonOnPress){
			if(isAddOptionsOpen){
				return;
			}
			setIsAddOptionsOpen(true);
			return;;
		}
		middleButtonOnPress();
	}

	return (
		<>
			<AddOptionsPopover
				visible = {isAddOptionsOpen}
				onRequestClose = {() => setIsAddOptionsOpen(false)}
				navigation = {navigation}
				from={touchable}
			/>
			<View className="bg-mid-purple h-[11vh] flex flex-row justify-evenly items-center relative">
				<IconButton
					key="home-icon-button"
					icon={<HomeIcon size="45" color="white"/>}
					onPress={onHomeButtonPressed}
				/>
				<View className="pb-[7vh]">
					<IconButton
						key="middle-icon-button"
						icon={middleButtonIcon}
						onPress={onMiddleButtonPressed}
						customClassName="bg-orange rounded-full h-[70px] w-[70px]"
						customRef = {touchable}
					/>
				</View>
				<IconButton
					key="more-icon-button"
					icon={<HamburgerIcon size="45" color="white"/>}
					onPress={onMoreButtonPressed}
				/>
			</View>
		</>
	)
}

export default Nav;