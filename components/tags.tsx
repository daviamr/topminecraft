import { ETags } from "@/enum/Tags";

const tagStyles: Record<string, string> = {
  [ETags.minigames]: "bg-yellow-100 text-yellow-800",
  [ETags.fullpvp]: "bg-red-100 text-red-800",
  [ETags.bedwars]: "bg-blue-100 text-blue-800",
  [ETags.factions]: "bg-green-100 text-green-800",
  [ETags.rankup]: "bg-purple-100 text-purple-800",
  [ETags.skyblock]: "bg-pink-100 text-pink-800",
};

const tagLabels: Record<string, string> = {
  [ETags.minigames]: "Minigames",
  [ETags.fullpvp]: "FullPvP",
  [ETags.bedwars]: "Bedwars",
  [ETags.factions]: "Factions",
  [ETags.rankup]: "Rankup",
  [ETags.skyblock]: "Skyblock",
};

export function TagBaloon({tag}: {tag: string}) {

  const style = tagStyles[tag] || "bg-gray-100 text-gray-800";
  const label = tagLabels[tag] || tag;

  return (
    <span className={`px-2 py-1 rounded-full text-sm font-medium ${style}`}>
      {label}
    </span>
  );

}

export default TagBaloon;