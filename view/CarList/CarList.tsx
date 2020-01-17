import React, { useState } from "react";
import {View, Text, TouchableOpacity, FlatList, ScrollView} from "react-native";
import {findMotoWorldAdverbs, infoById} from "../../api";
import {AdverbItem} from "../../components";
const CarList: React.FC = () => {
  const [adverbs, setAdverbs] = useState([]);

  const getAdverbs = async () => {
    const response = await findMotoWorldAdverbs();
    console.log(" result ", response.result.search_result.ids);
   await setAdverbs(response.result.search_result.ids);
  };
  return (
    <View>
      <Text>Cars list </Text>
      <TouchableOpacity onPress={getAdverbs}>
        <Text> make ria request </Text>
      </TouchableOpacity>
        <ScrollView>
            { adverbs.length > 0 ?
                adverbs.map((item) => {
                    return <AdverbItem adverb={item}/>
                }): <Text/>
            }
        </ScrollView>
    </View>
  );
};
export default CarList;
