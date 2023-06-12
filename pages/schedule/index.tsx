// import React from "react";
// import { useContext, useEffect, useState } from "react";
// import {
//   BorderButton,
//   MainAppButton,
// } from "../../components/app_button_component";
// import { EmptyContent } from "../../components/apps/empty";
// import { ButtonTab } from "../../components/button_tab_component";
// import { ContentLoading } from "../../components/content_loading_component";
// import {
//   WeeklyDate,
//   WeeklyDateBetween,
//   WeeklyDateEvent,
// } from "../../components/date_time_component";
// import { DropDown } from "../../components/drop_down_component";
// import {
//   ClassConfirmBookForm,
//   ClassConfirmCancelForm,
//   ClassDetailForm,
// } from "../../components/schedule_components/class_info_card";
// import { CourseCard } from "../../components/schedule_components/profile_course_info_card";
// import { ClassCard } from "../../components/schedule_components/schedule_card";
// import { ScheduleOtherCard } from "../../components/schedule_components/schedule_other_card";
// import { ScheduleStatus, StudentScheduleStatus } from "../../constants/enum";
// import { LanguageKeys } from "../../constants/language_keys";
// import { allSetting } from "../../constants/schedule_filter";
// import styles from "../module_styles/schedule.module.css";
// import {
//   bookSchedule,
//   cancelBookSchedule,
//   getCourseSchedules,
//   getCourseSettings,
//   getPersonalCourse,
//   getStudentCourseEnrollment,
//   requiredBookedStudentId,
//   requiredStartDate,
// } from "../../services/course_service";
// import {
//   getAllStudentCourseEnrollments,
//   getUserProfile,
// } from "../../services/user_service";
// import {
//   formatDateToJson,
//   getDateFromHours,
//   getMondayOfCurrentWeek,
//   getSundayOfCurrentWeek,
// } from "../../utils/date_utils";
// import { i18n } from "../../utils/language_util";
// import AppLoadingContext from "contexts/AppLoadingContext";
// import AppStateContext from "contexts/AppStateContext";
// import AppPopUpContext from "contexts/AppPopUpContext";
// import { CourseType } from "types/course";
// // import { AppLoadingContext, AppPopUpContext, AppStateContext } from "../_app";
// import ProfileCard from "components/UserProfile/ProfileCard";
// export default function SchedulePage() {
//   const appLoading = useContext(AppLoadingContext);
//   const appState = useContext(AppStateContext);
//   const appPopUp = useContext(AppPopUpContext);
//   const detailClass = i18n(LanguageKeys.detailClass);
//   const titleConfirmBooked = i18n(LanguageKeys.confirmBookSchedule);
//   const titleConfirmCancel = i18n(LanguageKeys.confirmCancelSchedule);
//   const tabs = [
//     {
//       status: StudentScheduleStatus.available,
//       title: i18n(LanguageKeys.classAvailiable),
//     },
//     {
//       status: StudentScheduleStatus.upcoming,
//       title: i18n(LanguageKeys.classUpcoming),
//     },
//     {
//       status: StudentScheduleStatus.past,
//       title: i18n(LanguageKeys.classPast),
//     },
//   ];
//   const [selectedTab, setSelectedTab] = useState(1);
//   const [globalPageLoading, setGlobalPageLoading] = useState(true);
//   const [globalError, setGlobalError] = useState(false);
//   const [userProfile, setUserProfile] = useState({
//     userProfile: {},
//     studentCoures: [],
//   });
//   const [scheduleError, setScheduleError] = useState(false);
//   const [scheduleViewLoading, setScheduleViewLoading] = useState(false);
//   const [scheduleData, setScheduleData] = useState({
//     schedules: [],
//     courses: [],
//     selectedCourse: null,
//     courseClassSettings: [allSetting],
//     courseClassSelected: null,
//     selectedDate: new Date(),
//     courseEnrollment: null,
//     page: 1,
//     status: StudentScheduleStatus.upcoming,
//   });

//   useEffect(() => {
//     getScheduleDataPageStarted();
//   }, []);

//   async function onSelectedCourseChange(selectedCourse: CourseType) {
//     const courseEnrollment = await getStudentCourseEnrollment(
//       selectedCourse.id
//     );
//     const courseClassSettings = await getCourseSettings(selectedCourse.id);
//     return {
//       settings: courseClassSettings,
//       courseEnrollment: courseEnrollment,
//     };
//   }

