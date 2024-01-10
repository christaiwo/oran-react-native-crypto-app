import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  Fontisto,
  FontAwesome5,
  Octicons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

interface BottomBarProps {
  handleClick: () => void;
}

const BottomBar = ({ handleClick }: BottomBarProps) => {
  return (
    <View className="w-full h-[8%] bg-[#1E1E1E] flex flex-row items-center justify-between px-2">
      <TouchableOpacity
        onPress={handleClick}
        className="flex flex-col items-center justify-center"
      >
        <View className="w-8 h-8  rounded-full flex items-center justify-center">
          {/* <Feather name="bar-chart" size={20} color={"white"} /> */}
          <Image source={require("../assets/kucoin.png")} className="w-5 h-5" />
        </View>
        <Text className="text-white">Markets</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleClick}
        className="flex flex-col items-center justify-center"
      >
        <View className="w-8 h-8  rounded-full flex items-center justify-center">
          <Feather name="bar-chart" size={20} color={"#808080"} />
        </View>
        <Text className="text-[#808080]">Markets</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleClick}
        className="flex flex-col items-center justify-center"
      >
        <View className="w-8 h-8  rounded-full flex items-center justify-center">
          <Octicons name="arrow-switch" size={20} color={"#808080"} />
        </View>
        <Text className="text-[#808080]">Trade</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleClick}
        className="flex flex-col items-center justify-center"
      >
        <View className="w-8 h-8  rounded-full flex items-center justify-center">
          <MaterialCommunityIcons
            name="chart-line-variant"
            size={20}
            color={"#808080"}
          />
        </View>
        <Text className="text-[#808080]">Fixtures</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleClick}
        className="flex flex-col items-center justify-center"
      >
        <View className="w-8 h-8  rounded-full flex items-center justify-center">
          <Ionicons name="wallet-outline" size={20} color={"#808080"} />
        </View>
        <Text className="text-[#808080]">Assets</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
