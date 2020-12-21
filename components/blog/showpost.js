import { Box } from "@material-ui/core";
import React from "react";
import Head from "next/head";

const ShowPost = ({ content, wpstyles }) => {
  console.log(wpstyles);
  if (!content) return <>Loading Post</>;

  return (
    <Box>
      <Head>
        <meta name="robots" content="noindex" />

        {wpstyles.map((style, index) => (
          <link
            key={index}
            href={
              style.src.startsWith("https://naijagoingabroad.com")
                ? `${style.src}`
                : `${
                    style.src.startsWith("//")
                      ? `https:${style.src}`
                      : `${
                          style.src.startsWith("/")
                            ? `https://naijagoingabroad.com${style.src}`
                            : `https://naijagoingabroad.com/${style.src}`
                        }`
                  }`
            }
            rel="stylesheet"
            media="print"
            onload="this.media='all'"
          />
        ))}
      </Head>

      <Box
        dangerouslySetInnerHTML={{ __html: content }}
      ></Box>
    </Box>
  );
};

export default ShowPost;
