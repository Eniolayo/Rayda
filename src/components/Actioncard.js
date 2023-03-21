import React from "react";
import Image from "next/image";
import { Box, Button, Stack, Typography } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

export default function ActionCard() {
  return (
    <Box
      mt={6}
      p="23px"
      pb="10px"
      sx={{
        paddingBlockEnd: {
          xxs: "23px",
          md: "10px",
        },
      }}
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
        sx={{
          flexDirection: {
            md: "row",
          },
          marginInline: {
            xxs: "0px",
            sm: 4,
          },
        }}
        alignItems="center"
        position={"relative"}
        zIndex={8}
        marginTop={-4}
      >
        <Image
          width={144}
          height={144}
          src="/Avatar-profile-photo.png"
          alt="Avatar-profile-photo"
        />
        <Stack
          justifyContent="space-between"
          flex={1}
          sx={{
            flexDirection: {
              xxs: "column",
              m: "row",
            },
            alignItems: {
              xxs: "flex-start",
              m: "center",
            },
            gap: "10px",
          }}
          width="100%"
        >
          <Stack>
            <Typography
              variant="h3"
              color="gray.900"
              fontSize={"24px"}
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "20px",
                  md: "24px",
                },
              }}
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
                  sx={{
                    width: {
                      xs: "4px",
                      sm: "5px",
                      md: "6px",
                    },
                    height: {
                      xs: "4px",
                      sm: "5px",
                      md: "6px",
                    },
                  }}
                  borderRadius="50%"
                  bgcolor="warning.500"
                />
                <Typography
                  color="warning.700"
                  variant="body1"
                  fontWeight={"500"}
                  fontSize={"14px"}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "14px",
                    },
                  }}
                >
                  Not Live
                </Typography>
              </Stack>
              <Typography
                color="gray.600"
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                    md: "16px",
                  },
                }}
              >
                Layers Auction{" "}
              </Typography>
            </Stack>
          </Stack>
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
            startIcon={<ThumbUpOffAltIcon />}
          >
            Accept Invite
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
