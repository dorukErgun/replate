import { CameraCapturedPicture } from 'expo-camera/build/Camera.types';
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';

interface SpinnerState {
	visible : boolean;
	setVisible : (val : boolean) => void;
}

const useSpinnerStore = create<SpinnerState>()(
  devtools(
    persist(
      (set) => ({
        visible: false,
        setVisible: (val) => set((state) => {
			console.log(val);
			return ({ visible :  val })
		  } )
      }),
      {
        name: 'spinner-storage',
        getStorage: () => AsyncStorage
      }
    )
  )
)

export default useSpinnerStore;