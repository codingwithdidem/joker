export type Category =
  | "Any"
  | "Misc"
  | "Programming"
  | "Dark"
  | "Pun"
  | "Spooky"
  | "Christmas";

export type Flag = {
  explicit: boolean;
  nsfw: boolean;
  political: boolean;
  racist: boolean;
  religious: boolean;
  sexist: boolean;
};

export type FlagKeys =
  | "explicit"
  | "nsfw"
  | "political"
  | "racist"
  | "sexist"
  | "religious";

export type Joke = {
  id: number;
  category: Category;
  delivery?: string;
  setup?: string;
  joke?: string;
  lang: "cs" | "de" | "en" | "es" | "fr" | "pt";
  safe: boolean;
  flags: Flag;
  type: "single" | "twopart";
};
