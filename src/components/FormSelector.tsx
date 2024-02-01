import { Box, Image } from "@cauri/ui";
import { FC } from "react";
import { FormTypes } from "./FormContainer";
import clsx from "clsx";

type Props = {
  selectedForm: string;
  //  setSelectedForm: SetStateAction<FormTypes>;
  setSelectedForm: React.Dispatch<React.SetStateAction<FormTypes>>;
};

export const FormSelector: FC<Props> = ({ selectedForm, setSelectedForm }) => {
  return (
    <Box display={"flex"} mb={-1}>
      <Box
        className={clsx(
          "lydia-box",
          selectedForm === FormTypes.LYDIA && "active"
        )}
        onClick={() => setSelectedForm(FormTypes.LYDIA)}
        bgColor={selectedForm === FormTypes.LYDIA ? "#E9F5FD" : "white"}
        flex={"50%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        cursor={"pointer"}
        p={5}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={2}
          position={"relative"}
          bottom={selectedForm === FormTypes.LYDIA ? 0 : "-2px"}
          fontFamily={"ProximaNova-Bold"}
          fontWeight={700}
          color={selectedForm === FormTypes.LYDIA ? "#000000" : "#697284"}
        >
          <Image src={"/assets/logo_app_large.png"} alt="Lydia Logo" w={6} />
          Lydia
        </Box>
      </Box>
      <Box
        flex={"50%"}
        className={clsx(
          "card-box",
          selectedForm === FormTypes.CARD && "active"
        )}
        onClick={() => setSelectedForm(FormTypes.CARD)}
        bgColor={selectedForm === FormTypes.CARD ? "#E9F5FD" : "white"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        cursor={"pointer"}
        p={5}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={2}
          position={"relative"}
          bottom={selectedForm === FormTypes.CARD ? "2px" : 0}
          color={selectedForm === FormTypes.CARD ? "#000000" : "#697284"}
          fontFamily={"ProximaNova-Bold"}
        >
          Carte
          <Image src={"/assets/visa.png"} alt="Visa Logo" w={6} />
          <Image src={"/assets/mastercard.png"} alt="Mastercard Logo" w={6} />
        </Box>
      </Box>
    </Box>
  );
};
