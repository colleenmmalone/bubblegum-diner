import { createFileRoute } from '@tanstack/react-router'
import PageContainer from './layout/page-container'

export const Route = createFileRoute('/about')({ component: About })

function About() {


  return (
    <PageContainer>
      about
    </PageContainer>
  )
}
