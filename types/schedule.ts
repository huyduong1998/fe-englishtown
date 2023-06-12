export interface SettingType {
  auto_close_after: null;
  auto_close_class: null;
  booking_rule: {
    classes: string;
    days: string;
    period: string;
    type: string;
  };
  booking_rule_description: string;
  booking_rule_display: string;
  booking_type: string;
  booking_type_display: string;
  branch_id: number;
  cancel_booking: number;
  class_time: number;
  close_booking: number;
  course_id: number;
  created_at: string;
  days_of_week: [];
  id: number;
  location_type: string;
  name: string;
  open_booking: number;
  room_id: number;
  slot: number;
  updated_at: string;
}
