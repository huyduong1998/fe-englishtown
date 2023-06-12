import { FC } from "react";
import { BlockGameMatchingColumn, BlockGameMatchingType } from "types/chapter";
import MatchContainer from "./MatchContainer";
import useTimer from "hooks/useTimer";

interface Props {
  data: BlockGameMatchingType;
}
const BlockGameMatching: FC<Props> = ({ data }) => {
  const shuffleData = (data: BlockGameMatchingColumn[]) => {
    let currentIndex = data.length;
    let randomIndex = 0;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      [data[currentIndex], data[randomIndex]] = [
        data[randomIndex],
        data[currentIndex],
      ];
    }
    return data;
  };

  return (
    <div className="overscroll-y-auto lg:pb-0">
      <h1 className="text-center uppercase text-[#5D7888]">
        Nối từ với hình ảnh thích hợp
      </h1>
      <div className="container mt-10">
        <MatchContainer
          columns1={data.data.first_columns}
          columns2={shuffleData(data.data.second_columns)}
        />
      </div>
    </div>
  );
};

export default BlockGameMatching;
