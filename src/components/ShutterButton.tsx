import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

interface ShutterButtonProps {
	onShutterButtonClicked : any;
}

const ShutterButton = ({ onShutterButtonClicked } : ShutterButtonProps) => {

	const [ shutterClicked, setShutterClicked ] = useState<boolean>(false);

  	return (
		<View 
			style={styles.outerCircle}
			onTouchStart={async () => {
				setShutterClicked(true);
				await onShutterButtonClicked();
			}}
			onTouchEnd={() => {
				setShutterClicked(false);
			}}
		>
			<View 
				style={{...styles.innerCircle, 
					width: shutterClicked ? 55 : 60,
					height: shutterClicked ? 55 : 60
				}}
			/>
		</View>
  	)
}

const styles = StyleSheet.create({
	outerCircle : {
		position:'absolute',
		bottom: Dimensions.get('window').height*0.05,
		width: 80,
		height: 80,
		borderWidth: 2,
		borderColor:'white',
		borderRadius: 999,
		left: Dimensions.get('window').width/2 - 40,
		justifyContent:'center',
		alignItems:'center',
	},
	innerCircle : {
		backgroundColor: 'white',
		borderRadius: 999,
		display: 'flex',
	}
});

export default ShutterButton