//   async function onFilterChange(
//     courseId: number,
//     page: number,
//     courseSettingId: number,
//     status: any,
//     userId: number,
//     selectedDate: Date
//   ) {
//     let scopeFilter = "";
//     let startAt;
//     let startBetween;
//     const isRequiredUserId = requiredBookedStudentId(status);
//     const isRequiredStartDate = requiredStartDate(status);
//     const monday = getMondayOfCurrentWeek(selectedDate);
//     const sunday = getSundayOfCurrentWeek(selectedDate);
//     switch (status) {
//       case StudentScheduleStatus.available:
//         scopeFilter = "starts_at";
//         startAt = formatDateToJson(selectedDate);
//         break;
//       case StudentScheduleStatus.upcoming:
//         scopeFilter = "starts_at";
//         break;
//       case StudentScheduleStatus.past:
//         scopeFilter = "starts_between";

//         startBetween = `${formatDateToJson(monday)},${formatDateToJson(
//           sunday
//         )}`;
//         break;
//       default:
//     }

//     const schedules = await getCourseSchedules(
//       courseId,
//       page,
//       20,
//       null,
//       null,
//       courseSettingId == 888888 ? null : courseSettingId,
//       status,
//       isRequiredUserId ? userId : null,
//       isRequiredStartDate ? startAt : null,
//       isRequiredStartDate ? startBetween : null,
//       null,
//       scopeFilter
//     );

//     return schedules;
//   }

//   async function getScheduleStarted(userId) {
//     const studentCourses = await getPersonalCourse();
//     const selectedCourse = studentCourses[0];
//     const selectedCourseChange = await onSelectedCourseChange(selectedCourse);
//     const settings = [allSetting, ...selectedCourseChange.settings];
//     const courseSelectedSetting = settings[0];
//     const schedules = await onFilterChange(
//       selectedCourse.id,
//       1,
//       courseSelectedSetting.id,
//       scheduleData.status,
//       userId,
//       scheduleData.selectedDate
//     );

//     setScheduleData((pr) => ({
//       ...pr,
//       schedules: schedules,
//       courses: studentCourses,
//       selectedCourse: selectedCourse,
//       courseClassSettings: settings,
//       courseClassSelected: courseSelectedSetting,
//       courseEnrollment: selectedCourseChange.courseEnrollment,
//     }));
//   }

//   async function onDateSelectedChange(date) {
//     setScheduleData((pr) => ({
//       ...pr,
//       selectedDate: date,
//     }));
//     setScheduleError(false);
//     setScheduleViewLoading(true);
//     try {
//       const schedules = await onFilterChange(
//         scheduleData.selectedCourse.id,
//         1,
//         scheduleData.courseClassSelected.id,
//         scheduleData.status,
//         userProfile.userProfile?.id,
//         date
//       );

//       setScheduleData((pr) => ({
//         ...pr,
//         schedules: schedules,
//         page: 1,
//       }));
//     } catch (e) {
//       setScheduleError(true);
//     } finally {
//       setScheduleViewLoading(false);
//     }
//   }

//   async function getScheduleDataPageStarted() {
//     setGlobalError(false);
//     setGlobalPageLoading(true);
//     try {
//       const userProfile = await getUserProfile();
//       console.log(1);
//       if (appState.user == null) {
//         console.log(2);
//         appState.setUser(userProfile);
//       }
//       const coures = await getAllStudentCourseEnrollments();
//       setUserProfile({ userProfile: userProfile, studentCoures: coures });
//       await getScheduleStarted(userProfile.id);
//     } catch (e) {
//       setGlobalError(true);
//     } finally {
//       setGlobalPageLoading(false);
//     }
//   }

//   async function onTabChange(index) {
//     if (index == selectedTab) {
//       return;
//     }

//     setSelectedTab(index);

//     const status = tabs[index].status;

//     setScheduleData((pr) => ({
//       ...pr,
//       status: status,
//       selectedDate: new Date(),
//     }));

//     setScheduleViewLoading(true);
//     try {
//       const newSchedules = await onFilterChange(
//         scheduleData.selectedCourse.id,
//         1,
//         scheduleData.courseClassSelected.id,
//         status,
//         userProfile.userProfile?.id,
//         scheduleData.selectedDate
//       );

