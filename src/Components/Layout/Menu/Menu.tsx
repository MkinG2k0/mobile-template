import { IonContent } from '@ionic/react'
import { FC } from 'react'

import style from './Menu.module.scss'

interface MenuProps {}

export const Menu: FC<MenuProps> = ({}) => {
	return (
		<IonContent className="ion-padding">This is the menu content.</IonContent>
	)
}

