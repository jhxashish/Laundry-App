import { StyleSheet, Text, View, ScrollView } from "react-native"
import React from "react"

import LottieView from "lottie-react-native"
import { maxFontSizeMultiplier } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes"

const OrderScreen = () => {
  return (
    <ScrollView>
      <LottieView
        source={require("./assets/thumbs.json")}
        style={{
          height: 360,
          width: 300,
          alignSelf: "center",
          marginTop: 40,
          justifyContent: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />

      <Text
        style={{
          marginTop: 40,
          fontSize: 49,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Your order has been placed
      </Text>
      <LottieView
        source={require("./assets/sparkle.json")}
        style={{
          height: 300,
          position: "absolute",
          top: 100,
          width: 300,
          alignSelf: "center",
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
    </ScrollView>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})
