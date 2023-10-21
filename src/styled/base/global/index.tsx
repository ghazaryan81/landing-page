/* prettier-ignore */ import { Normalize } from "./normalize";
/* prettier-ignore */ import { Initial }   from "./initial";
/* prettier-ignore */ import { Unreset }   from "./unreset";
/* prettier-ignore */ import { AddStyle }  from "./add-style";
/* prettier-ignore */ import { Fonts }     from "./fonts";

export const GlobalStyle = () => (
  <>
    <Initial />
    <AddStyle />
    <Fonts />
  </>
);
