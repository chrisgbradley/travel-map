import React, { Fragment } from "react";
import Map from "components/Map/Map";
import styles from "./Dashboard.module.css";

const Dashboard = ( props ) => (
	<div className={styles["dashboard"]}>
		<Map/>
	</div>
);

export default Dashboard;

