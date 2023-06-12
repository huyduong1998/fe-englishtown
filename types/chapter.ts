export interface ChapterType {
  id: number;
  name: string;
  code: string;
  icon_url: string;
  thumb_url: string;
  duration: number | null;
  order: number;
  flipbook_full_url: string;
  flipbook_url: string;
  type_display: string;
  description: string;
  total_block_enrolled: number;
  total_time_spent: number;
  latest_block_id: number;
  progress: number;
  blocks?: ChapterBlockType;
}

export interface GetListChapter {
  items: ChapterType[];
  pagination: any[];
}

export interface ChapterBlockData {
  thumb: string;
  audio?: any;
  video: string;
  is_record: number;
  word: string;
  pronounce: string;
  explain_vn: string;
  description?: any;
  antonyms?: any;
  is_hint: number;
  hint?: string;
  point?: string;
  time?: string;
}

export interface ChapterBlockType {
  id: number;
  title: string;
  data: BlockWordType;
  order: number;
  type: BLOCK_TYPE_NUMBER;
  type_display: string;
}

export interface BlockType {
  id: number;
  order: number;
  title: string;
  type: number;
  type_display: string;
}

export type ChapterBlockDataType =
  | BlockWordType
  | BlockFillWordType
  | ExpressionBlockType
  | BlockChooseAnswerType
  | BlockGameMatchingType;

export enum BLOCK_TYPE_DISPLAY {
  BLOCK_WORD = "Block Word",
  BLOCK_EXPRESSION = "Block Sentence",
  BLOCK_FILL_WORD = "Block Fill Word",
  BLOCK_CHOOSE_ANSWER = "Block Choose Answer",
}

export enum BLOCK_TYPE_NUMBER {
  BLOCK_WORD = 1,
  BLOCK_FILL_WORD = 5,
  BLOCK_EXPRESSION = 2,
  BLOCK_CHOOSE_ANSWER = 3,
  BLOCK_CHOOSE_ANSWER_CONVERSATION = 16,
  BLOCK_PARAPHRASE = 10,
  BLOCK_GAME_MATCHING = 6,
}

// Block word type
export interface BlockWordDataType {
  antonyms: string | null;
  audio: string | null;
  example: string;
  explain_vn: string;
  explain_en: string;
  pronounce: string;
  requirement: string;
  thumb: string;
  title: string;
  types: string[];
  video: string | null;
  word: string;
}
export interface BlockWordType {
  id: number;
  order: number;
  title: string;
  type: number;
  type_display: BLOCK_TYPE_DISPLAY.BLOCK_WORD;
  data: BlockWordDataType;
}

// Block fill word type
export interface BlockFillWordDataType {
  audio: string | null;
  hint: string;
  is_hint: number;
  point: string;
  question: string;
  time: string | null;
  thumb: string;
  video: string;
  words: string[];
}
export interface BlockFillWordType {
  data: BlockFillWordDataType;
  id: number;
  order: number;
  title: string;
  type: number;
  type_display: BLOCK_TYPE_DISPLAY.BLOCK_FILL_WORD;
}

// Expression Block
export interface ExpressionBlockDataType {
  audio: string;
  description: string;
  explain_vn: string;
  hint: string;
  is_hint: number;
  is_record: number;
  point: string;
  sentences: string;
  thumb: string;
  time: string;
  video: string;
}
export interface ExpressionBlockType {
  data: ExpressionBlockDataType;
  id: number;
  order: number;
  title: string;
  type: number;
  type_display: string;
}

// Block choose answer
export interface BlockChooseAnswerFeedbackType {
  feedback: string;
  feedback_edit: boolean;
  key: string;
  score: string | number;
  score_edit: boolean;
}

export interface BlockChooseAnswerAnswersType {
  is_answer: boolean;
  section_order: number;
  sort_order: number;
  title: string;
}

export interface BlockChooseAnswerQuestionsType {
  answers: BlockChooseAnswerAnswersType[];
  description: string | null;
  sort_order: number;
  title: string;
}

export interface BlockChooseAnswerDataType {
  answer_type: number;
  audio: string | null;
  feedback: BlockChooseAnswerFeedbackType[];
  has_feedback: boolean;
  question: string | null;
  questions: BlockChooseAnswerQuestionsType[];
  reading: string;
  requirement: string;
  thumb: string;
  title: string;
  video: string | null;
}
export interface BlockChooseAnswerType {
  data: BlockChooseAnswerDataType;
  id: number;
  order: number;
  title: string;
  type: number;
  type_display: string;
}

// Block choose answer conversation
export interface TranscriptObjectType {}

export interface TranscriptLineType {
  objects: {
    insert: string;
  }[];
  reading: string;
}
export interface TranscriptType {
  end: string;
  lines: string[];
  speaker_avatar: string;
  speaker_id: number;
  speaker_name: string;
  start: number;
}
export interface BlockChooseAnswerConversationData {
  audio: string | null;
  requirement: string;
  thumb: string;
  title: string;
  transcripts: TranscriptType;
  type: number | null;
  video: string | null;
}
export interface BlockChooseAnswerConversationType extends BlockType {
  data: BlockChooseAnswerConversationData;
}

// Block game matching
export interface BlockGameMatchingColumn {
  type: number;
  value: string;
  index?: number;
}
export interface BlockGameMatchingFeedbackData {
  feedback: string;
  feedback_edit: boolean;
  key: string;
  score: number;
  score_edit: boolean;
}
export interface BlockGameMatchingFeedback {
  feedback: BlockGameMatchingFeedbackData[];
  has_feedback: boolean;
}
export interface BlockGameMatchingData {
  description: string;
  feedbacks: BlockGameMatchingFeedback;
  first_columns: BlockGameMatchingColumn[];
  requirement: string;
  second_columns: BlockGameMatchingColumn[];
  thumb: string;
  title: string;
}
export interface BlockGameMatchingType extends BlockType {
  data: BlockGameMatchingData;
}
