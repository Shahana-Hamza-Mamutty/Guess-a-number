import React from "react";
import { StyleSheet, View, Button, Image, Text } from "react-native";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>Game over !!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.jpg")}
          style={styles.image}
          resizeMode={"contain"}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone dasdzdadasdneeded{" "}
          <Text style={styles.highlight}>{props.rounds}</Text> rounds to get the
          number <Text style={styles.highlight}>{props.guessNumber}</Text>.
        </BodyText>
      </View>

      <MainButton onPress={props.resetGame}>START GAME!</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderColor: "black",
    borderWidth: 3,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultContainer: {
    margin: 20
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: colors.primary
  },
  resultText: {
    textAlign: "center"
  }
});

export default GameOverScreen;
