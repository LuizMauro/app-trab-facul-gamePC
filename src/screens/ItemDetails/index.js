import React, { useState, useEffect } from "react";
import { Text, ScrollView, Image, ActivityIndicator, View } from "react-native";
import { useRoute } from "@react-navigation/native";
// import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";

import { Container, ViewTree, ImageItem, ButtonItem } from "./styles";

const ItemDetails = () => {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState({});
  const [itensInto, setItensInto] = useState([]);
  const [nameItem, setNameItem] = useState("");
  const routes = useRoute();
  const params = routes.params;

  useEffect(() => {
    selectItem(params.item);
    console.log(params.item);
  }, [params]);

  function setItem(item) {
    setNameItem(item.name);
    setItensInto(item.into);
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
            Descrição:{" "}
            {selectedItem.plaintext
              ? selectedItem.plaintext
              : " Não há descrição para esse item"}
          </Text>

          <ViewTree>
            {itensInto &&
              itensInto.map((item, index) => (
                <ImageItem
                  key={item}
                  source={{
                    uri: `http://ddragon.leagueoflegends.com/cdn/10.23.1/img/item/${item}.png`,
                  }}
                />
              ))}
          </ViewTree>
        </Container>
      </ScrollView>
    </>
  );
};

export default ItemDetails;
