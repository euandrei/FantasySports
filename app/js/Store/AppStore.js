import {observable, computed, action} from 'mobx'
import singleton from 'singleton';
import moment from 'moment';

let index = 0

class AppStore extends singleton{
    @observable user = null;
    @observable list = [];
    @observable list2 = [];

    constructor() {
        super();

    }
    // Login
    @computed get isLoggedIn() {
        return !!this.user;
    }

    // Leaders
    @action getLeaders(){
        console.log("Some leaderboard info")
    }

}


export default AppStore.get();