import React, { useState } from "react";
import { Box, Image } from "@cauri/ui";
import CheckCircleBlue from "../assets/check_circle_blue.svg";
import CombinedShape from "../assets/combined-shape.svg";

type Props = {
  value: string;
};

let copyTimeout: NodeJS.Timeout | null = null;
export const Copy: React.FC<Props> = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const image = copied ? CheckCircleBlue : CombinedShape;

  const onClickCopy = () => {
    if (copyTimeout) {
      return false;
    }
    setCopied(true);
    copyTimeout = setTimeout(() => {
      setCopied(false);
      copyTimeout = null;
    }, 1000);
  };

  return (
    <Box onClick={onClickCopy}>
      <Image src={image} width={5} />
    </Box>
  );
};
