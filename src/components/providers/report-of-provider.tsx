
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {  Flag, Download } from "lucide-react";
import Image from "next/image";

export default function ReportOfProvider() {
    
    const transactions = [
        { date: "01-01-2025", type: "Transaction", from: "0x74....f44e", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Transfer", from: "0x74....f44e", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Transaction", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Transaction", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Transaction", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Transaction", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Transaction", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
        { date: "01-01-2025", type: "Deposit", from: "****....4568", to: "0x74....f44e", amount: 500.0 },
    ];

    return (
        <div className="flex justify-center items-start p-4">
            <div className="w-full max-w-6xl rounded-xl overflow-hidden">
                {/* Header Section */}
                <div className="p-6 border-b border-gray-200 bg-[#FFEDE2] rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    {/* Logo and User Info */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/logo1.png"
                                alt="photo"
                                width={100}
                                height={100}
                                className="w-[120px] h-[30px] object-cover"
                            />
                        </div>
                        <div className="grid gap-1 text-sm text-gray-700 ">
                            <div className="flex items-center gap-2">
                                <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.5 2.95455C0.5 2.30356 0.763392 1.67924 1.23223 1.21892C1.70107 0.758603 2.33696 0.5 3 0.5H23C23.663 0.5 24.2989 0.758603 24.7678 1.21892C25.2366 1.67924 25.5 2.30356 25.5 2.95455V16.0455C25.5 16.6964 25.2366 17.3208 24.7678 17.7811C24.2989 18.2414 23.663 18.5 23 18.5H3C2.33696 18.5 1.70107 18.2414 1.23223 17.7811C0.763392 17.3208 0.5 16.6964 0.5 16.0455L0.5 2.95455ZM5.5 7.04545C5.5 6.17747 5.85119 5.34504 6.47631 4.73129C7.10143 4.11753 7.94928 3.77273 8.83333 3.77273C9.71739 3.77273 10.5652 4.11753 11.1904 4.73129C11.8155 5.34504 12.1667 6.17747 12.1667 7.04545C12.1667 7.91344 11.8155 8.74587 11.1904 9.35962C10.5652 9.97338 9.71739 10.3182 8.83333 10.3182C7.94928 10.3182 7.10143 9.97338 6.47631 9.35962C5.85119 8.74587 5.5 7.91344 5.5 7.04545ZM20.5 7.04545H15.5V5.40909H20.5V7.04545ZM20.5 11.9545H15.5V10.3182H20.5V11.9545ZM8.83333 11.9545C7.92749 11.9551 7.03965 12.203 6.26909 12.6706C5.49853 13.1382 4.87562 13.807 4.47 14.6022L3.92 15.6789C3.85627 15.8038 3.82616 15.9426 3.83253 16.0821C3.8389 16.2216 3.88154 16.3572 3.95639 16.476C4.03124 16.5947 4.13581 16.6927 4.26014 16.7606C4.38447 16.8284 4.52442 16.8639 4.66667 16.8636H13C13.1421 16.8636 13.2819 16.8279 13.406 16.76C13.5301 16.692 13.6344 16.594 13.709 16.4753C13.7837 16.3566 13.8262 16.2211 13.8325 16.0817C13.8388 15.9423 13.8087 15.8036 13.745 15.6789L13.1967 14.6022C12.791 13.807 12.1681 13.1382 11.3976 12.6706C10.627 12.203 9.73918 11.9551 8.83333 11.9545Z" fill="#FF9100" />
                                </svg>

                                <span className="font-semibold">Md. Abid Hasan</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="26" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.3 0.5H2.7C1.49 0.5 0.511 1.5125 0.511 2.75L0.5 16.25C0.5 17.4875 1.49 18.5 2.7 18.5H20.3C21.51 18.5 22.5 17.4875 22.5 16.25V2.75C22.5 1.5125 21.51 0.5 20.3 0.5ZM20.3 5L11.5 10.625L2.7 5V2.75L11.5 8.375L20.3 2.75V5Z" fill="#FF9100" />
                                </svg>

                                <span className="font-semibold">example@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    {/* Report Button and Date/Time */}
                    <div className="flex flex-col items-start md:items-end gap-2 text-sm text-gray-700">
                        <Button className="bg-[#FF9100] text-white hover:bg-okejiriOrange/90 px-4 py-2 rounded-md flex items-center gap-2">
                            <Flag className="w-4 h-4" />
                            <span>Transaction report of user</span>
                        </Button>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="font-semibold">Issued date: 02-05-2025</span>
                            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.973572 10.5264H18.0263C18.2479 10.5264 18.3742 10.5273 18.4619 10.5371C18.4717 10.6247 18.4736 10.7511 18.4736 10.9736V15.71C18.4736 16.6174 18.473 17.2479 18.4091 17.7227C18.3472 18.1826 18.2345 18.4216 18.0654 18.5908C17.8961 18.7601 17.6565 18.8727 17.1962 18.9346C16.7216 18.9984 16.0917 19 15.1845 19H3.81537C2.90818 19 2.27832 18.9984 1.80365 18.9346C1.34346 18.8727 1.10475 18.76 0.935486 18.5908C0.766218 18.4216 0.652679 18.1829 0.590759 17.7227C0.5269 17.2479 0.526306 16.6174 0.526306 15.71V10.9736C0.526306 10.7514 0.527145 10.6248 0.537048 10.5371C0.624624 10.5272 0.750947 10.5264 0.973572 10.5264ZM3.81537 3.89453H15.1845C16.0916 3.89453 16.7216 3.89517 17.1962 3.95898C17.6565 4.0209 17.8961 4.13444 18.0654 4.30371C18.2344 4.47295 18.3473 4.71199 18.4091 5.17188C18.4729 5.64653 18.4736 6.27646 18.4736 7.18359C18.4736 7.40511 18.4716 7.5316 18.4619 7.61914C18.3741 7.62898 18.248 7.63184 18.0263 7.63184H0.973572C0.75083 7.63184 0.624629 7.62904 0.537048 7.61914C0.527273 7.53146 0.526306 7.40479 0.526306 7.18359C0.526306 6.27647 0.526937 5.64653 0.590759 5.17188C0.652679 4.7116 0.766218 4.47298 0.935486 4.30371C1.10475 4.13444 1.34337 4.0209 1.80365 3.95898C2.2783 3.89516 2.90824 3.89453 3.81537 3.89453Z" fill="#FF9100" stroke="#FF9100" />
                                <path d="M4.76315 1.5V4.34211V1.5ZM14.2368 1.5V4.34211V1.5Z" fill="#FF9100" />
                                <path d="M4.76315 1.5V4.34211M14.2368 1.5V4.34211" stroke="#FF9100" strokeWidth="2" strokeLinecap="round" />
                            </svg>


                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-semibold">Issued time: 10:50 AM</span>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.97368 1C14.6682 1 18.4737 4.80544 18.4737 9.5C18.4737 14.1946 14.6682 18 9.97368 18C5.27912 18 1.47368 14.1946 1.47368 9.5C1.47368 4.80544 5.27912 1 9.97368 1ZM8.57329 11.7998H14.9737V9H11.3741V4.5H8.57329V11.7998Z" fill="#FF9100" stroke="#FF9100" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Transaction Details Section */}
                <div className="mt-3 rounded-lg bg-primary">
                    <div className=" text-white p-4">
                        <h2 className="text-lg font-semibold">Transaction details</h2>
                    </div>
                    <hr />
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="bg-okejiriOrange text-white hover:bg-okejiriOrange">
                                    <TableHead className="text-white">Date</TableHead>
                                    <TableHead className="text-white">Type</TableHead>
                                    <TableHead className="text-white">From</TableHead>
                                    <TableHead className="text-white">To</TableHead>
                                    <TableHead className="text-white text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {transactions.map((transaction, index) => (
                                    <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                        <TableCell>{transaction.date}</TableCell>
                                        <TableCell>{transaction.type}</TableCell>
                                        <TableCell>{transaction.from}</TableCell>
                                        <TableCell>{transaction.to}</TableCell>
                                        <TableCell className="text-right font-medium">₦{transaction.amount.toFixed(2)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                {/* Download Button */}
                <div className="p-6 border-t border-gray-200 flex justify-start">
                    <Button variant="outline" className="flex items-center gap-2 bg-transparent hover:bg-primary hover:text-[#ffff] transition-all duration-300 ease-in-out cursor-pointer">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}