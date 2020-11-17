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
  width: 200px;
  height:30px;
  background-color: #fff;
`;

export const TitleText = styled.Text`
  font-size: 22px;
  color: #fff;
`;

export const SearchDiv = styled.View`

`;

export const SearchButton = styled.TouchableOpacity`
background-color: #c38f2c;
width:32px;
height:32px;
`;
