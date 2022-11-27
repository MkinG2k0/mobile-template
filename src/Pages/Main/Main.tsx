// import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner'
import {
	IonButton,
	IonContent,
	IonDatetime,
	IonNav,
	IonNavLink,
	useIonToast
} from '@ionic/react'
import { ActionBtn } from 'Components/ActionBtn/ActionBtn'
import { Recorder } from 'Components/Recorder/Recorder'
import { Segment } from 'Components/Segment/Segment'
import { Select } from 'Components/Select/Select'
import { globe } from 'ionicons/icons'
import AnyPage from 'Pages/AnyPage/AnyPage'

function Main() {
	return <IonNav root={() => <PageOne />}></IonNav>
}

const PageOne = () => {
	const [present] = useIonToast()

	const presentToast = (position: 'top' | 'middle' | 'bottom') => {
		present({
			message: 'Hello World!',
			duration: 1500,
			position: position,
			icon: globe
		})
	}

	const openScanner = async () => {
		// const data = await BarcodeScanner.scan()
		// console.log(`Barcode data: ${data.text}`)
	}

	return (
		<>
			<IonContent class="ion-padding">
				<h1>Page One</h1>
				<Segment />
				<Select />
				<Recorder />
				<IonButton onClick={openScanner}>Scan barcode</IonButton>
				<IonButton expand="block" onClick={() => presentToast('top')}>
					Present Toast At the Top
				</IonButton>
				<IonNavLink routerDirection="forward" component={() => <AnyPage />}>
					<IonButton>Go to Page Three</IonButton>
				</IonNavLink>
				<ActionBtn>Ok</ActionBtn>
				<IonDatetime></IonDatetime>
			</IonContent>
		</>
	)
}

export default Main
