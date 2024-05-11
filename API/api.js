import { useState } from "react";
import axios from "axios";

const API_KEY = "a7595ada087e4fc796826c4e4a798d18";
const URL_IN = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
const URL_TECH = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${API_KEY}`;

//fetch headlines of INDIA

export async function fetchHeadLines() {
   try {
      const response = await axios.get(URL_IN);
      return response.data.articles;
   } catch (error) {
      console.error("Error fetching headlines:", error);
      return []; // Return an empty array if there's an error
   }
}

export async function fetchTechNews() {
   try {
      const response = await axios.get(URL_TECH);
      return response.data.articles;
   } catch (error) {
      console.error("Error fetching headlines:", error);
      return []; // Return an empty array if there's an error
   }
}
