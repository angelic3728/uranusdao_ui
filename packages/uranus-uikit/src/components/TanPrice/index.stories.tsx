import React from "react";
import { TanPrice, TanPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/TanPrice",
  component: TanPrice,
};

const Template: React.FC<TanPriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <TanPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  tanPriceUsd: 20.0,
};
