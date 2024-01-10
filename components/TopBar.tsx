import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

interface TopBarProps {
  handleClick: () => void;
}

const TopBar = ({ handleClick }: TopBarProps) => {
  return (
    <View className="w-full h-14 flex flex-row items-center justify-between">
      <TouchableOpacity onPress={handleClick}>
        <Image
          source={require("../assets/icon/avatar.png")}
          className="w-10 h-12"
        />
      </TouchableOpacity>
      <View className="w-[50%] h-10 bg-gray-300/40 rounded-full">
        <TextInput className="w-full h-full bg-inherit rounded-full px-2" />
      </View>
      <View className="w-[30%] flex flex-row justify-between items-center">
        <TouchableOpacity onPress={handleClick}>
          <MaterialCommunityIcons name="line-scan" size={25} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClick}>
          <MaterialIcons name="support-agent" size={25} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClick} className="relative">
          <Feather name="bell" size={25} color={"black"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
