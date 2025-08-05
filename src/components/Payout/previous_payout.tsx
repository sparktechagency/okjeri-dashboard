


interface Transaction {
    id: string
    date: string
    time: string
    amount: number
    status: "Successful" | "Rejected"
}

const transactions: Transaction[] = [
    {
        id: "1",
        date: "05-04-2025",
        time: "05:20 PM",
        amount: 3000.0,
        status: "Successful",
    },
    {
        id: "2",
        date: "05-04-2025",
        time: "05:20 PM",
        amount: 3000.0,
        status: "Successful",
    },
    {
        id: "3",
        date: "05-04-2025",
        time: "05:20 PM",
        amount: 3000.0,
        status: "Rejected",
    },
    {
        id: "4",
        date: "05-04-2025",
        time: "05:20 PM",
        amount: 3000.0,
        status: "Rejected",
    },
    {
        id: "5",
        date: "05-04-2025",
        time: "05:20 PM",
        amount: 3000.0,
        status: "Successful",
    },
]

export default function PreviousPayout() {
    const totalPayouts = 10

    const formatAmount = (amount: number) => {
        return `₦${amount.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    }



    return (
        <div className="">
            <h1 className="text-center text-[24px] pb-4">Payout management</h1>

            <div className="p-4">
                <div className="space-y-2 ">
                    {transactions.map((transaction, index) => (
                        <div
                            key={transaction.id}
                            className={`flex items-center bg-gray-100 rounded-2xl justify-between p-4 ${index !== transactions.length - 1 ? "border-b border-gray-100" : ""
                                }`}
                        >
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2 text-gray-600">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 9H4V11H6V9ZM10 9H8V11H10V9ZM14 9H12V11H14V9ZM16 2H15V0H13V2H5V0H3V2H2C1.46957 2 0.960859 2.21071 0.585786 2.58579C0.210714 2.96086 0 3.46957 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2ZM16 18H2V7H16V18Z" fill="#888888" />
                                    </svg>

                                    <span className="text-sm font-medium">{transaction.date}</span>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-600">
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.33203 0.5C14.0266 0.5 17.832 4.30544 17.832 9C17.832 13.6946 14.0266 17.5 9.33203 17.5C4.63747 17.5 0.832031 13.6946 0.832031 9C0.832031 4.30544 4.63747 0.5 9.33203 0.5ZM7.93164 11.2998H14.332V8.5H10.7324V4H7.93164V11.2998Z" fill="#888888" stroke="#888888" />
                                    </svg>

                                    <span className="text-sm">{transaction.time}</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-6">
                                <span className="text-lg font-semibold text-gray-900">{formatAmount(transaction.amount)}</span>
                                <div
                                    className={`px-3 py-1 text-sm font-medium ${transaction.status === "Successful"
                                        ? " text-[#00B400] "
                                        : " text-[#EF4444] "
                                        }`}
                                >
                                    {transaction.status}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-4 bg-gray-50 rounded-2xl mt-2">
                    <div className="flex justify-start">
                        <span className="text-lg font-semibold text-gray-900">Total: {totalPayouts} payouts</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
