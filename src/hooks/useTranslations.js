import {LANG} from '../utils/languages';
import {useSelector} from 'react-redux';

const useTranslations = () => {
  const preferredLang = useSelector(store => store.config.preferredLang);
  return LANG[preferredLang];

};

export default useTranslations;