import { Box, Button, Link, Text } from "@cauri/ui";
import { FC } from "react";

export enum FormTypes {
  LYDIA = "Lydia",
  CARD = "Card",
}

export const Footer: FC = () => {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      bgColor={"white"}
      w={"100%"}
      mt={"auto"}
      p={10}
      gap={2}
    >
      <Text
        fontFamily={"ProximaNova-Bold, Helvetica Neue"}
        fontSize={18}
        letterSpacing={-0.18}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Talytha Gonçalves utilise Lydia pour organiser ses cagnottes en ligne
      </Text>
      <Text
        fontFamily={
          "ProximaNova-Light, Helvetica Neue, Helvetica, Arial, sans-serif"
        }
        fontSize={18}
        fontWeight={300}
        textAlign={"center"}
      >
        💡 Les participations effectuées avec le bouton « Payer avec Lydia »
        sont sans commissions pour l'organisateur. 2,5% pour le bouton « Payer
        par carte »
        <Link
          fontSize={18}
          fontWeight={300}
          ml={2}
          textDecoration={"underline"}
          href="https://www.lydia-app.com/fonctionnalites/comptes/cagnotte/#:~:text=4%25-,Lydia,-0%25"
          _hover={{ color: "unset" }}
        >
          (cagnotte la moins chère de France)
        </Link>
      </Text>
      <Button
        fontFamily={
          "ProximaNova-Bold, HelveticaNeue, Helvetica Neue, Helvetica, Arial, sans-serif"
        }
        color={"#0180FF"}
        backgroundColor={"#E9F5FD"}
        padding={"27px 32px"}
        display={"flex"}
        alignItems={"center"}
        width={"min-content"}
        margin={"32px auto"}
        borderRadius={56}
        border={0}
        _hover={{ backgroundColor: "#ddedf8" }}
      >
        Créer une cagnotte
      </Button>
      <Text
        fontFamily={
          "ProximaNova-Light, Helvetica Neue, Helvetica, Arial, sans-serif"
        }
        fontWeight={300}
        fontSize={14}
        color={"#3e434f"}
      >
        Cliquez ici pour consulter les conditions générales d’utilisation de nos
        services et la politique de protection de vos données personnelles.
      </Text>
    </Box>
  );
};
