import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { findMotoWorldAdverbs } from "../../api";
const CarList: React.FC = () => {
  const [adverbs, setAdverbs] = useState([]);

  const getAdverbs = async () => {
    const response = await findMotoWorldAdverbs();
    console.log(" result ", response.result.search_result.ids);
    setAdverbs(response.result.search_result.ids);
    // console.log( 'adverbs ', adverbs)
  };

  return (
    <View>
      <Text>Cars list </Text>
      <TouchableOpacity onPress={getAdverbs}>
        <Text> make ria request </Text>
      </TouchableOpacity>
      {/*{adverbs.length ? (*/}
      {/*  <FlatList*/}
      {/*    data={adverbs}*/}
      {/*    renderItem={item => (*/}
      {/*      <View>*/}
      {/*        <Text>{item}</Text>*/}
      {/*      </View>*/}
      {/*    )}*/}
      {/*  />*/}
      {/*) : (*/}
      {/*  <View />*/}
      {/*)}*/}
    </View>
  );
};
export default CarList;
