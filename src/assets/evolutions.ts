import { ImClock } from "react-icons/im";
import { FaDrum } from "react-icons/fa";
import { BiVolumeLow, BiBorderInner, BiPlug } from "react-icons/bi";
import { RiCoinLine } from "react-icons/ri";
import { FiCopy } from "react-icons/fi";
import { CgEditNoise } from "react-icons/cg";
import { GameOptions } from "../components/PreGameSettings";

const base = [
  {
    title: "self-patch a chosen module",
    Icon: BiBorderInner,
  },
  {
    title: "For each VCO, flip a coin if heads, change frequency",
    Icon: RiCoinLine,
  },
  {
    title: "Add noise",
    Icon: CgEditNoise,
  },
  {
    title: "Choose two modules, patch them together",
    Icon: FiCopy,
  },
  {
    title: "Turn every attenuator down by half",
    Icon: BiVolumeLow,
  },
  {
    title:
      "Patch __RANDOMCOUNT_2-5__ inputs on module n°__RANDOMCOUNT_TOTALMODULE__",
    Icon: BiPlug,
  },
  {
    title:
      "Connect module n° __RANDOMCOUNT_TOTALMODULE__ with module n° __RANDOMCOUNT_TOTALMODULE__",
    Icon: BiPlug,
  },
  {
    title: "Add another clock source",
    Icon: ImClock,
  },
  {
    title: "Convert a melodic element into a rhythmic element",
    Icon: FaDrum,
  },
];

const hemisphere = [
  {
    title: "Self patch 2 Hemisphere apps",
    Icon: ImClock,
  },
  {
    title: "On Hemisphere, go down by __RANDOMCOUNT_5-15__ apps and patch it",
    Icon: ImClock,
  },
  {
    title: "On Hemisphere, go up by __RANDOMCOUNT_5-15__ apps and patch it",
    Icon: ImClock,
  },
];

const stock = [
  {
    title: "on O_C Stock, go down by __RANDOMCOUNT_2-5__ apps and patch it",
    Icon: ImClock,
  },
  {
    title: "on O_C Stock, go up by __RANDOMCOUNT_2-5__ apps and patch it",
    Icon: ImClock,
  },
];

export const getEvolutions = (options: GameOptions | null) => {
  let evolutions = base;
  if (!options) {
    return evolutions.map((e) => ({ ...e, type: "evolution" }));
  }
  if (options.ocHemisphere) {
    evolutions = [...evolutions, ...hemisphere];
  }
  if (options.ocStock) {
    evolutions = [...evolutions, ...stock];
  }
  return evolutions.map((e) => ({ ...e, type: "evolution" }));
};
