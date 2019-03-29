import React, { Fragment } from "react";
import Map from "components/Map/Map";
import Header from "components/Header/Header";
import styles from "./Dashboard.module.css";

const Dashboard = ( props ) => (
	<div className="dashboard">
		<Header/>
		<Map/>
	</div>
);

export default Dashboard;

