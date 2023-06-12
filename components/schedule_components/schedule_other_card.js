import styles from "../../module_styles/schedule_other_card.module.css";
import { DateFormatType, getDateFromHours, formatDateTime } from "../../utils/date_utils";
import { StudentScheduleStatus } from "../../constants/enum";
import React from 'react';

export function ScheduleOtherCard(props) {
    const studentScheudleStatus = props.status;

    let backGroundColor;
    let textColor;
    let borderColor;

    if (studentScheudleStatus === StudentScheduleStatus.upcoming) {
        borderColor = "#01DFBB";
        textColor = "#0F7363";
        backGroundColor = "#EAF9F7";
    } else {
        borderColor = "#FF0000";
        textColor = "#FF0000";
        backGroundColor = "#FFEEEE";
    }

    const schedule = props.schedule;

    const shift = schedule.shift;

    return <div className={styles.Card} onClick={() => props.onClick(schedule)} style={{
        background:  `${backGroundColor}`,
        border: `2px solid ${borderColor}`,
    }}>
        <p style={{ color: `${textColor}`, fontSize: "14px", fontWeight: 600, lineHeight: "16px", }}>{formatDateTime(getDateFromHours(shift.start_time), DateFormatType.hourMinute)} - {formatDateTime(getDateFromHours(shift.end_time), DateFormatType.hourMinute)}</p>
        <p style={{color : "#194761" , fontSize: "12px", fontWeight: 500, lineHeight: "14px",}}>{schedule.lesson_name}</p>
    </div>
}