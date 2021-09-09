import React, {Suspense} from 'react'
import { Switch, Route } from 'react-router-dom'
import Routes from './routes'

export default function Router() {
    return (
        <Suspense fallback={<h1>Esperalo...</h1>}>
            <Switch>
                {Routes.map((routeProps) => (
                    <Route {...routeProps}/>
                ))}
            </Switch>

        </Suspense>
    )
}