import { View, Text, Image } from "react-native";
import React from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

interface BuyCryptoProps {
  handleClick: () => void;
}
const BuyCrypto = ({ handleClick }: BuyCryptoProps) => {
  return (
    <TouchableOpacity
      onPress={handleClick}
      className="w-full flex flex-row items-center justify-center"
    >
      <View className="bg-darkColor w-[80%] h-20 rounded-md flex-row items-center p-2 justify-between">
        <View className="w-[25%] relative">
          <View className="w-12 h-12 rounded-full">
            <Image
              source={require("../assets/icon/usdt-2.png")}
              className="w-full h-full"
            />
          </View>
          <View className="absolute left-4 top-4 w-10 h-10 bg-black/20 rounded-full flex items-center justify-center">
            <FontAwesome name="dollar" color={"white"} size={20} />
          </View>
        </View>
        <View className="flex-1">
          <Text className="text-white">Buy Crypto</Text>
          <Text className="text-[8px] text-gray-400">
            With Visa or Mastercard
          </Text>
        </View>
        <View>
          <MaterialIcons name="keyboard-arrow-right" size={20} color={"gray"} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BuyCrypto;
