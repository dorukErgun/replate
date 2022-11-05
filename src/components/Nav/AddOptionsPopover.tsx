import { View, Pressable } from 'react-native';
import Popover , { Rect } from 'react-native-popover-view';
import { CameraIcon, FolderIcon } from '../Icon';
import IconButton from '../IconButton';

interface AddOptionsPopoverProps {
	visible : boolean;
	onRequestClose : any;
	navigation : any;
	from : any;
}

const AddOptionsPopover = ({ visible, onRequestClose, navigation, from } : AddOptionsPopoverProps) => {

	const onTakePhotoPressed = () => {
		navigation.navigate("PhotoTake");
		onRequestClose();
	}

	const onPickPhotoPressed = () => {
		navigation.navigate("PhotoTake");
	}

	return (
		<Popover
			offset={40}
			arrowSize={{ width: 32, height: 16 }}
			popoverStyle={{borderRadius: 16, backgroundColor: "#E9875F"}}
			isVisible={visible}
			onRequestClose={onRequestClose}
			from={from}
		>
			<View className="w-[170px] h-[70px] bg-orange rounded-2xl p-4 flex-row justify-between">
				<IconButton
					icon={<CameraIcon size="45" color="white"/>}
					onPress={onTakePhotoPressed}
				/>
				<IconButton
					icon={<FolderIcon  size="45" color="white"/>}
					onPress={onPickPhotoPressed}
				/>
			</View>
		</Popover>
	)
}

export default AddOptionsPopover