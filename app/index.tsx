import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  Ionicons,
  AntDesign,
  Fontisto,
  Octicons,
} from "@expo/vector-icons";
import StatCard from "@/StatCard";
import BottomBar from "@/BottomBar";
import TopBar from "@/TopBar";
import HeaderBanner from "@/HeaderBanner";

const Page = () => {
  const handleClick = () => {
    alert("Upgrade the APk source to operate");
  };
  return (
    <SafeAreaView className="w-full h-full  bg-[#121212]">
      <ScrollView className="h-[90%] w-full flex flex-col space-y-3 px-2">
        <TopBar handleClick={handleClick} />
        <HeaderBanner handleClick={handleClick} />

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
              <Text className="">Oran Earn</Text>
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
              <Text className="">NFT</Text>
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
              <Text className="">Card</Text>
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
              <Text className="">Rewards Hub</Text>
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
              <Text className="">Invite friends</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleClick}
              className="w-[25%] flex flex-col items-center "
            >
              <View className="w-10 h-10 flex items-center justify-center rounded-full">
                <Octicons name="copy" color={"#339AF0"} size={25} />
              </View>
              <Text className="">Copy Trading</Text>
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
              <Text className="">Trading Bot</Text>
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
              <Text className="">More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BottomBar handleClick={handleClick} />
    </SafeAreaView>
  );
};

export default Page;
