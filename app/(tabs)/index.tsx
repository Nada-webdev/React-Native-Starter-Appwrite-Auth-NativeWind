import { Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useAuth } from "@/lib/auth-context";
import { Button } from "react-native-paper";
import Loading from "@/components/Loading";

export default function Index() {
  const { signOut, isLoadingUser } = useAuth();
   if (isLoadingUser) {
        return <Loading />;
      }
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-xl flex-row items-center gap-1">
        Welcome to React Native{" "}
        <MaterialIcons name="waving-hand" size={24} color="purple" />
      </Text>

      <Button
        mode="text"
        onPress={signOut}
        icon="logout"
        labelStyle={{ color: "purple" }}
      >
        Sign Out
      </Button>
    </View>
  );
}
