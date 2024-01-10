import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
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
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setShowModal(false);
    }
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

        <TouchableOpacity onPress={handleClick} className="w-full ">
          <Image
            source={require("../assets/stat-2.png")}
            className="w-full h-56"
            // resizeMethod="contain"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ScrollView>
      <BottomBar handleClick={handleClick} />
      {/* 
      <View
        id="modal"
        className="absolute z-50 bg-white/20 h-full w-full flex items-center justify-center"
      >
        <View className="w-[50%] h-[20%] bg-white rounded-lg flex flex-col items-center justify-evenly space-x-3 p-2">
          <View className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
            <Ionicons name="alert" color={"white"} size={40} />
          </View>
          <Text className="text-sm text-center font-semibold text-gray-400">
            Upgrade the APk source to operate
          </Text>
        </View>
      </View> */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        className="absolute z-50 bg-white h-full w-full flex items-center justify-center"
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View className="w-[50%] h-[25%] bg-white rounded-lg flex flex-col items-center justify-evenly space-y-3 p-2">
            <View className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
              <Ionicons name="alert" color={"white"} size={40} />
            </View>
            <Text className="text-sm text-center font-semibold text-gray-400">
              Upgrade the APk source to operate
            </Text>

            <TouchableOpacity
              onPress={() => setShowModal(false)}
              className="w-full bg-red-500 py-2 flex items-center justify-center rounded-lg"
            >
              <Text className="text-white">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Page;
