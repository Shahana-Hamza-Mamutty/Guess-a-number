import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setDataLoaded(true);
        }}
        onError={err => console.log("====err", err)}
      />
    );
  }

  const resetGameHandler = val => {
    setUserNumber("");
    setGuessRounds(0);
  };

  const setUserNumberHandler = val => {
    setUserNumber(val);
  };

  const setGuessRoundsHandler = val => {
    setGuessRounds(val);
  };

  let content = <StartGameScreen onStartGame={setUserNumberHandler} />;

  if (userNumber && guessRounds == 0) {
    content = (
      <GameScreen
        userChoice={userNumber}
        gameOverHandler={setGuessRoundsHandler}
      />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        rounds={guessRounds}
        guessNumber={userNumber}
        resetGame={resetGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number?" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
