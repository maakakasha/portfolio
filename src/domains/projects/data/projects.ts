import type { ProjectProps } from "../UI/components/project/project";
import spoonImg from "../../../assets/spoon-proj.png";

export const projects: ProjectProps[] = [
  {
    title: "Spoon: Smart Calorie Tracker",
    description:
      "Delivered a cross-platform mobile application that helps users track calories and build healthier eating habits, measured by successful publication to app stores and positive internal user feedback, by using TDD, BDD, and DDD clean architecture throughout development and testing.",
    redirectUrl:
      "https://play.google.com/store/apps/details?id=com.oumlah.spoonapp",
    techStack: [
      "Flutter",
      "Dart",
      "Supabase",
      "Play Store",
      "Apple Store",
      "Claude Code",
      "Bloc",
      "Open Router",
      "Provider",
      "get_it",
      "Flutter_test",
      "mocktail",
    ],
    imageSrc: spoonImg,
  },
  // {
  //   title: "Portfolio",
  //   imageSrc: "",
  //   redirectUrl: "",
  //   description:
  //     "Designed and built a personal portfolio site with a sticky two-column layout, smooth scroll-spy navigation, and a dark/light theme toggle — using React, TypeScript, and Vite with a local inter variable font for a clean typographic hierarchy.",
  //   techStack: ["React", "Typescript", "CSS", "Vite", "Render"],
  // },
];
