import {
   View,
   Text,
   TouchableOpacity,
   Linking,
   ImageBackground,
} from "react-native";
import React, { useState } from "react";
import ModalComponent from "./Modal";

const Card = ({ article }) => {
   if (article["urlToImage"] == null) {
      article["urlToImage"] =
         "https://c4.wallpaperflare.com/wallpaper/467/417/159/dark-blue-wallpaper-preview.jpg";
   }
   const [modalVisible, setModalVisible] = useState(false);
   return (
      <View>
         <ImageBackground
            source={{ uri: `${article["urlToImage"]}` }}
            resizeMode="cover"
            className=" m-1 rounded-3xl"
         >
            <TouchableOpacity
               activeOpacity={0.8}
               onPress={() => setModalVisible(true)}
            >
               <View className="w-screen h-52  m-2 rounded-3xl p-4 ">
                  <View className="flex flex-row gap-10 justify-between">
                     <Text className="text-white">
                        From: {article["source"].name}
                     </Text>
                     <Text className="text-white">
                        {article["author"] != null && article["author"]}
                     </Text>
                  </View>
                  <View className="m-1 p-1">
                     <Text className="text-lg text-white">
                        {article["title"]}
                     </Text>
                  </View>
                  <TouchableOpacity
                     onPress={() => Linking.openURL(article["url"])}
                     className="items-center m-3 flex-1 justify-center w-28 bg-white rounded-lg absolute right-0 bottom-0"
                  >
                     <Text className=" text-md p-2  w-20 items-center">
                        See more
                     </Text>
                  </TouchableOpacity>
               </View>
            </TouchableOpacity>
         </ImageBackground>
         <ModalComponent
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            article={article}
         />
      </View>
   );
};

export default Card;
