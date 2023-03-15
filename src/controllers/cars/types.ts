export type CarViewModel = {
  id:number,
  address: string,
  person: {
    id: number,
    name: string,
    surname: string,
    email: string,
    mobile: string,
  },
  location: {
    country: string,
    city:string,
  },
  type: {
    brand: string,
    model:string,
  },
  style: string,
  year: number,
  images: string[],
};

export type CarData = Omit<CarViewModel, 'id' | 'person' | 'location' | 'type'> & {
  cityId: number,
  brandId: number
};

export type PartialCarData = Partial<CarData>;

export type CarDataBody = PartialRecursive<CarData>;
