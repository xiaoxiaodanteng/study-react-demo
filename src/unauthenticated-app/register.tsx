import React from 'react'
import {useAuth} from 'context/auth-context'
import { Form, Input, Button } from 'antd'

export const RegisterScreen = () => {

  const {register, user} = useAuth()


  const handleSubmit = (values: {username: string, password: string}) => {
    register(values)
  }

  return <Form onFinish={handleSubmit}>
  {
    user ? <div>注册成功，用户名：{user?.name}</div> : null
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
        注册
      </Button>
    </Form.Item>
</Form>
}