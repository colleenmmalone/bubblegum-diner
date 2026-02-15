import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/menu')({ component: Menu })

function Menu() {


  return (
    // <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-20 px-6 text-center overflow-hidden">
       menu
        
      </section>
    // </div>
  )
}
