import React from "react";
import { Stack } from "@mui/material";
import { Header, ActionCard } from "@components/";
import { FeaturedItems } from "@features";

export default function Home() {
  return (
    <Stack width={"95%"} marginX="auto" pb={3}>
      <Header />
      <ActionCard />
      <FeaturedItems />
    </Stack>
  );
}
