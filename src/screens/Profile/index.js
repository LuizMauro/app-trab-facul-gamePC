import React, { useState } from "react";
import { View, Text } from "react-native";

import apiLoL from "../../services/apiLoL";

import { useNavigation } from "@react-navigation/native";

import { Container, Input, SearchButton, SearchDiv } from "./styles";

import Icon from "react-native-vector-icons/Feather";

const Profile = () => {
  const { navigate } = useNavigation();
  const [summonerID, setSummonerID] = useState();
  const [summoner, setSummoner] = useState();

  async function SummonerProfile() {
    const response = await apiLoL.get(
      `summoner/v4/summoners/by-name/${summoner}`
    );
    console.log(response.data);
    setSummonerID(response.data.puuid);
  }

  return (
    <Container>
      <SearchDiv>
        <View>
          <Text style={{ color: "#fff" }}>Nome de invocador</Text>
          <Input
            onChangeText={(e) => {
              setSummoner(e);
            }}
          />
        </View>

        <SearchButton onPress={SummonerProfile}>
          <Icon name="search" color="#fff" size={20} />
        </SearchButton>
      </SearchDiv>

      <Clipboard></Clipboard>
    </Container>
  );
};

export default Profile;
