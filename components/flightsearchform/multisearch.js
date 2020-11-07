import React, { useState } from "react";
import {
  Container,
  Grid,
  ButtonBase,
  Box,
  Divider,
  Collapse,
  Slide,
  Grow,
} from "@material-ui/core";
import SelectPassengerandClass from "./passandclass";
import SearchButton from "./searchbutton";
import {
  RepeaterInput,
  RepeaterInput1,
  RepeaterInput2,
  RepeaterInput3,
  RepeaterInput4,
} from "./repeaterinput";
import { useRecoilValue } from "recoil";
import {
  showRepeater1_,
  showRepeater2_,
  showRepeater3_,
  showRepeater4_,
} from "../../recoil/state";

const MultiSearch = () => {
  const showRepeater1 = useRecoilValue(showRepeater1_);
  const showRepeater2 = useRecoilValue(showRepeater2_);
  const showRepeater3 = useRecoilValue(showRepeater3_);
  const showRepeater4 = useRecoilValue(showRepeater4_);

  return (
    <Container disableGutters>
      <RepeaterInput />
      <Collapse in={showRepeater1}>
        <Box mt={3}>
          <RepeaterInput1 />
        </Box>
      </Collapse>

      <Collapse in={showRepeater2}>
        <Box mt={3}>
          <RepeaterInput2 />
        </Box>
      </Collapse>

      <Collapse in={showRepeater3}>
        <Box mt={3}>
          <RepeaterInput3 />
        </Box>
      </Collapse>

      <Collapse in={showRepeater4}>
        <Box mt={3}>
          <RepeaterInput4 />
        </Box>
      </Collapse>

      <Box mt={2}>
        <Grid container>
          <Grid item xs={8} sm={6}>
            <SelectPassengerandClass />
          </Grid>
          <Grid item xs={4} sm={6}>
            <SearchButton />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MultiSearch;
