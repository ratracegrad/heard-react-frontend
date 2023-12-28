import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([]);

  interface Transaction {
    id: number;
    title: string;
    description: string;
    amount: number;
    fromAccount: string;
    toAccount: string;
    transactionDate: string;
  }

  useEffect(() => {
    fetch('https://octopus-app-ft9df.ondigitalocean.app/transactions')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTransactions(data.transactions);
      });
  }, []);

  return (
    <>
    <div>
      <h2 className="mx-auto mt-10 text-center text-3xl text-gray-900 font-bold">
        Transactions List
      </h2>
    <div className="flex justify-end">
      <button className="mr-2 rounded bg-gray-300 px-4 py-2 text-black font-bold hover:bg-gray-500">
        + Add
      </button>
    </div>
    <div>
      <table className="mx-auto mt-10 border-collapse table-auto border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">
              ID
            </th>
            <th className="border border-gray-400 px-4 py-2">
              Title
            </th>
            <th className="border border-gray-400 px-4 py-2">
              Description
            </th>
            <th className="border border-gray-400 px-4 py-2">
              Amount
            </th>
            <th className="border border-gray-400 px-4 py-2">
              From Account
            </th>
            <th className="border border-gray-400 px-4 py-2">
              To Account
            </th>
            <th className="border border-gray-400 px-4 py-2">
              Transaction Date
            </th>
            <th className="border border-gray-400 px-4 py-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((transaction: Transaction) => (
            <tr key={transaction.id}>
              <td className="border border-gray-400 px-4 py-2">
                {transaction.id}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {transaction.title}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {transaction.description}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {transaction.amount}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {transaction.fromAccount}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {transaction.toAccount}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {transaction.transactionDate}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <button className="mr-2 rounded bg-blue-500 px-4 py-2 text-white font-bold hover:bg-blue-700">
                  Edit
                </button>
                <button className="rounded bg-red-500 px-4 py-2 text-white font-bold hover:bg-red-700">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
    </>
  )
}

export default App
