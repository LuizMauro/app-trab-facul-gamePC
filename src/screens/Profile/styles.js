import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #000;
  padding-bottom: 50px;
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

export const NameProfile = styled.Text`
  font-size: 25px;
  color: #fff;
  text-align: center;
`;

export const LevelProfile = styled.Text`
  font-size: 12px;
  color: #fff;
  text-align: center;
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
