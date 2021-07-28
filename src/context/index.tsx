import { ReactNode } from 'react'
import {AuthProvider} from './auth-context'
import {TestProvider} from './test-context'
import {QueryClient, QueryClientProvider} from 'react-query'

export const AuthProviders = ({ children }: { children: ReactNode}) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>
        <TestProvider>
          { children }
        </TestProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}
