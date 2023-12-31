import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Button } from "@/styles/Buttons";

//Image Background
import bcg from "@/public/static/img/background/bcggg.png";

export const Header = styled("header", {
  backgroundColor: "$brand1",
  padding: "12rem 0 8rem 0",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${bcg})`,
  backgroundSize: "cover",

  "@mobile": {
    padding: "9rem 0 6rem 0",
  },
});

export const HeaderContent = styled("div", {
  maxWidth: "100%",
  width: "36rem",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  // backgroundColor: "rgba(92, 99, 237, 0.9)",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  borderRadius: "10px",
  padding: "1rem",
});

export const HeaderButtonsArea = styled(Flex, {
  marginTop: "$2",
  margin: "0 auto",
  gap: "1rem",
  "@mobile": {
    flexDirection: "column",
    [`& ${Button}`]: {
      width: "100%",
    },
  },
});

export const StackSection = styled("section", {
  backgroundColor: "$grey4",
  padding: "4rem 0 2rem 0",
});

export const StackCards = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  padding: "3rem 0",
  gap: "2rem",

  "@mobile": {
    display: "flex",
    marginInline: "-1rem",
    paddingInline: "1rem",
    overflow: "auto",
  },
});

export const ProjectsArea = styled("section", {
  padding: "4rem 0 8rem 0",
});

export const ProjectsAreaSocialMediaMessage = styled("aside", {
  width: "32%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  position: "sticky",
  top: "10rem",

  "@mobile": {
    width: "100%",
    position: "static",
    order: "2",
    marginTop: "5rem",
  },
});

export const ProjectsAreaContent = styled("div", {
  width: "60%",
  paddingLeft: "4rem",
  "@mobile": {
    width: "100%",
    paddingLeft: "0",
  },
});

export const ProjectAreaWrapperColumns = styled(Flex, {
  position: "relative",
  alignItems: "flex-start",
  "@mobile": {
    flexDirection: "column",
  },
});
