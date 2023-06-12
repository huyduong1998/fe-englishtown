// import React, { useState } from "react";
// import styles from "../module_styles/button_tab_component.module.css";

// export function ButtonTab(props) {
//   const [selected, setSelected] = useState(props.selectedTab);

//   const builder = props.builder;

//   function onClick(index) {
//     setSelected(index);

//     props.onChange(index);
//   }

//   return (
//     <div className={styles.ButtonTabForm}>
//       {props.tabs.map((e, index) => (
//         <ButtonTabItem
//           index={index}
//           key={index}
//           indexSelected={selected}
//           title={builder(e)}
//           onClick={() => onClick(index)}
//         />
//       ))}
//     </div>
//   );
// }

// function ButtonTabItem(props) {
//   let textStyle = props.textStyle ?? {
//     fontSize: 14,
//     color: "white",
//     fontWeight: 500,
//   };

//   const index = props.index;

//   const indexSelected = props.indexSelected;

//   const isSelected = index == indexSelected;

//   return (
//     <div
//       onClick={props.onClick}
//       className="px-1 py-2 flex-1 justify-center cursor-pointer text-center whitespace-nowrap"
//       style={{
//         background: isSelected
//           ? props.selectedColor ?? "#FABB18"
//           : props.unSelectedColor ?? "rgba(242, 245, 247, 0.88)",
//         borderRadius: props.borderRadius ?? 8,
//         fontSize: textStyle.fontSize,
//         color: isSelected ? textStyle.color : "#5D7888",
//         fontWeight: textStyle.fontWeight,
//       }}
//     >
//       {props.title}
//     </div>
//   );
// }
