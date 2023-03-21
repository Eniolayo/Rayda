import Head from "next/head";
import Image from "next/image";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

export default function Home() {
  function Header() {
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
          <Typography variant="h2" fontSize={"30px"} fontWeight="600">
            Welcome
          </Typography>
          <Typography
            variant="body1"
            color="gray.200"
            fontWeight={"400"}
            mt={0.8}
          >
            Your current sales auction and activity.
          </Typography>
        </Box>
        <IconButton aria-label="notification">
          <StyledBadge badgeContent={2} color="secondary">
            <NotificationsNoneIcon
              color="action"
              sx={{ width: "33px", height: "33px" }}
            />
          </StyledBadge>
        </IconButton>
      </Stack>
    );
  }
  function ActionCard() {
    return (
      <Box
        mt={6}
        p="23px"
        pb="10px"
        border={"1px solid"}
        borderColor="gray.300"
        borderRadius={"12px"}
        boxShadow="0px 1px 3px 0px #1018281A"
      >
        <Box
          position={"relative"}
          width={"100%"}
          height={"170px"}
          overflow="hidden"
          borderRadius={"12px"}
        >
          <Image src="/bg-gradient.png" alt="bg gradient" fill />
        </Box>
        <Stack
          direction={"row"}
          alignItems="center"
          position={"relative"}
          zIndex={8}
          marginX={4}
          marginTop={-4}
        >
          <Image
            width={144}
            height={144}
            src="/Avatar-profile-photo.png"
            alt="Avatar-profile-photo"
          />
          <Stack
            direction={"row"}
            justifyContent="space-between"
            flex={1}
            alignItems="center"
          >
            <Stack>
              <Typography
                variant="h3"
                color="gray.900"
                fontSize={"24px"}
                fontWeight="600"
              >
                Starts in: 3 days : 2 hours : 24 minutes{" "}
              </Typography>
              <Stack
                direction={"row"}
                alignItems="center"
                mt={1}
                spacing={"10px"}
              >
                <Stack
                  direction={"row"}
                  alignItems="center"
                  bgcolor={"#FFFAEB"}
                  width="fit-content"
                  px={1.5}
                  py={0.5}
                  spacing={"10px"}
                  borderRadius="16px"
                >
                  <Box
                    width={"6px"}
                    height={"6px"}
                    borderRadius="50%"
                    bgcolor="warning.500"
                  />
                  <Typography
                    color="warning.700"
                    variant="body1"
                    fontWeight={"500"}
                    fontSize={"14px"}
                  >
                    Not Live
                  </Typography>
                </Stack>
                <Typography color="gray.600">Layers Auction </Typography>
              </Stack>
            </Stack>
            <Button
              variant="outlined"
              sx={{
                borderRadius: "8px",
                color: "#344054",
                border: "1px solid #D0D5DD",
                textTransform: "capitalize",
              }}
              startIcon={<ThumbUpOffAltIcon />}
            >
              Accept Invite
            </Button>
          </Stack>
        </Stack>
      </Box>
    );
  }
  function FeaturedItems() {
    return (
      <Box
        mt={6}
        p="23px"
        border={"1px solid"}
        borderColor="gray.300"
        borderRadius={"12px"}
        boxShadow="0px 1px 3px 0px #1018281A"
      >
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems={"center"}
          borderBottom="1px solid"
          borderColor={"gray.300"}
          pb={2}
        >
          <Typography
            variant="h3"
            fontSize={"18px"}
            fontWeight="600"
            color="gray.900"
          >
            Featured Items
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "8px",
              color: "#344054",
              border: "1px solid #D0D5DD",
              textTransform: "capitalize",
            }}
          >
            View Auction
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          flexWrap="wrap"
          justifyContent={"space-between"}
          mt={3}
          gap="20px"
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <Card
              variant="outlined"
              sx={{
                width: 330,
                padding: 2,
                borderRadius: 4,
              }}
              key={i}
            >
              <Box height={140} position="relative">
                <Image src="/lappy.png" alt="laptop" fill />
              </Box>
              <Stack
                direction={"row"}
                alignItems="center"
                mt={1.5}
                spacing={"6px"}
              >
                <Avatar
                  sx={{
                    width: 22,
                    height: 22,
                    fontSize: 13,
                    padding: 2,
                    background: "#F2F4F7",
                    color: "#344054",
                  }}
                >
                  KO
                </Avatar>
                <Typography fontSize={15} fontWeight="600" color="gray.900">
                  Koray Okumus{" "}
                </Typography>
                <Typography color="gray.100" fontSize={13} fontWeight="400">
                  (Highest Bidder)
                </Typography>
              </Stack>
              <Typography
                level="h4"
                mt={1.5}
                color="gray.900"
                fontSize={16}
                fontWeight="600"
                lineHeight={"20px"}
              >
                Apple MacBook Air 13" M1 Chip 8GB 256GB 2020 Model - Rose Gold
              </Typography>

              <Stack
                direction={"row"}
                mt={1}
                borderBottom="1px solid"
                borderColor={"gray.300"}
                pb={1}
                alignItems="center"
              >
                <Typography
                  level="body2"
                  color="gray.700"
                  fontSize={"14px"}
                  fontWeight="400"
                >
                  Current Bid:
                </Typography>
                <Typography fontSize={"15px"} fontWeight="600" color="gray.700">
                  ₦795,000
                </Typography>
              </Stack>
              <Button
                variant="solid"
                size="sm"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{
                  borderRadius: "8px",
                  fontWeight: 600,
                  width: "100%",
                  marginBlockStart: 1,
                  background: "#004CCC",
                  color: "#fff",
                  border: "1px solid #004CCC",
                  textTransform: "capitalize",
                  ":hover": {
                    border: "1px solid #004CCC",
                    color: "#004CCC",
                    background: "#fff",
                  },
                }}
              >
                Add to wishlist
              </Button>
            </Card>
          ))}
        </Stack>
      </Box>
    );
  }
  return (
    <Stack width={"95%"} marginX="auto" pb={3}>
      <Header />
      <ActionCard />
      <FeaturedItems />
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
