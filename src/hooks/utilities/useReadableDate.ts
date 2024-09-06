import useTranslations from "hooks/useTranslations";
import { TMonth, type TLanguage } from "utils/translations/types";

function useReadableDate(inputDate: string) {
  const TRANSLATIONS: TLanguage = useTranslations();
  const MONTH_TRANSLATIONS: TMonth = TRANSLATIONS.months;

  function formatDate(inputDate: string) {
    if (!inputDate) {
      return "";
    }
    const dateParts: string[] = inputDate.split("-");
    const year: string = dateParts[0] || "";
    const month: number = parseInt(dateParts[1] || "", 10) - 1;
    const day: string = dateParts[2] || "";

    const formattedDate: Date = new Date(parseInt(year), month, parseInt(day));

    const dayWithSuffix: string = getDayWithSuffix(formattedDate.getDate());
    const monthName: string = formattedDate.toLocaleString("default", { month: "short" });
    const translatedMonthName: string = MONTH_TRANSLATIONS[monthName.toLowerCase() as keyof typeof MONTH_TRANSLATIONS];
    const fullYear: number = formattedDate.getFullYear();

    return `${dayWithSuffix} ${translatedMonthName} ${fullYear}`;
  }

  function getDayWithSuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return day + "th";
    }
    switch (day % 10) {
      case 1:
        return day + "st";
      case 2:
        return day + "nd";
      case 3:
        return day + "rd";
      default:
        return day + "th";
    }
  }

  return formatDate(inputDate);
}

export default useReadableDate;
