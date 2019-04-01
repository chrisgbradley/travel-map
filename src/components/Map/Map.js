import React, { Fragment } from "react";
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

const MAPS_URI = `https://maps.googleapis.com/maps/api/js?v=3.36&key=${__GAPI_KEY}`;

const MapWrapper = compose(
	withProps({
		googleMapURL: MAPS_URI,
		containerElement: <div className={styles.map} />,
		loadingElement: <div className={styles.map__loader} />,
		mapElement: <div className={styles["map__map-elem"]} />
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


const Map = function() {
	return (
		<MapWrapper
		/>
	)
};


export default Map;
