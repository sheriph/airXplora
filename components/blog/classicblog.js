import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Badge, Box, Container, Grid } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ShareIcon from "@material-ui/icons/Share";
import PersonIcon from "@material-ui/icons/Person";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Moment from "react-moment";
import { startCase } from "lodash";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ClassicBlogCard = ({ post }) => {
  const classes = useStyles();
  const [isBrowser, setBrowser] = useState(false);
  useEffect(() => {
    if (window !== "undefined") {
      setBrowser(true);
    }
  }, []);
  // console.log(post);
  return (
    <Container disableGutters>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            className={classes.media}
            alt={post.featuredImage ? `${post.featuredImage.node.altText}` : ""}
            src={
              post.featuredImage ? `${post.featuredImage.node.sourceUrl}` : ""
            }
          />
          <CardContent>
            <Typography paragraph style={{ fontSize: "16px" }} variant="h6">
              {post.title}
            </Typography>

            <Box dangerouslySetInnerHTML={{ __html: post.excerpt }}></Box>

            <Grid
              container
              style={{ paddingTop: "8px" }}
              spacing={1}
              direction="row"
            >
              <Grid item style={{ padding: "2px" }}>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <AccessTimeIcon color="primary" fontSize="small" />
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">
                      {isBrowser && (
                        <>
                          <Moment date={post.date} format="MMM DD" />
                          ,&nbsp;
                          <Moment date={post.date} format="YYYY" />
                        </>
                      )}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item style={{ padding: "2px" }}>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <PersonIcon color="primary" fontSize="small" />
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">
                      {startCase(post.author.node.name)}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item style={{ padding: "2px" }}>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <Badge badgeContent={4} color="primary">
                      <ChatBubbleOutlineIcon color="primary" />
                    </Badge>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button endIcon={<ShareIcon />} size="small" color="primary">
            Share
          </Button>

          <Link passHref href={`/${encodeURIComponent(post.slug)}`}>
            <Button
              endIcon={<KeyboardArrowRightIcon color="primary" />}
              size="small"
              color="primary"
            >
              Read More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
};

export default ClassicBlogCard;
