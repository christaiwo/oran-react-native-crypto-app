import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const StatCard = () => {
  return (
    <View className="w-full h-36 bg-inherit border border-darkColor p-2 flex flex-row items-center rounded-lg">
      <View className="w-1/3 flex items-center">
        <Text className="text-sm text-gray-200">BTC/USDT</Text>
        <Text className="text-lg text-white font-bold">34,385.70</Text>
        <Text className="text-xs text-red-600">- 0.04%</Text>
      </View>
      <View className="w-1/3 flex items-center">
        <Text className="text-sm text-gray-200">KCS/USDT</Text>
        <Text className="text-lg text-white font-bold">34,385.70</Text>
        <Text className="text-xs text-red-600">- 0.04%</Text>
      </View>
      <View className="w-1/3 flex items-center">
        <Text className="text-sm text-gray-200">ETH/USDT</Text>
        <Text className="text-lg text-white font-bold">34,385.70</Text>
        <Text className="text-xs text-green-600">+ 1.4%</Text>
      </View>
    </View>
  );
};

export default StatCard;
