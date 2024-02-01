import { Container, Box } from "@cauri/ui";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { FormContainer } from "@/components/FormContainer";
import { ShareCollect } from "@/components/ShareCollect";
import { Footer } from "@/components/Footer";

export default function Pots() {
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
      backgroundImage={"/assets/bg_collect.webp"}
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
