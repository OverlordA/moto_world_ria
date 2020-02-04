import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
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
       console.log(" current adverb ", currentAdverb);
    };

    return <SafeAreaView>
        {!!currentAdverb ? (<View style={styles.adverb}>
            <FastImage
                source={{
                    uri: currentAdverb.photoData.seoLinkF,
                    priority: FastImage.priority.normal,
                }}
                style={{
                    height: 414,
                    width: '100%',
                }}
            />
                <View style={styles.dealerContainer}>
                    <View style={styles.dealerContent}>
                        <FastImage
                            source={{
                                uri: currentAdverb.dealer.logo,
                                priority: FastImage.priority.normal,
                            }}
                            style={{
                                height: 50,
                                width: 50,
                            }}
                        />
                        <Text>{currentAdverb.dealer.name}</Text>
                    </View>
                </View>
            <View style={styles.paramsContainer}>
                <Text style={styles.title}>{currentAdverb.title}</Text>
                <Text> Year: {currentAdverb.autoData.year}</Text>
                <Text> Race: {currentAdverb.autoData.race}</Text>
                <Text> Fuel Name: {currentAdverb.autoData.fuelName}</Text>
                <Text> Location city: {currentAdverb.locationCityName}</Text>
                <Text>{currentAdverb.autoData.description}</Text>
            </View>
        </View>)
            : <Text> dd</Text>
            }
    </SafeAreaView>
};

const styles = StyleSheet.create({
   adverb:{
       display: 'flex',
       flexDirection: 'column',
   },
    title: {
       fontSize: 22,
        fontWeight: 'bold',
    },
    paramsContainer: {
       padding: 5,
    },
    dealerContainer: {
       display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 3,
    },
    dealerContent: {
        alignItems: 'center'
    }
});
export default Adverb;
