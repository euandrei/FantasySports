import React from 'react';
import {
    Text,
    Image,
    View,
    Platform,
    TouchableOpacity
} from 'react-native';

import { colors, bigTabStyle } from "../styles";

export default class BigTabbar extends React.Component{ 
	constructor(props){
		super(props);
		this.state = {
			tabTitle: null,
		}
	}
	componentDidMount(){
		if(!this.props.children) return;
		let children = this.props.children;

		let tabTitle = [];

		children.map((tab) => {
			tabTitle.push(tab.props.tabTitle)
		})
		this.setState({
			tabTitle,
		})

	}

	render(){
		return (
			<View style={bigTabStyle.container}>
				{this.state.tabTitle && this.state.tabTitle.length == 2 && 
					<View style={bigTabStyle.tabWrapper}>
						<View style={bigTabStyle.leftButton}>
							<TouchableOpacity style={[bigTabStyle.tabButton, (this.props.activeTab == 0) ? bigTabStyle.tabActive : '' ]} onPress={() => this.props.onChange(0)}>
								<Text style={[bigTabStyle.tabText, (this.props.activeTab == 0) ? bigTabStyle.tabActiveText : '' ]}>{this.state.tabTitle[0]}</Text>	
							</TouchableOpacity>
						</View>
						<View style={bigTabStyle.rigthButton}>
							<TouchableOpacity style={[bigTabStyle.tabButton, (this.props.activeTab == 1) ? bigTabStyle.tabActive : '' ]} onPress={() => this.props.onChange(1)}>
								<Text style={[bigTabStyle.tabText, (this.props.activeTab == 1) ? bigTabStyle.tabActiveText : '' ]}>{this.state.tabTitle[1]}</Text>	
							</TouchableOpacity>
						</View>	
					</View>
				}
				<View>
					{this.props.children[this.props.activeTab]}
				</View>
			</View>
		)
	}
}
