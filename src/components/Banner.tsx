import { Box } from "@cauri/ui";

type Props = {
  toto?: string;
};
export const Banner: React.FC<Props> = () => {
  return (
    <Box
      className="banner-gradient"
      height={380}
      maxWidth={792}
      width={"100%"}
      borderRadius={10}
      border={"8px solid rgba(255, 255, 255, 0.8)"}
      marginBottom={-20}
    ></Box>
  );
};
