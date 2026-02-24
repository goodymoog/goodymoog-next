export type ArtWork = {
  title: string;
  year?: string;
  medium?: string;
  size?: string;
  image: string; // URL or /public path
  note?: string;
};

export type ArtSeries = {
  slug: string;
  title: string;
  subtitle?: string;
  year?: string;
  location?: string;
  tags?: string[];
  leadImage?: string;
  description?: string; // short lead paragraph
  longText?: string[]; // detail paragraphs
  works?: ArtWork[];
};

export const ART: ArtSeries[] = [
  {
    slug: "wild-flowers",
    title: "Wild Flowers",
    tags: ["Photography", "Series"],
    // Add your lead image(s)
    leadImage: "/images/art/wild-flowers/cover.webp",
    description: "A photographic series exploring intimacy, texture, and color.",
    works: [
      // Add images/captions as you want
      { title: "Untitled 1", year: "2021", medium: "Photograph", image: "/images/art/wild-flowers/1.webp" },
      { title: "Untitled 2", year: "2021", medium: "Photograph", image: "/images/art/wild-flowers/2.webp" },
    ],
  },

  {
    slug: "shattered-sidewalks",
    title: "Shattered Sidewalks",
    tags: ["Digital Print", "Series"],
    leadImage: "/images/art/shattered-sidewalks/cover.webp",
    works: [
      {
        title: "Night",
        year: "2021",
        medium: 'Digital Print',
        size: '24" × 36"',
        image: "/images/art/shattered-sidewalks/night.webp",
      },
      {
        title: "Fire",
        year: "2021",
        medium: 'Digital Print',
        size: '24" × 36"',
        image: "/images/art/shattered-sidewalks/fire.webp",
      },
      {
        title: "Destruction",
        year: "2021",
        medium: 'Digital Print',
        size: '24" × 36"',
        image: "/images/art/shattered-sidewalks/destruction.webp",
      },
    ],
  },

  {
    slug: "kinetic-sculptures",
    title: "Kinetic Sculptures",
    tags: ["Digital Print", "Series"],
    leadImage: "/images/art/kinetic-sculptures/cover.webp",
    works: [
      { title: "Branch", year: "2021", medium: "Digital Print", size: '18" × 24"', image: "/images/art/kinetic-sculptures/branch.webp" },
      { title: "Wrench", year: "2021", medium: "Digital Print", size: '18" × 24"', image: "/images/art/kinetic-sculptures/wrench.webp" },
      { title: "Satellite", year: "2021", medium: "Digital Print", size: '18" × 24"', image: "/images/art/kinetic-sculptures/satellite.webp" },
      { title: "Key Hole", year: "2021", medium: "Digital Print", size: '18" × 24"', image: "/images/art/kinetic-sculptures/key-hole.webp" },
    ],
  },

  {
    slug: "the-washingtons",
    title: "The Washingtons",
    tags: ["Digital Print", "Portrait"],
    leadImage: "/images/art/the-washingtons/cover.webp",
    works: [
      { title: "Carrie Washington", year: "2021", medium: "Digital Print", size: '24" × 36"', image: "/images/art/the-washingtons/carrie.webp" },
      { title: "Albert Washington", year: "2021", medium: "Digital Print", size: '24" × 36"', image: "/images/art/the-washingtons/albert.webp" },
      { title: "Leisure", year: "2021", medium: "Digital Print", size: '24" × 36"', image: "/images/art/the-washingtons/leisure.webp" },
    ],
  },

  {
    slug: "new-mexico",
    title: "New Mexico",
    year: "2020",
    location: "Santa Fe, NM",
    tags: ["Photography", "Sound", "Collage"],
    // If you want to use the Squarespace CDN images directly, paste URLs here.
    // Example (from your page): https://images.squarespace-cdn.com/...
    leadImage: "/images/art/new-mexico/cover.webp",
    description:
      "A body of work about re-entering the world after confinement—nature as texture, geometry, sound, and emotional progression.",
    longText: [
      // Keep these as your own words / edited version (I’m not copying the whole Squarespace essay here).
      "During confinement, the outside world narrowed to brief, cautious encounters. A trip to Santa Fe became a slow return to air, color, and space.",
      "The work documents early outings, then expands into sound and digital collage—pushing beyond static landscape photography toward interaction and curiosity.",
      "Titled as a progression (Invitation → Intégration → Immersion), the series uses scale and sequence to mirror intensifying emotion.",
    ],
    works: [
      { title: "Invitation", size: "60 cm × 30 cm", image: "/images/art/new-mexico/invitation.webp" },
      { title: "Intégration", size: "1 m × 50 cm", image: "/images/art/new-mexico/integration.webp" },
      { title: "Immersion", size: "1.50 m × 75 cm", image: "/images/art/new-mexico/immersion.webp" },
    ],
  },

  {
    slug: "etude-comparative",
    title: "Étude comparative",
    tags: ["Series"],
    leadImage: "/images/art/etude-comparative/cover.webp",
    description: "Comparative study series (add details + works here).",
    works: [],
  },
];