import React, { Fragment } from "react";
import Helmet from "react-helmet";
import { compose, withProps } from "recompose";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from "react-google-maps";
import { InfoBox} from "react-google-maps/lib/components/addons/InfoBox";
import {__GAPI_KEY} from "../../../.config.private";
import styles from "./Map.module.css";

const MAPS_URI = `https://maps.googleapis.com/maps/api/js?v=3.36&key=${__GAPI_KEY}&callback=initMap`;

const MapWrapper = compose(
	withProps({
		googleMapURL: MAPS_URI,
		containerElement: <div className="map" />,
		loadingElement: <div className="map__loader" />,
		mapElement: <div className="map__map-elem" />
	}),
	withScriptjs,
	withGoogleMap
)((props) =>
		<GoogleMap
			defaultZoom={8}
			defaultCenter={{ lat: -34.397, lng: 150.644 }}
			options={{
				disableDefaultUI: true
			}}
		>
		</GoogleMap>
	);


class Map extends React.PureComponent {
	state = { };

	render() {
		return (
			<Fragment>
				{/*hacks away an error with google maps initMap() by globalizing it*/}
				<Helmet script={[{type: 'text/javascript', innerHTML: 'initMap = function () {}'}]} />
				<MapWrapper
				/>
			</Fragment>
		)
	}
}


export default Map;
