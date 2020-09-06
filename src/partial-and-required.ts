export {};

type Profiie = {
  name: string;
  age?: number;
  zipCode: number;
};

type PartialType = Partial<Profiie>;
type RequiredType = Required<Profiie>;
