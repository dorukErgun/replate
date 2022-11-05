import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, Text, View, ListView, FlatList, SectionList, TouchableHighlight } from 'react-native'
import Button from '../components/Button'
import ConfirmationPopup from '../components/ConfirmationPopup'
import { CarIcon, EmptyPlateIcon, PlusIcon } from '../components/Icon'
import Nav from '../components/Nav/Nav'
import PlatePicker from '../components/PlatePicker'
import plateService, { Plate } from '../services/PlateService'
import { MaskType } from '../types/MaskType'

interface SelectPlateProps {
	navigation : any;
}

const SelectPlate = ({ navigation } : SelectPlateProps) => {

	const [ plates, setPlates ] = useState<Plate[]>();
	const [ mask, setMask ] = useState<MaskType>(MaskType.EMPTY_PLATE);
	const [ confirmationVisible, setConfirmationVisible ] = useState<boolean>(false);
	const [ selectedPlateImgSrc, setSelectedPlateImgSrc ] = useState<string>();

	useEffect(() => {
		const fetchPlates = async () => {
			const data = await plateService.getPlates();
			console.log(data);
			setPlates(data);
		}
		fetchPlates().catch(console.error);
	}, []);

	const onSelectionMade = (maskType : MaskType) => {
		setMask(maskType);
		maskType !== MaskType.CUSTOM_PLATE ?? setSelectedPlateImgSrc(undefined);
		setConfirmationVisible(true);
	}

	if(!plates){
		return <View/>
	}

	return (
		<>
		<ConfirmationPopup
			visible = {confirmationVisible}
			maskType = {mask}
			onRequestClose = {() => {setConfirmationVisible(false)}}
			onConfirmClicked = {() => {
				setConfirmationVisible(false);
				navigation.navigate("Processing");
			}}
			selectedPlateImgSrc={selectedPlateImgSrc}
		/>
		<SafeAreaView className="flex-[1] bg-dark-purple p-7">
			<View key="top-selection">
				<Text className="text-white text-2xl">
					Replace plate with...
				</Text>
				<View className="flex flex-row justify-between w-1/1 pt-5">
					<Button
						title="Empty Plate"
						icon={<EmptyPlateIcon size="45" color="white"/>}
						onPress={() => {onSelectionMade(MaskType.EMPTY_PLATE)}}
						customClassName="bg-light-purple w-[45%] px-7 py-5 rounded-2xl"
					/>
					<View className="w-[10%]" />
					<Button
						title="Car Color"
						icon={<CarIcon size="45" color="white"/>}
						onPress={() => {onSelectionMade(MaskType.CAR_COLOR)}}
						customClassName="bg-light-purple w-[45%] px-7 py-5  rounded-2xl"
					/>
				</View>
				<PlatePicker 
					plates={plates}
					onPlatePressed={(event : any) => {
						setSelectedPlateImgSrc(event);
						onSelectionMade(MaskType.CUSTOM_PLATE);
					}}
				/>
			</View>
			<Nav 
				navigation = {navigation} 
				middleButtonOnPress={() => {}}
			/>
		</SafeAreaView>
		</>
	)
}

export default SelectPlate