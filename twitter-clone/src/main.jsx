import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import './assets/css/tailwind.css'
import { DevSupport } from '@react-buddy/ide-toolbox'
import { ComponentPreviews, useInitial } from '~/dev/index.js'
import { Provider } from 'react-redux'
import store from '~/store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </DevSupport>
  </React.StrictMode>,
)
