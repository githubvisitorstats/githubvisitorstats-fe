import * as Yup from "yup";

import theme from "@/theme";
import { generateRequest } from "@/utils/apiClient";

import { Stack, Typography } from "@mui/material";
import { Button, IconButton, Input } from "@/components/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { Formik } from "formik";
import { Tooltip } from "@/components/molecules";

const validationSchema = Yup.object().shape({
  githubUsername: Yup.string().required("This field is required."),
});

const SplashContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [copyTextMessage, setCopyTextMessage] = useState("Copy Text");
  const [serviceError, setServiceError] = useState(null);

  const onCopyClipboardButtonClick = () => {
    const text = `![Profile Visits](${data})`;

    navigator.clipboard.writeText(text).then(() => {
      setCopyTextMessage("Text Copied");

      const copyTextTimeOut = setTimeout(() => {
        setCopyTextMessage("Copy Text");
        clearTimeout(copyTextTimeOut);
      }, 2000);
    });
  };

  return (
    <Stack
      flexDirection={"column"}
      padding={"300px 0px"}
      maxWidth={"700px"}
      justifyContent={"center"}
      margin={"auto"}
      textAlign={"center"}
    >
      <Typography
        variant="h1"
        color={theme.palette.white.main}
        marginBottom={"5px"}
      >
        Github Visitor Stats
      </Typography>
      <Typography variant="h4" color={theme.palette.grey.light}>
        Easily track your GitHub profile visits and get detailed analytics.
        Monitor your visitor statistics in real-time with a simple code added to
        your profile.
      </Typography>
      <Formik
        initialValues={{ githubUsername: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setData(null);
          setIsLoading(true);

          generateRequest(values.githubUsername)
            .then((res) => {
              setData(res.trackingUrl);
              setIsLoading(false);
            })
            .catch((err) => {
              if (err.message) {
                setServiceError(err.message);

                const errorTimeOut = setTimeout(() => {
                  setIsLoading(false);
                  setServiceError(null);
                  clearTimeout(errorTimeOut);
                }, 3000);
              }
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Stack
            flexDirection={"row"}
            justifyContent={"center"}
            marginTop={"100px"}
            marginBottom={"30px"}
          >
            <Input
              variant="standard"
              placeholder="Github Username"
              style={{ width: "250px" }}
              className="ButtonAction"
              name="githubUsername"
              value={values.githubUsername}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.githubUsername && touched.githubUsername}
              helperText={
                touched.githubUsername && errors.githubUsername
                  ? errors.githubUsername
                  : null
              }
            />
            <Button
              loading={isLoading}
              variant="contained"
              className="ButtonAction"
              onClick={handleSubmit}
            >
              Get Code
            </Button>
          </Stack>
        )}
      </Formik>
      <Stack
        alignItems={"flex-start"}
        width={"400px"}
        margin={"auto"}
        sx={{
          pointerEvents: serviceError ? "auto" : "none",
          opacity: serviceError ? 1 : 0,
        }}
      >
        <Typography variant="overline" color="error">
          * {serviceError}
        </Typography>
      </Stack>
      <Stack
        width={"70%"}
        margin={"auto"}
        sx={{ pointerEvents: data ? "auto" : "none", opacity: data ? 1 : 0 }}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          position={"relative"}
        >
          <Input
            variant="filled"
            value={`![Profile Visits](${data})`}
            style={{ width: "100%" }}
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
            className="ButtonAction"
          />
          <Tooltip title={copyTextMessage} placement="top">
            <IconButton
              className="ButtonAction"
              onClick={onCopyClipboardButtonClick}
            >
              <FontAwesomeIcon
                icon={faCopy}
                fontSize={"14px"}
                color={theme.palette.white.main}
              />
            </IconButton>
          </Tooltip>
        </Stack>
        <Typography
          variant="overline"
          color={theme.palette.grey.light}
          marginTop={"10px"}
        >
          * Paste the tracking code you received into your GitHub profile’s
          README file. This is essential for tracking your visitor statistics.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SplashContent;
