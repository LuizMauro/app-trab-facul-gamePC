import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text, Alert } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import apiLoL from "../../services/apiLoL";
import api from "../../services/api";

import {
  Container,
  ContainerInput,
  Input,
  SearchDiv,
  Button,
  ImageChampion,
  ContainerWrap,
} from "./styles";

const imagesMastery = [
  "",
  "https://cdn.discordapp.com/attachments/712079732849770606/778759290336837632/Champion_Mastery_Level_1_Flair.png",
  "https://cdn.discordapp.com/attachments/712079732849770606/778759292010496000/Champion_Mastery_Level_2_Flair.png",
  "https://cdn.discordapp.com/attachments/712079732849770606/778759293771841566/Champion_Mastery_Level_3_Flair.png",
  "https://cdn.discordapp.com/attachments/712079732849770606/778759296040042536/Champion_Mastery_Level_4_Flair.png",
  "https://cdn.discordapp.com/attachments/712079732849770606/778759298355953674/Champion_Mastery_Level_5_Flair.png",
  "https://cdn.discordapp.com/attachments/712079732849770606/778759300474601502/Champion_Mastery_Level_6_Flair.png",
  "https://cdn.discordapp.com/attachments/712079732849770606/778759302688931850/Champion_Mastery_Level_7_Flair.png",
];

const Mastery = () => {
  const [loading, setLoading] = useState(null);
  const [nameSummoner, setNameSummoner] = useState("");
  const [championsAux, setChampionsAux] = useState([]);
  const [masteryTopID, setMasteryTopID] = useState([]);

  async function loadChampionsAux() {
    const championsObj = await api.get("champion.json");
    const championsObjJson = Object.values(championsObj.data.data);
    setChampionsAux(championsObjJson);
  }

  useEffect(() => {
    loadChampionsAux();
  }, []);

  async function getIdSummoner() {
    setLoading(true);

    await apiLoL
      .get(`summoner/v4/summoners/by-name/${nameSummoner}`)
      .then((response) => {
        loadMastery(response.data.id);
      })
      .catch(() => {
        Alert.alert("Ops!", "Summoner não existe!");
        setLoading(false);
        return;
      });
  }

  async function loadMastery(id) {
    await apiLoL
      .get(`champion-mastery/v4/champion-masteries/by-summoner/${id}`)
      .then((response) => {
        if (response.data.length > 0) {
          setMasteryTopID([
            response.data[0],
            response.data[1],
            response.data[2],
          ]);
          setLoading(false);
        } else {
          Alert.alert("Ops!", "Esse Summoner não tem maestria!");
          setLoading(false);
          return;
        }
      })
      .catch(() => {
        Alert.alert("Ops!", "Esse Summoner não tem maestria!");
        setLoading(false);
        return;
      });
  }

  function getDetailsChampionMastery(key) {
    const championDetailed = championsAux.find((obj) => obj.key == key);

    return championDetailed;
  }

  return (
    <>
      <Container>
        <ContainerInput>
          <SearchDiv>
            <View>
              <Text style={{ color: "#fff" }}>
                Digite seu nome de invocador
              </Text>
              <Input
                value={nameSummoner}
                editable={true}
                onChangeText={(e) => setNameSummoner(e)}
              />
            </View>

            <Button onPress={getIdSummoner}>
              <Icon name="search" color="#fff" size={20} />
            </Button>
          </SearchDiv>
        </ContainerInput>

        {loading && <ActivityIndicator size="large" color="#c38f2c" />}

        <ContainerWrap>
          {masteryTopID.length > 0 &&
            masteryTopID.map((item, index) => {
              let championDetails = getDetailsChampionMastery(item.championId);
              let nameChampion = championDetails.name;
              let image = championDetails.image.full;

              return (
                <View
                  key={index}
                  style={{ width: 100, height: 100, margin: 10 }}
                >
                  <ImageChampion
                    source={{
                      uri: `http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/${image}`,
                    }}
                  />
                  <Text style={{ color: "#fff", textAlign: "center" }}>
                    {nameChampion}
                  </Text>
                  <Text
                    style={{ color: "#fff", textAlign: "center", fontSize: 11 }}
                  >
                    Pontos: {item.championPoints}
                  </Text>

                  <ImageChampion
                    source={{ uri: imagesMastery[item.championLevel] }}
                  />

                  <Text
                    style={{ color: "#fff", textAlign: "center", fontSize: 11 }}
                  >
                    Level: {item.championLevel}
                  </Text>
                </View>
              );
            })}
        </ContainerWrap>
      </Container>
    </>
  );
};

export default Mastery;
