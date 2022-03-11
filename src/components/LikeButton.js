import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";

import { LIKE_POST_MUTATION } from "../util/graphql";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Label } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function LikeButton({ user, post: { id, likeCount, likes } }) {
    const classes = useStyles();
    const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (
      user &&
      likes.find((like) => {
       return like.username === user.username;
      })
    ) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [user, likes]);

  const [likePost] = useMutation(LIKE_POST_MUTATION.definitions, {
    variables: { postId: id },
  });

  const likeButton = user ? (
    liked ? (
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<FavoriteIcon />}
      >
        Like
      </Button>
    ) : (
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<FavoriteBorderIcon />}
      >
        Like
      </Button>
    )
  ) : (
    <Button as={Link} to="/login">
      <FavoriteBorderIcon />
    </Button>
  );

  return (
    <div>
      <Button onClick={likePost}>{likeButton}</Button>
      <Label>{likeCount}</Label>
    </div>
  );
}

export default LikeButton;
