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

const Page = () => {
  const handleClick = () => {
    alert("Upgrade the APk source to operate");
  };
  return (
    <SafeAreaView className="w-full h-full  bg-white">
      <ScrollView className="h-[90%] w-full flex flex-col space-y-3 px-2">
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
              <MaterialCommunityIcons
                name="line-scan"
                size={25}
                color={"black"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClick}>
              <MaterialIcons name="support-agent" size={25} color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleClick} className="relative">
              <Feather name="bell" size={25} color={"black"} />
              <View className="absolute -top-3 left-2 rounded-full p-[2px] bg-primary">
                <Text className="text-xs text-white">28</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="w-full h-28 bg-gray-300/40 rounded-md flex flex-row items-center px-2 py-2">
          <View className="w-[70%]">
            <Text className="text-xl font-bold">
              Protect your 1st copy trade
            </Text>
            <Text className="">
              Enjoy Up to{" "}
              <Text className="text-[#339AF0] font-bold">
                100 USDT Loss Coverage
              </Text>
            </Text>
          </View>
          <View className="w-[30%] h-full">
            <Image
              source={require("../assets/background.png")}
              className="w-full h-full object-contain"
            />
          </View>
        </View>
        <View className="flex flex-col">
          <View className="flex flex-row items-center space-x-2">
            <Text className="text-lg">Featured</Text>
            <Ionicons name="reload" size={20} color={"black"} />
          </View>
          <View>
            <Text className="text-xl font-semibold">Your favorites</Text>
          </View>
          <ScrollView horizontal={true} className="flex flex-row mt-5">
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
          </ScrollView>
        </View>
        <TouchableOpacity
          onPress={handleClick}
          className="w-full h-14 border border-gray-400 rounded-lg flex items-center justify-center"
        >
          <View className="flex flex-row items-center space-x-2">
            <Text className="text-lg font-semibold">Buy/Deposit</Text>
            <AntDesign name="arrowright" size={25} />
          </View>
        </TouchableOpacity>
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
        <View className="w-full h-28 bg-[#f0f0f0] rounded-md flex flex-row items-center px-2 py-2">
          <View className="w-[30%] h-full">
            <Image
              source={require("../assets/award.png")}
              className="w-full h-full object-contain"
            />
          </View>
          <View className="w-[70%] relative">
            <Text
              className="text-[16px] font-medium flex flex-row items-center justify-center leading-7"
              numberOfLines={2}
            >
              Refer a friend climb Leaderboards and share 45,000 USDT
            </Text>
            <View className="bg-primary py-1 px-3 rounded-full absolute top-7 -right-0">
              <AntDesign name="arrowright" size={15} color={"white"} />
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomBar handleClick={handleClick} />
    </SafeAreaView>
  );
};

export default Page;
