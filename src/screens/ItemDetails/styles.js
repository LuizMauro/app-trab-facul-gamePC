import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #000;
  justify-content: center;
  align-items: center;
`;

export const ViewHeader = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  background-color: #000;
`;

export const ImageItem = styled.Image`
  height: 64px;
  width: 64px;
  margin:5px;
`;

export const ViewTree = styled.View`

  display: flex;
  flex-direction: row;
  flex:1;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ButtonItem = styled.TouchableOpacity`
  
  border-radius: 6px;
`;