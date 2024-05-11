import React, { useState, useEffect } from "react";
import { Stack } from "expo-router";

const Index = () => {
   return (
      <Stack>
         <Stack.Screen name="index" options={{ headerShown: false }} />

         <Stack.Screen name="tabs" options={{ headerShown: false }} />
      </Stack>
   );
};

export default Index;
