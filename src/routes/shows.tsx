import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router'
import TVShows from 'pages/TVShows'
import { PATHS } from 'utils/assets'

export const Route = createFileRoute(PATHS.SHOWS as keyof FileRoutesByPath)({
  component: TVShows
})
