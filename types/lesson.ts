export interface LessonType {
  id: number;
  name: string;
  description: string;
  thumb_url: string;
  level_id: number;
}

export interface LessonPagination {
  first: string;
  last: string;
  prev: null | string;
  next: null | string;
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface GetListLesson {
  items: LessonType[];
  pagination: LessonPagination;
}