//       setScheduleData((pr) => ({ ...pr, schedules: newSchedules }));
//     } catch (e) {
//       setScheduleError(false);
//     } finally {
//       setScheduleViewLoading(false);
//     }
//   }

//   async function onCourseChange(courseId) {
//     if (courseId == scheduleData.selectedCourse?.id) {
//       return;
//     }

//     const courseSelected = scheduleData.courses.find((c) => c.id == courseId);

//     setScheduleData((pr) => ({ ...pr, selectedCourse: courseSelected }));

//     setScheduleError(false);
//     setScheduleViewLoading(true);
//     try {
//       const selecteCourseChange = await onSelectedCourseChange(courseSelected);

//       const settings = [allSetting, ...selecteCourseChange.settings];

//       const courseSelectedSetting = settings[0];

//       const schedules = await onFilterChange(
//         courseId,
//         1,
//         courseSelectedSetting.id,
//         scheduleData.status,
//         userProfile.userProfile?.id,
//         scheduleData.selectedDate
//       );

//       setScheduleData((pr) => ({
//         ...pr,
//         schedules: schedules,
//         courseClassSettings: settings,
//         courseClassSelected: courseSelectedSetting,
//       }));
//     } catch (e) {
//       setScheduleError(true);
//     } finally {
//       setScheduleViewLoading(false);
//     }
//   }

//   async function onCourseSettingChange(settingId) {
//     if (settingId == scheduleData.courseClassSettings?.id) {
//       return;
//     }
//     setScheduleError(false);
//     setScheduleViewLoading(true);
//     try {
//       const schedules = await onFilterChange(
//         scheduleData.selectedCourse.id,
//         1,
//         settingId,
//         scheduleData.status,
//         userProfile.userProfile?.id,
//         scheduleData.selectedDate
//       );

//       const selectedSetting = scheduleData.courseClassSettings.find(
//         (s) => s.id == settingId
//       );

//       setScheduleData((pr) => ({
//         ...pr,
//         schedules: schedules,
//         courseClassSelected: selectedSetting,
//       }));
//     } catch (e) {
//       setScheduleError(true);
//     } finally {
//       setScheduleViewLoading(false);
//     }
//   }

//   async function onReloadScheduleForm() {
//     try {
//       const schedules = await onFilterChange(
//         scheduleData.selectedCourse.id,
//         1,
//         scheduleData.courseClassSelected.id,
//         scheduleData.status,
//         userProfile.userProfile?.id,
//         scheduleData.selectedDate
//       );

