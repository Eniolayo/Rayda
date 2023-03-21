import Image from "next/image";
import { Badge, Box, IconButton, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function Header() {
  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      borderBottom={"1px solid"}
      borderColor="gray.300"
      alignItems="center"
      pt={4}
      pb={2}
    >
      <Box>
        <Typography
          variant="h2"
          fontSize={"30px"}
          sx={{
            fontSize: {
              xxs: "25px",
              sm: "30px",
            },
          }}
          fontWeight="600"
        >
          Welcome
        </Typography>
        <Typography
          variant="body1"
          color="gray.200"
          fontWeight={"400"}
          mt={0.8}
          sx={{
            fontSize: {
              xxs: "14px",
              sm: "16px",
            },
          }}
        >
          Your current sales auction and activity.
        </Typography>
      </Box>
      <IconButton aria-label="notification">
        <StyledBadge badgeContent={2} color="secondary">
          <NotificationsNoneIcon
            color="action"
            sx={{
              width: {
                xxs: "30px",
                sm: "33px",
              },
              height: {
                xxs: "30px",
                sm: "33px",
              },
            }}
          />
        </StyledBadge>
      </IconButton>
    </Stack>
  );
}
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 25,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    background: "#F04438",
  },
}));
