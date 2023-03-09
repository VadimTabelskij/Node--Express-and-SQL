export type CarsModel = {
  id:number,
  brands:string,
  location: {
    country: string,
    city:string,
  },
  images: string[],
  style: string,
};

export type CarsData = Omit<CarsModel, 'id'>;

export type PartialCarData = Partial<CarsData>;

export type CarDataBody = PartialRecursive<CarsData>;
