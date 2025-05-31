import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router'
import Movies from 'pages/Movies'
import { PATHS } from 'utils/assets'

export const Route = createFileRoute(PATHS.MOVIES as keyof FileRoutesByPath)({
  component: Movies
})
