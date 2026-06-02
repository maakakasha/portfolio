import type { ProjectProps } from "../UI/components/project/project";
import spoonImg from "../../../assets/spoon-proj.png";
import nassImg from "../../../assets/nass.png";

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

  //
  {
    title: "Nass app",
    imageSrc: nassImg,
    redirectUrl: "https://nass-app.com",
    description:
      "Collaborated as a mobile dev-ops developer on a cross‑platform (iOS and Android), creative-writing mobile app for Arabs, implementing Google and Apple authentication, taking responsibility of developing special iOS features, and successfully publishing the app to both the Apple App Store and Google Play Store",
    techStack: ["React", "Typescript", "Vanilla CSS", "Vite"],
  },
];
