/*prettier-ignore*/ import { css }      from "styled-components";
/*prettier-ignore*/ import * as vars    from "@/styles-common/variables.json";

const gunit: string = vars.global.unit;

export const wh = (w: number, h?: number, unit = gunit) => css`
  height: ${h ?? w}${unit};
  width: ${w}${unit};
`;
