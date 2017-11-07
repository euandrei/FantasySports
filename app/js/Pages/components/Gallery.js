import React from 'react';
import {
    Text,
    Image,
    View,
    ListView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    CameraRoll
} from 'react-native';

import { galleryStyle, colors } from "../styles";
import RNFetchBlob from 'react-native-fetch-blob';

const { width } = Dimensions.get('window');
let PHOTOS_COUNT_BY_FETCH = 60;

export default class Gallery extends React.Component {
	constructor(props){
		super(props);
         this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
         this.state = {
             dataSource: this.ds.cloneWithRows(['row 1', 'row 2']),
         }
        this.lastPhotoFetched = undefined; // Using `null` would crash ReactNative CameraRoll on iOS.
        this.images = [];

        this.fetchPhotos();

        this.fetchPhotos = this.fetchPhotos.bind(this);
        this.getDataSourceState = this.getDataSourceState.bind(this);
        this.getPhotosFromCameraRollData = this.getPhotosFromCameraRollData.bind(this);
        this.onPhotosFetchedSuccess = this.onPhotosFetchedSuccess.bind(this);
        this.onPhotosFetchError = this.onPhotosFetchError.bind(this);


	}
    getDataSourceState() {
        return {
            dataSource: this.ds.cloneWithRows(this.images),
        };
    }

    getPhotosFromCameraRollData(data) {
        return data.edges.map((asset) => {
            return asset.node.image;
        });
    }
    onPhotosFetchedSuccess(data) {
        const newPhotos = this.getPhotosFromCameraRollData(data);
        this.images = this.images.concat(newPhotos);
        this.setState(this.getDataSourceState());
        if (newPhotos.length) this.lastPhotoFetched = data.page_info.end_cursor;
    }

    onPhotosFetchError(err) {
        // Handle error here

    }

    fetchPhotos(count = PHOTOS_COUNT_BY_FETCH, after) {

        CameraRoll.getPhotos({
            first: count,
            after,
            assetType: 'All'
        })
        .then(r => this.onPhotosFetchedSuccess(r))
       
    }
    
    onEndReached() {
        this.fetchPhotos(PHOTOS_COUNT_BY_FETCH, this.lastPhotoFetched);
    }
	render(){	
        return (
            <View style={galleryStyle.container}>
                <ListView
                  contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row'}}
                  dataSource={this.state.dataSource}
                  onEndReached={this.onEndReached.bind(this)}
                  onEndReachedThreshold={100}
                  showsVerticalScrollIndicator={true}
                  renderRow={(image,i,index) => {
                    return (
                    <TouchableOpacity
                        style={{
                            width: index == 0 ? width : width / 3 - 6,
                            height: index == 0 ? width : width / 3 - 6,
                            margin: index == 0 ? 0 : 3,
                            marginBottom: 3,
                        }}
                        key={i}
                        underlayColor='transparent'
                        onPress={() => {this.setState({active: i})}}
                    >
                        <Image
                            style={{
                                width: index == 0 ? width : width/3,
                                height: index == 0 ? width : width/3
                            }}
                            source={{ uri: image.uri }}
                        />
                    </TouchableOpacity>
                  )}}
                /> 
              </View>

            )
		
	}
}
