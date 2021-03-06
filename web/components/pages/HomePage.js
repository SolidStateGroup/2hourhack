import React, {Component} from 'react';
import ReactMapGL, {Marker, NavigationControl, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = 'pk.eyJ1IjoibmlhbGwtc3NnIiwiYSI6ImNpZXd2ZXkwdDAwMGJ1Z20wbnMxZnN1NmcifQ.yrI7TYFTV2mlzvWV0kI71A';
const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

const Point = class extends Component {
    displayName: 'TheComponent'

    render() {
        const {emotion, emojiMode} = this.props;
        switch (emotion.toLowerCase()) {
            case"joy":
                return (
                    <div className="pulse" style={{width: 20, height: 20, backgroundColor: 'yellow', borderRadius: 10}}>
                        {emojiMode && "😂"}
                    </div>
                )
            case"anger":
                return (
                    <div className="pulse" style={{width: 20, height: 20, backgroundColor: 'red', borderRadius: 10}}>
                        {emojiMode && "😠"}
                    </div>
                )
            case"fear":
                return (
                    <div className="pulse" style={{width: 20, height: 20, backgroundColor: 'grey', borderRadius: 10}}>
                        {emojiMode && "😨"}
                    </div>
                )
            case"disgust":
                return (
                    <div className="pulse" style={{width: 20, height: 20, backgroundColor: 'green', borderRadius: 10}}>
                        {emojiMode && "🤢"}
                    </div>
                )
            case"sadness":
                return (
                    <div className="pulse" style={{width: 20, height: 20, backgroundColor: 'blue', borderRadius: 10}}>
                        {emojiMode && "😔"}
                    </div>
                )
        }
    }
};
const TweetAside = class extends Component {
    displayName: 'TheComponent'

    render() {
        const {emotion, emojiMode} = this.props;
        switch (emotion.toLowerCase()) {
            case"joy":
                return (
                    <span style={{
                        display: "inline-block",
                        textAlign: "center",
                        width: 10,
                        height: 10,
                        backgroundColor: 'yellow'
                    }}>
                        {emojiMode && "😂"}
                    </span>
                )
            case"anger":
                return (
                    <span style={{
                        display: "inline-block",
                        textAlign: "center",
                        width: 10,
                        height: 10,
                        backgroundColor: 'red'
                    }}>
                        {emojiMode && "😠"}
                    </span>
                )
            case"fear":
                return (
                    <span style={{
                        display: "inline-block",
                        textAlign: "center",
                        width: 10,
                        height: 10,
                        backgroundColor: 'grey'
                    }}>
                        {emojiMode && "😨"}
                    </span>
                )
            case"disgust":
                return (
                    <span style={{
                        display: "inline-block",
                        textAlign: "center",
                        width: 10,
                        height: 10,
                        backgroundColor: 'green'
                    }}>
                        {emojiMode && "🤢"}
                    </span>
                )
            case"sadness":
                return (
                    <span style={{
                        display: "inline-block",
                        textAlign: "center",
                        width: 10,
                        height: 10,
                        backgroundColor: 'blue'
                    }}>
                        {emojiMode && "😔"}
                    </span>
                )
        }
    }
};

export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [
                {
                    "emotion": "joy",
                    "text": "England are on form!",
                    "lat": 12.3456,
                    "lng": 65.4321,
                    "country": "EN"
                },
                {
                    "emotion": "anger",
                    "text": "England are terrible!",
                    "lat": 13.3456,
                    "lng": 66.4321,
                    "country": "EN"
                }
            ],
            viewport: {
                width: 2000,
                height: 1080,
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 0
            },
            popupInfo: null
        };
    }

    componentDidMount() {
        setInterval(() => {
            fetch('http://world-cup-sentiment-api.dokku1.solidstategroup.com/sentiment')
                .then(res => res.json())
                .then(res => {
                    console.log(res.length)
                    this.setState({tweets: res});
                })
        }, 1000);
    }


    render() {
        const {viewport, checked, tweets} = this.state;
        return (
            <div>
                <Row>
                    <Column>
                        Emoji mode
                    </Column>
                    <Column>
                        <Switch onChange={(checked) => {
                            this.setState({checked})
                        }} checked={this.state.checked}/>
                    </Column>
                </Row>
                <div className="row">
                    <div className="col-md-2 sidebar" style={{paddingRight: 0}}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Recent Tweets</h5>
                                <ul>
                                    {tweets.map((tweet) => (
                                        <li>
                                            <TweetAside emojiMode={checked} emotion={tweet.emotion}/>
                                            {tweet.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10" style={{paddingLeft: 0}}>
                        <ReactMapGL
                            {...viewport}
                            onViewportChange={(viewport) => this.setState({viewport})}
                            mapStyle="mapbox://styles/mapbox/dark-v9"
                            mapboxApiAccessToken={TOKEN}>
                            {tweets.map((tweet) => (
                                <Marker latitude={tweet.lat} longitude={tweet.lng}>
                                    <Point emojiMode={checked} emotion={tweet.emotion}/>
                                </Marker>
                            ))}
                        </ReactMapGL>
                    </div>
                </div>
            </div>
        );
    }
}