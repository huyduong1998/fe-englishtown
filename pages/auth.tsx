import { useEffect } from "react";
import Loading from "components/Loading";
import { useRouter } from "next/router";
import { getUserProfile } from "services/user";

const SplashPage = () => {
  let navigate = useRouter();

  const onGetUserProfile = () => {
    getUserProfile()
      .then(() => {
        navigate.replace("/schedule");
      })
      .catch((error) => {
        navigate.replace("/login");
      });
  };

  useEffect(() => {
    onGetUserProfile();
  }, []);

  return <Loading />;
};

export default SplashPage;
