import React from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    Platform,
    ScrollView
} from 'react-native';

import axios from 'axios';

const BASE_PATH = 'https://us-central1-vfl-server-8.cloudfunctions.net/api/v1/NFL';
const SOME_USER_ID = '9XgdUCdmhcPpAbnnIPa1q8mAtGu1'

export default class ApiTests extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}

	componentWillMount() {
		// this.usersGET();
		// this.usersPUT();
		// this.userFollowersGET();
		// this.userFollowingGET();
		// this.usersNewFollowererPOST();
		// this.usersFollowingDELETE();
		// this.contestsPOST();
		// this.contestsGETofUser();
		// this.contestsGET();
		// this.contestsPUT();

		// this.usersItemsGET();
	}

	// get – GET (if new user, backend will create a new one)
	usersGET() {
		axios({
            method: 'get',
            url: `${BASE_PATH}/users/${SOME_USER_ID}`,
            // data: {
            //     "name": name,
            //     "description": description
            // },
        })
        .then((res) => {
        	console.log("GET USERS RESPONSE:")
            console.log(res.data.payload)

            /*
				credits
				:
				17000
				displayName
				:
				"David Uy"
				email
				:
				"daviduy8@gmail.com"
				exp
				:
				0
				level
				:
				0
				lost
				:
				0
				photoURL
				:
				"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"
				streak
				:
				0
				totalGamesPlayed
				:
				0
				uid
				:
				"9XgdUCdmhcPpAbnnIPa1q8mAtGu1"
				username
				:
				"darkd"
				won
				:
				0
            */
        })
        .catch((error) => {
        	console.log("GET USERS ERROR:")
            console.log(error)
        })
	}

	// edit – PUT edit this user’s information
	usersPUT() {

		/*

		Error: Request failed with status code 500

		*/

		axios({
            method: 'put',
            url: `${BASE_PATH}/users/${SOME_USER_ID}`,
            data: {
                "displayName": "V. David Uy Two",
            },
        })
        .then((res) => {
        	console.log("put USERS RESPONSE:")
            console.log(res.data.payload)

            /*

            */
        })
        .catch((error) => {
        	console.log("put USERS ERROR:")
            console.log(error)
        })
	}

	// users/<user_id>/followers
	userFollowersGET() {

		/*


		*/

		axios({
            method: 'get',
            url: `${BASE_PATH}/users/${SOME_USER_ID}/followers`,
            // data: {
            //     "displayName": "V. David Uy Two",
            // },
        })
        .then((res) => {
        	console.log("GET USER followers RESPONSE:")
            console.log(res.data.payload)

            /*
            [
				0:{

					credits
					:
					98000
					exp
					:
					0
					level
					:
					0
					lost
					:
					0
					streak
					:
					0
					totalGamesPlayed
					:
					0
					uid
					:
					"E2MBYmX5VYahHcQVuCzY0kgS1oW2"
					username
					:
					"Wizard"
					won
					:
					0

				}

            ]
				
            */
        })
        .catch((error) => {
        	console.log("GET USER followers ERROR:")
            console.log(error)
        })
	}

	// users/<user_id>/following/
	userFollowingGET() {

		/*


		*/

		axios({
            method: 'get',
            url: `${BASE_PATH}/users/${SOME_USER_ID}/following`,
            // data: {
            //     "displayName": "V. David Uy Two",
            // },
        })
        .then((res) => {
        	console.log("GET USER following RESPONSE:")
            console.log(res.data.payload)

            /*

            []
				
            */
        })
        .catch((error) => {
        	console.log("GET USER following ERROR:")
            console.log(error)
        })
	}


	// delete – DELETE remove from_users from following to_user 
	usersFollowingDELETE() {

		/*

		Error: Request failed with status code 500

		*/


		axios({
            method: 'delete',
            url: `${BASE_PATH}/users/${SOME_USER_ID}/following/agGND41lyudRetmJTDZH8ivQ2PU2`,
            // data: {
            //     "uid":"agGND41lyudRetmJTDZH8ivQ2PU2"
            // },
        })
        .then((res) => {
        	console.log("put USERS RESPONSE:")
            console.log(res)

            /*

            */
        })
        .catch((error) => {
        	console.log("put USERS ERROR:")
            console.log(error)
        })
	}

	// create – POST
	contestsPOST() {

		/*
			Error: Request failed with status code 500
		*/


		axios({
            method: 'post',
            url: `${BASE_PATH}/contests`,
            data: {
            	"uid": "JkQesBe0vZU0541iHmflgZih5Ln1",
				"games": [{
					"gameId": "67696",
					"date": "2017-09-28T20:25:00-04:00"
				}],
				"private": false,
				"bet": 10000
            },
        })
        .then((res) => {
        	console.log("post contests RESPONSE:")
            console.log(res)

            /*

            */
        })
        .catch((error) => {
        	console.log("post contests ERROR:")
            console.log(error)
        })
	}

	//get – GET (params: state [live, open, scheduled, completed],  private [true, false])
	contestsGETofUser() {

		/*
			???????????? for param
		*/

		axios({
            method: 'get',
            url: `${BASE_PATH}/contests/user/${SOME_USER_ID}?state=live?private=false`,
            data: {
            	"state": "live",
				"private": false,
            },
        })
        .then((res) => {
        	console.log("post contests get RESPONSE:")
            console.log(res)

            /*

            */
        })
        .catch((error) => {
        	console.log("post contests get ERROR:")
            console.log(error)
        })
	}

	// get – GET – contestId
	contestsGET() {

		/*
			????????
		*/

		const CONTEST_ID = null //////////////// !!!!!!!!!!!!!!!!

		axios({
            method: 'get',
            url: `${BASE_PATH}/contests/${CONTEST_ID}`,
            data: {
            	"state": "live",
				"private": false,
            },
        })
        .then((res) => {
        	console.log("post contests get RESPONSE:")
            console.log(res)

            /*

            */
        })
        .catch((error) => {
        	console.log("post contests get ERROR:")
            console.log(error)
        })
	}

	contestsPUT() {

		/*
			?????????
		*/

		const CONTEST_ID = null //////////////// !!!!!!!!!!!!!!!!

		axios({
            method: 'get',
            url: `${BASE_PATH}/contests/${CONTEST_ID}`,
            data: {
            	// uid, requestId, bet (join or change bet amount)
            },
        })
        .then((res) => {
        	console.log("post contests put RESPONSE:")
            console.log(res)

            /*

            */
        })
        .catch((error) => {
        	console.log("post contests put ERROR:")
            console.log(error)
        })
	}

	usersItemsGET() {
		return axios({
            method: 'get',
            url: `${BASE_PATH}/items/inventory/${SOME_USER_ID_3}`,
            // data: {
            //     "name": name,
            //     "description": description
            // },
        })
        .then((res) => {
        	console.log("GET USERS ITEMS RESPONSE:")
            console.log(res)

            // return res.data.payload;

            /*
				credits
				:
				17000
				displayName
				:
				"David Uy"
				email
				:
				"daviduy8@gmail.com"
				exp
				:
				0
				level
				:
				0
				lost
				:
				0
				photoURL
				:
				"https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg"
				streak
				:
				0
				totalGamesPlayed
				:
				0
				uid
				:
				"9XgdUCdmhcPpAbnnIPa1q8mAtGu1"
				username
				:
				"darkd"
				won
				:
				0
            */
        })
        .catch((error) => {
        	console.log("GET USERS ERROR:")
            console.log(error)
        })
	}





	render(){
		return (
			<View><Text>a</Text></View>
		)
	}

}