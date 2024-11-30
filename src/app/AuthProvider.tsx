"use client";
import React from "react";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

type Props = {
  children: React.ReactNode;
};
export const AuthProvider: React.FC<Props> = ({ children }) => {
  return <KindeProvider>{children}</KindeProvider>;
};
