import dateFormat, { masks } from "dateformat";

export const hourInDays = [
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

const monthOnYearEns = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayOnWeekEns = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const dayOnWeekVns = [
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
  "Chủ nhật",
];

export function getBetweenWeeklyDateVi(date: Date) {
  const first = getMondayOfCurrentWeek(date);

  const last = getSundayOfCurrentWeek(date);

  return `Tháng ${
    first.getMonth() + 1
  } ${first.getDate()} - ${last.getDate()}, ${first.getFullYear()}`;
}

export function getBetweenWeeklyDateEn(date: Date) {
  const first = getMondayOfCurrentWeek(date);

  const last = getSundayOfCurrentWeek(date);

  const month = first.getMonth();

  return `${
    monthOnYearEns[month]
  } ${first.getDate()} - ${last.getDate()}, ${first.getFullYear()}`;
}

export function mapMonthEn(date: Date) {
  const month = date.getMonth() + 1;

  return monthOnYearEns[month - 1];
}

export function mapMonthVi(date: Date) {
  const month = date.getMonth() + 1;

  return "Tháng " + `${month}`;
}

export function mapDaytoVi(date: Date) {
  const day = date.getDay();

  switch (day) {
    case 0:
      return dayOnWeekVns[6];
    case 1:
      return dayOnWeekVns[0];
    case 2:
      return dayOnWeekVns[1];
    case 3:
      return dayOnWeekVns[2];
    case 4:
      return dayOnWeekVns[3];
    case 5:
      return dayOnWeekVns[4];
    case 6:
      return dayOnWeekVns[5];
    default:
      return dayOnWeekVns[6];
  }
}

export function mapDaytoEn(date: Date) {
  const day = date.getDay();

  switch (day) {
    case 0:
      return dayOnWeekEns[6];
    case 1:
      return dayOnWeekEns[0];
    case 2:
      return dayOnWeekEns[1];
    case 3:
      return dayOnWeekEns[2];
    case 4:
      return dayOnWeekEns[3];
    case 5:
      return dayOnWeekEns[4];
    case 6:
      return dayOnWeekEns[5];
    default:
      return dayOnWeekEns[6];
  }
}

export const DateFormatType = {
  yearMonthDayWithHyphen: "yyyy-mm-dd",
  yearMonthDayWithSlash: "yyyy/mm/dd",
  dayMonthYearWithSplash: "dd/mm/yyyy",
  yearMonthDayHourMinuteSecond: "yyyy-mm-dd HH:mm:ss",
  hourMinute: "HH:MM",
};

export function formatDateToJson(date: Date | null, format: string) {
  if (date === null) return null;

  const fm = format ?? DateFormatType.yearMonthDayWithHyphen;

  return dateFormat(date, fm);
}

export function formatDateTime(date: Date, format: string) {
  if (date === null) return null;

  const fm = format ?? DateFormatType.yearMonthDayHourMinuteSecond;

  return dateFormat(date, fm);
}

export function parseDate(date: string) {
  const value = Date.parse(date);

  return value;
}

export function getMondayOfCurrentWeek(date: Date) {
  const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = today.getDay();
  const diff = today.getDate() - day + (day == 0 ? -6 : 1);

  return new Date(today.setDate(diff));
}

export function getSundayOfCurrentWeek(date: Date | null) {
  const today = date ?? new Date();

  const monday = getMondayOfCurrentWeek(today);

  const last = monday.getDate() + 6;

  return new Date(today.setDate(last));
}

export function dayOfWeek(value: Date) {
  const monthDayOfWeek = getMondayOfCurrentWeek(value);

  const days = [];

  for (let i = 0; i < 7; i++) {
    let date = new Date();

    date.setFullYear(monthDayOfWeek.getFullYear());

    date.setMonth(monthDayOfWeek.getMonth());

    date.setDate(monthDayOfWeek.getDate() + i);

    days.push(new Date(date));
  }

  return days;
}

export function getLastDayOfMonth(year: number, month: number) {
  const lastDay = new Date(year, month + 1, 0).getDate();

  return lastDay;
}

export function getNextDay(date: Date) {
  const nextDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1
  );

  return nextDate;
}

export function getLastDay(date: Date) {
  const lastDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - 1
  );

  return lastDate;
}

export function compare(firstDate: Date, secondDate: Date) {
  return (
    firstDate.getDate() === secondDate.getDate() &&
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth()
  );
}

export function getDateFromHours(hour: number) {
  const dateTime = `01-01-2010 ${hour}`;

  const parseDate = Date.parse(dateTime);

  const date = new Date(parseDate);

  return date;
}
