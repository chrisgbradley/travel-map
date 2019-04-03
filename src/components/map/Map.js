import React, { Fragment } from "react";
import { withProps, compose } from "recompose";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap
} from "react-google-maps";

import MapControls from "./mapControls";
import { __GAPI_KEY } from "../../../secrets";
import "./map.css";

const GMAP_URI = `https://maps.googleapis.com/maps/api/js?key=${__GAPI_KEY}`;

const WrappedMap = compose(
	withProps({
		googleMapURL: GMAP_URI,
		loadingElement: <div className="map__loader"/>,
		containerElement: <div className="map__container"/>,
		mapElement: <div className="map__elem"/>,
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
			<Fragment>
				<MapControls/>
				<WrappedMap/>
			</Fragment>
		)
	}
}

export default Map;