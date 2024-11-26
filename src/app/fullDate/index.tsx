import React from "react";

const DataCompleta = ({ dateTime }: any) => {
  const options = {
    weekday: "long", 
    day: "numeric", 
    month: "long", 
    year: "numeric", 
  } as any;

  // Formata a data e hora usando Intl.DateTimeFormat
  const formattedDateTime = new Intl.DateTimeFormat("pt-BR", options).format(dateTime);

  return (
    <p className="justify-center text-6xl mb-4">{formattedDateTime}</p>
  )
};

export default DataCompleta;
