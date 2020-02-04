import React, {useEffect, useState} from "react";
import {View, Text, TouchableOpacity, FlatList, ScrollView} from "react-native";
import {findMotoWorldAdverbs, infoById} from "../../api";
import {AdverbItem} from "../../components";
const CarList: React.FC<{navigation: any}> = ({ navigation }) => {
  const [adverbs, setAdverbs] = useState([]);

  useEffect( () => {
      getAdverbs()
  }, []);

  const getAdverbs = async () => {
    const response = await findMotoWorldAdverbs();
    console.log(" result ", response.result.search_result.ids);
   await setAdverbs(response.result.search_result.ids);
  };
  return (
    <View>
        <ScrollView>
            { adverbs.length > 0 ?
                adverbs.map((item) => {
                    return <AdverbItem adverb={item} navigation={navigation} key={item}/>
                }): <Text/>
            }
        </ScrollView>
    </View>
  );
};
export default CarList;
