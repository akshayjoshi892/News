import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
const First = () => {
   const router = useRouter();
   return (
      <SafeAreaView className="">
         {/*for top image*/}
         <View className="  w-screen h-3/6 "></View>
         {/*for title*/}
         <View className="w-full h-full items-center rounded-2x p-1 ">
            <View className="w-full h-full items-center rounded-2x p-1 bg-orange-300 rounded-3xl">
               <Text className=" text-4xl mt-4  font-extrabold">News</Text>
               <Text className=" text-lg mb-8">"News you need to know!"</Text>
               <TouchableOpacity
                  onPress={() => router.push("tabs")}
                  className="w-9/12 bg-slate-900 h-16 rounded-3xl items-center justify-center"
               >
                  <Text className="text-white text-xl">Explore news</Text>
               </TouchableOpacity>
            </View>
         </View>
      </SafeAreaView>
   );
};

export default First;
