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
        const {emotion} = this.props;
        switch (emotion.toLowerCase()) {
            case"joy":
                return (
                    <div style={{width: 10, height: 10, backgroundColor: 'yellow'}}>
                    </div>
                )
            case"anger":
                return (
                    <div style={{width: 10, height: 10, backgroundColor: 'red'}}>
                    </div>
                )
            case"fear":
                return (
                    <div style={{width: 10, height: 10, backgroundColor: 'grey'}}>
                    </div>
                )
            case"disgust":
                return (
                    <div style={{width: 10, height: 10, backgroundColor: 'green'}}>
                    </div>
                )
            case"sadness":
                return (
                    <div style={{width: 10, height: 10, backgroundColor: 'blue'}}>
                    </div>
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
                width: 1000,
                height: 500,
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
        const {viewport, tweets} = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-md-2 sidebar" style={{paddingRight: 0}}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <ul>
                                    {tweets.map((tweet) => (
                                        <li>
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
                                <div>
                                    <Marker latitude={tweet.lat} longitude={tweet.lng}>
                                        <Point emotion={tweet.emotion}/>
                                    </Marker>
                                </div>
                            ))}
                        </ReactMapGL>
                    </div>
                </div>
            </div>
        );
    }
}