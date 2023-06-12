import React, { FC, useCallback, useEffect, useState } from "react";
import ImageWrapper from "./ImageWrapper";
import { BlockGameMatchingColumn } from "types/chapter";
import TextWrapper from "./TextWrapper";
import { AnswerStatus } from "types/block";

interface Props {
  columns1: BlockGameMatchingColumn[];
  columns2: BlockGameMatchingColumn[];
}

interface FirstColumn extends BlockGameMatchingColumn {
  referenceId: number | null;
  index: number;
}

interface SecondColumn extends BlockGameMatchingColumn {
  referenceId: number | null;
  index: number;
}

const MatchContainer: FC<Props> = ({ columns1, columns2 }) => {
  const [imageData, setImageData] = useState<FirstColumn[]>([]);
  const [textData, setTextData] = useState<SecondColumn[]>([]);
  const [isAllowSubmit, setIsAllowSubmit] = useState(false);
  const [matches, setMatches] = useState<{ imageId: number; textId: number }[]>(
    []
  );
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const [selectedTextId, setSelectedTextId] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRedo, setIsRedo] = useState(false);

  useEffect(() => {
    if (!columns1.length || !columns2.length) {
      return;
    }
    const mapImageData: FirstColumn[] = columns1.map((item, index) => {
      return {
        ...item,
        referenceId: null,
        index,
      };
    });
    const mapTextData: SecondColumn[] = columns2.map((item, index) => {
      return {
        ...item,
        referenceId: null,
        index: typeof item.index !== "undefined" ? item.index : index,
      };
    });

    setImageData(mapImageData);
    setTextData(mapTextData);
  }, [columns1, columns2]);

  useEffect(() => {
    if (matches.length === imageData.length) {
      setIsAllowSubmit(true);
    } else {
      setIsAllowSubmit(false);
    }
  }, [matches, imageData]);

  const handleSelectImageItem = (imageId: number) => {
    if (
      matches.some((item) => item.imageId === imageId) ||
      matches.some((item) => item.textId === selectedTextId)
    ) {
      return;
    }
    if (selectedTextId === null && selectedImageId === null) {
      setSelectedImageId(imageId);
    } else {
      if (selectedTextId !== null) {
        setMatches((prev) => [...prev, { imageId, textId: selectedTextId }]);
      }
      setSelectedImageId(null);
      setSelectedTextId(null);
    }
  };

  const handleSelectTextItem = (textId: number) => {
    if (
      matches.some((item) => item.textId === textId) ||
      matches.some((item) => item.imageId === selectedImageId)
    ) {
      return;
    }
    if (selectedImageId === null && selectedTextId === null) {
      setSelectedTextId(textId);
    } else {
      if (selectedImageId !== null) {
        setMatches((prev) => [...prev, { imageId: selectedImageId, textId }]);
      }
      setSelectedImageId(null);
      setSelectedTextId(null);
    }
  };

  const getStatusImage = (id: number): AnswerStatus => {
    if (matches.length === imageData.length && isSubmitted) {
      if (
        matches.some(
          (item) => item.imageId === id && item.textId === item.imageId
        )
      ) {
        return "CORRECT";
      } else {
        return "INCORRECT";
      }
    }
    if (matches.some((item) => item.imageId === id)) {
      return "SELECTED";
    }
    if (selectedImageId === id) {
      return "WAITING";
    }
    return "DEFAULT";
  };

  const getStatusText = (id: number): AnswerStatus => {
    if (matches.length === imageData.length && isSubmitted) {
      if (
        matches.some(
          (item) => item.textId === id && item.imageId === item.textId
        )
      ) {
        return "CORRECT";
      } else {
        return "INCORRECT";
      }
    }
    if (matches.some((item) => item.textId === id)) {
      return "SELECTED";
    }
    if (selectedTextId === id) {
      return "WAITING";
    }
    return "DEFAULT";
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (matches.some((item) => item.imageId !== item.textId)) {
      setIsRedo(true);
    }
    console.log('')
  };

  const handleRedo = () => {
    setIsRedo(false);
    setMatches([]);
    setSelectedImageId(null);
    setSelectedTextId(null);
    setIsAllowSubmit(false);
    setIsSubmitted(false);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-1 lg:gap-0">
        <div className="col-span-1">
          <div className="flex flex-col justify-center gap-8 lg:flex-row lg:items-center">
            {imageData.map((item, index) => {
              return (
                <div key={index}>
                  <ImageWrapper
                    src={item.value}
                    title={""}
                    status={getStatusImage(item.index)}
                    onSelect={() => handleSelectImageItem(item.index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-1">
          <div className="mt-0 flex flex-col justify-center gap-8 lg:mt-14 lg:flex-row lg:items-start">
            {textData.map((item, index) => {
              return (
                <div key={index} className="lg:w-[200px]">
                  <TextWrapper
                    status={getStatusText(item.index)}
                    value={item.value}
                    onSelect={() => handleSelectTextItem(item.index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-20 flex items-center justify-center">
        {isRedo ? (
          <button
            type="button"
            className={`rounded border border-solid border-[#A6B2BF] px-8 py-2 text-blue transition-all hover:bg-[#A6B2BF] hover:text-white`}
            onClick={() => handleRedo()}
          >
            Redo
          </button>
        ) : (
          <button
            onClick={() => handleSubmit()}
            type="button"
            className={`rounded px-8 py-2 text-sm ${
              isAllowSubmit
                ? "bg-primary text-white"
                : "bg-[#CED5DE] text-[#A6B2BF]"
            }`}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MatchContainer;
