import React, {ReactNode, useState} from 'react';

const TestContext = React.createContext({
  loading: false,
  toggleLoading: (loading: boolean) => {}
})
TestContext.displayName = 'Test'

export const TestProvider = ({children }: { children: ReactNode}) => {
  const [loading, setLoading] = useState(false)
  const toggleLoading = (loading: boolean) => setLoading(loading)
  return <TestContext.Provider children={children} value={{
    loading,
    toggleLoading
  }}/>
}

export const useTest = () => {
  return React.useContext(TestContext)
}