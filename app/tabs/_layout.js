import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function TabLayout() {
   return (
      <Tabs
         screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}
      >
         <Tabs.Screen
            name="index"
            options={{
               title: "HeadLines",
               tabBarIcon: ({ color }) => (
                  <FontAwesome6 size={30} name="newspaper" color={color} />
               ),
            }}
         />
         <Tabs.Screen
            name="techNews"
            options={{
               title: "TechNews",
               tabBarIcon: ({ color }) => (
                  <MaterialIcons name="computer" size={30} color="black" />
               ),
            }}
         />
      </Tabs>
   );
}
