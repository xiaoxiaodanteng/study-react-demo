import React from 'react'
import {User} from './search-panel'
import {Table, TableProps} from 'antd'
import {Link} from 'react-router-dom'
import { Pin } from 'components/pin'
import { useEditProject } from 'utils/project'

export interface Project {
  id: number;
  name: string;
  personId: number;
  organization: string;
  pin: boolean;
  created: number;
}

interface ListProps extends TableProps<Project>{
  users: User[];
}



export const List = ({users, ...props}: ListProps) => {
  const {mutate} = useEditProject()
  const pinProject = (id: number) => (pin: boolean) => mutate({id, pin})

  return <Table 
  pagination={false}
  rowKey='id'
  columns={[
    {
      title: <Pin checked={true} disabled></Pin>,
      render(value, project) {
        return <Pin checked={project.pin} onCheckedChange={pinProject(project.id)}></Pin>
      }
    },
    {
      title: '名称',
      sorter: (a,b) => a.name.localeCompare(b.name),
      render(value, project) {
        return <Link to={`/projects/${project.id}`}>{project.name}</Link>
      }
    },
    {
      title: '负责人',
      render(_, project) {
        return users.find(user => user.id === project.personId)?.name || '未知'
      }
    }
  ]}
  {...props}
  >
    
  </Table>
}