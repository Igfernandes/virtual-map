"use client";

import { useState } from "react";

export function OpeningHoursProfile() {
  const [isShow, setIsShow] = useState<boolean>(true);

  return (
    <div className="mt-1">
      <div className="flex">
        <svg
          className="w-4 fill-red-400 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        </svg>
        <h5 className="">
          Horário de Funcionamento:{" "}
          <span className="text-green-600"> (Aberto)</span>
        </h5>
        <svg
          className="ml-5 w-4 fill-neutral-600 cursor-pointer"
          style={{
            transform: `rotate(${isShow ? 0 : 180}deg)`,
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          onClick={() => setIsShow(!isShow)}
        >
          <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
        </svg>
      </div>
      <div
        className="pl-5 transition-all overflow-hidden duration-500 "
        style={{
          height: isShow ? "auto" : "0px",
        }}
      >
        <table>
          <tbody>
            <tr>
              <td className="py-1">
                <strong>[Segunda-feira]:</strong>
              </td>
              <td className="pl-4">
                <i>10:00 até 21:00</i>
              </td>
            </tr>
            <tr>
              <td className="py-1">
                <strong>[Terça-feira]:</strong>
              </td>
              <td className="pl-4">
                <i>10:00 até 21:00</i>
              </td>
            </tr>
            <tr>
              <td className="py-1">
                <strong>[Quarta-feira]:</strong>
              </td>
              <td className="pl-4">
                <i>10:00 até 21:00</i>
              </td>
            </tr>
            <tr>
              <td className="py-1">
                <strong>[Quinta-feira]:</strong>
              </td>
              <td className="pl-4">
                <i>10:00 até 21:00</i>
              </td>
            </tr>
            <tr>
              <td className="py-1">
                <strong>[Sexta-feira]:</strong>
              </td>
              <td className="pl-4">
                <i>10:00 até 21:00</i>
              </td>
            </tr>
            <tr>
              <td className="py-1">
                <strong>[Sábado]:</strong>
              </td>
              <td className="pl-4">
                <i>10:00 até 21:00</i>
              </td>
            </tr>
            <tr>
              <td className="py-1">
                <strong>[Domingo]:</strong>
              </td>
              <td className="pl-4">
                <i>10:00 até 21:00</i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
