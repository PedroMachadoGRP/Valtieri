"use client";

import React, { useState } from "react";
import Button from "../components/ui/Button";
import SecundaryButton from "../components/ui/SecundaryButton";
import Field from "../components/ui/Field";

export default function page() {
  const [loading, setLoading] = useState<boolean>(false);
  const [income, setIncome] = useState("");

  async function handleClick() {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      {/* <Button loading={loading} onClick={handleClick}>Salvar</Button>

      <SecundaryButton loading={loading} onClick={handleClick}>Salvar</SecundaryButton> */}

      {/* <Field
        label="Renda do mês"
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        error={income === "0" ? "Informe um valor maior que zero" : undefined}
      ></Field> */}
    </div>
  );
}
