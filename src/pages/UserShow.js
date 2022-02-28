import React, {useEffect, useState} from "react";
import {MgUserApi} from "../services/MgApi";
import H2 from "../lib/H2";

const UserShow = () => {
    const [profile, updateProfile] = useState({});
    useEffect(async () => {
        updateProfile(await MgUserApi.myProfile());
    }, []);

    return (
        <>
            <H2>Hi there {profile.name ?? profile.email}</H2>
        </>
    )
}
export default UserShow;