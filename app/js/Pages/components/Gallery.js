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
import Camera from 'react-native-camera';

const { width } = Dimensions.get('window');
let PHOTOS_COUNT_BY_FETCH = 60;

export default class Gallery extends React.Component {
	constructor(props){
		super(props);
         this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
         this.state = {
             dataSource: this.ds.cloneWithRows(['row 1', 'row 2']),
             openCamera: false,
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
        console.log("FETCH", data, this.images)
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
        // this.fetchPhotos(PHOTOS_COUNT_BY_FETCH, this.lastPhotoFetched);
    }

    takePicture() {
        this.camera.capture()
            .then((data) => {
                this.setState({
                    openCamera: false,
                    selected: data.mediaUri,
                })
            })
            .catch(err => console.error(err));
    }
	render(){	
        return (
            <View style={galleryStyle.container}>
                <View
                    style={{
                        width: width,
                        height: width,
                        margin: 0,
                        marginBottom: 3,
                    }}
                >   
                    {this.state.openCamera ? 
                        <View>
                            <Camera
                               ref={(cam) => {
                                 this.camera = cam;
                               }}
                               style={{
                                    width: width,
                                    height: width 
                                }}
                               aspect={Camera.constants.Aspect.fill}>
                               <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                           </Camera>
                        </View>
                    :
                        <View>
                            {this.state.selected && <Image
                                style={{
                                    width: width,
                                    height: width 
                                }}
                                source={{ uri: this.state.selected }}
                            />}
                        </View>
                    }
                </View>
                <ListView
                  contentContainerStyle={{flexWrap: 'wrap', flexDirection: 'row'}}
                  dataSource={this.state.dataSource}
                  onEndReached={this.onEndReached.bind(this)}
                  onEndReachedThreshold={100}
                  showsVerticalScrollIndicator={true}
                  renderRow={(image,i,index) => {
                    if(index == 0){
                       return (
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity
                                style={[galleryStyle.camera,
                                        {   width: width / 3 - 6,
                                            height: width / 3 - 6,
                                        }]}
                                key={i-1}
                                underlayColor='transparent'
                                onPress={() => {this.setState({openCamera: true})}}
                            >
                                <Image
                                    style={{
                                        width: 24,
                                        height: 20
                                    }}
                                    source={require('../../../assets/camera.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: width / 3 - 6,
                                    height: width / 3 - 6,
                                    margin: 3,
                                    marginBottom: 3,
                                }}
                                key={i}
                                underlayColor='transparent'
                                onPress={() => {this.setState({selected: image.uri})}}
                            >
                                <Image
                                    style={{
                                        width: width/3,
                                        height: width/3
                                    }}
                                    source={{ uri: image.uri }}
                                    onLoadEnd={()=>{
                                        if(!this.state.selected){this.setState({selected: image.uri})}
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                       ) 
                    }
                    else{
                        return (
                        <TouchableOpacity
                            style={{
                                width: width / 3 - 6,
                                height: width / 3 - 6,
                                margin: 3,
                                marginBottom: 3,
                            }}
                            key={i}
                            underlayColor='transparent'
                            onPress={() => {this.setState({selected: image.uri})}}
                        >
                            <Image
                                style={{
                                    width: width/3,
                                    height: width/3
                                }}
                                source={{ uri: image.uri }}
                            />
                        </TouchableOpacity>
                        )
                    }
                  }}
                /> 
              </View>

            )
		
	}
}

const styles = StyleSheet.create({
     preview: {
       flex: 1,
       justifyContent: 'flex-end',
       alignItems: 'center',
       height: Dimensions.get('window').height,
       width: Dimensions.get('window').width
     },
      capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
      }
})
