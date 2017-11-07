import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Picker,
} from 'react-native';

import { dropdownStyle, colors } from "../styles";
import { Dropdown } from './react-native-dropdown';


export default class DropdownComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {	
        }
    }

    render(){
        let {data, title} = this.props;
        return(
            <View style={dropdownStyle.container}>
                {title && <Text style={[dropdownStyle.title,{zIndex:2,}]}>{title}</Text>}
                <View style={{marginTop: -30, zIndex: 1, paddingBottom: 5, borderBottomWidth: 2, borderColor: colors.darkGreyBlueBg,}}>
                    <Dropdown
                        label=' '
                        itemTextStyle={{fontFamily:'UniformItalicXcon',fontWeight: 'bold'}}
                        data={data}
                        value={data[0].value}
                        baseColor={colors.marine}
                        dropdownPosition={0}
                    />
                </View>
            </View>
        )
    }
}
