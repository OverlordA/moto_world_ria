import React, { useEffect, useState } from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import { infoById } from "../../api";
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress';

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
        {!!adverbCurrent ? (<View style={styles.adverbContainer}>
            <Image
                source={{ uri: adverbCurrent.photoData.seoLinkF  }}
                indicator={ProgressBar}
                style={{
                    width: width,
                    height: 300,
                }}/>

            <Text style={styles.title}>{adverbCurrent.markName}</Text>
                <Text>{adverbCurrent.modelName}</Text>
            <Text> Price: ${adverbCurrent.USD}</Text>
            </View>): (<Text>dd</Text>)
        }
    </View>
};

const styles = StyleSheet.create({
    adverbContainer: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#a7ffd9',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fff2cb'
    },
    title: {
        fontSize: 18,
        fontWeight: "800",
    }
});

export default AdverbItem;
