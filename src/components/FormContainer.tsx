import { Box, Text } from "@cauri/ui";
import { FormSelector } from "./FormSelector";
import { PaymentForm } from "./PaymentForm";
import { FC, useState } from "react";

type FormTypes = "Lydia" | "Card";
export const FormContainer: FC = () => {
  const [selectedForm, setSelectedForm] = useState<FormTypes>("Lydia");
  return (
    <Box
      padding={10}
      borderRadius={12}
      border={"8px solid rgba(255, 255, 255, 0.8)"}
      bgColor={"white"}
      display={"flex"}
      flexDir={"column"}
    >
      <Text fontWeight={"bold"} fontSize={18}>
        Je participe avec
      </Text>
      <FormSelector selectedForm={selectedForm} setSelectedForm={setSelectedForm} />
      <PaymentForm />
    </Box>
  );
};
