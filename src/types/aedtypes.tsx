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

export type ResponseType = {
  all_data: ResponseDataType[];
  max: number;
  keywords: string[];
};

export type ResponseDataType = {
  url: string;
  confidence: number;
  title: string;
  source: string;
  domain: string;
  link: string;
  google_url: string;
  position: number;
  base64: string;
  keyword: string;
};
