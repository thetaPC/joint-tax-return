import React, { FC } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import FormContainer from '../components/FormContainer';
import './Home.css';

const Home: FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonText>
              <h1>Calculate Tax Refund Split</h1>
            </IonText>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class='ion-padding'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calculate Tax Refund Split</IonTitle>
          </IonToolbar>
        </IonHeader>
        <FormContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
