import Image from "next/image";
import React from "react";
import useAppStore from "store/useAppStore";

const ProfileCard = () => {
  const { userProfile } = useAppStore();

  if (!userProfile) {
    return null;
  }

  return (
    <div>
      <div className="text-center text-blue">
        <div>
          {userProfile.avatar_url ? (
            <Image
              src={userProfile.avatar_url}
              width={120}
              height={120}
              alt={userProfile.fullname}
              loading="lazy"
              className="mx-auto h-full w-full max-w-full rounded-full"
            />
          ) : (
            <div className="mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full bg-primary text-3xl text-white">
              {userProfile.fullname.slice(0, 1)}
            </div>
          )}
        </div>
        <h3 className="mt-4 text-xl font-semibold">{userProfile.fullname}</h3>
        <p className="capitalize text-sm text-[#8995A3]">{userProfile.role.role_name}</p>
        <p className="text-sm">
          {userProfile.student.level.description} -{" "}
          {userProfile.student.level.code}
        </p>
      </div>
    </div>
  );
};

export default React.memo(ProfileCard);
