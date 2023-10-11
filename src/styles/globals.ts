'use client';
import { createGlobalStyle } from "styled-components";

import { Colors, Font } from "@/styles/config";

export default createGlobalStyle`
  :root {
    --color-bg: ${Colors.background.normal};
    --color-bg-primary: ${Colors.background.primary};
    --color-primary: ${Colors.highlight};
    --color-text-normal: ${Colors.text.normal};
    
    --font-size-normal: ${Font.size.normal};
    --font-size-title: ${Font.size.title.normal};
    --font-size-sub-title: ${Font.size.title.sub};
    --font-size-big-title: ${Font.size.title.big};
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    background: var(--color-bg);
    font-size: var(--font-size-normal);
    color: var(--color-text-normal)
  }
`;