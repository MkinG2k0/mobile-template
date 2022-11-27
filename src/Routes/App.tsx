import 'Style/font.scss'
import 'Style/global.scss'
import 'Style/variables.css'
import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

import { IonApp, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Layout } from 'Components/Layout/Layout'
import { FC, Suspense } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { persist, store } from 'Redux/Store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { components } from 'Routes/NAV'

setupIonicReact()

export function App() {
	return (
		<IonApp>
			<Provider store={store}>
				<PersistGate persistor={persist} loading={<Loader />}>
					<IonReactRouter>
						<Layout>
							<Suspense fallback={<Loader />}>
								{components.map(({ path, Component }) => (
									<Route key={path} path={path}>
										<Component />
									</Route>
								))}
							</Suspense>
						</Layout>
					</IonReactRouter>
				</PersistGate>
			</Provider>
		</IonApp>
	)
}

const Loader: FC = () => {
	return <>Load</>
}
