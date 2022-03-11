import React, { useContext } from "react";
import { Link } from "react-router-dom";
import * as moment from "moment";

import { AuthContext } from "../context/auth";

import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) {
  const classes = useStyles();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Hello Post Card</h1>
    </div>
  );
}

export default PostCard;
