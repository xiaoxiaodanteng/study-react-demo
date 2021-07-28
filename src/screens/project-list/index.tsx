import React from 'react'
import {SearchPanel} from './search-panel'
import {List} from './list'

import { Button, Typography } from 'antd'

import {useProjects} from 'utils/project'
import {useUsers} from 'utils/user'
import { useDebounce, useDocumentTitle } from 'utils'
import { useProjectsSearchParams } from './utils'
// import { Helmet } from 'react-helmet'
export const ProjectListScreen = () => {
  // const [, setParam] = useState({
  //   name: '',
  //   personId: ''
  // })

  const [param, setParam] = useProjectsSearchParams()
  const debouncedParam = useDebounce(param, 200)
  const {isLoading, error, data: list, retry} = useProjects(debouncedParam)
  const {data: users} = useUsers()
console.log(retry)
  useDocumentTitle('项目列表', false)

  return <div>
    {/* <Helmet>
      <title>项目列表</title>
    </Helmet> */}
    {/* <Button onClick={retry}>retry</Button> */}
    <SearchPanel users={users||[]} param={param} setParam={setParam}/>
    {error ? <Typography.Text type="danger">{error.message}</Typography.Text> : null}
    <List loading={isLoading} users={users||[]} dataSource={list || []}/>
  </div>
}

ProjectListScreen.whyDidYouRender = false