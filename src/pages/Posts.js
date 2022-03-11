import React, { useContext, useQuery } from "react";
import { AuthContext } from "../context/auth";
import { FETCH_POSTS_QUERY } from "../util/graphql";

import PostCard from "../components/PostCard";

import { makeStyles } from "@material-ui/core/styles";

import Spinner from "react-spinkit";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

function Posts() {
  const classes = useStyles();
  return (
    <div>
      <h1>Hello Posts</h1>
    </div>
  )
}

export default Posts;
