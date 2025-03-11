'use client'

type Transactions = {
  id: string
  customer: string
  amount: number
}[]

const transactions: Transactions = [
  { id: 't_01', customer: 'Rose Roberts', amount: 84 },
  { id: 't_02', customer: 'Chris Cook', amount: 30 },
  { id: 't_03', customer: 'Mary Martin', amount: 42 },
  { id: 't_04', customer: 'Susan Smith', amount: 26 },
  { id: 't_05', customer: 'Rose Roberts', amount: -84 },
  { id: 't_06', customer: 'Rose Roberts', amount: 48 },
  { id: 't_07', customer: 'Susan Smith', amount: 104 },
  { id: 't_08', customer: 'Larry Lewis', amount: 140 },
  { id: 't_09', customer: 'Mary Martin', amount: 10 },
  { id: 't_10', customer: 'Chris Cook', amount: 60 },
  { id: 't_11', customer: 'Susan Smith', amount: -26 },
  { id: 't_12', customer: 'Larry Lewis', amount: -140 },
  { id: 't_13', customer: 'Rose Roberts', amount: 26 },
  { id: 't_14', customer: 'Ryan Roberts', amount: 44 },
]

export default function Home() {
  const customers = new Set()

  transactions.map((t) => customers.add(t.customer))

  const customerTransactions = Array.from(customers).map((customer) =>
    transactions.filter((t) => t.customer === customer)
  )

  const customerTotalAmount = customerTransactions.map((customer) =>
    customer.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0
    )
  )

  let largest = customerTotalAmount[0]
  let customerIndex = 0

  for (var i = 0; i < customerTotalAmount.length; i++) {
    if (customerTotalAmount[i] > largest) {
      largest = customerTotalAmount[i]
      customerIndex = i
    }
  }

  console.log(customerTransactions[customerIndex][0].customer)

  return (
    <div className='flex min-h-dvh items-center justify-center'>
      <ul className='flex list-disc flex-col gap-2'>
        {transactions.map((t, index) => {
          return (
            <li key={index}>
              {t.customer} : {t.amount}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
