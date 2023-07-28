import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import React from "react";
import CurrencyInput from "@/components/CurrencyInput";
import Button from "@/components/Button";

const TripSearch = () => {
  return (
    <div className="container mx-auto p-5  bg-cover bg-center bg-no-repeat">
      <h2 className="font-semibold text-2xl text-primaryDark text-center">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h2>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde vocçê quer ir?" />

        <div className="flex gap-4">
          <DatePicker
            className="w-full"
            placeholderText="Data de ida"
            onChange={() => {}}
          />
          <CurrencyInput placeholder="Orçamento" />
        </div>

        <Button>Buscar</Button>
      </div>
    </div>
  );
};

export default TripSearch;
