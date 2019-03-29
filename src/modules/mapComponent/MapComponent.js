import React from "react";
import Helmet from "react-helmet";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import {__GAPI_KEY} from "../../../.config.private";

const MAPS_URI = `https://maps.googleapis.com/maps/api/js?v=3.36&key=${__GAPI_KEY}&callback=initMap`;

const MapComponent = compose(
	withProps({
		googleMapURL: MAPS_URI,
		loadingElement: <div className="map__loader" style={{ height: `100vh` }} />,
		containerElement: <div className="map__container" style={{ height: `100vh` }} />,
		mapElement: <div className="map__map-elem" style={{ height: `100vh` }} />
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


	render() {
		return (
			<div>
				{/*hacks away an error with google maps initMap() by globalizing it*/}
				<Helmet script={[{type: 'text/javascript', innerHTML: 'initMap = function () {}'}]} />
				<MapComponent
				/>
			</div>
		)
	}
}


export default Map;
