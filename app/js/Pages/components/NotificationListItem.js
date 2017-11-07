import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';

import GridCellWrapper from "./GridCellWrapper.js"
import GridSection from "./GridSection.js"
import TiltButton from "./TiltButton.js"

import { notificationListItemStyle, colors } from "../styles";

/*

TODO replace hardcoded data ie: avatar, arrow cells, grid cells

<NotificationListItem 
  team=[] <- at the moment bool for demo

  arrowed <- bool for now

  buttons <= bool for now

  specialOffer bool

  title1={'Text 1 start'}
  text1={'finishing ...'}

  title2={'Text 2 start'}
  text2={'finishing ...'}
/>

*/

export default class NotificationListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

  _renderTeam() {
    return (
      <View>
        <GridSection
          // title={"Title"}
          // titlePosition={"center"}
          // lines
        >
          <GridCellWrapper
            bgColor={colors.watermelonBg}
            title={"Test"}
            image={require('../../../assets/nerfs/bear_trap.png')}
            type={"power-up"}
          />
          
          <GridCellWrapper
            bgColor={colors.greenishTurquoiseBg}
            title={"Test"}
            image={require('../../../assets/nerfs/bear_trap.png')}
            type={"power-up"}
          />
          <GridCellWrapper
            bgColor={colors.greenishTurquoiseBg}
            title={"Test"}
            image={require('../../../assets/buffs/cannon.png')}
            type={"power-up"}
          />

          <GridCellWrapper
            bgColor={colors.watermelonBg}
            title={"Test"}
            image={require('../../../assets/nerfs/bear_trap.png')}
            type={"power-up"}
          />
          
          <GridCellWrapper
            bgColor={colors.greenishTurquoiseBg}
            title={"Test"}
            image={require('../../../assets/nerfs/bear_trap.png')}
            type={"power-up"}
          />
          <GridCellWrapper
            bgColor={colors.greenishTurquoiseBg}
            title={"Test"}
            image={require('../../../assets/buffs/cannon.png')}
            type={"power-up"}
          />

          <GridCellWrapper
            bgColor={colors.watermelonBg}
            title={"Test"}
            image={require('../../../assets/nerfs/bear_trap.png')}
            type={"power-up"}
          />
          
          <GridCellWrapper
            bgColor={colors.greenishTurquoiseBg}
            title={"Test"}
            image={require('../../../assets/nerfs/bear_trap.png')}
            type={"power-up"}
          />
          <GridCellWrapper
            bgColor={colors.greenishTurquoiseBg}
            title={"Test"}
            image={require('../../../assets/buffs/cannon.png')}
            type={"power-up"}
          />
        </GridSection>
      </View>
    )
  }

  _renderArrowed() {
    return (
      <View style={notificationListItemStyle.arrowNotificationContainer}>
        <View style={notificationListItemStyle.arrowNotificationWrapper}>
          <GridCellWrapper
            bgColor={colors.watermelonBg}
            title={"Test"}
            image={require('../../../assets/placeholder.png')}
            type={"player"}
          />

          <View style={notificationListItemStyle.arrowImageWrapper}>
            <Image 
              style={notificationListItemStyle.arrowImage}
              source={{uri: 'http://via.placeholder.com/21x16'}}
            />
          </View>

          <GridCellWrapper
            bgColor={colors.watermelonBg}
            title={"Test"}
            image={require('../../../assets/placeholder.png')}
            type={"power-up"}
          />
        </View>
      </View>
    )
  }

  _renderButtons(){
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{flex: 1, flexDirection: 'row', width: 220}}>
          <TiltButton 
            text={"DECLINE"}
            borderColor={colors.sunnyYellow}
            backgroundColor={colors.sunnyYellowBg}
            onPress={()=>{}}

            style={{marginRight: 3}}
          />

          <TiltButton 
            text={"ACCEPT"}
            borderColor={colors.sunnyYellow}
            backgroundColor={colors.sunnyYellowBg}
            onPress={()=>{}}

            style={{marginLeft: 3}}
          />
        </View>
      </View>
    )
  }

  _renderSpecialOffer(){
    return (
      <View style={notificationListItemStyle.specialOfferContainer}>

        <View style={notificationListItemStyle.cellComponentsWrapper}>
          <View style={notificationListItemStyle.cellWrapper}>
            <GridCellWrapper
              bgColor={colors.watermelonBg}
              title={"Test"}
              image={require('../../../assets/placeholder.png')}
              type={"player"}
            />
          </View>

          <Text style={notificationListItemStyle.actualPriceLabel}>
              $50.00
          </Text>

          <Text style={notificationListItemStyle.discountPriceLabel}>
            $50.00
          </Text>
        </View>

        <View style={notificationListItemStyle.buttonsContainer}>
          <TiltButton 
            text={"DECLINE"}
            borderColor={colors.sunnyYellow}
            backgroundColor={colors.sunnyYellowBg}
            onPress={()=>{}}

            style={{marginRight: 3}}
          />

          <TiltButton 
            text={"ACCEPT"}
            borderColor={colors.sunnyYellow}
            backgroundColor={colors.sunnyYellowBg}
            onPress={()=>{}}

            style={{marginLeft: 3}}
          />
        </View>
      </View>
    )
  }
	
	render(){

		return (
			<View style={this.props.arrowed || this.props.team ? notificationListItemStyle.container : notificationListItemStyle.containerMinimal}>

        <View style={notificationListItemStyle.notificationHeader}>

          <Image source={require('../../../assets/placeholder.png')} style={notificationListItemStyle.avatar} />
          
          <View style={notificationListItemStyle.headerTitleWrapper}>

            {this.props.text1 && (
              <Text style={notificationListItemStyle.headerTitlePre}>
                <Text style={notificationListItemStyle.headerTitlePost}>{this.props.title1}</Text>
                {' '}
                {this.props.text1}
              </Text>
            )}

            {this.props.text2 && (
              <Text style={notificationListItemStyle.headerTitlePre}>
                <Text style={notificationListItemStyle.headerTitlePost}>{this.props.title2}</Text>
                {' '}
                {this.props.text2}
              </Text>
            )}

            {this.props.specialOffer && (
              <View style={notificationListItemStyle.specialOfferHeaderWrapper}>
                <Text style={notificationListItemStyle.specialOfferHeaderTitle}>Special Offer</Text>
                <View style={notificationListItemStyle.specialOfferHeaderLine}></View>
              </View>
            )}
          </View>
        </View>

        {this.props.team && this._renderTeam()}

        {this.props.arrowed && this._renderArrowed()}

        {this.props.buttons && this._renderButtons()}

        {this.props.specialOffer && this._renderSpecialOffer()}
        
      </View>
		)
	}
}
