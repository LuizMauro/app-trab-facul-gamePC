import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #000;

  justify-content: center;
  align-items: center;
`;

export const ContainerInput = styled.View`
  display: flex;
  height: 100px;
  background-color: #000;
  padding-bottom: 50px;
  justify-content: center;
  align-items: center;
`;

export const ContainerWrap = styled.View`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
`;

export const Input = styled.TextInput`
  width: 250px;
  height: 40px;
  background-color: #fff;
  border-radius: 8px;
`;

export const SearchDiv = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
  align-items: flex-end;
`;

export const Button = styled.TouchableOpacity`
  background-color: #c38f2c;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ImageChampion = styled.Image`
  height: 100%;
  width: 100%;
`;
