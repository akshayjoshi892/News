import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, Linking } from "react-native";

const ModalComponent = ({ visible, onClose, article }) => {
   const { title, description, from, author, date, url } = article;

   const handlePress = () => {
      if (url) {
         Linking.openURL(url);
      }
   };

   return (
      <Modal
         visible={visible}
         transparent
         animationType="slide"
         onRequestClose={onClose}
      >
         <View
            style={{
               flex: 1,
               justifyContent: "center",
               alignItems: "center",
               backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
         >
            <View
               style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                  width: "90%",
               }}
            >
               <Text
                  style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
               >
                  {article["title"]}
               </Text>
               <Text style={{ marginBottom: 10 }}>
                  {article["description"]}
               </Text>
               <Text style={{ marginBottom: 10 }}>
                  From: {article["source"].name}
               </Text>
               <Text style={{ marginBottom: 10 }}>
                  Author: {article["author"] != null && article["author"]}
               </Text>
               <Text style={{ marginBottom: 10 }}>
                  Date: {article["publishedAt"]}
               </Text>
               <TouchableOpacity
                  onPress={handlePress}
                  style={{
                     backgroundColor: "blue",
                     padding: 10,
                     borderRadius: 5,
                  }}
               >
                  <Text style={{ color: "white", textAlign: "center" }}>
                     Read More
                  </Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={onClose} style={{ marginTop: 10 }}>
                  <Text style={{ color: "blue", textAlign: "center" }}>
                     Close
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
      </Modal>
   );
};

export default ModalComponent;
