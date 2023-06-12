import Image from "next/image";
import React, { FC } from "react";

interface Props {
  avatar_url: string;
  name: string;
}

const Avatar: FC<Props> = (props) => {
  const { avatar_url, name } = props;
  return (
    <div>
      {avatar_url ? (
        <Image
          src={avatar_url}
          width={40}
          height={40}
          className="h-6 w-6 rounded-full object-cover lg:h-10 lg:w-10"
          alt={name}
          loading="lazy"
        />
      ) : (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#8BC9BF] text-white lg:h-10 lg:w-10">
          {name?.substring(0, 1)}
        </div>
      )}
    </div>
  );
};

export default Avatar;
