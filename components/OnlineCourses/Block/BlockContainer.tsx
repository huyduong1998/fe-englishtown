import React, { FC, memo } from "react";
import {
  BLOCK_TYPE_NUMBER,
  BlockChooseAnswerType,
  BlockFillWordType,
  BlockGameMatchingType,
  BlockWordType,
  ExpressionBlockType,
} from "types/chapter";
import VocabularyBLock from "./VocabularyBLock";
import BlockFillingTheBlankSentence from "./FillTheBlank/BlockFillingTheBlankSentence";
import ExpressionBlock from "./ExpressionBlock";
import ChooseSingleCorrectAnswerBlockMobile from "./ChooseCorrectAnswerBlock/ChooseSingleCorrectAnswerBlockMobile";
import ChooseSingleCorrectAnswerBlock from "./ChooseCorrectAnswerBlock/ChooseSingleCorrectAnswerBlock";
import BlockGameMatching from "./MatchingBlock/BlockGameMatching";
import useOnlineCourseStore from "store/useOnlineCourseStore";
import useAppStore from "store/useAppStore";

interface Props {
  blockType: BLOCK_TYPE_NUMBER | null;
}

const BlockContainer: FC<Props> = ({ blockType }) => {
  const { activeBlockIndex, listBlocks, ...onlineCourseState } =
    useOnlineCourseStore();
  const { isMobile } = useAppStore();
  if (typeof activeBlockIndex !== "number") {
    return null;
  }
  switch (blockType) {
    case BLOCK_TYPE_NUMBER.BLOCK_WORD: {
      return (
        <VocabularyBLock data={listBlocks[activeBlockIndex] as BlockWordType} />
      );
    }
    case BLOCK_TYPE_NUMBER.BLOCK_FILL_WORD: {
      return (
        <BlockFillingTheBlankSentence
          blockData={listBlocks[activeBlockIndex] as BlockFillWordType}
        />
      );
    }
    case BLOCK_TYPE_NUMBER.BLOCK_EXPRESSION: {
      return (
        <ExpressionBlock
          data={listBlocks[activeBlockIndex] as ExpressionBlockType}
        />
      );
    }
    case BLOCK_TYPE_NUMBER.BLOCK_CHOOSE_ANSWER: {
      if (isMobile) {
        return (
          <ChooseSingleCorrectAnswerBlockMobile
            data={listBlocks[activeBlockIndex] as BlockChooseAnswerType}
          />
        );
      }
      return (
        <ChooseSingleCorrectAnswerBlock
          data={listBlocks[activeBlockIndex] as BlockChooseAnswerType}
        />
      );
    }
    case BLOCK_TYPE_NUMBER.BLOCK_GAME_MATCHING: {
      return (
        <BlockGameMatching
          data={listBlocks[activeBlockIndex] as BlockGameMatchingType}
        />
      );
    }
    default: {
      return null;
    }
  }
};

export default memo(BlockContainer);
