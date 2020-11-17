import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

import apiLoL from "../../services/apiLoL";

import { useNavigation } from "@react-navigation/native";

import { Container, Input, TitleText } from "./styles";

const Profile = () => {
  const { navigate } = useNavigation();

  const [summoner, setSummoner] = useState();

  async function SummonerProfile() {
    const response = await apiLoL.get(
      `summoner/v4/summoners/by-name/${summoner}`
    );
    console.log(response.data);
  }

  return (
    <Container>
      <TitleText>Nome de invocador</TitleText>

      <Input
        onChangeText={(e) => {setSummoner(e)}}
      />

      
      <TouchableOpacity onPress={SummonerProfile}> <Text> Search </Text>  </TouchableOpacity>
      
    </Container>
  );
};

export default Profile;
