import React from "react";
import { VStack, Grid, GridItem } from "@chakra-ui/react";
import { Notifications } from "../components/account/Notifications";

export const Account = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="5" m="5">
      <GridItem colSpan={2}>
        <Notifications />
      </GridItem>
      <GridItem colSpan={1}></GridItem>
    </Grid>
  );
};
