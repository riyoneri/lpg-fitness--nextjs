// Fonts

import { Montserrat, Questrial } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "600", "700"],
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: ["400"],
});

export { montserrat, questrial };

export { default as fitness1 } from "./images/fitness-1.png";
