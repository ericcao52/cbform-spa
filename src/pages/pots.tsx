import { Container, Box } from "@cauri/ui";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { FormContainer } from "@/components/FormContainer";
import { ShareCollect } from "@/components/ShareCollect";
import { Footer } from "@/components/Footer";
import Head from "next/head";

export default function Pots() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        backgroundImage={"/assets/bg_collect.webp"}
        backgroundSize={"15%"}
        className="bg-lydia"
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
    </>
  );
}
