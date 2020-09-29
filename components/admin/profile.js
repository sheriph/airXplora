import React from "react";
import { Box, Grid, Divider, TextField } from "@material-ui/core";

import AnimatedSave from "../general/animatedsave";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  primaryContactState,
  setPrimaryContactState,
  secondaryContactState,
  setSecondaryContactState,
} from "../../recoil/state";
import { useDocument } from "@nandorojo/swr-firestore";

const AgencyProfile = () => {
  const primaryContact = useRecoilValue(primaryContactState);
  const setPrimaryContact = useSetRecoilState(setPrimaryContactState);
  const secondaryContact = useRecoilValue(secondaryContactState);
  const setSecondaryContact = useSetRecoilState(setSecondaryContactState);

  

  const { data, update, error } = useDocument("adminSettings/agencyProfile", {
    onSuccess: (data) => {
      setPrimaryContact(data.primaryContact);
      setSecondaryContact(data.secondaryContact);
    },
  });

  const updateDate = ()=>{
    update({
      primaryContact: primaryContact,
      secondaryContact: secondaryContact
    })
  }


  return (
    <>
      <Box>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            Primary Contact Number
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={primaryContact}
              onChange={(e) => setPrimaryContact(e.target.value)}
              size="small"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Box my={2}>
          <Divider light />
        </Box>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            Secondary Contact Number
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={secondaryContact}
              size="small"
              onChange={(e) => setSecondaryContact(e.target.value)}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Box my={2}>
          <Divider light />
        </Box>

        <Grid container direction="row-reverse">
          <Grid item>
            <AnimatedSave updateDate={updateDate} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AgencyProfile;