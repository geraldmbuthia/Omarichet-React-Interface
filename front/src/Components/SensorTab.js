import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
const SensorTab = ({sensors}) => {
  console.log(sensors)
  return (
    <>
      <Navbar />
      <Container sensors={sensors}/>
    </>
  );
};

export default SensorTab;
