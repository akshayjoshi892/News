import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchHeadLines } from "../../API/api";
import Card from "../../components/Card";
import Header from "../../components/Header";

const index = () => {
   const [newsIN, setNewIN] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const headNews = await fetchHeadLines();
            setNewIN(headNews);
         } catch (error) {
            console.error("Error fetching Indian news:", error);
         }
      };

      fetchData();
   }, []);

   return (
      <SafeAreaView className="flex-1 justify-center items-center">
         {newsIN.length < 0 && <Text>Loading...</Text>}
         <ScrollView>
            <Header />
            <View className=" w-12/12 h-full flex-1 flex-row flex-wrap mr-1">
               {newsIN.map((article, index) => (
                  <Card article={article} key={index} />
               ))}
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default index;
