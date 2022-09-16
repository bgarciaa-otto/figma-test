/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MyIcon from "./MyIcon";
import { Button, Divider, Flex, Text } from "@aws-amplify/ui-react";
export default function ItemPortal(props) {
  const { Product, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="1280px"
      justifyContent="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(229,229,229,1)"
      {...rest}
      {...getOverrideProps(overrides, "ItemPortal")}
    >
      <Flex
        gap="0"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Container")}
      >
        <MyIcon
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          type="warning"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
        <Divider
          width="32px"
          height="30px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="vertical"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          width="1086px"
          justifyContent="center"
          grow="1"
          basis="1086px"
          height="24px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Content")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            width="1170px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={Product?.title}
            {...getOverrideProps(overrides, "Title")}
          ></Text>
        </Flex>
        <Button
          display="flex"
          gap="0"
          width="fit-content"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          height="40px"
          position="relative"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Access"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
