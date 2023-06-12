// import { CircularLoading } from "./cicular_loading_component";
// import Image from "next/image";
// import React from 'react';
// export function MainAppButton(props) {
//     let textStyle = props.textStyle ?? {
//         fontSize: 16,
//         color: "white",
//         fontWeight: 600,
//     };

//     return <div onClick={!props.isActive ? null : props.onClick} style={{
//         background: props.isActive ? (props.backgroundColor ?? "#FABB18") : "#CED5DE",
//         borderRadius: props.borderRadius ?? 8,
//         padding: props.padding ?? "12px 16px",
//         justifyContent: "center",
//         display: "block",
//         width: props.width,
//         fontSize: textStyle.fontSize,
//         color: props.isActive ? (textStyle.color) : "#A6B2BF",
//         fontWeight: textStyle.fontWeight,
//         textAlign: "center",
//         cursor: "default",
//     }}>
//         {props.title}
//     </div>
// }

// export function ButtonLoading(props) {
//     let textStyle = props.textStyle ?? {
//         fontSize: 16,
//         color: "white",
//         fontWeight: 600,
//     };

//     return <div onClick={!props.isActive ? null : props.onClick} style={{
//         background: props.isActive ? (props.backgroundColor ?? "#FABB18") : "#CED5DE",
//         borderRadius: props.borderRadius ?? 8,
//         padding: props.padding ?? "12px 16px",
//         justifyContent: "center",
//         fontSize: textStyle.fontSize,
//         color: props.isActive ? textStyle.color : "#A6B2BF",
//         fontWeight: textStyle.fontWeight,
//         textAlign: "center",
//         cursor: "default",
//     }}>
//         {props.isLoading ? <CircularLoading /> : props.title}
//     </div>
// }

// export function GoogleButton(props) {
//     let textStyle = props.textStyle ?? {
//         fontSize: 16,
//         color: "#A6B2BF",
//         fontWeight: 600,
//     };

//     return <div onClick={props.onClick} style={{
//         background: "#FFFFFF",
//         borderRadius: props.borderRadius ?? 8,
//         padding: props.padding ?? "12px 16px",
//         border: "1px solid #E8EAED",
//         justifyContent: "center",
//         flexDirection: "row",
//         display: "flex",
//         alignItems: "center",
//         cursor: "default",
//     }}>
//         <Image style={{
//             marginLeft: "16px",
//             height: 24,
//             width: 24,
//         }} src={require("../assets/icons/icon_google.svg").default} alt="icon_google" />
//         <div style={{
//             fontSize: textStyle.fontSize,
//             color: textStyle.color,
//             fontWeight: textStyle.fontWeight,
//             textAlign: "center",
//             flex: 1,
//         }}>{props.title}</div>
//     </div>
// }

// export function CicularButton(props){
//     return <button className="rounded-full flex items-center justify-center border-none" type="button" onClick={props.onClick} style={{
//         background: props.background,
//         padding: props.padding,
//         height: props.height,
//         width: props.width,
//     }}>
//         {props.children}
//     </button>
// }

// export function BorderButton(props){
//     let textStyle = props.textStyle ?? {
//         fontSize: 16,
//         color: "#5D7888",
//         fontWeight: 600,
//     };

//     return <div onClick={props.onClick} style={{
//         background: "#FFFFFF",
//         borderRadius: props.borderRadius ?? 8,
//         padding: props.padding ?? "12px 16px",
//         border: props.border ?? "1px solid #CED5DE",
//         justifyContent: "center",
//         cursor: "default",
//         width: props.width,
//         fontSize: textStyle.fontSize,
//         color: props.textColor ?? textStyle.color,
//         fontWeight: textStyle.fontWeight,
//     }}>
//         {props.title}
//     </div>
// }

// export function BorderButtonCustom(props){
//     let textStyle = props.textStyle ?? {
//         fontSize: 16,
//         color: "#5D7888",
//         fontWeight: 600,
//     };

//     return <div onClick={props.onClick} style={{
//         background: "#FFFFFF",
//         borderRadius: props.borderRadius ?? 8,
//         padding: props.padding ?? "12px 16px",
//         border: props.border ?? "1px solid #CED5DE",
//         justifyContent: "center",
//         cursor: "default",
//         width: props.width,
//         fontSize: textStyle.fontSize,
//         color: props.textColor ?? textStyle.color,
//         fontWeight: textStyle.fontWeight,
//     }}>
//         {props.builder}
//     </div>
// }

// export function BorderMenuButton(props){
//     let textStyle = props.textStyle ?? {
//         fontSize: 12,
//         color: "#335B71",
//         fontWeight: 400,
//     };

//     return <div onClick={props.onClick} style={{
//         background: "#FFFFFF",
//         borderRadius: props.borderRadius ?? 8,
//         padding: props.padding ?? "8px 16px",
//         border: props.border ?? "1px solid #CED5DE",
//         justifyContent: "center",
//         cursor: "default",
//         width: props.width,
//         fontSize: textStyle.fontSize,
//         color: props.textColor ?? textStyle.color,
//         fontWeight: textStyle.fontWeight,
//     }}>
//         {props.title}
//     </div>
// }

// export function MainMenuButton(props) {
//     let textStyle = props.textStyle ?? {
//         fontSize: 12,
//         color: "white",
//         fontWeight: 400,
//     };

//     return <div onClick={!props.isActive ? null : props.onClick} style={{
//         background: props.isActive ? (props.backgroundColor ?? "#FABB18") : "#CED5DE",
//         borderRadius: props.borderRadius ?? 8,
//         padding: props.padding ?? "8px 16px",
//         justifyContent: "center",
//         display: "block",
//         width: props.width,
//         fontSize: textStyle.fontSize,
//         color: props.isActive ? (textStyle.color) : "#A6B2BF",
//         fontWeight: textStyle.fontWeight,
//         textAlign: "center",
//         cursor: "default",
//     }}>
//         {props.title}
//     </div>
// }