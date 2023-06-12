// import React, { useState } from "react";
// import styles from "../module_styles/tab_component.module.css";

// export function TabComponent(props) {
//   const elements = props.elements;

//   const [indexSelected, setIndexSelected] = useState(props.index ?? 0);

//   function onChange(index) {
//     if (indexSelected === index) return;

//     const currentTab = document.getElementById(`tab-${indexSelected}`);

//     const crObject = currentTab.getBoundingClientRect();

//     const targetTab = document.getElementById(`tab-${index}`);

//     const tgObject = targetTab.getBoundingClientRect();

//     if (index > indexSelected) {
//       currentTab.style.transform = `translateX(${tgObject.x - crObject.x}px)`;
//     } else {
//       currentTab.style.transform = `translateX(${-(
//         tgObject.x - crObject.x
//       )}px)`;
//     }

//     setTimeout(() => {
//       if (props.onChange != null) {
//         props.onChange(index);
//       }
//       setIndexSelected(index);
//     }, 650);
//   }

//   return (
//     <div className={styles.TabComponent}>
//       {elements.map((e, index) => (
//         <TabElement
//           key={index}
//           indexSelected={indexSelected}
//           index={index}
//           onClick={onChange}
//           element={e}
//           titleBuilder={props.titleBuilder}
//         />
//       ))}
//     </div>
//   );
// }

// function TabElement(props) {
//   const isSelected = props.indexSelected === props.index;

//   const element = props.element;

//   return (
//     <div
//       key={`key-tab-${props.index}`}
//       className={styles.TabElement}
//       onClick={() => props.onClick(props.index)}
//     >
//       <p
//         className={styles.Title}
//         style={{ fontWeight: isSelected ? 600 : 400 }}
//       >
//         {props.titleBuilder(element)}
//       </p>
//       <div
//         id={`tab-${props.index}`}
//         className={styles.Indicator}
//         style={{ visibility: isSelected ? "visible" : "hidden" }}
//       />
//     </div>
//   );
// }
