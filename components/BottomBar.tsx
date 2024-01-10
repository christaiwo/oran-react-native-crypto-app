import { View, Text, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  Fontisto,
} from "@expo/vector-icons";

interface BottomBarProps {
  handleClick: () => void;
}

const BottomBar = ({ handleClick }: BottomBarProps) => {
  return (
    <View className="w-full h-[8%] flex flex-row items-center justify-between px-2">
      <TouchableOpacity
        onPress={handleClick}
        className="flex flex-col items-center justify-center"
      >
        <View className="w-8 h-8 bg-primary/70 rounded-full flex items-center justify-center">
          <Text className="text-white">CC</Text>
        </View>
        <Text className="text-primary/70">Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleClick}
        className="flex flex-col items-center justify-center"
      >
        <View className="w-8 h-8  rounded-full flex items-center justify-center">
          <Fontisto name="equalizer" size={20} />
        </View>
        <Text>Markets</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleClick}
        className="flex flex-col items-center justify-center"
      >
        <View className="w-8 h-8  rounded-full flex items-center justify-center">
          <AntDesign name="codesquareo" size={20} />
        </View>
        <Text>Derivatives</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleClick}
        className="flex flex-col items-center justify-center"
      >
        <View className="w-8 h-8  rounded-full flex items-center justify-center">
          <MaterialCommunityIcons
            name="flask-round-bottom-empty-outline"
            size={20}
          />
        </View>
        <Text>Trade</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleClick}
        className="flex flex-col items-center justify-center"
      >
        <View className="w-8 h-8  rounded-full flex items-center justify-center">
          <AntDesign name="creditcard" size={20} />
        </View>
        <Text>Assets</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;
