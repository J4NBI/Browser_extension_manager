import React from "react";

import SwitchSlider from "./SwitchSlider";

// src/components/ImageImports.ts
import LogoConsolePlus from "../assets/images/logo-console-plus.svg";
import LogoDevlens from "../assets/images/logo-devlens.svg";
import LogoDomSnapshot from "../assets/images/logo-dom-snapshot.svg";
import LogoGridGuides from "../assets/images/logo-grid-guides.svg";
import LogoJsonWizard from "../assets/images/logo-json-wizard.svg";
import LogoLinkChecker from "../assets/images/logo-link-checker.svg";
import LogoMarkupNotes from "../assets/images/logo-markup-notes.svg";
import LogoPalettePicker from "../assets/images/logo-palette-picker.svg";
import LogoSpeedBoost from "../assets/images/logo-speed-boost.svg";
import LogoStyleSpy from "../assets/images/logo-style-spy.svg";
import LogoTabMasterPro from "../assets/images/logo-tab-master-pro.svg";
import LogoViewportBuddy from "../assets/images/logo-viewport-buddy.svg";

export const tools = [
  {
    img: LogoConsolePlus,
    name: "Console Plus",
    description:
      "Console Plus hilft dir, die Entwicklerkonsole effizient zu nutzen.",
    isOn: false,
  },
  {
    img: LogoDevlens,
    name: "Devlens",
    description:
      "Devlens analysiert und visualisiert den DOM und CSS deiner Seite.",
    isOn: false,
  },
  {
    img: LogoDomSnapshot,
    name: "Dom Snapshot",
    description:
      "Dom Snapshot erstellt schnelle Screenshots von DOM-Strukturen.",
    isOn: false,
  },
  {
    img: LogoGridGuides,
    name: "Grid Guides",
    description: "Grid Guides zeigt dir Hilfslinien für CSS Grid Layouts an.",
    isOn: false,
  },
  {
    img: LogoJsonWizard,
    name: "Json Wizard",
    description: "Json Wizard hilft beim Erstellen und Prüfen von JSON-Daten.",
    isOn: false,
  },
  {
    img: LogoLinkChecker,
    name: "Link Checker",
    description:
      "Link Checker prüft automatisch alle Links auf deiner Website.",
    isOn: false,
  },
  {
    img: LogoMarkupNotes,
    name: "Markup Notes",
    description:
      "Markup Notes ermöglicht das schnelle Annotieren von HTML-Strukturen.",
    isOn: false,
  },
  {
    img: LogoPalettePicker,
    name: "Palette Picker",
    description:
      "Palette Picker hilft dir, Farben direkt aus Webseiten zu extrahieren.",
    isOn: false,
  },
  {
    img: LogoSpeedBoost,
    name: "Speed Boost",
    description:
      "Speed Boost analysiert Performance-Probleme und Optimierungspotenzial.",
    isOn: false,
  },
  {
    img: LogoStyleSpy,
    name: "Style Spy",
    description: "Style Spy zeigt dir CSS-Regeln und Stilinformationen an.",
    isOn: false,
  },
  {
    img: LogoTabMasterPro,
    name: "Tab Master Pro",
    description:
      "Tab Master Pro organisiert und verwaltet deine Browser-Tabs effizient.",
    isOn: false,
  },
  {
    img: LogoViewportBuddy,
    name: "Viewport Buddy",
    description:
      "Viewport Buddy simuliert verschiedene Bildschirmgrößen und Viewports.",
    isOn: false,
  },
];

const Card = () => {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 w-[90%] gap-4">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="w-full max-w-[450px] mx-auto flex-1 min-w-60 bg-neutral-50/50 dark:bg-neutral-800 border-2 rounded-xl p-6"
        >
          <div className="flex flex-col items-start justify-center">
            <div className="flex gap-4 items-start mb-10">
              <img src={tool.img} alt={`Icon ${tool.name}`} />
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-0">
                  {tool.name}
                </h2>
                <p className="opacity-70 font-medium">{tool.description}</p>
              </div>
            </div>

            <div className="w-full flex justify-between">
              <button className="btn">Remove</button>
              <SwitchSlider />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
