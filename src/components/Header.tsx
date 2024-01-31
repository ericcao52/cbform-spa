import { Box, Text } from "@cauri/ui";

type Props = {
  toto?: string;
};
export const Header: React.FC<Props> = () => {
  return (
    <Box
      padding={16}
      borderRadius={12}
      border={"8px solid rgba(255, 255, 255, 0.8)"}
      bgColor={"white"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
    >
      <Text fontWeight={"bold"} fontSize={30}>
        Owner
      </Text>
      <Text display={"block"} mb={30}>
        Créée par Talytha Gonçalves
      </Text>
      <Text>Argent collecté</Text>
      <Text fontWeight={"bold"} fontSize={30}>
        7011,00 €
      </Text>
    </Box>
  );
};
