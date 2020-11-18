import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import api from "../../services/api";

import Bar from "../../components/BarStatistic";

import { Container, ViewHeader } from "./styles";

const ChampionsDetails = () => {
  const [loading, setLoading] = useState(true);
  const [selectedChampion, setSelectedChampion] = useState({});
  const [selectedLore, setSelectedLore] = useState();
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [magic, setMagic] = useState(0);
  const [difficulty, setDifficulty] = useState(0);

  const routes = useRoute();
  const params = routes.params;

  useEffect(() => {
    selectChampion(params.champ);
  }, [params]);

  async function LoadLore(champion) {
    console.log(champion.id);
    const response = await api.get(`/champion/${champion.id}.json`);
    const objJson = Object.values(response.data.data);

    setSelectedLore(objJson[0].lore);
    setAttack(objJson[0].info.attack);
    setDefense(objJson[0].info.defense);
    setMagic(objJson[0].info.magic);
    setDifficulty(objJson[0].info.difficulty);
    setLoading(false);
  }

  function selectChampion(champion) {
    setSelectedChampion(champion);
    LoadLore(champion);
  }

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#c38f2c" />
      </Container>
    );
  }

  return (
    <>
      <ScrollView>
        <Text
          style={{
            color: "#fff",
            fontSize: 30,
            textAlign: "center",
            padding: 10,
            fontWeight: "bold",
            backgroundColor: "#000",
          }}
        >
          {selectedChampion.name}
        </Text>
        <ViewHeader>
          <Image
            source={{
              uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${selectedChampion.id}_0.jpg`,
            }}
            style={{ height: 400, width: 200 }}
          />
          <Bar
            attack={attack}
            defense={defense}
            magic={magic}
            difficulty={difficulty}
          />
        </ViewHeader>

        <Container>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              padding: 10,
              fontWeight: "bold",
            }}
          >
            {selectedChampion.title}
          </Text>
        </Container>

        <Container>
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              padding: 20,
              textAlign: "justify",
            }}
          >
            {selectedLore}
          </Text>
        </Container>
      </ScrollView>
    </>
  );
};

export default ChampionsDetails;
