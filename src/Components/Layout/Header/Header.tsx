import {
	IonHeader,
	IonSegment,
	IonSegmentButton,
	IonToolbar
} from '@ionic/react'
import { FC } from 'react'

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
	return (
		<IonHeader>
			<IonToolbar>
				{/*<IonTitle>Menu Content</IonTitle>*/}
				<IonSegment value="all">
					<IonSegmentButton value="all">All</IonSegmentButton>
					<IonSegmentButton value="favorites">Favorites</IonSegmentButton>
				</IonSegment>
			</IonToolbar>
		</IonHeader>
	)
}
