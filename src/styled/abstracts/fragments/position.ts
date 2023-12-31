/*prettier-ignore*/ import { css }      from "styled-components";
/*prettier-ignore*/ import { position } from "@/styled/abstracts/functions";
/*prettier-ignore*/ import * as vars    from "@/styles-common/variables.json";

const gunit: string = vars.global.unit;

export const p = (positionType = "rel", top = 0, left = 0, unit = gunit) => css`
  position: ${position(positionType)};
  top: ${top}${unit};
  left: ${left}${unit};
`;
