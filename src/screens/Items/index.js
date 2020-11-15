import React, { useEffect, useState } from "react";
import { ScrollView, SafeAreaView, ActivityIndicator } from "react-native";

import api from "../../services/api";

import { useNavigation } from "@react-navigation/native";

import {
  Container,
  ContainerLoading,
  ButtonItem,
  NameItem,
  ImageItem,
} from "./styles";

const Items = () => {
  const { navigate } = useNavigation();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  async function loadItems() {
    const response = await api.get("item.json");
    const ItemsObjJson = Object.values(response.data.data);

    setItems(ItemsObjJson);
    setLoading(false);
  }

  useEffect(() => {
    loadItems();
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
          {items.map((item, index) => (
            <ButtonItem
              key={index}
              onPress={() => navigate("Item-Details", { item })}
            >
              <ImageItem
                source={{
                  uri: `http://ddragon.leagueoflegends.com/cdn/10.23.1/img/item/${item.image.full}`,
                }}
              />
              <NameItem>{item.name}</NameItem>
            </ButtonItem>
          ))}
        </Container>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Items;
