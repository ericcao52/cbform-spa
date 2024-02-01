// import { ChakraProvider, Box } from "@chakra-ui/react";
import {
  Container,
  Box,
} from "@cauri/ui";
import "./App.css";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { FormContainer } from "./components/FormContainer";
import { ShareCollect } from "./components/ShareCollect";
import { Footer } from "./components/Footer";
import Bg from "./assets/bg_collect.webp";

function App() {
  return (
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
  );
}

export default App;
