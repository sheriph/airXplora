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
import { getAllPosts } from "../lib/api";
import LazyLoad from "react-lazyload";
import Skeleton from "@material-ui/lab/Skeleton";
import { startCase } from "lodash";

const styles = makeStyles((theme) => ({
  spxs2: {
    width: "calc(100% + 16px)",
    margin: "0",
  },
  headergrid: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    padding: "20px",
    marginBottom: "20px",
    minHeight: "150px",
  },
  placeholdercontainer: {
    marginTop: "20px",
    marginBottom: "20px",
  },
}));

const Blog = ({ posts }) => {
  const classes = styles();
  const [postCategories, setCategories] = useState(undefined);
  const [value, setValue] = useState("show all");
  console.log(posts);

  useEffect(() => {
    const categories = posts.map((post) => post.categories.nodes[0].name);
    const set = new Set(categories);
    setCategories(["show all", ...Array.from(set)]);
  }, []);
  return (
    <Container disableGutters maxWidth="xl" className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <BaseHeader title="airXplora : Your Travel Tech Companion" />
        </Grid>
        <Grid
          item
          container
          xs={12}
          direction="column"
          alignContent="center"
          justify="center"
          className={classes.headergrid}
        >
          <Grid item>
            <Typography variant="caption">Latest Article</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">{startCase(posts[0].title)}</Typography>
          </Grid>
          <Grid item style={{ textAlign: "end" }}>
            <Typography align="right" variant="caption">
              {posts[0].categories.nodes.map((cat, index) => (
                <React.Fragment key={index}>
                  <span>{startCase(cat.name)}</span>
                  {index === posts[0].categories.nodes.length - 1 ? (
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
        <Grid
          //  spacing={1}
          container
          justify="center"
        >
          {postCategories &&
            postCategories.map((category, index) => (
              <Grid item key={index}>
                <Button
                  onClick={() => setValue(category)}
                  color="primary"
                  variant={value === category ? "contained" : "text"}
                >
                  {category}
                </Button>
              </Grid>
            ))}
        </Grid>
        <Grid
          spacing={2}
          style={{ marginBottom: "20px", marginTop: "20px" }}
          container
          item
          xs={12}
          classes={{ "spacing-xs-2": classes.spxs2 }}
        >
          {posts
            .filter((post, index) => {
              if (value === "show all") return true;
              if (post.categories.nodes[0].name === value) {
                return true;
              } else {
                return false;
              }
            })
            .map((post, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <LazyLoad
                  height={50}
                  // offset={300}
                  unmountIfInvisible
                  placeholder={
                    <Container className={classes.placeholdercontainer}>
                      <Box p={3}>
                        <Skeleton variant="rect" height={150} />
                      </Box>
                    </Container>
                  }
                  debounce
                >
                  <ClassicBlogCard post={post} />
                </LazyLoad>
              </Grid>
            ))}
        </Grid>
        <Grid item xs={12}>
          <ClassicFooter />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;

export async function getStaticProps() {
  let after = "null";
  let allNodes = [];
  for (let i = 0; i < 100; i++) {
    const posts = await getAllPosts(after);
    allNodes = allNodes.concat(posts.nodes);
    after = posts.pageInfo.endCursor;
    if (posts.pageInfo.hasNextPage) {
      continue;
    } else {
      break;
    }
  }

  return {
    props: {
      posts: allNodes,
    },
  };
}
