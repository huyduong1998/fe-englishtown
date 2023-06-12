import BlockContainer from "components/OnlineCourses/Block/BlockContainer";
import BlockListBottom from "components/OnlineCourses/Block/BlockListBottom";
import ChapterProgress from "components/OnlineCourses/Chapter/ChapterProgress";
import OnlineCourseLayout from "layouts/OnlineCourseLayout";
import OnlineCourseLayoutMobile from "layouts/OnlineCourseLayoutMobile";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { getSelectorsByUserAgent } from "react-device-detect";
import { getDetailChapter } from "services/online-course";
import useAppStore from "store/useAppStore";
import useOnlineCourseStore from "store/useOnlineCourseStore";
interface Props {
  isMobile: boolean;
}

const DetailChapterPage: NextPage<Props> = ({ isMobile }) => {
  const { activeBlockIndex, listBlocks, ...onlineCourseState } =
    useOnlineCourseStore();
  const { updateIsMobile } = useAppStore();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { lessonId, chapterId } = router.query;

  useEffect(() => {
    if (lessonId && chapterId) {
      getChapterData();
    }
  }, [router.query]);

  useEffect(() => {
    updateIsMobile(isMobile);
  }, [isMobile]);

  const getChapterData = useCallback(() => {
    try {
      setIsLoading(true);
      getDetailChapter(lessonId as string, chapterId as string, {
        include: "blocks",
      })
        .then((response) => {
          onlineCourseState.updateChapterData(response.data);
          if (response.data.blocks.length > 0) {
            onlineCourseState.updateListBlocks(response.data.blocks);
            onlineCourseState.updateActiveBlockIndex(0);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          router.replace(`/online-course`);
        });
    } catch (error) {
      setIsLoading(false);
    }
  }, [router.query]);

  if (isMobile) {
    return (
      <>
        <OnlineCourseLayoutMobile>
          <div className="relative flex h-full flex-col justify-between px-4 text-blue">
            <div className="py-4">
              <ChapterProgress />
            </div>
            <div className="flex-1">
              {activeBlockIndex !== null && (
                <BlockContainer blockType={listBlocks[activeBlockIndex].type} />
              )}
            </div>
            <div>
              <BlockListBottom listBlocks={listBlocks} />
            </div>
          </div>
        </OnlineCourseLayoutMobile>
      </>
    );
  }

  return (
    <>
      <OnlineCourseLayout>
        <div className="text-blue">
          <div className="py-4">
            <ChapterProgress />
          </div>
          <div className="flex-1">
            <div className="h-full overflow-auto">
              {activeBlockIndex !== null && (
                <BlockContainer blockType={listBlocks[activeBlockIndex].type} />
              )}
            </div>
          </div>
          <div>
            <BlockListBottom listBlocks={listBlocks} />
          </div>
        </div>
      </OnlineCourseLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const userAgent = req.headers["user-agent"];
  const { isMobile } = getSelectorsByUserAgent(userAgent || "");
  return {
    props: {
      isMobile,
    },
  };
};

export default DetailChapterPage;
