import React from "react";
import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

const NewGroups = () => {
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>New Group</DialogTitle>

        {sampleNotifications.length > 0 ? (
          sampleNotifications.map((i) => (
            <NotificationsItem
              sender={i.sender}
              _id={i._id}
              handler={friendRequestHandler}
              key={i._id}
            />
          ))
        ) : (
          <Typography textAlign={"center"}>No Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

export default NewGroups;
