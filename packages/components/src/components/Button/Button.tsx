import React from "react";
import { ButtonProps } from "./Button.types";
import { useQueryClient } from "@tanstack/react-query";

const Button: React.FC<ButtonProps> = (props) => {
  const queryClient = useQueryClient();

  console.log("Button props =>", props);
  return (
    <button
      onClick={() => {
        console.log("QUERY CACHE FROM MODULE", queryClient.getQueryCache());
      }}
    >
      Dit is een test knop
    </button>
  );
};

export default Button;
