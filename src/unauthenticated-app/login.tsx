import React from 'react'
import {useAuth} from 'context/auth-context'
import {Form, Input,Button} from 'antd'

export const LoginScreen = () => {
  const {login, user} = useAuth()

  const handleSubmit = ({username, password}: {username: string, password: string}) => {

    login({username, password})
  }

  return <Form onFinish={handleSubmit}>
    {
      user ? <div>登录成功，用户名：{user?.name}</div> : null
    }
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input type="password"/>
    </Form.Item>
    <Form.Item>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
  </Form>
}