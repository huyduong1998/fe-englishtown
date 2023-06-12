import { create } from "zustand";

type SingleSelect = {
  isAllowSubmit: boolean;
  answerData: { questionId: number; answerId: number }[];
  updateIsAllowSubmit: (status: boolean) => void;
  updateAnswerData: (
    answerData: {
      questionId: number;
      answerId: number;
    }[]
  ) => void;
};

const useChooseAnswerStore = create<SingleSelect>()((set) => ({
  isAllowSubmit: false,
  answerData: [],
  updateIsAllowSubmit: (status: boolean) => {
    set((state) => {
      return {
        ...state,
        isAllowSubmit: status,
      };
    });
  },
  updateAnswerData: (
    answerData: { questionId: number; answerId: number }[]
  ) => {
    set((state) => {
      return {
        ...state,
        answerData,
      };
    });
  },
}));

export default useChooseAnswerStore;
