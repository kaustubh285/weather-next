import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

type Props = {
  message: String;
  warning?: Boolean;
};

function Callout({ message, warning }: Props) {
  return (
    <Alert status={warning ? "warning" : "info"}>
      <AlertIcon />
      {message}
    </Alert>
  );
}

export default Callout;
