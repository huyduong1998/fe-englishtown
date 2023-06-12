import Image from "next/image";
import React from "react";
import useOnlineCourseStore from "store/useOnlineCourseStore";
import BlockItem from "./BlockItem";
const ListContainer = () => {
  const { listBlocks } = useOnlineCourseStore();
  return (
    <>
      {listBlocks.length > 0 &&
        listBlocks.map((item, index) => {
          return <BlockItem item={item} index={index} key={item.id} />;
        })}
    </>
  );
};

export default ListContainer;
