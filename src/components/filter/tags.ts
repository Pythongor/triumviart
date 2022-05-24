const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

export const generalTags = [
  "children's art",
  "violent content",
  "adult content",
];

export const tags = {
  visual: {
    handcraft: [
      "glass",
      "monochrome",
      "paper",
      "plasticine",
      "minimalistic",
      "clay",
      "embroidery",
      "fabric",
    ],
    video: [
      "modern",
      "typography",
      "monochrome",
      "collage",
      "minimalistic",
      "pics",
      "visualiszation",
      "painting",
    ],
    photography: [
      "portrait",
      "reportage",
      "monochrome",
      "film",
      "collage",
      "documentary",
      "minimalistic",
      "city",
      "stories",
      "ruins",
      "people",
    ],
    graphic: [
      "modern",
      "typography",
      "monochrome",
      "collage",
      "minimalistic",
      "pics",
      "visualiszation",
      "painting",
    ],
  },
  sound: {
    music: [
      "indie",
      "classical",
      "ambient",
      "piano",
      "techno",
      "rock",
      "religious",
      "electronic",
      "folk",
      "trap",
      "rap",
    ],
    soundscapes: [
      "noice",
      "classical",
      "missile",
      "voice",
      "techno",
      "siren",
      "air-defence",
      "explosile",
      "echo",
      "installation",
      "scrape",
      "sweep",
    ],
    podcast: [
      "news",
      "documentary",
      "story",
      "talks",
      "interview",
      "people",
      "city",
    ],
  },
  textual: {
    poetry: [
      "news",
      "novel",
      "short story",
      "story",
      "talks",
      "interview",
      "heroic",
      "city",
      "fictional",
    ],
    prose: [
      "news",
      "documentary",
      "story",
      "talks",
      "interview",
      "people",
      "city",
    ],
    publicistic: [
      "news",
      "documentary",
      "story",
      "talks",
      "interview",
      "people",
      "city",
    ],
    drama: [
      "news",
      "documentary",
      "story",
      "talks",
      "interview",
      "people",
      "city",
    ],
  },
} as const;

export const categories: { [key: string]: string[] } = {
  ...Object.fromEntries(
    getKeys(tags).map((category) => [category, getKeys(tags[category])])
  ),
};

export const allCategories: string[] = getKeys(tags)
  .map((key) => getKeys(tags[key]))
  .flat();

const flattenTags: { [key: string]: string[] } = Object.values(tags).reduce(
  (prev, current) => Object.assign(prev, current),
  {}
);

export const tagsByCategory = Object.fromEntries(
  Object.entries(flattenTags).map(([key, value]) => [
    key,
    [...value, ...generalTags],
  ])
);
