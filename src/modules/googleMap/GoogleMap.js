import React, { Component } from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";
import {__GAPI_KEY} from "../../../.config.private";

const style = {
	width: "50%",
	height: "50%",
	margin: "0",
	padding: "0"
};

class GoogleMap extends Component {

	render () {
		return (
			<Map
				id="gmap"
				className="google-map"
				google={ this.props.google }
				style={style}
			>

			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: __GAPI_KEY
})(GoogleMap);
