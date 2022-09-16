/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from 'react';
import { getOverrideProps } from '@aws-amplify/ui-react/internal';
import { Button, TextField, View, Flex } from '@aws-amplify/ui-react';

export default function CustomControl(props) {
  const { overrides, ...rest } = props;

  return (
    <Button
      alignSelf="stretch"
      display="flex"
      gap="0"
      top="56px"
      right="24px"
      justifyContent="center"
      size="default"
      alignItems="center"
      isDisabled={false}
      variation="primary"
      children="Matraca"
      overrides={{}}
      {...getOverrideProps(overrides, 'Button')}
    ></Button>
  );
}
