"use client";

import React from "react";
const ProfileError = (props) => {
  return (
    <div className="flex flex-row gap-3">
      sorry there is an error{" "}
      <h1 className="text-red-500 font-bold text-3xl">{props.error.message}</h1>
    </div>
  );
};

export default ProfileError;
