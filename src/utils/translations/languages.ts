import { type LanguageInterface, type SupportedLanguageType } from "utils/translations/types";
import {MONTHS} from 'utils/translations/months';

export const LANG: LanguageInterface = {
  en: {
    identifier: 'en',
    label: 'EN',
    validations: {
      invalidEmail: 'Email format is invalid',
      invalidPassword: 'Password must contain at least 8 characters, one letter, one number and one special character',
      passwordMismatch: 'Passwords do not match',
      fullNameRequired: 'Full name is required',
      invalidCredentials: 'Invalid credentials'
    },
    auth: {
      newToApp: 'New here?',
      alreadyMember: 'Already have an account?',
      signIn: 'Sign In',
      signUp: 'Sign Up',
      signUpNow: 'Sign up now.',
      signInNow: 'Sign in.',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Password',
      fullNamePlaceholder: 'Full Name',
      confirmPasswordPlaceholder: 'Confirm Password',
    },
    headerMenu: {
      home: 'Home',
      shows: 'TV Shows',
      movies: 'Movies',
      searchPlaceholder: 'Titles, people, genres',
      profileDropdown: {
        signOut: 'Sign out',
      }
    },
    play: 'Play',
    moreInfo: 'More Info',
    browse: {
      nowPlaying: 'Now Playing',
      tvShows: 'TV Shows',
      topRatedMovies: 'Top Rated Movies',
    },
    shows: {
      airingToday: 'Airing Today',
      onTheAir: 'On The Air',
      topRated: 'Top Rated',
    },
    movies: {
      nowPlaying: 'Now Playing',
      upcoming: 'Upcoming Movies',
      topRated: 'Top Rated Movies'
    },
    footer: {
      madeBy: 'Made by'
    },
    months: MONTHS.en,
    searchResults: {
      movies: 'Movies',
      tvShows: 'TV Shows',
      searching: 'Searching...',
    },
    error: {
      message: "Something went wrong.",
      cta: "Go back to home",
    },
    headTitles: {
      login: "Login",
      browse: "Home",
      shows: "TV Shows",
      movies: "Movies",
      error: "Error",
    },
    loadingText: 'Loading...',
  },
  dk: {
    identifier: 'dk',
    label: 'DK',
    validations: {
      invalidEmail: 'Email format er ugyldig',
      invalidPassword: 'Adgangskoden skal indeholde mindst 8 tegn, et bogstav, et tal og et specialtegn',
      passwordMismatch: 'Adgangskoderne matcher ikke',
      fullNameRequired: 'Fulde navn er påkrævet',
      invalidCredentials: 'Ugyldige legitimationsoplysninger'
    },
    auth: {
      newToApp: 'Ny her?',
      alreadyMember: 'Har du allerede en konto',
      signIn: 'Log ind',
      signUp: 'Tilmeld dig',
      signUpNow: 'Tilmeld dig nu.',
      signInNow: 'Log ind.',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Adgangskode',
      fullNamePlaceholder: 'Fulde navn',
      confirmPasswordPlaceholder: 'Bekræft adgangskode',
    },
    headerMenu: {
      home: 'Hjem',
      shows: 'TV Shows',
      movies: 'Film',
      searchPlaceholder: 'Titler, personer, genrer',
      profileDropdown: {
        signOut: 'Log ud',
      }
    },
    play: 'Afspil',
    moreInfo: 'Mere info',
    browse: {
      nowPlaying: 'Nu spiller',
      tvShows: 'TV Shows',
      topRatedMovies: 'Bedst bedømte film',
    },
    shows: {
      airingToday: 'Luftning i dag',
      onTheAir: 'På luften',
      topRated: 'Bedst bedømte',
    },
    movies: {
      nowPlaying: 'Nu spiller',
      upcoming: 'Kommende film',
      topRated: 'Bedst bedømte film'
    },
    footer: {
      madeBy: 'Lavet af'
    },
    months: MONTHS.dk,
    searchResults: {
      movies: 'Film',
      tvShows: 'TV Shows',
      searching: 'Søger...'
    },
    error: {
      message: "Noget gik galt.",
      cta: "Gå tilbage til hjemmet"
    },
    headTitles: {
      login: "Log ind",
      browse: "Hjem",
      shows: "TV Shows",
      movies: "Film",
      error: "Fejl",
    },
    loadingText: 'Indlæser...',
  },
  es: {
    identifier: 'es',
    label: 'ES',
    validations: {
      invalidEmail: 'El formato de correo electrónico es inválido',
      invalidPassword: 'La contraseña debe contener al menos 8 caracteres, una letra, un número y un carácter especial',
      passwordMismatch: 'Las contraseñas no coinciden',
      fullNameRequired: 'Se requiere el nombre completo',
      invalidCredentials: 'Credenciales inválidas'
    },
    auth: {
      newToApp: '¿Nuevo aqui?',
      alreadyMember: '¿Ya tienes una cuenta?',
      signIn: 'Iniciar sesión',
      signUp: 'Regístrate',
      signUpNow: 'Regístrate ahora.',
      signInNow: 'Iniciar sesión.',
      emailPlaceholder: 'Correo electrónico',
      passwordPlaceholder: 'Contraseña',
      fullNamePlaceholder: 'Nombre completo',
      confirmPasswordPlaceholder: 'Confirmar contraseña',
    },
    headerMenu: {
      home: 'Inicio',
      shows: 'Series',
      movies: 'Películas',
      searchPlaceholder: 'Títulos, personas, géneros',
      profileDropdown: {
        signOut: 'Cerrar sesión',
      }
    },
    play: 'Reproducir',
    moreInfo: 'Más información',
    browse: {
      nowPlaying: 'Reproduciendo ahora',
      tvShows: 'Series de televisión',
      topRatedMovies: 'Películas mejor calificadas',
    },
    shows: {
      airingToday: 'En el aire hoy',
      onTheAir: 'En el aire',
      topRated: 'Mejor calificado',
    },
    movies: {
      nowPlaying: 'Reproduciendo ahora',
      upcoming: 'Próximas películas',
      topRated: 'Películas mejor calificadas'
    },
    footer: {
      madeBy: 'Hecho por'
    },
    months: MONTHS.es,
    searchResults: {
      movies: 'Películas',
      tvShows: 'Series de televisión',
      searching: 'Buscando...'
    },
    error: {
      message: "Algo salió mal.",
      cta: "Volver al inicio"
    },
    headTitles: {
      login: "Iniciar sesión",
      browse: "Inicio",
      shows: "Series",
      movies: "Películas",
      error: "Error",
    },
    loadingText: 'Cargando...',
  }
};
export const SUPPORTED_LANGUAGES: SupportedLanguageType[] = [
  {identifier: LANG['en'].identifier, label: LANG['en'].label},
  {identifier: LANG['dk'].identifier, label: LANG['dk'].label},
  {identifier: LANG['es'].identifier, label: LANG['es'].label}
];