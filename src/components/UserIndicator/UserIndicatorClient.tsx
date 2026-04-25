"use client";

import { ReactNode, useState } from "react";

const UserIndicatorClient = (props: {
  children: ReactNode
}) => {
  const [open, setOpen] = useState(false);

  return (
    <button onClick={() => setOpen(!open)} style={{
      height: open ? "20rem" : "4rem"
    }}>
      {props.children}
    </button>
  );
};

export default UserIndicatorClient;
