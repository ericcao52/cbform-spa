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
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { FormContainer } from "./components/FormContainer";

function App() {
  return (
    <ChakraProvider theme={LTheme}>
      <ModalsWrapper>
        <VStack bg="#F2F4F8" minHeight="100vh">
          <Container maxW="1200px" pt={20}>
            <Banner />
            <Box
              maxW={600}
              m={"auto"}
              display={"flex"}
              flexDirection={"column"}
              gap={10}
            >
              <Header />
              <FormContainer />
            </Box>
          </Container>
        </VStack>
      </ModalsWrapper>
    </ChakraProvider>
  );
}

export default App;
