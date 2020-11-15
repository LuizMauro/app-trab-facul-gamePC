import React from "react";
import { View, Text } from "react-native";
// import { Container } from './styles';

function BarStatistic({ attack, defense, magic, difficulty }) {
  return (
    <View
      style={{
        height: 400,
        width: "50%",
        backgroundColor: "#000",
        marginTop: 20,
      }}
    >
      <Text style={{ color: "#fff" }}> Attack </Text>
      <View
        style={{
          height: 20,
          width: "100%",
          backgroundColor: "#ccc",
          marginLeft: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{ height: 20, width: `${attack}0%`, backgroundColor: "red" }}
        ></View>
      </View>

      <Text style={{ color: "#fff" }}> Defense </Text>
      <View
        style={{
          height: 20,
          width: "100%",
          backgroundColor: "#ccc",
          marginLeft: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{ height: 20, width: `${defense}0%`, backgroundColor: "red" }}
        ></View>
      </View>

      <Text style={{ color: "#fff" }}> Magic </Text>
      <View
        style={{
          height: 20,
          width: "100%",
          backgroundColor: "#ccc",
          marginLeft: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{ height: 20, width: `${magic}0%`, backgroundColor: "red" }}
        ></View>
      </View>

      <Text style={{ color: "#fff" }}> Difficulty </Text>
      <View
        style={{
          height: 20,
          width: "100%",
          backgroundColor: "#ccc",
          marginLeft: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            height: 20,
            width: `${difficulty}0%`,
            backgroundColor: "red",
          }}
        ></View>
      </View>
    </View>
  );
}

export default BarStatistic;
