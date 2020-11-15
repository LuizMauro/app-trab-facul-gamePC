import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #000;
  padding-bottom: 50px;
  justify-content: center;
  align-items: center;
`;

export const ContainerLoading = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: #000;
  justify-content: center;
  align-items: center;
`;

export const ButtonItem = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  margin: 9px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 6px;
`;

export const NameItem = styled.Text`
  font-size: 10px;
  color: #fff;
  text-align: center;
`;

export const ImageItem = styled.Image`
  height: 100%;
  width: 100%;
`;
