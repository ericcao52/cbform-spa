import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Input,
  Select,
  border,
} from "@cauri/ui";

import { alphaTwoFormattedCountries } from "@cauri/constants";
import IntlTelInput from "intl-tel-input/react/build/IntlTelInput.esm";
import "intl-tel-input/build/css/intlTelInput.min.css";

import { FormTypes } from "./FormContainer";

type Props = {
  selectedForm: FormTypes;
};

export const PaymentForm: React.FC<Props> = ({ selectedForm }) => {
  return (
    <Box
      bgColor={"#E9F5FD"}
      p={8}
      border={"4px solid #D0EEFF"}
      borderRadius={"0 0 8px 8px"}
      borderTopRightRadius={selectedForm === FormTypes.LYDIA ? "8px" : 0}
      borderTopLeftRadius={selectedForm === FormTypes.CARD ? "8px" : 0}
    >
      <FormControl>
        <FormLabel color={"#697284"} fontWeight={700} fontSize={14}>
          Qui participe ?
        </FormLabel>
        <Input
          height={50}
          bgColor={"white"}
          type="email"
          _focus={{
            borderColor: "gray.300",
            boxShadow: "none",
          }}
        />
        <FormErrorMessage>Email is required.</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel color={"#697284"} fontWeight={700} fontSize={14}>
          Montant
        </FormLabel>
        <Input
          height={50}
          bgColor={"white"}
          type="email"
          _focus={{
            borderColor: "gray.300",
            boxShadow: "none",
          }}
        />
        <FormErrorMessage>Email is required.</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel color={"#697284"} fontWeight={700} fontSize={14}>
          Votre numéro de mobile
        </FormLabel>
        <IntlTelInput
          containerClassName="intl-tel-input"
          inputClassName="custom-input"
          flexGrow={1}
          padding={5}
          width="100%"
          initialValue={"33"}
          onChangeNumber={() => null}
          onChangeValidity={() => null}
          onChangeErrorCode={() => null}
          // any initialisation options from the readme will work here
          initOptions={{
            initialCountry: "fr",
            countrySearch: false,
          }}
        />
      </FormControl>
    </Box>
  );
};
