import VideoContainer from "components/VideoJs/VideoContainer";
import React, { FC, useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BlockFillWordType } from "types/chapter";
import ConvertQuestion from "./ConvertQuestion";
interface Props {
  blockData: BlockFillWordType;
}

const BlockFillingTheBlankSentence: FC<Props> = (props) => {
  const { blockData } = props;
  const methods = useForm();
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmitForm = (data: any) => {
    console.log("data: ", data);
  };

  return (
    <div className="container">
      {blockData.data.video ? (
        <div className="grid gap-5 xl:grid-cols-2">
          <div className="col-span-1">
            <div className="mx-auto mt-0 lg:mt-10 max-w-[640px]">
              <VideoContainer src={blockData.data.video} />
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="mb-5 text-center uppercase">Fill the blank</h1>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
                <div className="lg:h-[500px] lg:max-h-[500px] overflow-y-auto">
                  <div className="lg:mt-6 leading-normal">
                    <ConvertQuestion question={blockData.data.question} />
                  </div>
                </div>
                <div className="flex items-center justify-center mt-4 lg:mt-0">
                  <button type="submit" className={`rounded px-6 py-2 border border-solid border-primary text-white bg-primary`}>
                    Gửi đáp án
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-[640px]">
          <h1 className="mb-5 text-center uppercase">Fill the blank</h1>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
              <div className="h-[500px] max-h-[500px] overflow-y-auto">
                <div className="mt-6 leading-normal">
                  <ConvertQuestion question={blockData.data.question} />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button type="submit" className={`rounded px-6 py-2 border border-solid border-primary text-white bg-primary`}>
                  Gửi đáp án
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      )}
    </div>
  );
};

export default BlockFillingTheBlankSentence;
