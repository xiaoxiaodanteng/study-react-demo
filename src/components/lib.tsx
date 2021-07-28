import styled from '@emotion/styled'
import { Spin, Typography } from 'antd'
import { DevTools } from 'jira-dev-tool'
import React from 'react'

export const Row = styled.div<{
  gap?: number | boolean,
  between?: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.between ? 'space-between' : undefined};
  > * {
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    margin-right: ${props => typeof props.gap === 'number' ? props.gap + 'rem' : props.gap ? '2rem' : undefined};
  }
`

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FullPageLoading = () => <FullPage><Spin size="large" /></FullPage>

export const FullPageErrorFallBack = ({error}: {error: Error | null}) => <FullPage>
  <DevTools/>
  <Typography.Text type="danger">{error?.message}</Typography.Text>
</FullPage>