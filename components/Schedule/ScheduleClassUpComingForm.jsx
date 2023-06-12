import React from 'react';
import { WeeklyDateBetween, WeeklyDateEvent } from '../date_time_component';
import { ScheduleOtherCard } from '../schedule_components/schedule_other_card';
import { StudentScheduleStatus } from '../../constants/enum';
import { getDateFromHours } from '../../utils/date_utils';
import styles from '../../module_styles/schedule.module.css'
const ScheduleClassUpComingForm = (props) => {
  const schedules = props.schedules;
  const eventBuilder = (time, date) => {
    if (schedules.length == 0) {
      return null;
    }
    return (
      <div className={styles.EventWeelyForm}>
        {
          schedules.map((schedule, index) => {
            const startAt = schedule.starts_at;
            const shift = schedule.shift;
            if (startAt == null) {
              return null;
            }
            const startDate = new Date(Date.parse(startAt));
            if (startDate.getDate() == date.getDate()) {
              const startTime = getDateFromHours(shift.start_time);
              if (time.getHours() == startTime.getHours()) {
                return (
                  <ScheduleOtherCard key={index} onClick={props.onClick} schedule={schedule} status={StudentScheduleStatus.upcoming} />
                );
              }
              return null;
            } else {
              return null;
            }
          })
        }
      </div>
    );
  }

  return <div className={styles.ScheduleClassUpComingForm}>
    <WeeklyDateBetween onDateChange={props.onDateChange} date={props.selectedDate} />
    <div className={styles.ScheduleClassUpComingTableForm}>
      <WeeklyDateEvent date={props.selectedDate} eventBuilder={eventBuilder} />
    </div>
  </div>;
}

export default ScheduleClassUpComingForm