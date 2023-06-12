export interface UserType {
  address: string;
  avatar: string;
  birthday: string;
  city: string;
  country: string;
  country_id: string;
  created_at: string;
  email: string;
  avatar_url: string;
  deleted_at: string;
  email_verified_at: string;
  fullname: string;
  phone_number: string;
  province_id: number;
  role: UserRole;
  student: UserStudentType;
  role_id: number;
  updated_at: string;
}

interface UserRole {
  created_at: string;
  description: string | null;
  guard_name: string;
  id: number;
  name: string;
  role_name: string;
  updated_at: string;
}

interface UserStudentType {
  address: string;
  birthday: string;
  branch: string | null;
  city: string;
  code: string;
  contact_source: null;
  created_at: string;
  current_level_id: number;
  deleted_at: null;
  ec: {
    avatar: string | null;
    educational_consultant_id: number;
    fullname: string;
    id: number;
  };
  ec_assigned_at: null | string;
  ec_id: number;
  email: string;
  entrance_level_id: number;
  facebook_link: string | null;
  fullname: string;
  gender_id: number;
  id: number;
  learning_type: number | null;
  level: {
    code: string;
    color: string;
    description: string;
    id: number;
    title: string;
  };
  level_expected_id: number | null;
  persona: string | null;
}
