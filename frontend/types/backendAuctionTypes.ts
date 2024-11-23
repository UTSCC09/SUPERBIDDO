export type AccountInput = {
  email: string;
  password: string;
  username: string;
};

export type Account = {
  accountId: string;
  email: string;
  username: string;
};

export type AuctionInput = {
  auctioneerId: string;
  name: string;
  description?: string;
  startPrice: number;
  spread: number;
  startTime: Date;
  endTime: Date;
} & (
  | { cards: CardInput[]; bundle?: never }
  | { cards?: never; bundle: BundleInput }
);

export type Auction = {
  auctionId: string;
  auctioneer: Account;
  name: string;
  description?: string;
  startPrice: number;
  spread: number;
  minNewBidPrice: number;
  startTime: Date;
  endTime: Date;
  topBid: Bid;
  numBids: number;
} & ({ cards: Card[]; bundle?: never } | { cards?: never; bundle: Bundle });

export type CardInput = {
  game: Game;
  name: string;
  description?: string;
  manufacturer: string;
  quality: Quality;
  rarity: Rarity;
  set: string;
  isFoil: boolean;
};

export type BidDetails = {
  amount: number;
  auctionId: string;
  bidId: string;
  bidder: {
    accountId: string;
    email: string;
    username: string;
  };
  timestamp: string;
};

export type Card = {
  cardId: string;
  game: Game;
  name: string;
  description?: string;
  manufacturer: string;
  quality: Quality;
  rarity: Rarity;
  set: string;
  isFoil: boolean;
};

export type BundleInput = {
  game: Game;
  name: string;
  description?: string;
  manufacturer: string;
  set: string;
};

export type Bundle = {
  bundleId: string;
  game: Game;
  name: string;
  description?: string;
  manufacturer: string;
  set: string;
};

export type BidInput = {
  bidderId: string;
  amount: number;
};

export type Bid = {
  bidId: string;
  auctionId: string;
  bidder: Account;
  amount: number;
  timestamp: Date;
};

export enum Game {
  MTG = "MTG",
  YGO = "YGO",
  PKM = "PKM",
  DBS = "DBS",
  FF = "FF",
  WS = "WS",
  VG = "VG",
}

export enum Quality {
  NM = "NM",
  LP = "LP",
  MP = "MP",
  HP = "HP",
}

export type CardRarities = {
  MTG: {
    rarities: [
      "Common",
      "Uncommon",
      "Rare",
      "Mythic Rare",
      "Special / Bonus Cards",
      "Basic Land",
      "Masterpiece Series",
      "Promos",
      "Extended Art",
      "Borderless"
    ];
  };
  Pokemon: {
    rarities: [
      "Common",
      "Uncommon",
      "Rare",
      "Holo Rare",
      "Reverse Holo",
      "Rare Holo V",
      "Ultra Rare",
      "Full Art",
      "Secret Rare",
      "Amazing Rare",
      "Rainbow Rare",
      "Gold Secret Rare",
      "Promos",
      "Radiant Collection"
    ];
  };
  Yugioh: {
    rarities: [
      "Common",
      "Rare",
      "Super Rare",
      "Ultra Rare",
      "Secret Rare",
      "Ultimate Rare",
      "Ghost Rare",
      "Starlight Rare",
      "Collector’s Rare",
      "Prismatic Secret Rare",
      "Parallel Rare",
      "Platinum Rare"
    ];
  };
};

export enum Rarity {
  C = "C",
  U = "U",
  R = "R",
  M = "M",
}

export type AuctionSelfType = "biddings" | "listings";
