import { montserrat } from "@/app/assets";
import { Story } from "@/app/sections/stories";
import classNames from "classnames";
import Image from "next/image";

export default function StoryListItem({ image, name, story }: Story) {
  return (
    <div className="relative h-96">
      <Image
        src={image}
        alt={`${name} image`}
        className="size-full object-top object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col *:px-5 gap-5 justify-end">
        <h3 className={classNames(montserrat.className, "font-medium text-xl")}>
          {name}
        </h3>
        <p className="bg-black py-5">&quot; {story} &quot;</p>
      </div>
    </div>
  );
}
