// import { ChakraProvider, Box } from "@chakra-ui/react";
import {
  ChakraProvider,
  Container,
  Box,
  LTheme,
  ModalsWrapper,
  VStack,
} from "@cauri/ui";
import "./App.css";
import Fonts from "./Fonts";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { FormContainer } from "./components/FormContainer";
import { ShareCollect } from "./components/ShareCollect";
import { Footer } from "./components/Footer";
import Bg from "./assets/bg_collect.webp";

function App() {
  return (
    <ChakraProvider theme={LTheme}>
      <Fonts />
      <ModalsWrapper>
        <VStack bg="#F2F4F8" minHeight="100vh">
          <Container
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"100%"}
            pl={0}
            pr={0}
            pt={20}
            maxW={"unset"}
            backgroundImage={Bg}
            backgroundSize={"15%"}
          >
            <Banner />
            <Box
              maxW={600}
              w={"100%"}
              display={"flex"}
              flexDirection={"column"}
              gap={10}
              pb={40}
            >
              <Header />
              <FormContainer />
              <ShareCollect />
            </Box>
            <Footer />
          </Container>
        </VStack>
      </ModalsWrapper>
    </ChakraProvider>
  );
}

export default App;
