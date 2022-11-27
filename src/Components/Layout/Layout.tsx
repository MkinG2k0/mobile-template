import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenu,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar
} from '@ionic/react'
import { Header } from 'Components/Layout/Header/Header'
import { Menu } from 'Components/Layout/Menu/Menu'
import { FC } from 'react'

import style from './Layout.module.scss'

export const Layout: FC = ({ children }) => {
	return (
		<>
			<IonMenu contentId="main-content">
				<Header />
				<Menu />
			</IonMenu>
			<IonPage id="main-content">
				<IonHeader>
					<IonToolbar>
						<IonButtons slot="start">
							<IonMenuButton></IonMenuButton>
						</IonButtons>
						<IonTitle>Menu</IonTitle>
					</IonToolbar>
				</IonHeader>
				<IonContent className="ion-padding">{children}</IonContent>
			</IonPage>
		</>
	)
}
