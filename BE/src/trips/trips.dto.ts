export class TripDTO {
  readonly name: string;
  readonly direction: string;
  readonly price: number;
  readonly priceCurrency: string;
  readonly daysDuration: number;
  readonly description: string;
  readonly sightseeings: string[];
  readonly transport: string;
}

export class UpdateTripDTO {
  readonly direction: string;
  readonly price: number;
  readonly priceCurrency: string;
  readonly daysDuration: number;
  readonly description: string;
  readonly sightseeings: string[];
  readonly transport: string;
}