//       setScheduleData((pr) => ({ ...pr, schedules: schedules }));
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   async function onActionPress(schedule) {
//     const status = schedule.status_display;

//     switch (status) {
//       case ScheduleStatus.available:
//         return await onBookSchedule(schedule.id);
//       case ScheduleStatus.booked:
//         return await onCancelBookSchedule(schedule.id);
//       case ScheduleStatus.closed:
//         return;
//       case ScheduleStatus.fulled:
//         return;
//       case ScheduleStatus.notOpenYet:
//         return;
//       case ScheduleStatus.ongoing:
//         return;
//       case ScheduleStatus.past:
//         return;
//       default:
//     }
//   }

//   async function onBookSchedule(scheduleId) {
//     appLoading.setLoading(true);
//     try {
//       await bookSchedule(scheduleId, scheduleData.courseEnrollment.id);

//       appLoading.setLoading(false);

//       setScheduleError(false);
//       setScheduleViewLoading(true);
//       await onReloadScheduleForm();
//     } catch (e) {
//       appLoading.setLoading(false);
//     } finally {
//       setScheduleViewLoading(false);
//     }
//   }

//   async function onCancelBookSchedule(scheduleId) {
//     appLoading.setLoading(true);
//     try {
//       await cancelBookSchedule(scheduleId, scheduleData.courseEnrollment.id);

//       appLoading.setLoading(false);

//       setScheduleError(false);
//       setScheduleViewLoading(true);

//       await onReloadScheduleForm();
//     } catch (e) {
//       appLoading.setLoading(false);
//       ///handle error
//     } finally {
//       setScheduleViewLoading(false);
//     }
//   }

//   if (globalPageLoading) {
//     return <ContentLoading />;
//   }

//   if (globalError) {
//     return <div>ErrorSystem</div>;
//   }

//   return (
//     <div className="relative grid grid-cols-4">
//       <div className="col-span-1 h-full px-10 py-8">
//         <ProfileCard
//           userProfile={userProfile.userProfile}
//           branch={scheduleData.courseEnrollment?.branch?.code}
//         />
//         <h2 className="mt-2.5 uppercase text-blue">
//           {i18n(LanguageKeys.course)}
//         </h2>
//         <div className="mt-5">
//           {userProfile.studentCoures.length > 0
//             ? userProfile.studentCoures.map((course, index) => {
//                 return <CourseCard key={index} course={course} />;
//               })
//             : null}
//         </div>
//       </div>
//       {/* <VerticalDivider /> */}
//       <hr className="absolute left-1/4 top-0 h-full min-h-[90vh] w-px bg-[#E8EAED]" />
//       <div className="col-span-3 border-l border-solid border-[#E8EAED] p-8">
//         <div className={styles.ScheduleSetting}>
//           <div className={styles.ScheduleDropdown}>
//             <DropDown
//               onChange={onCourseChange}
//               values={scheduleData.courses}
//               builder={(course) => course.name}
//               value={scheduleData.selectedCourse.id}
//               valueOption={(course) => course.id}
//             />
//             <div style={{ width: "4%" }}></div>
//             <DropDown
//               onChange={onCourseSettingChange}
//               values={scheduleData.courseClassSettings}
//               builder={(setting) => setting.name}
//               value={scheduleData.courseClassSelected.id}
//               valueOption={(setting) => setting.id}
//             />
//           </div>
//           <div className={styles.SettingButton}>
//             <ButtonTab
//               selectedTab={selectedTab}
//               tabs={tabs}
//               builder={(e) => {
//                 return e.title;
//               }}
//               onChange={onTabChange}
//             />
//           </div>
//         </div>
//         <ScheduleForm
//           onOpenDetail={(schedule) => {
//             appPopUp.setPopUpValue({
//               isShow: true,
//               title: detailClass,
//               children: <ClassDetailForm schedule={schedule} />,
//               bottom: (
//                 <ButtonDetail
//                   status={schedule.status_display}
//                   onAction={() => {
//                     appPopUp.setPopUpValue({
//                       isShow: false,
//                     });
//                     onActionPress(schedule);
//                   }}
//                   onClose={() => {
//                     appPopUp.setPopUpValue({
//                       isShow: false,
//                     });
//                   }}
//                 />
//               ),
//             });
//           }}
//           onActionPress={(schedule) => {
//             const status = schedule.status_display;
//             let title;
//             let child;
//             switch (status) {
//               case ScheduleStatus.available:
//                 title = titleConfirmBooked;
//                 child = <ClassConfirmBookForm schedule={schedule} />;
//                 appPopUp.setPopUpValue({
//                   isShow: true,
//                   title: title,
//                   children: child,
//                   bottom: (
//                     <ButtonActionDetail
//                       status={status}
//                       onClose={() => {
//                         appPopUp.setPopUpValue({
//                           isShow: false,
//                         });
//                       }}
//                       onAction={() => {
//                         appPopUp.setPopUpValue({
//                           isShow: false,
//                         });
//                         onActionPress(schedule);
//                       }}
//                     />
//                   ),
//                 });
//                 break;
//               case ScheduleStatus.booked:
//                 title = titleConfirmCancel;
//                 child = <ClassConfirmCancelForm schedule={schedule} />;
//                 appPopUp.setPopUpValue({
//                   isShow: true,
//                   title: title,
//                   children: child,
//                   bottom: (
//                     <ButtonActionDetail
//                       status={status}
//                       onClose={() => {
//                         appPopUp.setPopUpValue({
//                           isShow: false,
//                         });
//                       }}
//                       onAction={() => {
//                         appPopUp.setPopUpValue({
//                           isShow: false,
//                         });
//                         onActionPress(schedule);
//                       }}
//                     />
//                   ),
//                 });
//                 break;
//               case ScheduleStatus.closed:
//                 break;
//               case ScheduleStatus.fulled:
//                 break;
//               case ScheduleStatus.notOpenYet:
//                 break;
//               case ScheduleStatus.ongoing:
//                 break;
//               case ScheduleStatus.past:
//                 break;
//               default:
//             }
//           }}
//           onSelectedDate={onDateSelectedChange}
//           schedules={scheduleData.schedules}
//           isLoading={scheduleViewLoading}
//           isError={scheduleError}
//           status={scheduleData.status}
//           selectedDate={scheduleData.selectedDate}
//         />
//       </div>
//     </div>
//   );
// }

// function ScheduleForm(props) {
//   const schedules = props.schedules;
//   const isLoading = props.isLoading;
//   const isError = props.isError;
//   const status = props.status;
//   const selectedDate = props.selectedDate;

//   if (isError) {
//     return <div className={styles.ScheduleClassForm}>SystemError</div>;
//   }

//   switch (status) {
//     case StudentScheduleStatus.available:
//       return (
//         <div className={styles.ScheduleClassForm}>
//           <WeeklyDate
//             date={selectedDate}
//             onSelectedDate={props.onSelectedDate}
//           />
//           {isLoading ? (
//             <div className={styles.ScheduleLayout}>
//               <ContentLoading />
//             </div>
//           ) : schedules.length == 0 ? (
//             <EmptyContent message={i18n(LanguageKeys.scheduleEmpty)} />
//           ) : (
//             <div className={styles.Schedule}>
//               {schedules.map((schedule, index) => {
//                 return (
//                   <ClassCard
//                     key={index}
//                     onActionPress={props.onActionPress}
//                     schedule={schedule}
//                     onOpenDetail={props.onOpenDetail}
//                   />
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       );
//     case StudentScheduleStatus.upcoming:
//       if (isLoading) {
//         return (
//           <div className={styles.ScheduleLayout}>
//             <ContentLoading />
//           </div>
//         );
//       }
//       return (
//         <ScheduleClassUpComingForm
//           onDateChange={props.onSelectedDate}
//           onClick={props.onOpenDetail}
//           selectedDate={selectedDate}
//           schedules={schedules}
//         />
//       );
//     case StudentScheduleStatus.past:
//       if (isLoading) {
//         return (
//           <div className={styles.ScheduleLayout}>
//             <ContentLoading />
//           </div>
//         );
//       }
//       return (
//         <ScheduleClassPassForm
//           onDateChange={props.onSelectedDate}
//           onClick={props.onOpenDetail}
//           selectedDate={selectedDate}
//           schedules={schedules}
//         />
//       );
//   }
// }

