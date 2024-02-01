import React, { useState } from "react";
import { Box, Image } from "@cauri/ui";

type Props = {
  value: string;
};

let copyTimeout: NodeJS.Timeout | null = null;
export const Copy: React.FC<Props> = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const image = copied
    ? "/assets/check_circle_blue.svg"
    : "/assets/combined-shape.svg";

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
      <Image src={image} alt="copy" width={5} />
    </Box>
  );
};
