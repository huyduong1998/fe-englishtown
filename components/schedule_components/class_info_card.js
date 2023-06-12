import { AppCard } from "../app_card_component";
import styles from "../../module_styles/class_info_card.module.css";
import { LanguageKeys } from "../../constants/language_keys";
import { StoreKeys } from "../../constants/store_keys";
import { LocationType } from "../../constants/enum";
import { AppAvatar } from "../circle_avatar_component";
import {
    DateFormatType,
    getDateFromHours,
    formatDateTime,
} from "../../utils/date_utils";
import { BorderButtonCustom } from "../app_button_component";
import { AppUtils } from "../../utils/app_utils";
import Image from "next/image";
import { i18n } from "../../utils/language_util";
import React from "react";

export function ClassInfo(props) {
    const schedule = props.schedule;

    const shift = schedule.shift;

    const locationType = schedule.location_type;

    const branch = schedule.branch;

    return (
        <div className={styles.ClassInfoForm}>
            <div className={styles.Left}>
                <div className={styles.Info}>
                    <Image
                        src={require("../../assets/icons/icon_time.svg").default}
                        alt="icon_time"
                    />
                    <div>
                        <h4>{i18n(LanguageKeys.timeStart)}</h4>
                        <p>
                            {formatDateTime(
                                getDateFromHours(shift.start_time),
                                DateFormatType.hourMinute
                            )}{" "}
                            {formatDateTime(
                                getDateFromHours(shift.end_time),
                                DateFormatType.hourMinute
                            )}
                            ,{" "}
                            {formatDateTime(
                                schedule.starts_at,
                                DateFormatType.dayMonthYearWithSplash
                            )}
                        </p>
                    </div>
                </div>
                <div className={styles.Info}>
                    <Image
                        src={require("../../assets/icons/icon_map.svg").default}
                        alt="icon_map"
                    />
                    <div>
                        <h4>{i18n(LanguageKeys.location)}</h4>
                        <p>
                            {locationType === LocationType.online
                                ? schedule.url_meeting ?? ""
                                : branch?.address}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.Right}>
                <div className={styles.Info}>
                    <Image
                        src={require("../../assets/icons/icon_star.svg").default}
                        alt="icon_star"
                    />
                    <div>
                        <h4>{i18n(LanguageKeys.level)}</h4>
                        <p>{schedule.levels?.map((l) => l.title).join(", ")}</p>
                    </div>
                </div>
                <div className={styles.Info}>
                    <Image
                        src={require("../../assets/icons/icon_room.svg").default}
                        alt="icon_room"
                    />
                    <div>
                        <h4>{i18n(LanguageKeys.room)}</h4>
                        <p>
                            {locationType === LocationType.online
                                ? "Online"
                                : schedule.room?.title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ClassInfoCard(props) {
    return (
        <AppCard>
            <ClassInfo schedule={props.schedule} />
        </AppCard>
    );
}

export function ClassDetailForm(props) {
    const schedule = props.schedule;

    const lesson = schedule.lesson;

    const students = schedule.students_in_class ?? [];

    const userId = localStorage.getItem(StoreKeys.userId);

    const myAccount =
        students.length > 0 ? students.find((s) => s.user_id === userId) : null;

    function onPressFlipBook(lesson) {
        if (lesson != null && lesson.active_sections != null) {
            let flipBook = lesson.active_sections.find(
                (l) => l.id === schedule.chapter_id
            );

            if (flipBook === null) return;

            window.open(AppUtils.replaceNewDoMain(flipBook.flipbook_url), "_blank");
        }
    }

    return (
        <div className={styles.ClassDetailForm}>
            <h2>{schedule.lesson_name}</h2>
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
                    {schedule.teacher?.name}
                </span>
            </p>

            <ClassInfoCard schedule={schedule} />
            <h3>{i18n(LanguageKeys.lesson)}</h3>
            {lesson != null ? (
                <div className={styles.Lesson}>
                    <Image
                        src={require("../../assets/icons/icon_pdf.svg").default}
                        alt="icon_pdf"
                        onClick={() => {
                            if (lesson != null && lesson.pdf_url != null) {
                                window.open(lesson.pdf_url, "_blank");
                            }
                        }}
                    />
                    <div className={styles.LessonInfo}>
                        <h4>{lesson?.name}</h4>
                        <p>{lesson?.description}</p>
                    </div>
                    <div className={styles.LessonAction}>
                        <BorderButtonCustom
                            padding="0px 40px"
                            onClick={() => { }}
                            builder={
                                <div className={styles.LessonButton}>
                                    <Image
                                        src={require("../../assets/icons/quiz.svg").default}
                                        alt="quiz"
                                    />
                                    <p>{i18n(LanguageKeys.quiz)}</p>
                                </div>
                            }
                        />
                        <div />
                        <BorderButtonCustom
                            padding="0px 20px"
                            onClick={() => {
                                onPressFlipBook(lesson);
                            }}
                            builder={
                                <div className={styles.LessonButton}>
                                    <Image
                                        src={require("../../assets/icons/book.svg").default}
                                        alt="book"
                                    />
                                    <p>{i18n(LanguageKeys.flipBook)}</p>
                                </div>
                            }
                        />
                        <div />
                        <BorderButtonCustom
                            padding="0px 20px"
                            onClick={() => { }}
                            builder={
                                <div className={styles.LessonButton}>
                                    <Image
                                        src={require("../../assets/icons/slide.svg").default}
                                        alt="slide"
                                    />
                                    <p>{i18n(LanguageKeys.slide)}</p>
                                </div>
                            }
                        />
                    </div>
                </div>
            ) : null}
            <h3>
                {i18n(LanguageKeys.students)} ({students.length})
            </h3>
            {myAccount != null ? (
                <div className={styles.MyAccountForm}>
                    <AppAvatar
                        url={myAccount.student?.avatar_url}
                        title={myAccount.student?.name?.substring(0, 1)}
                        radius={20}
                        backgroundColor={"#8BC9BF"}
                    />
                    <h4>{myAccount.student?.name}</h4>
                    {myAccount.student?.student?.code != null ? (
                        <p>--{myAccount.student?.student?.code}</p>
                    ) : null}
                </div>
            ) : null}
        </div>
    );
}

export function ClassConfirmBookForm(props) {
    // const {t , i18n} = useTranslation();

    const schedule = props.schedule;

    return (
        <div className={styles.ClassActionForm}>
            <Image
                src={require("../../assets/icons/icon_note.svg").default}
                alt="icon_note"
            />
            <h2>{i18n(LanguageKeys.confirmBookScheduleSubTitle)}</h2>
            <AppCard>
                <div className="text-left">
                    <h2>{schedule.lesson_name}</h2>
                    <p className="text-sm font-medium text-[#9b9b9b]">
                        {i18n(LanguageKeys.teacher)}:{" "}
                        <span
                            style={{
                                fontSize: 14,
                                fontWeight: 500,
                                color: "#194761",
                                lineHeight: "4px",
                            }}
                        >
                            {schedule.teacher?.name}
                        </span>
                    </p>
                    <ClassInfo schedule={schedule} />
                </div>
            </AppCard>
        </div>
    );
}

export function ClassConfirmCancelForm(props) {
    const schedule = props.schedule;

    return (
        <div className={styles.ClassActionForm}>
            <Image
                src={require("../../assets/icons/icon_error.svg").default}
                alt="icon_error"
            />
            <h2>{i18n(LanguageKeys.confirmBookScheduleSubTitle)}</h2>
            <AppCard>
                <div
                    style={{
                        textAlign: "start",
                    }}
                >
                    <h2>{schedule.lesson_name}</h2>
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
                            {schedule.teacher?.name}
                        </span>
                    </p>
                    <ClassInfo schedule={schedule} />
                </div>
            </AppCard>
        </div>
    );
}
