import React from "react";
import styled from "styled-components";
import { TanDiamond } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  tanPriceUsd?: number;
  iconCallback?: () => void;
  tanAddress?: string;
}

const PriceDiv = styled.div`
  display: flex;
  align-items: center;
`

const IconLink = styled.a`
  display: flex;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const TanPrice: React.FC<Props> = ({ tanPriceUsd, color = "textDisabled", iconCallback, tanAddress }) => {
  return tanPriceUsd ? (
    <PriceDiv>
      <Text mr={2} color="textDisabled">1MM</Text>
      <IconLink
        href="#"
        onClick={(e) => {
          e.preventDefault();
          iconCallback && iconCallback();
        }}
      >
        <TanDiamond width="18px" height="16px" mr="8px" />
      </IconLink>
      <a
        href={`/info/token/${tanAddress}`}
        target="_blank"
      >
        <Text mr={2} color={color} bold>{`$${(tanPriceUsd * 1000000).toFixed(4)}`}</Text>
      </a>
    </PriceDiv>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(TanPrice);
