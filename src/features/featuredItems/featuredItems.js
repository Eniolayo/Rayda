import { useGetFeaturedItemsQuery } from "@features/";
import React from "react";
import { Box, Button, Card, Skeleton, Stack, Typography } from "@mui/material";
import FeaturedItemCard from "@components/FeaturedItemCard";

function SkeletonLoader() {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 330,
        padding: 2,
        borderRadius: 4,
      }}
    >
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={"100%"}
        height={140}
      />
      <Stack direction={"row"} alignItems="center" mt={1.5} spacing={"6px"}>
        <Skeleton animation="wave" variant="circular" width={22} height={22} />
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ fontSize: 15, width: 90 }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ fontSize: 13, width: 70 }}
        />
      </Stack>

      <Skeleton animation="wave" variant="text" sx={{ fontSize: 16 }} />
      <Skeleton
        animation="wave"
        variant="text"
        sx={{ fontSize: 16, width: "50%" }}
      />
      <Stack
        direction={"row"}
        mt={1}
        borderBottom="1px solid"
        borderColor={"gray.300"}
        pb={1}
        gap="4px"
        alignItems="center"
      >
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ fontSize: "14px", width: 70 }}
        />
        <Skeleton
          animation="wave"
          variant="text"
          sx={{ fontSize: "15px", width: 70 }}
        />
      </Stack>

      <Skeleton animation="wave" variant="rounded" width={"100%"} height={30} />
    </Card>
  );
}

export default function FeaturedItems() {
  const { data, isLoading, isFetching, isError, error } =
    useGetFeaturedItemsQuery({
      pollingInterval: 3000,
      refetchOnMountOrArgChange: true,
      skip: false,
    });

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
            fontSize: {
              xs: "13px",
              sm: "14px",
              md: "16px",
            },
          }}
        >
          View Auction
        </Button>
      </Stack>
      <Stack
        direction={"row"}
        flexWrap="wrap"
        sx={{
          justifyContent: {
            xxs: "center",
            md: "space-between",
          },
        }}
        mt={3}
        gap="20px"
      >
        {!isLoading &&
          data.map((item, i) => (
            <FeaturedItemCard
              key={i}
              bid={item.bid}
              image={item.image}
              name={item.name}
              title={item.title}
            />
          ))}
        {isLoading &&
          Array.from({ length: 4 }).map((_, i) => <SkeletonLoader key={i} />)}
        {error && (
          <Stack justifyContent={"center"} alignItems="center" my={10}>
            <Typography fontWeight={"600"} fontSize="30px">
              Oops!, Error Occured.
            </Typography>
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
