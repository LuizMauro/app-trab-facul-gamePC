import React, { useEffect, useState } from "react";
import { ScrollView, SafeAreaView, ActivityIndicator } from "react-native";

import api from "../../services/api";

import { useNavigation } from "@react-navigation/native";

import {
  Container,
  ContainerLoading,
  ButtonChampion,
  NameChampion,
  ImageChampion,
} from "./styles";

const Champions = () => {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(true);
  const [champions, setChampions] = useState([]);

  async function loadChampions() {
    const response = await api.get("champion.json");
    const championsObjJson = Object.values(response.data.data);

    setChampions(championsObjJson);
    setLoading(false);
  }

  useEffect(() => {
    loadChampions();
  }, []);

  if (loading) {
    return (
      <ContainerLoading>
        <ActivityIndicator size="large" color="#c38f2c" />
      </ContainerLoading>
    );
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <Container>
          {champions.map((champ) => (
            <ButtonChampion
              key={champ.key}
              onPress={() => navigate("Champion-Details", { champ })}
            >
              <ImageChampion
                source={{
                  uri: `http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/${champ.image.full}`,
                }}
              />
              <NameChampion>{champ.name}</NameChampion>
            </ButtonChampion>
          ))}
        </Container>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Champions;
