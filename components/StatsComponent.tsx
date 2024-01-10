import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Octicons } from "@expo/vector-icons";

interface StatsComponentProps {
  handleClick: () => void;
}
const StatsComponent = ({ handleClick }: StatsComponentProps) => {
  return (
    <View className="flex flex-col space-y-10 ">
      <View className="w-full flex flex-row justify-between items-center mt-5">
        <TouchableOpacity
          onPress={handleClick}
          className="w-[25%] flex flex-col items-center "
        >
          <View className="w-10 h-10 border-2 border-[#339AF0] flex items-center justify-center p-1 rounded-full">
            <Image
              source={require("../assets/icon/usdt.png")}
              className="w-full h-full"
            />
            <View className="absolute -top-3 -right-6 rounded-l-md rounded-r-lg py-[2px] bg-primary w-8 flex items-center justify-center">
              <Text className="text-xs text-white">30%</Text>
            </View>
          </View>
          <Text className="text-white">Oran Earn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleClick}
          className="w-[25%] flex flex-col items-center "
        >
          <View className="w-10 h-10 flex items-center justify-center rounded-full">
            <Image
              source={require("../assets/icon/nft.png")}
              className="w-full h-full"
            />
          </View>
          <Text className="text-white">NFT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleClick}
          className="w-[25%] flex flex-col items-center "
        >
          <View className="w-10 h-10 flex items-center justify-center rounded-full relative">
            <Image
              source={require("../assets/icon/card.png")}
              className="w-full h-full"
            />
            <View className="absolute -top-3 -right-6 rounded-l-md rounded-r-lg py-[2px] bg-primary w-8 flex items-center justify-center">
              <Text className="text-xs text-white">new</Text>
            </View>
          </View>
          <Text className="text-white">Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleClick}
          className="w-[25%] flex flex-col items-center "
        >
          <View className="w-10 h-10 flex items-center justify-center rounded-full">
            <Image
              source={require("../assets/icon/gift.png")}
              className="w-full h-full"
            />
          </View>
          <Text className="text-white">Rewards Hub</Text>
        </TouchableOpacity>
      </View>
      <View className="w-full flex flex-row justify-between items-center">
        <TouchableOpacity
          onPress={handleClick}
          className="w-[25%] flex flex-col items-center "
        >
          <View className="w-10 h-10 border-2 border-[#339AF0] flex items-center justify-center p-1 rounded-full">
            <AntDesign name="user" color={"#339AF0"} size={25} />
          </View>
          <Text className="text-white">Invite friends</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleClick}
          className="w-[25%] flex flex-col items-center "
        >
          <View className="w-10 h-10 flex items-center justify-center rounded-full">
            <Octicons name="copy" color={"#339AF0"} size={25} />
          </View>
          <Text className="text-white">Copy Trading</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleClick}
          className="w-[25%] flex flex-col items-center "
        >
          <View className="w-10 h-10 flex items-center justify-center rounded-full">
            <Image
              source={require("../assets/icon/bot.png")}
              className="w-full h-full"
            />
          </View>
          <Text className="text-white">Trading Bot</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleClick}
          className="w-[25%] flex flex-col items-center "
        >
          <View className="w-10 h-10 border-2 border-[#339AF0] flex items-center justify-center p-1 rounded-full">
            <Image
              source={require("../assets/icon/more.png")}
              className="w-full h-full"
            />
          </View>
          <Text className="text-white">More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StatsComponent;
