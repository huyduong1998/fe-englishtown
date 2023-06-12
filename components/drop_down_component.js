// import React, { useState } from "react";
// import styles from "../module_styles/drop_down_component.module.css";

// export function DropDown(props) {
//   const [selected, setSelected] = useState(props.value);
//   const values = props.values;

//   function handleChange(event) {
//     setSelected(event.target.value);

//     if (props.onChange != null) {
//       props.onChange(event.target.value);
//     }
//   }

//   return (
//     <div className={styles.DropDownForm}>
//       <select onChange={handleChange} value={selected}>
//         {values.map((e, index) => (
//           <option key={index} value={props.valueOption(e)}>
//             {props.builder(e)}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export function DropdownPopop(props) {
//   const values = props.values;

//   function handleChange(event) {
//     if (props.onChange != null) {
//       props.onChange(event.target.value);
//     }
//   }

//   return (
//     <div className={styles.DropdownPopopForm}>
//       <select onChange={handleChange} value={props.value}>
//         {values.map((item, index) => {
//           if (item == "") {
//             return (
//               <option
//                 key={index}
//                 value={props.valueOption(item)}
//                 style={{ display: "none" }}
//               ></option>
//             );
//           }
//           return (
//             <option key={index} value={props.valueOption(item)}>
//               {item}
//             </option>
//           );
//         })}
//       </select>
//     </div>
//   );
// }

// export function FlagDropDown(props) {
//   const values = props.values;
//   const [selected, setSelected] = useState(props.value);

//   function handleChange(event) {
//     setSelected(event.target.value);

//     if (props.onChange != null) {
//       props.onChange(event.target.value);
//     }
//   }

//   return (
//     <div className={styles.FlagDropDown}>
//       <select
//         onChange={handleChange}
//         value={selected}
//         style={{ WebkitAppearance: "none", MozAppearance: "none" }}
//       >
//         {values.map((e, index) => (
//           <option key={index} value={props.valueOption(e)}>
//             {props.builder(e)}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }
