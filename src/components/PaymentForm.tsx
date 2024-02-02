import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Input,
  Button,
  Text
} from "@cauri/ui";
import { FormTypes } from "./FormContainer";
import dynamic from "next/dynamic";
// @ts-expect-error no declaration file
const IntlTelInput: ReactElement = dynamic(() => import("intl-tel-input/react/build/IntlTelInput.esm"), { ssr: false });
import "intl-tel-input/build/css/intlTelInput.min.css";

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
          placeholder={"..."}
          _focus={{
            borderColor: "gray.300",
            boxShadow: "none",
          }}
        />
        <FormErrorMessage>Name is required.</FormErrorMessage>
      </FormControl>
      <FormControl>
        <FormLabel color={"#697284"} fontWeight={700} fontSize={14}>
          Montant
        </FormLabel>
        <Box className="amountInput">
          <Text display={'flex'} alignItems={'center'} height={'100%'} padding={'0 1rem'} borderRight={'1px solid #dedede'}>€</Text>
          <Input height={50} type="number" placeholder={"..."} border={'none'} background={'none'}/>
        </Box>
        <FormErrorMessage>Amount is required.</FormErrorMessage>
      </FormControl>
      <FormControl
        display={selectedForm !== FormTypes.LYDIA ? "none" : "block"}
      >
        <FormLabel color={"#697284"} fontWeight={700} fontSize={14}>
          Votre numéro de mobile
        </FormLabel>
        <IntlTelInput
          onChangeNumber={() => null}
          onChangeValidity={() => null}
          onChangeErrorCode={() => null}
          // any initialisation options from the readme will work here
          initOptions={{
            utilsScript: "/utils/intlTelInput.js",
            customPlaceholder: () => "06...",
            initialCountry: "fr",
            countrySearch: false,
            formatAsYouType: true,
            formatOnDisplay: true,
            showSelectedDialCode: true,
          }}
        />
      </FormControl>
      <FormControl display={selectedForm !== FormTypes.CARD ? "none" : "block"}>
        <FormLabel color={"#697284"} fontWeight={700} fontSize={14}>
          Email
        </FormLabel>
        <Input
          height={50}
          bgColor={"white"}
          type="email"
          placeholder={"...@..."}
          _focus={{
            borderColor: "gray.300",
            boxShadow: "none",
          }}
        />
        <FormErrorMessage>Email is required.</FormErrorMessage>
      </FormControl>
      <Button
        colorScheme="blue"
        height={"auto"}
        fontSize={"1em"}
        width={"100%"}
        display={selectedForm !== FormTypes.LYDIA ? "none" : "block"}
        mt={8}
        py={4}
        lineHeight={"140%"}
      >
        Payer par Lydia
      </Button>
      <Button
        colorScheme="blue"
        height={"auto"}
        fontSize={"1em"}
        width={"100%"}
        display={selectedForm !== FormTypes.CARD ? "none" : "block"}
        mt={8}
        py={4}
        lineHeight={"140%"}
      >
        Payer par Carte
      </Button>
    </Box>
  );
};
