import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CATEGORIES } from './constants';
import { useState } from 'react';
import { QuizzScreen } from './screens/quizzScreen/QuizzScreen';
import { MenuScreen } from './screens/menuScreen/MenuScreen';

export default function App() {
  const [selectedChap, setSelectedChap] = useState();
  const [screen, setScreen] = useState("menu");

  const gestionScreen = () => {
    switch(screen){
      case "quizz":
        return <QuizzScreen currentChap={selectedChap} setScreen={setScreen} />;
      default:
        return <MenuScreen setScreen={setScreen} setSelectedChap={setSelectedChap}/>
    }
  }

  return (
    <View style={{flex: 1}}>
      {gestionScreen()}
    </View>
  );
}

