import { Platform } from 'react-native'

const ios = {
    heart: 'ios-heart',
    heartOutline: 'ios-heart-outline',
    star: 'ios-star',
    starHalf: 'ios-star-half',
    starOutline: 'ios-star-outline',
    arrowBack: 'ios-arrow-back',
    arrowForward: 'ios-arrow-forward',
    image: 'ios-image',
    leaf: 'ios-leaf',
    mail: 'ios-mail',
    map: 'ios-map',
    notifications: 'ios-notifications',
    nutrition: 'ios-nutrition',
    people: 'ios-people',
    person: 'ios-person',
    personAdd: 'ios-person-add',
    pie: 'ios-pie',
    pin: 'ios-pin',
    power: 'ios-power',
    send: 'ios-send',
    settings: 'ios-settings',
    shareAlt: 'ios-share-alt',
    stats: 'ios-stats',
    thumbsUp: 'ios-thumbs-up',
    thumbsDown: 'ios-thumbs-down',
    chatBoxes: 'ios-chatboxes',
    chatBubbles: 'ios-chatbubbles',
    menu: 'ios-menu',
    logIn: 'ios-log-in',
    logOut: 'ios-log-out',
    cube: 'ios-cube',
    list: 'ios-list',
    listBox: 'ios-listBox',
}

const android = {
    heart: 'md-heart',
    heartOutline: 'md-heart-outline',
    star: 'md-star',
    starHalf: 'md-star-half',
    starOutline: 'md-star-outline',
    arrowBack: 'md-arrow-back',
    arrowForward: 'md-arrow-forward',
    image: 'md-image',
    leaf: 'md-leaf',
    mail: 'md-mail',
    map: 'md-map',
    notifications: 'md-notifications',
    nutrition: 'md-nutrition',
    people: 'md-people',
    person: 'md-person',
    personAdd: 'md-person-add',
    pie: 'md-pie',
    pin: 'md-pin',
    power: 'md-power',
    send: 'md-send',
    settings: 'md-settings',
    shareAlt: 'md-share-alt',
    stats: 'md-stats',
    thumbsUp: 'md-thumbs-up',
    thumbsDown: 'md-thumbs-down',
    chatBoxes: 'md-chatboxes',
    chatBubbles: 'md-chatbubbles',
    menu: 'md-menu',
    logIn: 'md-log-in',
    logOut: 'md-log-out',
    cube: 'md-cube',
    list: 'md-list',
    listBox: 'md-listBox',
}


icons = (Platform.OS === 'ios') ? ios : android

export default icons