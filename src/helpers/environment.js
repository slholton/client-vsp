let APIURL = ' ';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000';
        break;
    case 'https://my-vsp-client.herokuapp.com/':
        APIURL = 'https://my-vsp-db.herokuapp.com/';
        break;
    default:
        
}

export default APIURL;