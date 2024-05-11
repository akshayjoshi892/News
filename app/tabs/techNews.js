import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchTechNews } from "../../API/api";
import Card from "../../components/Card";
import Header from "../../components/Header";
const techNews = () => {
   const [techNews, settechNews] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const headNews = await fetchTechNews();
            settechNews(headNews);
         } catch (error) {
            console.error("Error fetching Indian news:", error);
         }
      };

      fetchData();
   }, []);
   return (
      <SafeAreaView>
         <ScrollView>
            <Header />
            <View className=" w-12/12 h-full flex-1 flex-row flex-wrap mr-1">
               {techNews.map((article, index) => (
                  <Card article={article} key={index} />
               ))}
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default techNews;
