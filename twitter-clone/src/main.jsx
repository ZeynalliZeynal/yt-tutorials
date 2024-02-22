import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import routes from './routes'
import './assets/css/tailwind.css'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "~/dev/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <DevSupport ComponentPreviews={ComponentPreviews}
                  useInitialHook={useInitial}
      >
        <RouterProvider router={routes}/>
      </DevSupport>
    </React.StrictMode>
)
