export interface ResponseTcgCard {
  data: TcgCard[];
}

export interface TcgCard {
  id: string;
  name: string;
  supertype: string;
  types?: string[];
  images: ImageSizes;
}

interface ImageSizes {
  large: string;
  small: string;
}
