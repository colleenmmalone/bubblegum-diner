import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import Header from '../components/ui/Header'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Bubblegum Diner',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => <div className='flex justify-center items-center h-screen text-primary text-3xl'><div className='bg-white p-4'>404 Not Found</div></div>,
})


function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="min-h-screen pt-[40px] sm:pt-[88px] bg-cream">
          <Header />
          {children}
          <Scripts />
        </div>
      </body>
    </html>
  )
}
