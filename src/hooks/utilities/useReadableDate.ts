import useTranslations from "hooks/useTranslations";
import { type LanguageType } from "utils/translations/types";

function useReadableDate(inputDate: string) {
  const TRANSLATIONS: LanguageType = useTranslations();
  const MONTH_TRANSLATIONS = TRANSLATIONS.months;

  function formatDate(inputDate: string) {
    if (!inputDate) {
      return "";
    }
    let dateParts: string[] = inputDate.split("-");
    let year: string = dateParts[0] || "";
    let month: number = parseInt(dateParts[1] || "", 10) - 1;
    let day: string = dateParts[2] || "";

    let formattedDate = new Date(parseInt(year), month, parseInt(day));

    let dayWithSuffix = getDayWithSuffix(formattedDate.getDate());
    let monthName = formattedDate.toLocaleString("default", { month: "short" });
    let translatedMonthName = MONTH_TRANSLATIONS[monthName.toLowerCase() as keyof typeof MONTH_TRANSLATIONS];
    let fullYear = formattedDate.getFullYear();

    return `${dayWithSuffix} ${translatedMonthName} ${fullYear}`;
  }

  function getDayWithSuffix(day: number) {
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
