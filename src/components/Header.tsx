import { Box, Text } from "@cauri/ui";

type Props = {
  toto?: string;
};
export const Header: React.FC<Props> = () => {
  return (
    <Box
      padding={8}
      borderRadius={12}
      border={"8px solid rgba(255, 255, 255, 0.8)"}
      bgColor={"white"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDir={"column"}
      gap={2}
    >
      <Text
        display={"flex"}
        alignItems={"center"}
        h={10}
        fontFamily="Degular"
        fontWeight={700}
        fontSize={36}
        color="#001642"
      >
        Owner
      </Text>
      <Text
        fontFamily="'ProximaNova-Regular', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize={14}
        color={"#697284"}
        fontWeight={400}
        mb={4}
      >
        Créée par Talytha Gonçalves
      </Text>
      <Text
        fontFamily="'ProximaNova-Regular', 'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize={16}
        color={"#697284"}
        fontWeight={400}
        letterSpacing={"-0.16px"}
      >
        Argent collecté
      </Text>
      <Text
        display={"flex"}
        alignItems={"center"}
        h={10}
        fontFamily="Degular"
        fontWeight={700}
        fontSize={40}
        color="#001642"
      >
        7011,00 €
      </Text>
    </Box>
  );
};
