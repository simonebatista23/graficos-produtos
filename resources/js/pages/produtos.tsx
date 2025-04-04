import React from "react";
import { Head } from "@inertiajs/react";

export default function Produtos({ produtos }) {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <Head title="Lista de Produtos" />
      <h1 className="text-3xl font-bold">Lista de Produtos</h1>

      <table className="mt-6 w-full border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-800">
            <th className="border border-gray-700 p-2">ID</th>
            <th className="border border-gray-700 p-2">Nome</th>
            <th className="border border-gray-700 p-2">Preço</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.codigo_produto} className="hover:bg-gray-700">
              <td className="border border-gray-700 p-2">{produto.codigo_produto}</td>
              <td className="border border-gray-700 p-2">{produto.descricao}</td>
              <td className="border border-gray-700 p-2">R$ {produto.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
