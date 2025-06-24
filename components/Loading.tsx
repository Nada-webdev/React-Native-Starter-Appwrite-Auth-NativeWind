import { View } from "react-native";

export default function Loading() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View className="flex-row space-x-2">
        <View className="w-5 h-5 bg-[#d991c2] rounded-full animate-bounce" />
        <View className="w-5 h-5 bg-[#9869b8] rounded-full animate-bounce" />
        <View className="w-5 h-5 bg-[#6756cc] rounded-full animate-bounce" />
      </View>
    </View>
  );
}
