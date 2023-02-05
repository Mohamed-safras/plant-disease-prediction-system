import React from "react";
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";
import Card from "../components/Card";

const ex_medicines = [
  {
    id: "bdjhjw32432",
    src: "https://cdn.shopify.com/s/files/1/0569/9675/7697/files/what-is-chemical-fertilizers_1024x1024.jpg?v=1655866237",
    title: "brown blight",
    description:
      "Brown blight disease is one of the foliar diseases of tea (Camellia sinensis) prevalent in China, Japan, Sri Lanka, and India. This disease is a serious concern for the tea industry, due to both the reduced tea yield and quality decrease. In October 2014, distinct leaf blight symptoms were observed on popular tea cultivars in commercial tea estates of Wansheng, Chongqing City (29°38′ N; 105°91′ E). The initial symptoms were characterized by water-soaked lesions on young leaves, and the lesions developed and expanded to large, dark brown, necrotic lesions, that were covered with black acervuli. Eventually the dead leaves fell from the tea plant. ",
  },
  {
    id: "bdjhjw3243",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQxcpkLmB2jHBN0S7xg5AwW1_5w5hPf6npUJN1QZXTApi1I1jO0Sz5_WhSbj4fpDstu8&usqp=CAU",
    title: "a cautionary tale",
    description:
      "Brown blight disease is one of the foliar diseases of tea (Camellia sinensis) prevalent in China, Japan, Sri Lanka, and India. This disease is a serious concern for the tea industry, due to both the reduced tea yield and quality decrease. In October 2014, distinct leaf blight symptoms were observed on popular tea cultivars in commercial tea estates of Wansheng, Chongqing City (29°38′ N; 105°91′ E). The initial symptoms were characterized by water-soaked lesions on young leaves, and the lesions developed and expanded to large, dark brown, necrotic lesions, that were covered with black acervuli. Eventually the dead leaves fell from the tea plant. ",
  },
  {
    id: "bdjhjw32434",
    src: "https://i1.wp.com/gardenprofessors.com/wp-content/uploads/Untitled-1-1.jpg",
    title: "brown blight",
    description:
      "Brown blight disease is one of the foliar diseases of tea (Camellia sinensis) prevalent in China, Japan, Sri Lanka, and India. This disease is a serious concern for the tea industry, due to both the reduced tea yield and quality decrease. In October 2014, distinct leaf blight symptoms were observed on popular tea cultivars in commercial tea estates of Wansheng, Chongqing City (29°38′ N; 105°91′ E). The initial symptoms were characterized by water-soaked lesions on young leaves, and the lesions developed and expanded to large, dark brown, necrotic lesions, that were covered with black acervuli. Eventually the dead leaves fell from the tea plant. ",
  },
  ,
  {
    id: "bdjhjw32435",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSgqjEsuyGYegHs1DRt6m1Z4DVa_W_Zw-Ka5_LIglm_idIVpcepaYm-XbniUVAVZGtYQ&usqp=CAU",
    title: "brown blight",
    description:
      "Brown blight disease is one of the foliar diseases of tea (Camellia sinensis) prevalent in China, Japan, Sri Lanka, and India. This disease is a serious concern for the tea industry, due to both the reduced tea yield and quality decrease. In October 2014, distinct leaf blight symptoms were observed on popular tea cultivars in commercial tea estates of Wansheng, Chongqing City (29°38′ N; 105°91′ E). The initial symptoms were characterized by water-soaked lesions on young leaves, and the lesions developed and expanded to large, dark brown, necrotic lesions, that were covered with black acervuli. Eventually the dead leaves fell from the tea plant. ",
  },
];

export default function Medicines({ navigation }) {
  return (
    <SafeAreaView style={{ paddingLeft: 20, paddingRight: 20 }}></SafeAreaView>
  );
}
