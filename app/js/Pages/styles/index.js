import React from "react";
import {StyleSheet} from "react-native";

import { colors } from "./colors.js"

import { gridStyle } from "./gridStyle.js"
import { gridSectionStyle } from "./gridSectionStyle.js"
import { headerStyle } from "./headerStyle.js"
import { smallTabStyle } from "./smallTabStyle.js"
import { bigTabStyle } from "./bigTabStyle.js"
import { onBoardMessageStyle } from "./onBoardMessageStyle.js"
import { matchupCardsStyle } from "./matchupCardsStyle.js"
import { matchHeaderStyle } from "./matchHeaderStyle.js"
import { matchTemplateStyle } from "./matchTemplateStyle.js"
import { teamTemplateStyle } from "./teamTemplateStyle.js"
import { selectionTemplateStyle } from "./selectionTemplateStyle.js"
import { listItemStyle } from "./listItemStyle.js"
import { carouselStyle } from "./carouselStyle.js"
import { userProfileHeaderStyle } from "./userProfileHeaderStyle.js"
import { notificationListItemStyle } from "./notificationListItemStyle.js"
import { storeTemplateStyle } from "./storeTemplateStyle.js"

export {
	colors,
	gridStyle,
	gridSectionStyle,
	headerStyle,
	smallTabStyle,
	bigTabStyle,
	onBoardMessageStyle,
	matchupCardsStyle,
	matchHeaderStyle,
	matchTemplateStyle,
	teamTemplateStyle,
	selectionTemplateStyle,
	listItemStyle,
	carouselStyle,
	userProfileHeaderStyle,
	notificationListItemStyle,
	storeTemplateStyle
}


export const tiltButton = StyleSheet.create({
	tiltButtonWrapper:{
		flex: 1,
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
	},
	gradient:{
		alignSelf: 'stretch',
		alignItems: 'center',
		justifyContent: 'center',
		
	},
	button:{
		flex: 1, 
		flexDirection:'column',
		alignSelf: 'stretch',
		borderWidth: 2,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText:{
		color: colors.white,
		fontWeight: 'bold',
		fontSize: 20,
	}

})

