import {ReactElement} from "react";
import React from "react";
import styles from './homePage.module.scss';

function Homepage(): ReactElement {

    return (
        <>
            <div className={styles.title}>
                <h1>Homepage Welcome</h1>
            </div>
        </>
    );
}

export default Homepage;
