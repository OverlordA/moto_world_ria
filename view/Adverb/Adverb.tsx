import React, { useEffect, useState } from 'react';
import {View, Text } from 'react-native';
import {infoById} from "../../api";
import FastImage from "react-native-fast-image";

const Adverb: React.FC<{navigation: any}> = ({ navigation }) => {

    const [currentAdverb, setCurrentAdverb] = useState();

    useEffect(() => {
            getAdverbById();
        }, []);

    const getAdverbById = async () => {
       const adverbId =  navigation.getParam('id');
       if(adverbId)
            setCurrentAdverb(await infoById({id: adverbId }));


    };

    return <View>
        <Text> Selected adverb: </Text>
        {/*<Text> {JSON.stringify(currentAdverb)}</Text>*/}
        {!!currentAdverb ? (<View>
            <FastImage
                source={{
                    uri: currentAdverb.photoData.seoLinkF,
                    priority: FastImage.priority.normal,
                }}
                style={{
                    height: 414,
                    width: '100%',
                }}
            /></View>)
            : <Text> dd</Text>
            }
    </View>
};
export default Adverb;
