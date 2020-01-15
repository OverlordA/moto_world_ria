import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import {infoById, testLogngRiaRequest, testRiaRequest} from '../../api';
const CarList: React.FC = () => {

    const makeRiaRequest = async () => {
       const result = await testRiaRequest();
       console.log(result, 'ria result')
    };
    const makeLongRequest = async() => {
       const result = await testLogngRiaRequest();
        console.log('result ', result);
    };
    const getInfoById = async() => {
       const result = infoById();
    };

  return <View>
      <Text>Cars list </Text>
      <TouchableOpacity onPress={makeRiaRequest}>
        <Text> make ria request </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={makeLongRequest}>
          <Text>Make long request</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getInfoById}>
          <Text>Make long request</Text>
      </TouchableOpacity>
  </View>
};
export default CarList;
