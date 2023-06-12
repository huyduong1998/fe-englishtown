import { CircleAvatar } from "../circle_avatar_component";
import { Diviver } from "../divider_component";
import React from 'react';
export function ProfileCard(props) {
    const profile = props.userProfile;
    const role = profile.role;
    const level = profile.student.level;
    return (
        <div className="text-xl font-medium text-blue m-2 text-center">
            <div className="mb-4">
                <CircleAvatar url={profile.avatar} radius={60} title={profile.fullname?.substring(0, 1)} backgroundColor={"#8BC9BF"} />
                <h3 className="mt-4">
                    {profile.fullname}
                </h3>
                <p className="text-[#8995A3] text-sm capitalize">
                    {role.role_name}
                </p>
                {
                    level != null ? (
                        <h4 className="text-sm">
                            {level.title} - {props.branch}
                        </h4>
                    ) : null
                }
            </div>

            <Diviver />
        </div>
    )
}