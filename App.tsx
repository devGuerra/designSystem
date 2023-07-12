import {
  useFonts,
  Archivo_700Bold,
  Archivo_500Medium,
  Archivo_400Regular,
} from "@expo-google-fonts/archivo";

import { HomeScreen } from "./src/screens/HomeScreen";
import { SafeAreaView, StatusBar } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_700Bold,
    Archivo_500Medium,
    Archivo_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}
