import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

interface HeaderBannerProps {
  handleClick: () => void;
}
const HeaderBanner = ({ handleClick }: HeaderBannerProps) => {
  return (
    <View className="w-full h-40 bg-inherit border border-darkColor rounded-md flex flex-col items-center px-2 py-2">
      <View className="w-full h-[60%] flex flex-row">
        <View className="w-[70%]">
          <Text className="text-xl font-bold text-white">Log In/Sign Up</Text>
          <Text className="text-gray-400 text-xs">
            You have a token reward of up worth up to 700 USDT to claim
          </Text>
        </View>
        <View className="w-[30%] h-full">
          <Image
            source={require("../assets/back.png")}
            className="w-full h-full object-contain"
          />
        </View>
      </View>
      <View className="h-[40%] w-full flex flex-row items-center justify-between">
        <View className="w-[70%] flex flex-row space-x-2 items-center">
          <TouchableOpacity
            onPress={handleClick}
            className="w-[40%] h-fit bg-primary rounded-full px-4 py-2 flex items-center justify-center"
          >
            <Text className="text-white font-semibold">Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleClick}
            className="w-[40%] h-fit bg-darkColor rounded-full px-4 py-2 flex items-center justify-center"
          >
            <Text className="text-white font-semibold">Log In</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={handleClick}
          className="flex flex-row space-x-2 items-center"
        >
          <Text className="text-primary">Rewards Hub</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={20}
            color={"#339AF0"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderBanner;
