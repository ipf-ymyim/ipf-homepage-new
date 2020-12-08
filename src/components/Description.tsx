import styled from "styled-components";

import Typography from "../assets/Typography";
import colors from "../layouts/colors";

const Description = styled.p`
  ${Typography("body", 1.4)};
  color: ${colors.black};
  margin: 24px 0 40px 0;
  width: 100%;

  white-space: pre-wrap;
  word-break: keep-all;
`;

export default Description;
