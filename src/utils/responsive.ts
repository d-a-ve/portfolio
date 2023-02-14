import { useMediaQuery } from "react-responsive";

export const isXs = useMediaQuery({ query: "(max-width: 368)" }); // 368px

export const isSm = useMediaQuery({ query: "(max-width: 568)" }); // 568px

export const isMd = useMediaQuery({ query: "(max-width: 768)" }); // 768px

export const isLg = useMediaQuery({ query: "(max-width: 1024)" }); //1024px

export const isXl = useMediaQuery({ query: "(max-width: 1280)" }); // 1280px
