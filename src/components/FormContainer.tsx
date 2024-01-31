import { Box, Text } from "@chakra-ui/react";

type Props = {
  toto?: string;
};
export const FormContainer: React.FC<Props> = () => {
  return (
    <Box
      padding={40}
      borderRadius={12}
      border={"8px solid rgba(255, 255, 255, 0.8)"}
      bgColor={"white"}
      display={"flex"}
      flexDir={"column"}
    >
      <Text fontWeight={"bold"} fontSize={18}>
        Je participe avec
      </Text>

      
    </Box>
  );
};