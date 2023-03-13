export type CarsModel = {
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

export type CarsData = Omit<CarsModel, 'id' | 'person' | 'location' | 'type'> & {
  cityId: number,
  brandId: number
};

export type PartialCarData = Partial<CarsData>;

export type CarDataBody = PartialRecursive<CarsData>;
