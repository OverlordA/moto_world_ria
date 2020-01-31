import React, { useEffect, useState } from 'react';
import {View, Text, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import { infoById } from "../../api";
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress';
import FastImage from "react-native-fast-image";

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

    const selectAdverb = () => {
        console.log('adverb selected ', adverb);
    };

    return <TouchableOpacity onPress={selectAdverb}>
        <View style={styles.item}>
        {!!adverbCurrent ? (<View style={styles.adverbContainer}>
            <FastImage
                source={{
                    uri: adverbCurrent.photoData.seoLinkF,
                    priority: FastImage.priority.normal,
                }}
                style={styles.backgroundImage}
            />
            <View style={styles.imageFade} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{adverbCurrent.title}</Text>
                    <Text style={styles.specification}>
                       <Text> Model: {adverbCurrent.modelName}</Text>
                        <Text>Year: {adverbCurrent.autoData.year}</Text>
                        <Text> Race: {adverbCurrent.autoData.race} </Text>
                    </Text>
                {/*<Text>{adverbCurrent.autoData.description}</Text>*/}
                <View style={styles.priceContainer}>
                    <Text style={styles.priceLabel}>Price:</Text><Text style={styles.price}> ${adverbCurrent.USD} / {adverbCurrent.UAH} грн / EUR {adverbCurrent.EUR}</Text>
                </View>
            </View>
            </View>): (<Text>dd</Text>)
        }
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    item: {
        height: 414,
        width: '100%',
    },
    adverbContainer: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#a7ffd9',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#fdffff'
    },
    title: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
    },
    specification: {
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
    },
    priceContainer: {
      display: 'flex',
        flexDirection: 'row'
    },
    priceLabel: {
        color: '#fff',
    },
    price: {
        color: '#aef3ab',
        fontWeight: 'bold'
    },
    backgroundImage: {
        height: 414,
        width: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 0,
    },
    imageFade: {
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.45)',
        top: 0,
        width: '100%',
        height: 414,
    },
    textContainer: {
        zIndex: 2,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 13,
        height: 414,
    }
});

export default AdverbItem;
