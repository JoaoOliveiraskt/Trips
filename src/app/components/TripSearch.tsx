"use client";

import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import React from "react";
import CurrencyInput from "@/components/CurrencyInput";
import Button from "@/components/Button";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";


interface TripSearchForm {
  text: string;
  startDate: Date | null;
  budget: string;
}


const TripSearch = () => {
  
  const router = useRouter();
  
  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<TripSearchForm>();

  const onSubmit = (data: TripSearchForm) => {
    router.push(`/trips/search?text=${data.text}&startDate=${data.startDate?.toISOString}&budget=${data.budget}`)
  };
  return (
    <div className="container mx-auto p-5 bg-search-bg bg-cover bg-center bg-no-repeat">
      <h2 className="font-semibold text-2xl text-primaryDark text-center">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h2>

      <div className="flex flex-col gap-4 mt-5">
        <Input
          placeholder="Digite o destino"
          error={!!errors.text}
          errorMessage={errors.text?.message}
          {...register("text", {
            required: {
              value: true,
              message: "Destino é obrigatório",
            },
          })}
        />

        <div className="flex gap-4">
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                className="w-full"
                placeholderText="Data final"
                onChange={field.onChange}
                selected={field.value}
                minDate={new Date()}
              />
            )}
          />

          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <CurrencyInput
                placeholder="Orçamento"
                allowDecimals={false}
                onValueChange={field.onChange as any}
                value={field.value}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>

        <Button onClick={() => handleSubmit(onSubmit)()}>Buscar</Button>
      </div>
    </div>
  );
};

export default TripSearch;
