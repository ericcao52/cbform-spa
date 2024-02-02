// import { ChakraProvider, Box } from "@chakra-ui/react";
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Link,
  Text,
} from "@cauri/ui";

export default function Collect() {
  return (
    <Container
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      pl={0}
      pr={0}
      pt={10}
      maxW={"unset"}
      backgroundSize={"15%"}
    >
      <Box
        width={"128px"}
        height={"128px"}
        bg={"#ffffff"}
        border={"10px solid #ffffff"}
        borderRadius={"50%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        overflow={"hidden"}
        mb={"-56px"}
        zIndex={2}
      >
        <Image
          src={
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          }
          alt={"avatar"}
        />
      </Box>
      <Card
        width={"100%"}
        maxW={600}
        p={14}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        boxShadow={"1px 1px 2px #D3D3D3"}
      >
        <Text
          mb={8}
          color={"#424242"}
          fontWeight={700}
          fontSize={18}
          textAlign={"center"}
        >
          Ian Botan vous demande 2,00€
        </Text>
        <Box maxW={336} width={"100%"}>
          <FormControl>
            <FormLabel color={"#697284"} fontWeight={400} fontSize={16}>
              Prénom du porteur de carte
            </FormLabel>
            <Input
              height={50}
              bgColor={"white"}
              type="text"
              placeholder={""}
              _focus={{
                borderColor: "gray.300",
                boxShadow: "none",
              }}
            />
            <FormErrorMessage>Name is required.</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel color={"#697284"} fontWeight={400} fontSize={16}>
              Nom du porteur de carte
            </FormLabel>
            <Input
              height={50}
              bgColor={"white"}
              type="text"
              placeholder={""}
              _focus={{
                borderColor: "gray.300",
                boxShadow: "none",
              }}
            />
            <FormErrorMessage>Name is required.</FormErrorMessage>
          </FormControl>
          <Button
            colorScheme="blue"
            height={"auto"}
            fontSize={"1em"}
            width={"100%"}
            mt={4}
            py={5}
            lineHeight={"140%"}
            borderRadius={"999px"}
          >
            Régler 2,00€
          </Button>
        </Box>
      </Card>
      <Card
        width={"100%"}
        maxW={600}
        px={14}
        pt={5}
        pb={8}
        mt={4}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        boxShadow={"1px 1px 2px #D3D3D3"}
      >
        <Box maxW={336} width={"100%"}>
          <Image src="/assets/logo_cb_lydia.png" alt="Logo CB Lydia" />
          <Text
            fontSize={"12px"}
            py={2}
            pl={9}
            mt={2}
            bgImage={"/assets/secure.png"}
            bgSize={"39px 29px"}
            bgPosition={"0 center"}
            bgRepeat={"no-repeat"}
          >
            Chiffrement 256-bit et communication SSL/TLS
          </Text>
          <Box pt={2} mt={2} borderTop={"1px solid #e7ebf3"}>
            <Text
              mb={8}
              px={4}
              color={"#424242"}
              fontSize={"14px"}
              textAlign={"center"}
              lineHeight={"18px"}
            >
              Les informations de paiement sont traitées par Payline (leader du
              paiement sur Internet). Cette page est conçue par Lydia.
            </Text>
            <Text fontSize={"14px"} textAlign={"center"} lineHeight={"18px"}>
              Contact :{" "}
              <Link
                color={"#0000EE"}
                textDecoration={"underline"}
                href="mailto:support@lydia-app.com"
              >
                support@lydia-app.com
              </Link>
            </Text>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
