import { createFileRoute } from '@tanstack/react-router'
import PageContainer from './layout/page-container'

export const Route = createFileRoute('/jukebox')({ component: Jukebox })

function Jukebox() {


  return (
    <PageContainer>
      jukebox
    </PageContainer>
  )
}
