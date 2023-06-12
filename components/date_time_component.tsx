// import styles from "../module_styles/date_time_component.module.css";
// import {
//   hourInDays,
//   dayOfWeek,
//   mapDaytoEn,
//   compare,
//   mapDaytoVi,
//   getNextDay,
//   getLastDay,
//   mapMonthVi,
//   getBetweenWeeklyDateVi,
//   getMondayOfCurrentWeek,
//   getSundayOfCurrentWeek,
//   getDateFromHours,
//   getBetweenWeeklyDateEn,
//   mapMonthEn,
// } from "../utils/date_utils";
// import { CicularButton } from "./app_button_component";
// import React, { useState } from "react";
// import Image from "next/image";
// import { getLanguageConsumer } from "../utils/language_util";

// export function WeeklyDate(props:any) {
//   const currentDate = props.date;

//   const [displayDate, setDisplayDate] = useState(
//     new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       currentDate.getDate()
//     )
//   );

//   const [selectedDate, setSelectedDate] = useState(
//     new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       currentDate.getDate()
//     )
//   );

//   const initDays = dayOfWeek(currentDate);

//   const [days, setDays] = useState(initDays);

//   const currentLanguage = getLanguageConsumer().language;

//   function onHandleDisplayChange() {
//     const lastOnWeek = days.pop();

//     setDisplayDate(lastOnWeek);
//   }

//   function onLastDateClick() {
//     const firstOnWeek = days[0];

//     const lastDay = getLastDay(firstOnWeek);

//     const newDays = dayOfWeek(lastDay);

//     setDays(newDays);

//     onHandleDisplayChange();
//   }

//   function onNextDateClick() {
//     const lastOnWeek = days.pop();

//     const nextDay = getNextDay(lastOnWeek);

//     const newDays = dayOfWeek(nextDay);

//     setDays(newDays);

//     onHandleDisplayChange();
//   }

//   function onDayClick(date) {
//     setSelectedDate(date);

//     if (props.onSelectedDate != null) {
//       props.onSelectedDate(date);
//     }
//   }

//   return (
//     <div className={styles.WeeklyDateFrom}>
//       <h3 className="mb-4 mt-9 text-[22px]">
//         {currentLanguage === "vi"
//           ? mapMonthVi(displayDate)
//           : mapMonthEn(displayDate)}
//         , {displayDate.getFullYear()}
//       </h3>
//       <div className={styles.WeeklyForm}>
//         <CicularButton
//           height="32px"
//           width="32px"
//           background={"#194761"}
//           onClick={onLastDateClick}
//         >
//           <Image
//             style={{
//               height: "12px",
//               width: "12px",
//             }}
//             src={require("../assets/icons/arrow_left_white.svg").default}
//             alt="arrow_left_white"
//           />
//         </CicularButton>
//         <div className="mx-8 flex items-center gap-10">
//           {days.map((day, index) => {
//             return (
//               <div
//                 className="cursor-pointer rounded p-1 text-center"
//                 key={index}
//                 onClick={() => onDayClick(day)}
//                 style={{
//                   background: compare(selectedDate, day)
//                     ? "rgba(250, 187, 24, 0.12)"
//                     : null,
//                 }}
//               >
//                 <p
//                   className="overflow-hidden text-ellipsis text-sm leading-4"
//                   style={{
//                     color: compare(selectedDate, day) ? "#FABB18" : "#194761",
//                   }}
//                 >
//                   {currentLanguage === "vi" ? mapDaytoVi(day) : mapDaytoEn(day)}
//                 </p>
//                 <p
//                   className="text-[22px] font-medium"
//                   style={{
//                     color: compare(selectedDate, day) ? "#FABB18" : "#194761",
//                   }}
//                 >
//                   {day.getDate()}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//         <CicularButton
//           height="32px"
//           width="32px"
//           background={"#194761"}
//           onClick={onNextDateClick}
//         >
//           <Image
//             style={{
//               height: "12px",
//               width: "12px",
//             }}
//             src={require("../assets/icons/arrow_right_white.svg").default}
//             alt="arrow_right_white"
//           />
//         </CicularButton>
//       </div>
//     </div>
//   );
// }

// export function WeeklyDateBetween(props) {
//   const currentDate = props.date;

//   const [selectedDate, setSelectedDate] = useState(
//     new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       currentDate.getDate()
//     )
//   );

//   const currentLanguage = getLanguageConsumer().language;

//   function onClickLastChange() {
//     const monday = getMondayOfCurrentWeek(selectedDate);

//     const lastSunday = getLastDay(monday);

//     setSelectedDate(lastSunday);

//     props.onDateChange(lastSunday);
//   }

//   function onClickNextChange() {
//     const sunday = getSundayOfCurrentWeek(selectedDate);

//     const nextMonday = getNextDay(sunday);

//     setSelectedDate(nextMonday);

//     props.onDateChange(nextMonday);
//   }

//   return (
//     <div className="mt-10 flex items-center gap-8">
//       <button type="button">
//         <Image
//           onClick={onClickLastChange}
//           style={{ height: 16, width: 16 }}
//           src={require("../assets/icons/arrow_left_small.svg").default}
//           alt="arrow_left_small"
//         />
//       </button>
//       <h3 className="text-[22px] font-semibold text-blue">
//         {currentLanguage === "vi"
//           ? getBetweenWeeklyDateVi(selectedDate)
//           : getBetweenWeeklyDateEn(selectedDate)}
//       </h3>
//       <button type="button">
//         <Image
//           onClick={onClickNextChange}
//           style={{ height: 16, width: 16 }}
//           src={require("../assets/icons/arrow_right_small.svg").default}
//           alt="arrow_right_small"
//         />
//       </button>
//     </div>
//   );
// }

// export function WeeklyDateEvent(props) {
//   const currentDate = props.date;

//   const rows = hourInDays;

//   const columns = dayOfWeek(currentDate);

//   const currentLanguage = getLanguageConsumer().language;

//   return (
//     <table className="collapse w-full table-fixed text-center text-[#71717A]">
//       <tbody>
//         <tr>
//           <td className="font-semibold">-</td>
//           {columns.map((date, index) => {
//             return (
//               <td
//                 key={index}
//                 className="overflow-hidden text-ellipsis p-3 font-semibold"
//               >
//                 {currentLanguage === "vi" ? mapDaytoVi(date) : mapDaytoEn(date)}
//                 , {date.getDate()}
//               </td>
//             );
//           })}
//         </tr>
//         {rows.map((e, index) => {
//           return (
//             <tr key={index}>
//               <td
//                 className="border border-solid border-[#e0e0e0] font-semibold"
//                 style={{
//                   height: `${getHeightSizeItem(5)}px`,
//                 }}
//               >
//                 {e}
//               </td>
//               {columns.map((date, idx) => {
//                 return (
//                   <td
//                     key={idx}
//                     className="border border-solid border-[#e0e0e0] font-semibold"
//                     style={{
//                       minHeight: `${getHeightSizeItem(8)}px`,
//                     }}
//                   >
//                     {props.eventBuilder(getDateFromHours(e), date)}
//                   </td>
//                 );
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }
