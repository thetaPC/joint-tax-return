import React, { FC, useState, useEffect } from 'react';
import { IonInput } from '@ionic/react';
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

  return (
    <>
      <p className="form-description">
        Determine how much each person should get back from their tax refund when married and filing jointly.
      </p>
      <form className="">
        <p>first section</p>
        <IonInput
          label="Total Taxes Owed"
          type="number"
          placeholder="00.00"
          label-placement="floating"
          fill="outline"
        >
        </IonInput>
        <IonInput
          label="Total Joint Income"
          type="number"
          placeholder="00.00"
          label-placement="floating"
          fill="outline"
        >
        </IonInput>
        <p>second section</p>
        <IonInput
          label="Person A Total Income"
          type="number"
          placeholder="00.00"
          label-placement="floating"
          fill="outline"
        >
        </IonInput>
        <IonInput
          label="Person A Total Withheld"
          type="number"
          placeholder="00.00"
          label-placement="floating"
          fill="outline"
        >
        </IonInput>
        <p>third section</p>
        <IonInput
          label="Person B Total Income"
          type="number"
          placeholder="00.00"
          label-placement="floating"
          fill="outline"
        >
        </IonInput>
        <IonInput
          label="Person B Total Withheld"
          type="number"
          placeholder="00.00"
          label-placement="floating"
          fill="outline"
        >
        </IonInput>

      </form>
    </>
  );
};

export default FormContainer;
