import React from "react";
import styles from "./Header.module.css";

const Header = ( props ) => (
	<header className={styles["site-header"]}>
		<div>logo</div>
		<div>auth controls</div>
		<nav>nav</nav>
	</header>
);

export default Header;

