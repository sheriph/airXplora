import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ClassicBlogCard from "../components/blog/classicblog";
import ClassicFooter from "../components/footers/classicfooter";
import BaseHeader from "../components/headers/baseheader";
import { getAllPosts, getSinglePost } from "../lib/api";

const styles = makeStyles((theme) => ({
  headergrid: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    padding: "20px",
    marginBottom: "20px",
    minHeight: "150px",
  },
}));

const SinglePost = ({ post }) => {
  const classes = styles();

  console.log(post);

  useEffect(() => {}, []);
  return (
    <Container disableGutters maxWidth="xl" className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <BaseHeader title="airXplora : Your Travel Tech Companion" />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignContent="center"
          justify="center"
          className={classes.headergrid}
        >
          <Grid item>
            <Typography variant="caption">Title</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">
              {post.title}
            </Typography>
          </Grid>
          <Grid item style={{ textAlign: "end" }}>
            <Typography align="right" variant="caption">
              Travel Gist
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Container>
            <Box dangerouslySetInnerHTML={{ __html: post.content }}></Box>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <ClassicFooter />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SinglePost;

export async function getStaticProps() {
  const post = await getSinglePost(`
  {
    post(id: "hello-world", idType: SLUG) {
      id
      content
      slug
      title
    }
  }
  
        `);

  console.log(post);
  return {
    props: {
      post,
    },
  };
}
