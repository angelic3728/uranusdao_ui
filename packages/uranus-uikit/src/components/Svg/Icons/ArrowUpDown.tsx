import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import { useTheme } from "styled-components";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.75 3C16.1642 3 16.5 3.33579 16.5 3.75V20.25C16.5 20.6642 16.1642 21 15.75 21C15.3358 21 15 20.6642 15 20.25V3.75C15 3.33579 15.3358 3 15.75 3Z"
        fill={theme.colors.text}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2197 16.7197C12.5126 16.4268 12.9874 16.4268 13.2803 16.7197L15.75 19.1893L18.2197 16.7197C18.5126 16.4268 18.9874 16.4268 19.2803 16.7197C19.5732 17.0126 19.5732 17.4874 19.2803 17.7803L16.2803 20.7803C15.9874 21.0732 15.5126 21.0732 15.2197 20.7803L12.2197 17.7803C11.9268 17.4874 11.9268 17.0126 12.2197 16.7197Z"
        fill={theme.colors.text}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 3C7.91421 3 8.25 3.33579 8.25 3.75V20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25V3.75C6.75 3.33579 7.08579 3 7.5 3Z"
        fill={theme.colors.text}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.96967 3.21967C7.26256 2.92678 7.73744 2.92678 8.03033 3.21967L11.0303 6.21967C11.3232 6.51256 11.3232 6.98744 11.0303 7.28033C10.7374 7.57322 10.2626 7.57322 9.96967 7.28033L7.5 4.81066L5.03033 7.28033C4.73744 7.57322 4.26256 7.57322 3.96967 7.28033C3.67678 6.98744 3.67678 6.51256 3.96967 6.21967L6.96967 3.21967Z"
        fill={theme.colors.text}
      />
    </Svg>
  );
};

export default Icon;
