import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const StatCard = () => {
  return (
    <View className="w-32 h-36 bg-[#f0f0f0] p-2 flex flex-col space-y-1 rounded-lg mx-2">
      <Text className="text-lg">BTCUSDT</Text>
      <Text className="text-lg text-red-600 font-bold">34,385.70</Text>
      <Text className="text-lg text-red-600">- 0.04%</Text>
      <View className="flex flex-row items-center space-x-2">
        <Text className="text-lg">Trade</Text>
        <AntDesign name="arrowright" size={25} />
      </View>
    </View>
  );
};

export default StatCard;
