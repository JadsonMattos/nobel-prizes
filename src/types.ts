export type NobelPrizeType = {
  dateAwarded: string;
  category: {
    en: string;
  };
  categoryFullName: {
    en: string;
  };
  laureates: LaureateType[],
};

export type LaureateType = {
  id: string,
  knownName: {
    en: string,
  };
  orgName: {
    en: string,
  }
  motivation: {
    en: string,
  };
};

export type State = {
  prizes: NobelPrizeType[],
};
