import {observable, computed, action} from 'mobx'
import singleton from 'singleton';
import moment from 'moment';

let index = 0

class AppStore extends singleton{
    @observable list = []
    @observable list2 = []

    constructor() {
        super();

    }

    addListItem (item) {
        this.list.push({
            name: item, 
            items: [],
            index
        })
        index++
    }

    removeListItem (item) {
        this.list = this.list.filter((l) => {
            return l.index !== item.index
        })
    } 

    addItem(item, name) {
        this.list.forEach((l) => {
            if (l.index === item.index) {
                l.items.push(name)
            }
        })
    }
}


export default AppStore.get();