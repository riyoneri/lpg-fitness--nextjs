import classNames from "classnames";
import { montserrat, story1, story2, story3, story4 } from "../assets";
import { StaticImageData } from "next/image";
import StoryListItem from "@/components/story-list-item";
import BackgroundShapes from "@/components/background-shapes";

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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus",
    image: story1,
  },
  {
    id: 1,
    name: "Anthony",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus",
    image: story2,
  },
  {
    id: 2,
    name: "John",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus",
    image: story3,
  },
  {
    id: 3,
    name: "Ezekiel",
    story:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus",
    image: story4,
  },
];

export default function Stories() {
  const displayStories = StoriesArray.map((story) => (
    <StoryListItem key={story.id} {...story} />
  ));

  return (
    <section className="space-y-5 pt-10 relative">
      <BackgroundShapes />
      <h1
        className={classNames(
          montserrat.className,
          "font-medium text-2xl text-center relative",
        )}
      >
        Success Stries
      </h1>
      <p className="text-center relative">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nemo
        reprehenderit itaque repudiandae molestias
      </p>
      <div className="grid xs:grid-cols-2 md:grid-cols-4">{displayStories}</div>
    </section>
  );
}
