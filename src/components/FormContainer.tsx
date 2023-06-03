import React, { FC, useState, useEffect } from 'react';
import { IonInput, IonButton } from '@ionic/react';
import './FormContainer.css';

interface ContainerProps { }

const FormContainer: FC<ContainerProps> = () => {
  const [totalTaxesOwed, setTotalTaxesOwed] = useState(0);
  const [totalJointIncome, setTotalJointIncome] = useState(0);
  const [taxRate, setTaxRate] = useState(0);

  const [personATotalIncome, setPersonATotalIncome] = useState(0);
  const [personBTotalIncome, setPersonBTotalIncome] = useState(0);

  const [personATotalWithheld, setPersonATotalWithheld] = useState(0);
  const [personBTotalWithheld, setPersonBTotalWithheld] = useState(0);

  const [personATotalOwed, setPersonATotalOwed] = useState(0);
  const [personBTotalOwed, setPersonBTotalOwed] = useState(0);
  const [personATotalOwedRounded, setPersonATotalOwedRounded] = useState(0);
  const [personBTotalOwedRounded, setPersonBTotalOwedRounded] = useState(0);

  const [personATotalRefund, setPersonATotalRefund] = useState(0);
  const [personBTotalRefund, setPersonBTotalRefund] = useState(0);
  const [personATotalRefundRounded, setPersonATotalRefundRounded] = useState(0);
  const [personBTotalRefundRounded, setPersonBTotalRefundRounded] = useState(0);

  const [totalRefund, setTotalRefund] = useState(0);
  const [totalRefundRounded, setTotalRefundRounded] = useState(0);

  const calculate = (event: any) => {
    event.preventDefault();

    const rate = totalTaxesOwed / totalJointIncome;

    const personAOwed = personATotalIncome * rate;
    const personBOwed = personBTotalIncome * rate;

    // round to 2 decimal places
    const personAOwedRounded = Math.round(personAOwed * 100) / 100;
    const personBOwedRounded = Math.round(personBOwed * 100) / 100;

    const personARefund = personATotalWithheld - personAOwed;
    const personBRefund = personBTotalWithheld - personBOwed;

    const personARefundRounded = Math.round(personARefund * 100) / 100;
    const personBRefundRounded = Math.round(personBRefund * 100) / 100;

    const totalRefund = personARefund + personBRefund;
    const totalRefundRounded = Math.round(totalRefund * 100) / 100;

    setTaxRate(rate);

    setPersonATotalOwed(personAOwed);
    setPersonBTotalOwed(personBOwed);
    setPersonATotalOwedRounded(personAOwedRounded);
    setPersonBTotalOwedRounded(personBOwedRounded);

    setPersonATotalRefund(personARefund);
    setPersonBTotalRefund(personBRefund);
    setPersonATotalRefundRounded(personARefundRounded);
    setPersonBTotalRefundRounded(personBRefundRounded);

    setTotalRefund(totalRefund);
    setTotalRefundRounded(totalRefundRounded);
  };

  return (
    <>
      <p className="form-description">
        Determine how much each person should get back from their tax refund when married and filing jointly.
      </p>
      <form onSubmit={calculate}>
        <p>first section</p>
        <IonInput
          label="Total Joint Income"
          type="text"
          placeholder="00.00"
          label-placement="floating"
          fill="outline"
          onIonInput={(event: any) => {
            const value = event.target.value;
            const valueAsNumber = parseFloat(value);
            setTotalJointIncome(valueAsNumber);
          }}
        >
        </IonInput>
        <IonInput
          label="Total Taxes Owed"
          type="text"
          placeholder="00.00"
          label-placement="floating"
          fill="outline"
          onIonInput={(event: any) => {
            const value = event.target.value;
            const valueAsNumber = parseFloat(value);
            setTotalTaxesOwed(valueAsNumber);
          }}
        >
        </IonInput>
        <p>second section</p>
        <IonInput
          label="Person A Total Income"
          type="text"
          placeholder="00.00"
          label-placement="floating"
          fill="outline"
          onIonInput={(event: any) => {
            const value = event.target.value;
            const valueAsNumber = parseFloat(value);
            setPersonATotalIncome(valueAsNumber);
          }}
        >
        </IonInput>
        <IonInput
          label="Person A Total Withheld"
          type="text"
          placeholder="00.00"
          label-placement="floating"
          fill="outline"
          onIonInput={(event: any) => {
            const value = event.target.value;
            const valueAsNumber = parseFloat(value);
            setPersonATotalWithheld(valueAsNumber);
          }}
        >
        </IonInput>
        <p>third section</p>
        <IonInput
          label="Person B Total Income"
          type="text"
          placeholder="00.00"
          label-placement="floating"
          fill="outline"
          onIonInput={(event: any) => {
            const value = event.target.value;
            const valueAsNumber = parseFloat(value);
            setPersonBTotalIncome(valueAsNumber);
          }}
        >
        </IonInput>
        <IonInput
          label="Person B Total Withheld"
          type="text"
          placeholder="00.00"
          label-placement="floating"
          fill="outline"
          onIonInput={(event: any) => {
            const value = event.target.value;
            const valueAsNumber = parseFloat(value);
            setPersonBTotalWithheld(valueAsNumber);
          }}
        >
        </IonInput>
        <IonButton type="submit">Calcuate</IonButton>
      </form>
      {taxRate > 0 && <p>{`Joint Tax Rate: ${taxRate}`}</p>}
      {personATotalOwed > 0 && (
        <p>{`Person A Total Owed: `}<b>{`$${personATotalOwedRounded}`}</b>{` (${personATotalOwed})`}</p>
      )}
      {personBTotalOwed > 0 && (
        <p>{`Person B Total Owed: `}<b>{`$${personBTotalOwedRounded}`}</b>{` (${personBTotalOwed})`}</p>
      )}
      <p>{`Person A Total Refund: `}<b>{`$${personATotalRefundRounded}`}</b>{` (${personATotalRefund})`}</p>
      <p>{`Person B Total Refund: `}<b>{`$${personBTotalRefundRounded}`}</b>{` (${personBTotalRefund})`}</p>
      <p>{`Total Refund: `}<b>{`$${totalRefundRounded}`}</b>{` (${totalRefund})`}</p>
    </>
  );
};

export default FormContainer;
