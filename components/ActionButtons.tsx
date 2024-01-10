import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

interface ActionButtonsProps {
  handleClick: () => void;
}
const ActionButtons = ({ handleClick }: ActionButtonsProps) => {
  return (
    <View className="w-full flex flex-row space-x-2">
      <View className="w-[33%]">
        <TouchableOpacity
          onPress={handleClick}
          className="w-full px-2 py-2 bg-darkColor rounded-lg flex flex-row items-center justify-center space-x-2"
        >
          <MaterialCommunityIcons
            name="tray-arrow-down"
            color={"white"}
            size={20}
          />
          <Text className="text-white text-sm">Deposit</Text>
        </TouchableOpacity>
      </View>
      <View className="w-[33%]">
        <TouchableOpacity
          onPress={handleClick}
          className="w-full px-2 py-2 bg-darkColor rounded-lg flex flex-row items-center justify-center space-x-2"
        >
          <MaterialCommunityIcons
            name="tray-arrow-down"
            color={"white"}
            size={20}
          />
          <Text className="text-white text-sm">Deposit</Text>
        </TouchableOpacity>
      </View>

      <View className="w-[33%]">
        <TouchableOpacity
          onPress={handleClick}
          className="w-full px-2 py-2 bg-darkColor rounded-lg flex flex-row items-center justify-center space-x-2"
        >
          <MaterialCommunityIcons
            name="tray-arrow-down"
            color={"white"}
            size={20}
          />
          <Text className="text-white text-sm">Deposit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActionButtons;
