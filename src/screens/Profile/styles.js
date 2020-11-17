import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
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

export const Input = styled.TextInput`
  width: 250px;
  height: 40px;
  background-color: #fff;
  border-radius: 8px;
`;

export const TitleText = styled.Text`
  font-size: 22px;
  color: #fff;
`;

export const SearchDiv = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
  align-items: flex-end;
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: #c38f2c;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
