import { Box, Text } from "@cauri/ui";
import { FC } from "react";
import { Copy } from "./Copy";

export const ShareCollect: FC = () => {
  const url = "https://preprod.lydia-app.com/pots?id=64335-owner";
  return (
    <Box
      padding={14}
      borderRadius={12}
      bgColor={"white"}
      display={"flex"}
      flexDir={"column"}
    >
      <Text fontWeight={"bold"} fontSize={18} mb={7}>
        Partager cette page
      </Text>
      <Box display={"flex"} alignItems={"center"} gap={3}>
        <Copy value={url} />
        {url}
      </Box>
    </Box>
  );
};
