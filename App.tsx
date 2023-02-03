import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import SelectPlate from './src/pages/SelectPlate';
import PhotoTake from './src/pages/PhotoTake';
import ImagePicker from './src/pages/ImagePicker';
import Processing from './src/pages/Processing';
import { View } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions, Text }  from 'react-native';
import { LeftChevronIcon } from './src/components/Icon';
import IconButton from './src/components/IconButton';
import ImageShower from './src/pages/ImageShower';
import Theme from './src/theme/theme';
import Auth from './src/pages/Auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config'
import { getAuth, initializeAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';


export default function App() {

  const [ loggedIn, setLoggedIn ] = useState<boolean>(false);
  const app = initializeApp(firebaseConfig);
  const auth = initializeAuth(app);
  //(const loggedIn = useAuthStore((state) => state.loggedIn);
  onAuthStateChanged(getAuth(), (user) => {
    if(user){
      setLoggedIn(true)   
    }else{
      setLoggedIn(false);  
    }
  })

  useEffect(() => {
    console.log('Changed!', loggedIn);
  }, [
    loggedIn
  ])

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{header: (props : NativeStackHeaderProps) => {
          if(props.route.name === 'Auth'){
            return;
          }
          
          return (
            <View key="shell" 
              style={{
                height : Dimensions.get('window').height*0.1,
                justifyContent: 'flex-end',
                paddingTop: Constants.statusBarHeight,
                backgroundColor: Theme.color['light-purple']
              }}
            >
              <View 
                key="content"
                className={`bg-blue flex-row justify-between px-7 py-1`}
                style={{
                  backgroundColor: Theme.color['light-purple']
                }}
              >
                <IconButton
                  icon={<LeftChevronIcon size="35" color={props.route.name !== "Home" ? 'white' : Theme.color['light-purple']}/>}
                  onPress={() => {props.navigation.goBack()}}
                  disabled={props.route.name === "Home"}
                />
                <View style={{flexDirection:'row'}} className="rounded-full bg-white  justify-center items-center h-[30px] w-[30px]">
                  <Text className="text-xl text-dark-purple ">DE</Text>
                </View>
              </View>
            </View>
          );
        }}}
      >
        {
          loggedIn ? (
            <>
              <Stack.Screen 
                name="Home" 
                component={Home}
              />
              <Stack.Screen 
                name="SelectPlate" 
                component={SelectPlate}   
                />
              <Stack.Screen 
                name="PhotoTake" 
                component={PhotoTake}   
                />
              <Stack.Screen 
                name="Processing" 
                component={Processing}   
                />
              <Stack.Screen 
                name="ImageShower" 
                component={ImageShower}   
                />
              <Stack.Screen 
                name="ImagePicker" 
                component={ImagePicker}   
              />
            </>
          ) : (
            <>
              <Stack.Screen 
                name="Auth" 
                component={Auth}
              />
            </>
          )
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}