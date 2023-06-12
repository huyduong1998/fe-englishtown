import { StudentScheduleStatus } from '../../constants/enum';
import { LanguageKeys } from '../../constants/language_keys';
import styles from '../../module_styles/schedule.module.css'
import { i18n } from '../../utils/language_util';
import { EmptyContent } from '../apps/empty';
import { ContentLoading } from '../content_loading_component';
import { WeeklyDate } from '../date_time_component';
import { ClassCard } from '../schedule_components/schedule_card';
import React from 'react';
import ScheduleClassPassForm from './ScheduleClassPassForm';
import ScheduleClassUpComingForm from './ScheduleClassUpComingForm';
export default function ScheduleForm(props) {
  const schedules = props.schedules;
  const isLoading = props.isLoading;
  const isError = props.isError;
  const status = props.status;
  const selectedDate = props.selectedDate;

  if (isError) {
    return (
      <div className={styles.ScheduleClassForm}>
        SystemError
      </div>
    )
  }

  switch (status) {
    case StudentScheduleStatus.available:
      return (
        <div className={styles.ScheduleClassForm}>
          <WeeklyDate date={selectedDate} onSelectedDate={props.onSelectedDate} />
          {
            isLoading ? (
              <div className={styles.ScheduleLayout}><ContentLoading /></div>
            ) : schedules.length == 0 ? (
              <EmptyContent message={i18n(LanguageKeys.scheduleEmpty)} />
            ) : (
              <div className={styles.Schedule}>
                {schedules.map((schedule, index) => {
                  return (
                    <ClassCard key={index} onActionPress={props.onActionPress} schedule={schedule} onOpenDetail={props.onOpenDetail} />
                  )
                })}
              </div>
            )
          }
        </div>
      );
    case StudentScheduleStatus.upcoming:
      if (isLoading) {
        return (
          <div className={styles.ScheduleLayout}>
            <ContentLoading />
          </div>
        );
      }
      return (
        <ScheduleClassUpComingForm onDateChange={props.onSelectedDate} onClick={props.onOpenDetail} selectedDate={selectedDate} schedules={schedules} />
      );
    case StudentScheduleStatus.past:
      if (isLoading) {
        return (
          <div className={styles.ScheduleLayout}>
            <ContentLoading />
          </div>
        );
      }
      return (
        <ScheduleClassPassForm onDateChange={props.onSelectedDate} onClick={props.onOpenDetail} selectedDate={selectedDate} schedules={schedules} />
      )
  }
}