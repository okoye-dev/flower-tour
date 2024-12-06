import { Flower } from "@/components/FlowersTour";

export const getFlowersConfig = () => {
  return flowers;
};

const flowers: Flower[] = [
  {
    id: 1,
    name: "Rose",
    image: "/images/rose.jpg",
    description: (
      <p>
        The rose is often considered the queen of flowers, admired for its
        beauty and fragrance. They&apos;re said to have been around for over 35
        million years.
        <br />A timeless symbol of love and passion—like the love that grows
        stronger every day. <br />
      </p>
    ),
    extras:
      "Roses frequently appear in Vampire myths, symbolizing forbidden love or an eternal longing, huhuhuuu...",
  },
  {
    id: 2,
    name: "Lotus",
    image: "/images/lotus.jpg",
    description: (
      <p>
        The lotus is revered for its ability to bloom beautifully even in muddy
        waters, symbolizing purity and spiritual awakening. This flower reminds
        us that love can shine through challenges, just like our journey
        together :3
      </p>
    ),
  },
  {
    id: 3,
    name: "Tulip",
    image: "/images/tulip.jpg",
    description: (
      <div>
        Tulips are a springtime favorite and come in almost every color
        imaginable. Historically, tulips were more valuable than gold during the
        "Tulip Mania" in the 17th century. They represent perfect love,
        something to strive for, something worth striving for. <br />
      </div>
    ),
    extras:
      "With their fleeting beauty, they symbolize perfect yet ephemeral love.Resonating with poetry on loss and unrequited affection, the kind the tugs at your heart strings.",
  },
  {
    id: 4,
    name: "Lily",
    image: "/images/lily.jpg",
    description: (
      <p>
        Lilies symbolize purity and refined beauty. You&apos;re not so pure
        anymore, girly girl hehe, but it could contend for a favourite.
      </p>
    ),
    extras:
      "In Greek mythology, lilies are associated with Hera, the queen of the gods. They remind us that true beauty is as pure as the feelings we share.",
  },
  {
    id: 5,
    name: "Orchid",
    image: "/images/orchid.jpg",
    description: (
      <p>
        Orchids are exotic and elegant flowers, representing love, beauty, and
        strength. Apparently, some species can live for up to 100 years.
      </p>
    ),
    extras:
      "Orchids remind me that the love we are building and choosing, like these flowers, is rare and enduring.",
  },
  {
    id: 6,
    name: "Magnolia",
    image: "/images/magnolia.jpg",
    description: (
      <p>
        Magnolias are known for their large, fragrant blossoms and are symbols
        of dignity and perseverance. A magnolia&apos;s grace can relfect the
        elegance of our shared moments.
      </p>
    ),
  },

  {
    id: 7,
    name: "Peony",
    image: "/images/peony.jpg",
    description: (
      <p>
        Peonies are lush and fragrant, symbolizing prosperity and romance.{" "}
        <br /> <br />
        In Chinese culture, they are known as the "king of flowers" and
        represent honor and wealth.
      </p>
    ),
    extras:
      "A peony's bloom mirrors the richness of the love I feel for you. I know, I'm dazzling you rn.",
  },
  {
    id: 8,
    name: "Lavender",
    image: "/images/lavender.jpg",
    description: (
      <p>
        Lavender is prized for its calming scent and is often used in
        aromatherapy. Fancyyy. <br /> In the language of flowers, lavender
        symbolizes devotion and serenity.
      </p>
    ),

    extras:
      "Its soothing presence reminds me of the peace and happiness you bring into my life. (And orgasms.)",
  },
  {
    id: 9,
    name: "Camellia",
    image: "/images/camellia.jpg",
    description: (
      <p>
        Camellias symbolize admiration and perfection. They&apos;re native to
        Asia and are often associated with the idea of a romantic destiny.
      </p>
    ),
    extras:
      "Do I believe in destiny? I don't know, but I do believe in you, Adebimpe.",
  },
  {
    id: 10,
    name: "Hydrangea",
    image: "/images/hydrangea.jpg",
    description: (
      <p>
        Hydrangeas represent gratitude, grace, and heartfelt emotions. All the
        stuff you hate. <br />
        These flowers change color based on soil pH, so...adaptability and
        change?
      </p>
    ),
    extras:
      "You've heard of hydrangea? You've seen hydrangea? You're hydrangea, my love.",
  },
  {
    id: 11,
    name: "Marigold",
    image: "/images/marigold.jpg",
    description: (
      <p>
        Marigolds are vibrant flowers that symbolize warmth and creativity. In
        some cultures, they are used to honor loved ones and celebrate life.
      </p>
    ),
    extras:
      "A marigold's fiery hues remind me of the passion and joy you inspire in my heart, Mon couer. Also the blood you excite into my...yeah, moving on...",
  },
  {
    id: 12,
    name: "Chrysanthemum",
    image: "/images/chrysanthemum.jpg",
    description: (
      <p>
        The name alone gets it a spot on this list. Chrysanthemums symbolize joy
        and longevity. In Japan (It's always Asia, sigh), they are celebrated as
        a symbol of the sun and the emperor.
      </p>
    ),

    extras: "Beautiful name for a beautiful flower, dontcha think?",
  },
];
