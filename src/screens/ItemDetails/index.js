import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
// import api from "../../services/api";

import { Container, ViewHeader } from "./styles";

const ItemDetails = () => {
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedDescription, setSelectedDescription] = useState({});
  const [nameItem, setNameItem] = useState("");
  const routes = useRoute();
  const params = routes.params;

  useEffect(() => {
    selectItem(params.item);
  }, [params]);

  async function setItem(item) {
    console.log(item);
    setNameItem(item.name);
  //   setSelectedDescription(objJson[0].);
    // setAttack(objJson[0].info.attack);
    // setDefense(objJson[0].info.defense);
    // setMagic(objJson[0].info.magic);
    // setDifficulty(objJson[0].info.difficulty);
    setLoading(false);
  }

  function selectItem(item) {
    setSelectedItem(item);
    setItem(item);
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
      <ScrollView style={{ backgroundColor: "#000" }}>
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
          {nameItem}
        </Text>
        <Container>
          <Image
            source={{
              uri: `http://ddragon.leagueoflegends.com/cdn/10.23.1/img/item/${selectedItem.image.full}`,
            }}
            style={{ height: 100, width: 100 }}
          />
        </Container>

        <Container>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              padding: 10,
              fontWeight: "bold",
            }}
          >
                  
          Preço de compra: {selectedItem.gold.base}         
          {"\n"}
          Preço de venda: {selectedItem.gold.sell}
          {"\n"}  
          Preço de Total: {selectedItem.gold.total}
          {"\n"}
          Descrição: {selectedItem.plaintext? selectedItem.plaintext : "Não há descrição para esse item" } 
          </Text>
        </Container>

        {/* <Container>
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
        </Container> */}
      </ScrollView>
    </>
  );
};

export default ItemDetails;
