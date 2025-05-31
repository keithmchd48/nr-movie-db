import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router'
import Browse from 'pages/Browse'
import { PATHS } from 'utils/assets'

export const Route = createFileRoute(PATHS.BROWSE as keyof FileRoutesByPath)({
  component: Browse,
})
