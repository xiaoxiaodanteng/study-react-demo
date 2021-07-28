import React from 'react';
import {ProjectListScreen} from 'screens/project-list'
import {useAuth} from 'context/auth-context'
import {Button} from 'antd'
import styled from '@emotion/styled'
import {Row} from 'components/lib'
import {Routes, Route} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import {ProjectScreen} from 'screens/project'

export const AuthenticatedApp = () => {
  
  return <Container>
    <PageHeader/>
    <Main>
      {/* <ProjectListScreen/> */}
      <Router>
        <Routes>
          <Route path="/projects" element={<ProjectListScreen/>}></Route>
          <Route path="/projects/:projectId/*" element={<ProjectScreen/>}></Route>
        </Routes>
      </Router>
    </Main>
  </Container>
}

const PageHeader = () => {
  const {logout} = useAuth()
  return <div>
    <HeaderItem gap={true}>
      <h2 css={{
        color: 'red'
      }}>998</h2>
      <h2>998</h2>
      <h2>998</h2>
    </HeaderItem>
    <Button onClick={logout}>退出登录</Button>
  </div>
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem calc(100vh - 6rem);
`

const Main = styled.main`
  height: calc(100vh - 6rem);
`

// const HeaderItem = styled(Row)`` // 必须带有`` 或{} 不然报错
const HeaderItem = styled(Row, {})`` 