import styles from "../../module_styles/schedule_card.module.css";
import { AppAvatar } from "../circle_avatar_component";
import { i18n } from "../../utils/language_util";
import React from "react";
import { LanguageKeys } from "../../constants/language_keys";
import { ScheduleStatus, LocationType } from "../../constants/enum";
import { MainAppButton } from "../app_button_component";
import {
    getDateFromHours,
    formatDateTime,
    DateFormatType,
} from "../../utils/date_utils";

export function ClassCard(props) {
    const schedule = props.schedule;

    ///list student join
    const students = schedule.students_in_class;

    ///teacher info
    const teacher = schedule.teacher;

    ///time shift
    const shift = schedule.shift;

    ///class setting
    const classSetting = schedule?.class?.setting;

    ///class room
    const classRoom = schedule.room;

    const locationType = schedule.location_type;

    const status = schedule.status_display;

    return (
        <div className={styles.ScheduleCard}>
            <BlockTime shift={shift} status={status} />
            <div class={styles.CardRight}>
                <SCheduleClassInfo
                    onClick={() => props.onOpenDetail(schedule)}
                    name={schedule.lesson_name}
                    classSetting={classSetting}
                    teacher={teacher}
                />

                <ScheduleStudentClassForm
                    classRoom={classRoom}
                    locationType={locationType}
                    students={students}
                />

                <ScheduleStatusCard
                    onClick={() => props.onActionPress(schedule)}
                    status={status}
                />
            </div>
        </div>
    );
}

function BlockTime(props) {
    const shift = props.shift;
    const status = props.status;

    let backgroundColor;
    let textColor;

    switch (status) {
        case ScheduleStatus.booked:
            backgroundColor = "#D2F8F2";
            textColor = "#0F7363";
            break;
        case ScheduleStatus.ongoing:
            backgroundColor = "#D2F8F2";
            textColor = "#0F7363";
            break;
        case ScheduleStatus.fulled:
            backgroundColor = "#CCCCCC";
            textColor = "#FFFFFF";
            break;
        case ScheduleStatus.available:
            backgroundColor = "#FCEAD5";
            textColor = "#FF981F";
            break;
        case ScheduleStatus.past:
            backgroundColor = "#CCCCCC";
            textColor = "#FFFFFF";
            break;
        case ScheduleStatus.closed:
            backgroundColor = "#CCCCCC";
            textColor = "#FFFFFF";
            break;
        case ScheduleStatus.notOpenYet:
            backgroundColor = "#D2F8F2";
            textColor = "#0F7363";
            break;
        default:
            backgroundColor = "#D2F8F2";
            textColor = "#0F7363";
    }

    return (
        <div style={{ background: backgroundColor }} className={styles.BlockTime}>
            <p style={{ color: textColor, fontSize: 18, fontWeight: 600 }}>
                {formatDateTime(
                    getDateFromHours(shift.start_time),
                    DateFormatType.hourMinute
                )}
            </p>
            <p style={{ color: textColor, fontSize: 18, fontWeight: 600 }}>
                {formatDateTime(
                    getDateFromHours(shift.end_time),
                    DateFormatType.hourMinute
                )}
            </p>
        </div>
    );
}

function ScheduleStatusCard(props) {
    const status = props.status;
    let title;
    let backgroundColor;
    switch (status) {
        case ScheduleStatus.booked:
            title = i18n(LanguageKeys.cancelBookClass);
            backgroundColor = "#FF0000";
            break;
        case ScheduleStatus.ongoing:
            title = i18n(LanguageKeys.classJoinNow);
            backgroundColor = "#CCCCCC";
            break;
        case ScheduleStatus.fulled:
            title = i18n(LanguageKeys.classFulled);
            backgroundColor = "#CCCCCC";
            break;
        case ScheduleStatus.available:
            backgroundColor = "#FABB18";
            title = i18n(LanguageKeys.bookClass);
            break;
        case ScheduleStatus.past:
            backgroundColor = "#CCCCCC";
            title = i18n(LanguageKeys.classAttended);
            break;
        case ScheduleStatus.closed:
            backgroundColor = "#CCCCCC";
            title = i18n(LanguageKeys.classClose);
            break;
        case ScheduleStatus.notOpenYet:
            title = null;
            backgroundColor = "#CCCCCC";
            break;
        default:
            title = null;
    }

    if (title == null) return null;

    return (
        <div className={styles.ButtonLayout}>
            <MainAppButton
                onClick={props.onClick}
                title={title}
                isActive={status !== ScheduleStatus.closed}
                backgroundColor={backgroundColor}
            />
        </div>
    );
}

function SheduleStudent(props) {
    const student = props.student.student;

    return (
        <AppAvatar
            radius={5}
            title={student.name?.substring(0, 1)}
            url={student.avatar_url}
            backgroundColor={"#8BC9BF"}
        />
    );
}

function SCheduleClassInfo(props) {
    // const {t , i18n} = useTranslation();
    const classSetting = props.classSetting;
    const teacher = props.teacher;

    return (
        <div onClick={props.onClick} className={styles.ScheduleClassInfo}>
            {classSetting != null ? (
                <p
                    style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#15C666",
                        lineHeight: "4px",
                    }}
                >
                    {classSetting.name}
                </p>
            ) : null}
            <p
                style={{
                    color: "#194761",
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: "4px",
                }}
            >
                {props.name}
            </p>
            <p
                style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#9B9B9B",
                    lineHeight: "14px",
                }}
            >
                {i18n(LanguageKeys.teacher)}:{" "}
                <span
                    style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#194761",
                        lineHeight: "4px",
                    }}
                >
                    {teacher?.name}
                </span>
            </p>
        </div>
    );
}

function ScheduleStudentClassForm(props) {
    const students = props.students;

    const size = Math.max(10, students.length);

    let displayStudents;

    if (students != null) {
        displayStudents = students.slice(size);
    }

    const locationType = props.locationType;

    const classRoom = props.classRoom;

    let title;

    switch (locationType) {
        case LocationType.online:
            title = locationType;
            break;
        case LocationType.offline:
            title = classRoom.title;
            break;
        default:
            title = locationType;
    }

    return (
        <div className={styles.ScheduleClassInfoForm}>
            <p
                style={{
                    color: "#FABB18",
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: "4px",
                }}
            >
                {title}
            </p>
            <div class={styles.CardRightItem}>
                {displayStudents != null
                    ? displayStudents.map((student, index) => (
                        <SheduleStudent student={student} key={index} />
                    ))
                    : null}
            </div>
        </div>
    );
}
