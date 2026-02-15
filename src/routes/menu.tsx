import { createFileRoute } from '@tanstack/react-router'
import PageContainer from './layout/page-container'
import MenuGrid from './menu/menu-grid'
import PageTitle from './layout/page-title'

export const Route = createFileRoute('/menu')({ component: Menu })

function Menu() {


  return (
    <PageContainer>
      <PageTitle title='Our Menu' />
      <MenuGrid />
    </PageContainer>
  )
}
