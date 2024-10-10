import classNames from "classnames";
import { montserrat, story1, story2, story3, story4 } from "../assets";
import StoryListItem from "@/components/story-list-item";
import BackgroundShapes from "@/components/background-shapes";
import { StaticImageData } from "next/image";

export interface Story {
  id: number;
  name: string;
  story: string;
  image: StaticImageData;
}

const StoriesArray: Story[] = [
  {
    id: 0,
    name: "Derek",
    story:
      "Derek improved his strength and endurance significantly at LPG Fitness",
    image: story1,
  },
  {
    id: 1,
    name: "Isabella",
    story: "Isabella reached her fitness milestones at LPG Fitness",
    image: story2,
  },
  {
    id: 2,
    name: "John",
    story:
      "John gained 10 pounds of lean muscle through our specialized program",
    image: story3,
  },
  {
    id: 3,
    name: "Sophia",
    story:
      "Sophia improved her fitness and discovered a passion for wellness at LPG Fitness",
    image: story4,
  },
];

export default function Stories() {
  const displayStories = StoriesArray.map((story) => (
    <StoryListItem key={story.id} {...story} />
  ));

  return (
    <section className="py-5 md:py-16" id="stories">
      <div className="space-y-5 relative">
        <BackgroundShapes />
        <h1
          className={classNames(
            montserrat.className,
            "font-medium text-2xl text-center relative",
          )}
        >
          Success Stories
        </h1>
        <p className="text-center relative">
          Be inspired by the transformational journeys of our members at LPG
          Fitness
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4">
          {displayStories}
        </div>
      </div>
    </section>
  );
}
