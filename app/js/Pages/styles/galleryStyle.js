import React from "react";
import {StyleSheet} from "react-native";

import { colors } from "./colors.js"


export const galleryStyle = StyleSheet.create({
	container:{
		backgroundColor: colors.marine,
		flex: 1,
	},
	camera:{
        margin: 3,
        marginBottom: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkGreyBlue,
    }

})