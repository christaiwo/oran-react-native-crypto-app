import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";

interface TopBarProps {
  handleClick: () => void;
}

const TopBar = ({ handleClick }: TopBarProps) => {
  return (
    <View className="w-full h-14 flex flex-row items-center justify-between">
      <TouchableOpacity
        onPress={handleClick}
        className="w-8 h-8 bg-[#1E1E1E] rounded-full flex items-center justify-end"
      >
        {/* <Image
          source={require("../assets/icon/avatar.png")}
          className="w-10 h-12"
        /> */}
        <AntDesign name="user" className="" size={25} color={"gray"} />
      </TouchableOpacity>
      <View className="w-[50%] h-10 bg-inherit border border-gray-400 rounded-full flex flex-row items-center px-1">
        <AntDesign name="search1" size={20} color={"gray"} />
        <TextInput
          className="w-full h-full bg-inherit rounded-full px-2 text-white"
          placeholder="XAI"
        />
      </View>
      <View className="w-[30%] flex flex-row justify-between items-center">
        <TouchableOpacity onPress={handleClick}>
          <MaterialIcons name="support-agent" size={25} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClick}>
          <MaterialCommunityIcons name="line-scan" size={25} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClick} className="relative">
          <Feather name="bell" size={25} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;
