import React from "react";
/*
var OAUTH2_CLIENT_ID = 'AIzaSyBES-ALWvMahAmFpf3fjN31tl-qwLsoGEI';
var channelId = 'UCFQMnBA3CS502aghlcr0_aw'; //coffeezilla channel id
//var terryid = 'UCKbKAVA_H8euJbUBDeux8_Q';   terry's channel id
//terry channel url https://www.youtube.com/@skeletxnbxy
var result = 10;
var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${OAUTH2_CLIENT_ID}&channelId=${channelId}&part=snippet,id&order-date&maxResults=${result}`;
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
var myHeaders = new Headers();
//myHeaders.append("Access-Control-Allow-Origin", finalURL);

myHeaders.append("Access-Control-Allow-Origin", "*");
myHeaders.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
myHeaders.append("X-Requested-With", "XMLHttpRequest");
myHeaders.append("Content-Type", "application/json");
//myHeaders.append("Cookie", "__cfduid=db290300ecfe95ec1fe3bc92c388c3c991586618117");
//myHeaders.append("Access-Control-Allow-Origin", "*");
var requestOptions = {
    mode: 'cors',
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
var originURL = "http://localhost:3000/";
document.cookie = 'SameSite=None';
myHeaders.append("Authorization", "Bearer <MY_API_KEY>");

*/


class Youtube extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resultyt: [],
            apiResponse: []
        };
        this.load = this.load.bind(this);
    }


    componentDidMount() {

    }


    load() {
        /*
        //fetch(proxyUrl + finalURL, requestOptions)
        fetch(finalURL, requestOptions)
            /*fetch(finalURL, {
                mode: 'cors',
                method: 'GET',
                headers: {
                    "Access-Control-Allow-Origin": finalURL,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json"
                },
                redirect: 'follow'
            })
            .then((response) => response.json())
            .then((responseJSON) => {
                //console.log(proxyUrl);
                //console.log(finalURL);
                console.log(proxyUrl + finalURL)
                console.log(responseJSON);
                const resultyt = responseJSON.items.map(object => "https://www.youtube.com/embed/" + object.id.videoId);
                this.setState({ resultyt });
                console.log(resultyt);
                console.log(this.state.resultyt);
            })
            .catch((error) => {
                console.log(error);
            });
            */
    }

    render() {

        this.state.apiResponse.map((link, i) => {
            console.log(link);
            this.setState(this.resultyt[i], <div key={i} className="youtube"><iframe width="560" height="315" src={this.apiResponse[i]} title="YouTube video player" frameBorder="0" allowFullScreen></iframe></div>);

        })

        return (this.state.resultyt[0]);
    }


}


export default Youtube;