// import styles from "../module_styles/pop_up_base_component.module.css";
// import PropTypes from "prop-types";
// import React from "react";
// import { Diviver } from "./divider_component";

// export function PopupBase(props) {
//   const show = props.show;

//   return (
//     <div
//       style={{
//         visibility: show ? "visible" : "hidden",
//         opacity: show ? "1" : "0",
//       }}
//       className={styles.overlay}
//     >
//       <div className={styles.popup}>
//         <div className={styles.popupTitle}>
//           <h2>{props.title}</h2>
//           <span className={styles.close} onClick={props.onClose}>
//             &times;
//           </span>
//         </div>
//         <Diviver />
//         <div className={styles.content}>{props.content}</div>
//         <div className={styles.bottom}>{props.bottom}</div>
//       </div>
//     </div>
//   );
// }

// PopupBase.propTypes = {
//   title: PropTypes.string.isRequired,
//   show: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };
