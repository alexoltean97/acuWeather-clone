import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';


import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import InteractiveButton from "./components/core/InteractiveButton";

const image = require("./assets/flowers.png");

library.add(faGear, faArrowRight);

export default function App() {
  const newWindow = () => {
    alert("Button is pressed");
  };
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <LinearGradient
    colors={[
      'black'
    ]}
    style={{ justifyContent: 'center'}}>

    </LinearGradient>

      <View style={styles.container}>
        <View style={styles.textContainer}>
          <FontAwesomeIcon icon={faGear} size="56x" color="white" />
          <Text style={styles.headline}>Welcome</Text>
          <Text style={styles.headline}>Come In,</Text>
          <Text style={styles.headline}>the Weather is...</Text>
          <Text style={styles.text}>
            Get your weather information when and how you want it -- wherever
            you are. With hyper-local forecasts, advanced radar, and severe
            weather alerts, we make life safer, easier, and better.
          </Text>
          <Text style={styles.setup}>Start your setup in 4 easy steps.</Text>
        </View>

        <InteractiveButton title="Get started" onPress={newWindow} />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  textContainer: {
    marginTop: 220,
    alignItems: "center",
  },
  headline: {
    paddingBottom: 5,
    color: "white",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  text: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },

  gearBox: {
    fontSize: 140,
  },

  setup: {
    paddingTop: 15,
    color: "white",
    textAlign: "center",
  },
});
