import styles from "../../module_styles/empty.module.css";
import React from 'react';
export function EmptyContent(props){
    const message = props.message;

    return <div className={styles.EmptyForm}>
        <p>{message}</p>
    </div>
}