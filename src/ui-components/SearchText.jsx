/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, TextField, View } from "@aws-amplify/ui-react";
export default function SearchText(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="960px"
      height="119px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SearchText")}
    >
      <TextField
        display="flex"
        gap="8px"
        position="absolute"
        top="27px"
        left="25px"
        right="134px"
        direction="column"
        width="801px"
        height="66px"
        justifyContent="center"
        padding="0px 0px 0px 0px"
        label="Gallery Search"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="56px"
        right="24px"
        justifyContent="center"
        alignItems="center"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Search"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
