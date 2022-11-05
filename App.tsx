import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import Header from './src/components/Header/Header';
import Home from './src/pages/Home';
import SelectPlate from './src/pages/SelectPlate';
import PhotoTake from './src/pages/PhotoTake';
import Processing from './src/pages/Processing';
import { View, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions }  from 'react-native';
import { LeftChevronIcon } from './src/components/Icon';
import IconButton from './src/components/IconButton';
import Button from './src/components/Button';
import { getPageNameBasedOnRoute, PageNames } from './src/utils/PageNameHelper';
import ImageShower from './src/pages/ImageShower';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{header: (props : NativeStackHeaderProps) => {

          var width = Dimensions.get('window').width
          const statusBarHeight = Constants.statusBarHeight
          console.log("Top h is:", statusBarHeight);
          console.log(props);

          return (
            <View key="shell" className={`bg-dark-purple pl-3 pr-7 py-4`}>
              <View 
                key="content"
                className={`flex flex-row items-center justify-between pt-5`}
              >
                { props.route.name !== "Home" ?
                  <TouchableOpacity onPress={() => {console.log('Clicked add new plate')}} className="flex-row items-center">
                    <IconButton
                      icon={<LeftChevronIcon size="48" color="white"/>}
                      onPress={() => {props.navigation.goBack()}}
                      customClassName=""
                    />
                    <Text className="text-white text-2xl">
                      {getPageNameBasedOnRoute(props.route.name)}
                    </Text>
                  </TouchableOpacity>
                  : <View className="h-full"/>
                }
                <View className="" style={{flexDirection:'row'}}>
                  <Text className="text-2xl text-white">Image</Text>

                </View>

              </View>
            </View>
          );
        }}}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            
          }}
          
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}