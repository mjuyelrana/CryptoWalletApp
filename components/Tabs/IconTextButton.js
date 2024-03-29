import React from 'react';
import {Image, Text, TouchableOpacity} from "react-native";
import {COLORS, FONTS, SIZES} from "../../constants";

const IconTextButton = ({label, icon, containerStyle, onPress}) => {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
            ...containerStyle
        }} onPress={onPress}>

            <Image
                style={{
                    width: 20,
                    height: 20
                }}
                resizeMode="contain"
                source={icon}/>

            <Text style={{
                marginLeft: SIZES.base,
                ...FONTS.h3
            }}>
                {label}
            </Text>

        </TouchableOpacity>
    );
};

export default IconTextButton;
