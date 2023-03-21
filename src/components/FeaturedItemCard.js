import React from "react";
import Image from "next/image";
import { Avatar, Box, Button, Card, Stack, Typography } from "@mui/material";
import { stringAvatar } from "@utils";

function FeaturedItemCard({ bid, image, name, title }) {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 330,
        padding: 2,
        borderRadius: 4,
      }}
    >
      <Box height={140} position="relative">
        {/* <Image src="/lappy.png" alt="laptop" fill /> */}
        <img
          src={image}
          alt={title}
          width={"100%"}
          height={"100%"}
          style={{
            borderRadius: "12px",
          }}
        />
      </Box>
      <Stack direction={"row"} alignItems="center" mt={1.5} spacing={"6px"}>
        <Avatar {...stringAvatar(name)} />
        <Typography fontSize={15} fontWeight="600" color="gray.900">
          {name}
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
        {title}
      </Typography>
      <Stack
        direction={"row"}
        mt={1}
        borderBottom="1px solid"
        borderColor={"gray.300"}
        pb={1}
        gap="5px"
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
          {bid}
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
  );
}

export default FeaturedItemCard;
