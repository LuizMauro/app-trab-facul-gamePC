import React, { useState } from "react";
import {
  View,
  Text,
  Clipboard,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import apiLoL from "../../services/apiLoL";

import Icon from "react-native-vector-icons/Feather";
import {
  Container,
  Input,
  Button,
  SearchDiv,
  ContainerInput,
  NameProfile,
  LevelProfile,
} from "./styles";

const Profile = () => {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(null);

  const [profileIconId, setProfileIconId] = useState("");
  const [summonerName, setSummonerName] = useState("Nome do invocador");
  const [summonerLevel, setSummonerLevel] = useState(0);
  const [summoner, setSummoner] = useState();

  async function SummonerProfile() {
    if (summoner) {
      setLoading(true);

      await apiLoL
        .get(`summoner/v4/summoners/by-name/${summoner}`)
        .then((response) => {
          setProfileIconId(response.data.profileIconId);
          setSummonerName(response.data.name);
          setSummonerLevel(response.data.summonerLevel);
          setLoading(false);
        })
        .catch(() => {
          Alert.alert("Ops!", "Summoner não existe!");
          setLoading(false);
          return;
        });
    } else {
      Alert.alert(
        "Ops!",
        "Digite um nome de invocador para buscar informações"
      );
    }
  }

  return (
    <Container>
      <ContainerInput style={{ marginTop: 50, marginBottom: 50 }}>
        <Image
          style={{ height: 140, width: 140, borderRadius: 10 }}
          source={{
            uri:
              profileIconId === ""
                ? "http://ddragon.leagueoflegends.com/cdn/10.23.1/img/profileicon/588.png"
                : `http://ddragon.leagueoflegends.com/cdn/10.23.1/img/profileicon/${profileIconId}.png`,
          }}
        />
        <LevelProfile>Level: {summonerLevel}</LevelProfile>
        <NameProfile>{summonerName}</NameProfile>
      </ContainerInput>

      <ContainerInput>
        <SearchDiv>
          <View>
            <Text style={{ color: "#fff" }}>Nome de invocador</Text>
            <Input
              onChangeText={(e) => {
                setSummoner(e);
              }}
            />
          </View>

          <Button onPress={SummonerProfile}>
            <Icon name="search" color="#fff" size={20} />
          </Button>
        </SearchDiv>
      </ContainerInput>

      {loading && <ActivityIndicator size="large" color="#c38f2c" />}
    </Container>
  );
};

export default Profile;
