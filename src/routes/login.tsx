import { createFileRoute, FileRoutesByPath } from '@tanstack/react-router'
import AuthPage from 'pages/AuthPage'
import { PATHS } from 'utils/assets'

export const Route = createFileRoute(PATHS.LOGIN as keyof FileRoutesByPath)({
  component: AuthPage
})
