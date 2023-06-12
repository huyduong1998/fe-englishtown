export interface QuestionType {
  id: number;
  title: string;
  question_index: number;
  answers: AnswerType[];
}

export interface AnswerType {
  id: number;
  answer_index: string;
  title: string;
}

export interface MatchingWordAndParaphraseType {
  id: number;
  paraphrase: string;
  title: string;
  questions: QuestionType[];
}

export interface QuestionItemType {
  item: QuestionType;
  // value: string;
  // onChangeValue: (value: string) => void;
}
