//discount interface to represent each discount

export interface Discount {
  discount: string; //discount's name and code
  active: boolean; // the discount can be active or not.
  number?: number; //number associated to the discount for example in 2x1
}
