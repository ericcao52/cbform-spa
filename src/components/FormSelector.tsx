import { Box } from "@cauri/ui";
import { FC, SetStateAction } from "react";

type Props = {
  selectedForm: string;
  setSelectedForm: SetStateAction<any>;
};

export const FormSelector: FC<Props> = ({selectedForm, setSelectedForm}) => {
  return (
    <>
      <Box
        onClick={() => setSelectedForm("Lydia")}
        bgColor={selectedForm === "Lydia" ? "primary" : "white"}
      >
        Lydia
      </Box>
      <Box
        onClick={() => setSelectedForm("Card")}
        bgColor={selectedForm === "Lydia" ? "primary" : "white"}
      >
        Card
      </Box>
    </>
  );
};
