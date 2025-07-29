


const ProviderNotificationSend = () => {
    return (
        <div>
            <h1 className="text-center text-[24px] pb-4">Notification sent</h1>

            <div className="flex flex-col items-center justify-center  bg-white p-4 pb-8">
                <div className="flex flex-col items-center text-center max-w-md w-full space-y-6">
                    <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.75" width="80" height="80" rx="40" fill="#8C63DA" />
                        <path d="M40.9086 60.8229C40.6261 61.4823 40.1372 61.8882 39.442 62.0408C38.7468 62.1934 38.1407 62.0112 37.6235 61.494L31.2653 55.1358L39.743 41.0063L25.6135 49.484L19.2552 43.1257C18.7372 42.6076 18.5549 42.0015 18.7084 41.3073C18.862 40.613 19.268 40.1242 19.9264 39.8406L50.8699 27.2654C51.7177 26.9357 52.4477 27.077 53.06 27.6893C53.6723 28.3016 53.8136 29.0316 53.4839 29.8793L40.9086 60.8229Z" fill="white" />
                    </svg>

                    <h2 className="text-3xl font-semibold text-gray-900">Notification sent to the user</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        A notification has been sent to the user as a reminder to complete his KYC.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default ProviderNotificationSend
