import { Stack } from "expo-router";
import {useFonts} from "expo-font";

export default function RootLayout() {

  useFonts({
    'roboto':require('./../assets/fonts/Roboto-Regular.ttf'),
    'roboto-medium':require('./../assets/fonts/Roboto-Medium.ttf'),
    'roboto-bold':require('./../assets/fonts/Roboto-Bold.ttf')
  })
  return (
    <Stack screenOptions={{headerShown:false}}>


    {/*<Stack screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="index" />
    </Stack>*/}
    
    <Stack.Screen name="(tabs)" />
      
    </Stack>
  );
}
