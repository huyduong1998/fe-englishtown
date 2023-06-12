// import React, { useState } from "react";
// import { stringIsNullOrEmpty } from "../utils/core_extension";
// import Image from "next/image";

// export function TextFieldWithLabel(props) {
//   let labelStyle = props.labelStyle ?? {
//     fontSize: 12,
//     color: "#5D7888",
//     fontWeight: 500,
//   };

//   let errorStyle = props.errorStyle ?? {
//     fontSize: 11,
//     color: "#FF434E",
//     fontWeight: 400,
//   };

//   let textInputStyle = props.inputStyle ?? {
//     fontSize: 14,
//     fontWeight: 400,
//   };

//   const [value, setValue] = useState(props.value ?? "");
//   const [hasFocus, setFocus] = useState(props.hasFocus ?? false);

//   function onHandleChange(event) {
//     setValue(event.target.value);
//     props.onChange(event.target.value);
//   }

//   return (
//     <div
//       className="TextField"
//       style={{
//         flexDirection: "column",
//         display: "flex",
//         marginBottom: "12px",
//       }}
//     >
//       <label
//         style={{
//           fontSize: labelStyle.fontSize,
//           fontWeight: labelStyle.fontWeight,
//           color: labelStyle.color,
//         }}
//       >
//         {props.title}
//       </label>
//       <input
//         type="text"
//         style={{
//           fontSize: textInputStyle.fontSize,
//           fontWeight: textInputStyle.fontWeight,
//           color: hasFocus ? "#FABB18" : "#194761",
//           padding: "16px 16px",
//           border: hasFocus ? "1px solid #FABB18" : "1px solid #E8EAED",
//           borderRadius: "10px",
//           marginTop: "4px",
//           outline: "none",
//         }}
//         onChange={onHandleChange}
//         value={value}
//         onFocus={() => setFocus(true)}
//         onBlur={() => setFocus(false)}
//         placeholder={props.placeholder}
//       />
//       {stringIsNullOrEmpty(props.error) ? null : (
//         <p
//           style={{
//             fontSize: errorStyle.fontSize,
//             fontWeight: errorStyle.fontWeight,
//             color: errorStyle.color,
//           }}
//         >
//           {props.error}
//         </p>
//       )}
//     </div>
//   );
// }

// export function TextFieldPassword(props) {
//   let labelStyle = props.labelStyle ?? {
//     fontSize: 12,
//     color: "#5D7888",
//     fontWeight: 500,
//   };

//   let errorStyle = props.errorStyle ?? {
//     fontSize: 11,
//     color: "#FF434E",
//     fontWeight: 400,
//   };

//   let textInputStyle = props.inputStyle ?? {
//     fontSize: 14,
//     fontWeight: 400,
//   };

//   const [value, setValue] = useState(props.value ?? "");

//   const [hasFocus, setFocus] = useState(props.hasFocus ?? false);

//   const [passwordType, setPasswordType] = useState("password");

//   function togglePassword() {
//     if (passwordType === "password") {
//       setPasswordType("text");
//     } else {
//       setPasswordType("password");
//     }
//   }

//   function onHandleChange(event) {
//     setValue(event.value);

//     props.onChange(event.target.value);
//   }

//   return (
//     <div
//       className="InputPassword"
//       style={{
//         flexDirection: "column",
//         display: "flex",
//         marginBottom: "12px",
//       }}
//     >
//       <label
//         style={{
//           fontSize: labelStyle.fontSize,
//           fontWeight: labelStyle.fontWeight,
//           color: labelStyle.color,
//         }}
//       >
//         {props.title}
//       </label>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           border: hasFocus ? "1px solid #FABB18" : "1px solid #E8EAED",
//           borderRadius: "10px",
//           marginTop: "4px",
//           padding: "12px 16px",
//         }}
//       >
//         <input
//           type={passwordType}
//           onChange={onHandleChange}
//           style={{
//             fontSize: textInputStyle.fontSize,
//             fontWeight: textInputStyle.fontWeight,
//             color: hasFocus ? "#FABB18" : "#194761",
//             border: "none",
//             outline: "none",
//             width: "100%",
//           }}
//           value={value}
//           onFocus={() => setFocus(true)}
//           onBlur={() => setFocus(false)}
//           placeholder={props.placeholder}
//         />
//         <button
//           onClick={togglePassword}
//           style={{
//             border: "none",
//             backgroundColor: "transparent",
//             padding: "0px",
//             height: "24x",
//             width: "24px",
//           }}
//         >
//           {passwordType === "password" ? (
//             <Image
//               style={{
//                 height: 24,
//                 width: 24,
//               }}
//               src={require("../assets/icons/icon_eye.svg").default}
//               alt="icon_eye"
//             />
//           ) : (
//             <Image
//               style={{
//                 height: 24,
//                 width: 24,
//               }}
//               src={require("../assets/icons/icon_eye_fa.svg").default}
//               alt="icon_eye_fa"
//             />
//           )}
//         </button>
//       </div>
//       {stringIsNullOrEmpty(props.error) ? null : (
//         <p
//           style={{
//             fontSize: errorStyle.fontSize,
//             fontWeight: errorStyle.fontWeight,
//             color: errorStyle.color,
//           }}
//         >
//           {props.error}
//         </p>
//       )}
//     </div>
//   );
// }
