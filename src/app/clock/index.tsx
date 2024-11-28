"use client";

import React, { useState, useEffect } from "react";

const Relogio = () => {
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: 'America/Sao_Paulo'
  } as any;

  const [time, setTime] = useState("");
  
  useEffect(() => {
    const interval = setInterval(() => {
      const formattedDateTime = new Intl
        .DateTimeFormat("pt-BR", options)
        .format(new Date());

      setTime(formattedDateTime);

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <h2 className="relogio-time">{time}</h2>
    </div>
  );
};

export default Relogio;
