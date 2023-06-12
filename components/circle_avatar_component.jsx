// import styles from "../module_styles/circle_avatar.module.css";
// import React, { useState } from "react";
// import { stringIsNullOrEmpty } from "../utils/core_extension";
// import Image from "next/image";

// export function CircleAvatar(props) {
//     const [isError, setIsError] = useState(false);
//     const url = props.url;

//     const imageProps = {
//         height: (props.radius ?? 20) * 2,
//         width: (props.radius ?? 20) * 2,
//     };

//     if (stringIsNullOrEmpty(url) || isError) {
//         return (
//             <div className="flex items-center justify-center mx-auto" style={{ width: imageProps.width, height: imageProps.height, borderRadius: "50%", backgroundColor: props.backgroundColor }}>
//                 <p className="text-white text-center font-medium text-[22px]" style={{ lineHeight: "0px" }}>
//                     {props.title}
//                 </p>
//             </div>
//         );
//     }

//     return (
//         <Image className={styles.img} src={url} alt="Avatar" loading="lazy" width={imageProps.width} height={imageProps.height} onError={() => {
//             setIsError(true);
//         }} />
//     )
// }

// export function AppAvatar(props) {
//     const [isError, setIsError] = useState(false);
//     const imageProps = {
//         height: (props.radius ?? 20) * 2,
//         width: (props.radius ?? 20) * 2,
//     };
//     const url = props.url;
//     if (stringIsNullOrEmpty(url) || isError) {
//         return <div className="flex justify-center rounded-full items-center" style={{ width: imageProps.width, height: imageProps.height, backgroundColor: props.backgroundColor, marginRight: "2px" }}>
//             <p className="text-white text-center leading-none font-medium text-[10px]">
//                 {props.title}
//             </p>
//         </div>;
//     }
//     return (
//         <Image className={styles.img} src={url} alt="Avatar" loading="lazy" width={imageProps.width} height={imageProps.height} style={{ marginRight: "2px" }} onError={() => {
//             setIsError(true);
//         }} />
//     )

// }