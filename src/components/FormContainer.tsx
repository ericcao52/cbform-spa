import { Box, Text } from "@cauri/ui";
import { FormSelector } from "./FormSelector";
import { PaymentForm } from "./PaymentForm";
import { FC, useState } from "react";

export enum FormTypes {
  LYDIA = "Lydia",
  CARD = "Card",
}

export const FormContainer: FC = () => {
  const [selectedForm, setSelectedForm] = useState<FormTypes>(FormTypes.LYDIA);
  return (
    <Box
      padding={14}
      borderRadius={12}
      bgColor={"white"}
      display={"flex"}
      flexDir={"column"}
    >
      <Text fontWeight={"bold"} fontSize={18} mb={7}>
        Je participe avec
      </Text>
      <FormSelector
        selectedForm={selectedForm}
        setSelectedForm={setSelectedForm}
      />
      <PaymentForm selectedForm={selectedForm} />
    </Box>
  );
};
