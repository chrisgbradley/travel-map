import React, { Component } from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";
import {__GAPI_KEY} from "../../../.config.private";

class GoogleMap extends Component {
	render () {
		return (
			<Map google={ this.props.google }>

			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: __GAPI_KEY
})(GoogleMap);
