import { useState } from "react"
import {useMountedRef} from 'utils'

interface State<D>{
  error: Error | null;
  data: D | null;
  stat: 'idle' | 'loading' | 'error' | 'success'
}

const defaultInitialState: State<null> = {
  stat: 'idle',
  error: null,
  data: null
}

const defaultConfig = {
  throwOnError: false
}

export const useAsync = <D>(initialState?: State<D>, initialConfig?: typeof defaultConfig) => {
  const config = {
    ...defaultConfig,
    ...initialConfig
  }
  const [state, setState] = useState({
    ...defaultInitialState,
    ...initialState
  })

  const setData = (data: D) => setState({
    data,
    stat: 'success',
    error: null,
  })

  const setError = (error: Error) => setState({
    error,
    data: null,
    stat: 'error'
  })

  const mountedRef = useMountedRef()

  const [retry, setRetry] = useState(() => () => {})

  const run = (promise: Promise<D>, runConfig?: {retry: () => Promise<D>}) => {
    if (!promise || !promise.then) throw new Error('请传入Promise数据类型')
    setState({...state, stat: 'loading'})

    setRetry(() => () => {
      if (runConfig?.retry) {
        run(runConfig?.retry(), runConfig)
      }
    })
    
    return promise
      .then(data => {
        if (mountedRef.current) setData(data)
        return data
      })
      .catch(error => {
        setError(error)
        if (config.throwOnError) return Promise.reject(error)
        return error
      })
  }


  // const retry = () => {
  //   run(oldPromise)
  // }

  return {
    isIdle: state.stat === 'idle',
    isLoading: state.stat === 'loading',
    isError: state.stat === 'error',
    isSuccess: state.stat === 'success',
    run,
    setData,
    setError,
    retry,
    ...state
  }
}