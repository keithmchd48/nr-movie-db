import { useTranslation } from "react-i18next";

function FormattedDate({ date }: { date: string }) {
  const datetime = new Date(date);
  const { t } = useTranslation();
  
  return (
    <p className="text-sm">
      {t('intlDateTime', {
          val: datetime,
          formatParams: {
            val: { day: 'numeric', month: 'short', year: 'numeric' },
          },
        })}
    </p>
  )
};
export default FormattedDate;