// function ScheduleClassUpComingForm(props) {
//   const schedules = props.schedules;
//   function eventBuilder(time, date) {
//     if (schedules.length == 0) {
//       return null;
//     }
//     return (
//       <div className={styles.EventWeelyForm}>
//         {schedules.map((schedule, index) => {
//           const startAt = schedule.starts_at;
//           const shift = schedule.shift;
//           if (startAt == null) {
//             return null;
//           }
//           const startDate = new Date(Date.parse(startAt));
//           if (startDate.getDate() == date.getDate()) {
//             const startTime = getDateFromHours(shift.start_time);
//             if (time.getHours() == startTime.getHours()) {
//               return (
//                 <ScheduleOtherCard
//                   key={index}
//                   onClick={props.onClick}
//                   schedule={schedule}
//                   status={StudentScheduleStatus.upcoming}
//                 />
//               );
//             }
//             return null;
//           } else {
//             return null;
//           }
//         })}
//       </div>
//     );
//   }

//   return (
//     <div className={styles.ScheduleClassUpComingForm}>
//       <WeeklyDateBetween
//         onDateChange={props.onDateChange}
//         date={props.selectedDate}
//       />
//       <div className={styles.ScheduleClassUpComingTableForm}>
//         <WeeklyDateEvent
//           date={props.selectedDate}
//           eventBuilder={eventBuilder}
//         />
//       </div>
//     </div>
//   );
// }

