export const LANG = {
  en: {
    identifier: 'en',
    label: 'EN',
    auth: {
      newToApp: 'New to Netflix?',
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
      gptSearchPlaceholder: 'Titles, people, genres',
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
      topRatedShows: 'Top Rated',
    },
    movies: {
      nowPlaying: 'Now Playing',
      upcoming: 'Upcoming Movies',
      topRated: 'Top Rated Movies'
    }
  },
  dk: {
    identifier: 'dk',
    label: 'DK',
    auth: {
      newToApp: 'Ny på Netflix?',
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
      gptSearchPlaceholder: 'Titler, personer, genrer',
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
      topRatedShows: 'Bedst bedømte',
    },
    movies: {
      nowPlaying: 'Nu spiller',
      upcoming: 'Kommende film',
      topRated: 'Bedst bedømte film'
    }
  },
  es: {
    identifier: 'es',
    label: 'ES',
    auth: {
      newToApp: '¿Nuevo en Netflix?',
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
      gptSearchPlaceholder: 'Títulos, personas, géneros',
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
      topRatedShows: 'Mejor calificado',
    },
    movies: {
      nowPlaying: 'Reproduciendo ahora',
      upcoming: 'Próximas películas',
      topRated: 'Películas mejor calificadas'
    }
  }
};
export const SUPPORTED_LANGUAGES = [
  {identifier: LANG.en.identifier, label: LANG.en.label},
  {identifier: LANG.dk.identifier, label: LANG.dk.label},
  {identifier: LANG.es.identifier, label: LANG.es.label}
];