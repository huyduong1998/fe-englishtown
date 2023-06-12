import { UserType } from "./user";

export interface CourseType {
  id: number;
  name: string;
  code: string;
  type: number;
  type_display: string;
  description: string;
  status: number;
  status_display: string;
  icon_url: string;
  thumb_url: string;
  num_followers: number;
  is_following: boolean;
}

export interface EnrollmentCourseType {
  avg_exercise_was_done: string;
  course_name: string;
  end_date: string;
  id: number;
  pivot: number | null;
  start_date: string;
  status_display: string;
  student: UserType;
  total_attendance: number;
  total_booking: number;
  total_exercise_was_done: string;
}

export interface StudentCourseType {
  "3month": string;
  "6month": string;
  "12month": string;
  avatar: string | null;
  code: string;
  created: string | null;
  created_at: string;
  deleted_at: string | null;
  description: string | null;
  duration: null;
  duration_type: null;
  id: number;
  image: null;
  level: null;
  location_type: string;
  name: string;
  order_num: number;
  status: number;
  updated: null;
  updated_at: string;
}
