import { StatusBar } from "expo-status-bar";
import React from "react";
import Application from "./src/app";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Application />
    </>
  );
}
