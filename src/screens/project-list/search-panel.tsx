import React from 'react'
import {Input} from 'antd'
import { Project } from './list'
import { UserSelect } from 'components/user-select'

export interface User {
  id: number,
  name: string,
  organization: string,
  token: string
}

interface SearchPanelProps {
  users: User[],
  param: Partial<Pick<Project, 'name' | 'personId'>>;
  setParam: (param: SearchPanelProps['param']) => void;
}

export const SearchPanel = ({users, param, setParam}: SearchPanelProps) => {
  return <form>
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Input type="text" value={param.name} onChange={event => setParam({
        ...param,
        name: event.target.value
      })}/>
      <UserSelect defaultOptionName="负责人" value={param.personId} onChange={value => setParam({...param,personId: value})} ></UserSelect>
    </div>
  </form>
}