import React, { useEffect, useState } from 'react';
import {View, Text, Image, Dimensions } from 'react-native';
import { infoById } from "../../api";

interface AdverbProps {
    adverb: string;
}

const AdverbItem: React.FC<AdverbProps> = ({ adverb }) => {

    const [adverbCurrent, setAdverb ] = useState();

    useEffect(() => {
        getAdverbById({id:adverb})
    }, []);
    const getAdverbById = async ({id}:{id: string}) => {
        const adverbById = await infoById({id});
        console.log('adver', adverbById);
        setAdverb(adverbById)
    };
    const { width, height } = Dimensions.get('window');

    return <View>
        {!!adverbCurrent ? (<View>
            <Image
                style={{width: width}}
                source={{ uri: adverbCurrent.photoData.seoLinkM}}
            />
                <Text>{adverbCurrent.markName}</Text>
                <Text>{adverbCurrent.modelName}</Text>
            </View>): (<Text>dd</Text>)
        }
    </View>
};
export default AdverbItem;
