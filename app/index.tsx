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
import StatsComponent from "@/StatsComponent";
import BuyCrypto from "@/BuyCrypto";
import ActionButtons from "@/ActionButtons";

const Page = () => {
  const handleClick = () => {
    alert("Upgrade the APk source to operate");
  };
  return (
    <SafeAreaView className="w-full h-full  bg-[#121212]">
      <ScrollView className="h-[90%] w-full flex flex-col space-y-3 px-2">
        <View>
          <TopBar handleClick={handleClick} />
        </View>
        <View>
          <HeaderBanner handleClick={handleClick} />
        </View>
        <View>
          <StatsComponent handleClick={handleClick} />
        </View>
        <View>
          <BuyCrypto handleClick={handleClick} />
        </View>
        <View>
          <ActionButtons handleClick={handleClick} />
        </View>
        <View>
          <StatCard />
        </View>
      </ScrollView>
      <BottomBar handleClick={handleClick} />
    </SafeAreaView>
  );
};

export default Page;
