import React, { type ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({children}: AuthLayoutProps) => {
  return (
    <section className="w-full h-screen flex items-center justify-center">{children}</section>
  );
};

export default AuthLayout;
