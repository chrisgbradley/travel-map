import React from "react";
import { withProps, compose } from "recompose";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap
} from "react-google-maps";

import { __GAPI_KEY } from "../../../secrets";

const GMAP_URI = `https://maps.googleapis.com/maps/api/js?key=${__GAPI_KEY}`;

const WrappedMap = compose(
	withProps({
		googleMapURL: GMAP_URI,
		loadingElement: <div style={{height: "100%"}}/>,
		containerElement: <div style={{height: "400px"}}/>,
		mapElement: <div style={{height: "100%"}}/>,
	}),
	withScriptjs,
	withGoogleMap
)((props) =>
	<GoogleMap
		defaultZoom={8}
		defaultCenter={{ lat: -34.397, lng: 150.644 }}
	>
	</GoogleMap>
);

class Map extends React.PureComponent {
	//state & functions

	render() {
		return (
			<WrappedMap />
		)
	}
}

export default Map;