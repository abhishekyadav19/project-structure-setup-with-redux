import React, { Suspense } from 'react'
import {Route, Routes} from 'react-router-dom'


// routes config
import routes from '../../routes'

const loading = (
  <div className="text-center">
    <div className="">Loading...</div>
  </div>
)

const Content = () => {
  return (
    <Suspense fallback={loading}>
        <Routes>
          {routes.map((route, i) => {
            console.log(route)
            return (
              <Route key={route.name} path={route.path} element={<route.components/>} />)
          })}
        </Routes>
    </Suspense>
  )
}

export default React.memo(Content)