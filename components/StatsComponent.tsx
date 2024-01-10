import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Octicons, Feather } from "@expo/vector-icons";

interface StatsComponentProps {
  handleClick: () => void;
}
const StatsComponent = ({ handleClick }: StatsComponentProps) => {
  return (
    <TouchableOpacity
      onPress={handleClick}
      className="w-full flex flex-col space-y-10 "
    >
      <Image source={require("../assets/stat.png")} className="w-full h-44" />
    </TouchableOpacity>
  );
};

export default StatsComponent;
