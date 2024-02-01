
import "@/styles/globals.css";
import { ChakraProvider, LTheme, ModalsWrapper, VStack } from "@cauri/ui";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={LTheme}>
        <ModalsWrapper>
          <VStack bg="#F2F4F8" minHeight="100vh">
            <Component {...pageProps} />
          </VStack>
        </ModalsWrapper>
      </ChakraProvider>
  );
}
