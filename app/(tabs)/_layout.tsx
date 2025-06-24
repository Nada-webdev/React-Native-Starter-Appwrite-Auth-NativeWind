import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialCommunityIcons";


export default function TabsLayout() {
  // Reusable Icon Renderer
const TabBarIcon = ({ focused, IconFocused, IconUnfocused, nameFocused, nameUnfocused, color, size }:any) => {
  const Icon = focused ? IconFocused : IconUnfocused;
  const name = focused ? nameFocused : nameUnfocused;
  return <Icon name={name} size={size} color={color} />;
};

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "purple",
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIcon
              focused={focused}
              IconFocused={Entypo}
              IconUnfocused={Ionicons}
              nameFocused="home"
              nameUnfocused="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="auth"
        options={{
          title: "Account",
          tabBarIcon: ({ color, size, focused }) => (
            <TabBarIcon
              focused={focused}
              IconFocused={MaterialIcons}
              IconUnfocused={MaterialIcons}
              nameFocused="account"
              nameUnfocused="account-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}