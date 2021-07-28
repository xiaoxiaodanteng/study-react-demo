import React, {useState} from 'react'
import {RegisterScreen} from './register'
import {LoginScreen} from './login'
import {Card,Button} from 'antd'
import styled from '@emotion/styled'
// import { useDocumentTitle } from 'utils'
// import {Helmet} from 'react-helmet'

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false)
  // useDocumentTitle('请登录或注册')
  return <Container>
    {/* <Button onClick={() => {
      throw new Error('抛出了异常')
    }}>998</Button> */}
    {/* <Helmet>
      <title>请登录或注册</title>
    </Helmet> */}
    <ShadowCard>
    {
      isRegister ? <RegisterScreen/> : <LoginScreen/>
    }
    <Button onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? '登录' : '注册'}</Button>
    </ShadowCard>
  </Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ShadowCard = styled(Card)`
  width:40rem;
  min-height: 50rem;
  border-radius: .5rem;
`