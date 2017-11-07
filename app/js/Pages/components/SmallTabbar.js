import React from 'react';
import {
    Text,
    Image,
    View,
    Platform,
    TouchableOpacity
} from 'react-native';

import { colors, smallTabStyle } from "../styles";

export default class SmallTabbar extends React.Component{ 
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
			<View style={smallTabStyle.container}>
				<View style={smallTabStyle.tabWrapper}>
					<View style={smallTabStyle.tabs}>
						{this.state.tabTitle ? 

							this.state.tabTitle.map((title, key)=>{
								return( 
									<TouchableOpacity style={smallTabStyle.tabButton} key={key} onPress={() => this.props.onChange(key)}>
										<Text style={[smallTabStyle.tabText, (this.props.activeTab == key) ? smallTabStyle.tabActiveText : '' ]}>{title}</Text>
									</TouchableOpacity>
								)
							})

						:<View/>}
					</View>
					<View style={smallTabStyle.filter}>
						{this.props.filter && 
							<TouchableOpacity onPress={this.props.onFilter}>
								<Image source={this.props.filter} resizeMode='contain' style={smallTabStyle.filterIcon} />
							</TouchableOpacity>
						}
					</View>
				</View>
				<View>
					{this.props.children[this.props.activeTab]}
				</View>
			</View>
		)
	}
}
