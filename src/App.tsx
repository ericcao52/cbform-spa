import { ChakraProvider, Box } from "@chakra-ui/react";
import "./App.css";
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { FormContainer } from "./components/FormContainer";
import theme from "./theme.js";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Banner />
        <Box
          maxW={600}
          m={"auto"}
          display={"flex"}
          flexDirection={"column"}
          gap={40}
        >
          <Header />
          <FormContainer />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
