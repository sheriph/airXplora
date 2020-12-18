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
import { useRouter } from "next/router";
import { startCase } from "lodash";
import ShowPost from "../components/blog/showpost";

export async function getStaticProps({ params }) {
//  console.log("params", params);

  const post = await getSinglePost(`
  {
    post(id: ${`"${params.pid}"`}, idType: SLUG) {
      content
      categories {
        nodes {
          name
        }
      }
      title
    }
  }  
  `);
  return { props: { post } };
}

export async function getStaticPaths() {
  const posts = await getAllPosts(`
      {
        posts(first: 100000000) {
          nodes {
            slug
            id
          }
        }
      }
      `);
  const paths = posts.nodes.map((post) => {
    return { params: { pid: post.slug } };
  });
//  console.log("paths node", paths);
  return { paths, fallback: false };
}

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
            <Typography variant="h5">{post.title}</Typography>
          </Grid>
          <Grid item style={{ textAlign: "end" }}>
            <Typography align="right" variant="caption">
              {post.categories.nodes.map((cat, index) => (
                <React.Fragment key={index}>
                  <span>{startCase(cat.name)}</span>
                  {index === post.categories.nodes.length - 1 ? (
                    ""
                  ) : (
                    <span style={{ marginRight: "3px", marginLeft: "3px" }}>
                      |
                    </span>
                  )}
                </React.Fragment>
              ))}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Container>
            <ShowPost content={post.content} />
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