// function ScheduleClassPassForm(props) {
//   const schedules = props.schedules;
//   function eventBuilder(time, date) {
//     if (schedules.length == 0) {
//       return null;
//     }
//     return (
//       <div className={styles.EventWeelyForm}>
//         {schedules.map((schedule, index) => {
//           const startAt = schedule.starts_at;
//           const shift = schedule.shift;
//           if (startAt == null) {
//             return null;
//           }
//           const startDate = new Date(Date.parse(startAt));
//           if (startDate.getDate() == date.getDate()) {
//             const startTime = getDateFromHours(shift.start_time);
//             if (time.getHours() == startTime.getHours()) {
//               return (
//                 <ScheduleOtherCard
//                   key={index}
//                   onClick={props.onClick}
//                   schedule={schedule}
//                   status={StudentScheduleStatus.past}
//                 />
//               );
//             }
//             return null;
//           } else {
//             return null;
//           }
//         })}
//       </div>
//     );
//   }

//   return (
//     <div className={styles.ScheduleClassUpComingForm}>
//       <WeeklyDateBetween
//         onDateChange={props.onDateChange}
//         date={props.selectedDate}
//       />
//       <div className={styles.ScheduleClassUpComingTableForm}>
//         <WeeklyDateEvent
//           date={props.selectedDate}
//           eventBuilder={eventBuilder}
//         />
//       </div>
//     </div>
//   );
// }

// function ButtonDetail(props) {
//   const status = props.status;

//   let isActive;
//   let title;
//   let backGroundColor = null;

//   if (status == ScheduleStatus.booked) {
//     isActive = true;
//     title = i18n(LanguageKeys.cancelSchedule);
//     backGroundColor = "#FF0000";
//   } else if (status == ScheduleStatus.available) {
//     isActive = true;
//     title = i18n(LanguageKeys.bookSchedule);
//     backGroundColor = "#FABB18";
//   } else {
//     isActive = false;
//     title = i18n(LanguageKeys.bookSchedule);
//   }

//   return (
//     <div className={styles.BottomDetail}>
//       <BorderButton
//         onClick={props.onClose}
//         padding={"12px 40px"}
//         title={i18n(LanguageKeys.close)}
//       />
//       <MainAppButton
//         onClick={props.onAction}
//         padding={"12px 40px"}
//         backgroundColor={backGroundColor}
//         isActive={isActive}
//         title={title}
//       />
//     </div>
//   );
// }

// function ButtonActionDetail(props) {
//   const status = props.status;

//   let isActive;
//   let backGroundColor = null;

//   if (status == ScheduleStatus.booked) {
//     isActive = true;
//     backGroundColor = "#FF0000";
//   } else if (status == ScheduleStatus.available) {
//     isActive = true;
//     backGroundColor = "#FABB18";
//   } else {
//     isActive = false;
//   }

//   return (
//     <div className={styles.BottomDetail}>
//       <BorderButton
//         onClick={props.onClose}
//         padding={"12px 40px"}
//         title={i18n(LanguageKeys.close)}
//       />
//       <MainAppButton
//         onClick={props.onAction}
//         padding={"12px 40px"}
//         backgroundColor={backGroundColor}
//         isActive={isActive}
//         title={i18n(LanguageKeys.confirm)}
//       />
//     </div>
//   );
// }

import CourseCardSidebar from "components/Schedule/CourseCardSidebar";
import DropdownCourse from "components/Schedule/DropdownList/DropdownCourse";
import ProfileCard from "components/UserProfile/ProfileCard";
import { useEffect, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { getStudentCourses } from "services/schedule";
import useScheduleStore from "store/useScheduleStore";

const Schedule = () => {
  const [listSettings, setListSettings] = useState([]);
  const scheduleStore = useScheduleStore();
  useEffect(() => {
    getScheduleData();
  }, []);

  const getScheduleData = async () => {
    try {
      getStudentCourses().then((response) => {
        const courses = response.data.items;
        console.log("courses: ", courses);
        scheduleStore.updateStudentCourses(courses);
        if (courses && courses.length > 0) {
          scheduleStore.updateCurrentCourse(courses[0]);
        }
      });
    } catch (error) {}
  };

  return (
    <div>
      <div className="relative grid min-h-[calc(100vh_-_73px)] grid-cols-4">
        <div className="col-span-1 h-full border-r px-10 py-8">
          <aside>
            <ProfileCard />
            <hr className="my-5" />
            <CourseCardSidebar />
          </aside>
        </div>
        <div className="col-span-3 p-8">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <div className="flex items-center gap-5">
                <DropdownCourse />
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
