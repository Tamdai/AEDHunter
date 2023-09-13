export type Position = {
  label: string;
  value: string;
};

export type ImageItem = {
  title: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  thumbnailUrl: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  source: string;
  domain: string;
  link: string;
  googleUrl: string;
  position: number;
};

export type ResultType = {
  data: {
    average: string;
    items: ResultDataType[];
    max: number;
    keywords: string[];
  };
  message: string;
};

export type ResultDataType = {
  image: string;
  weight: number;
  source: string;
};
