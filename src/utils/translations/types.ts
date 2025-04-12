export type TMonth = {
  jan: string;
  feb: string;
  mar: string;
  apr: string;
  may: string;
  jun: string;
  jul: string;
  aug: string;
  sept: string;
  oct: string;
  nov: string;
  dec: string;
};

export type TMonths = {
  en: TMonth;
  da: TMonth;
  es: TMonth;
};

export type TErrorMessage = "invalidEmail" | "invalidPassword" | "passwordMismatch" | "fullNameRequired" | "invalidCredentials" | "emptyEmail" | "emptyPassword" | "";

export enum EnumLanguages {
  ENGLISH = "en",
  DANISH = "da",
  SPANISH = "es"
};