import React from "react";
import { Box, Grid, Divider, TextField } from "@material-ui/core";

import AnimatedSave from "../general/animatedsave";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  primaryContact_,
  secondaryContact_,
} from "../../recoil/state";
import { useDocument } from "@nandorojo/swr-firestore";

const AgencyProfile = () => {

  const [primaryContact, setPrimaryContact] = useRecoilState(primaryContact_)
  const [secondaryContact, setSecondaryContact] = useRecoilState(secondaryContact_)


  const { data, update, error } = useDocument("adminSettings/agencyProfile", {
    onSuccess: (data) => {
      setPrimaryContact(data.primaryContact);
      setSecondaryContact(data.secondaryContact);
    },
  });

  const updateData = ()=>{
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
            <AnimatedSave updateData={updateData} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AgencyProfile;