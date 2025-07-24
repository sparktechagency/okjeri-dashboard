import { Calendar, Clock, ExternalLink } from "lucide-react"

export default function RecentActivities() {
    return (
        <div className="w-full">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2 mt-4">Recent activities</h1>

            <div className="space-y-4">
                {/* User registered */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-between">
                    <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900">User registered</h3>
                        <p className="text-sm text-gray-500 mt-1">Tap to view</p>
                    </div>

                    <div className="flex-1 px-6">
                        <p className="text-gray-700">example@gmail.com</p>
                    </div>

                    <div className="flex-1 items-center space-x-6">
                        <div className="text-right">
                            <div className="flex items-center text-gray-500 text-sm mb-1">
                                <Calendar className="w-4 h-4 mr-2" />
                                05-04-2025
                            </div>
                            <div className="flex items-center text-gray-500 text-sm">
                                <Clock className="w-4 h-4 mr-2" />
                                05:50 PM
                            </div>
                        </div>
                    </div>

                    <div>
                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="0.5" width="49" height="49" rx="24.5" stroke="black" strokeOpacity="0.2" />
                            <path d="M19.1273 29.9409L27.6313 21.4369L21.1068 21.5183L21.1324 19.4681L31.1569 19.3431L31.0318 29.3676L28.9817 29.3932L29.0631 22.8687L20.5591 31.3727L19.1273 29.9409Z" fill="black" />
                        </svg>
                    </div>
                </div>

                {/* New report */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-between">
                    <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900">New report</h3>
                        <p className="text-sm text-gray-500 mt-1">Tap to view</p>
                    </div>
                    <div className="flex-1 px-6">
                        <p className="text-gray-700">Sexual content</p>
                    </div>
                    <div className="flex-1 items-center space-x-6">
                        <div className="text-right">
                            <div className="flex items-center text-gray-500 text-sm mb-1">
                                <Calendar className="w-4 h-4 mr-2" />
                                05-04-2025
                            </div>
                            <div className="flex items-center text-gray-500 text-sm">
                                <Clock className="w-4 h-4 mr-2" />
                                05:50 PM
                            </div>
                        </div>
                    </div>

                    <div>
                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="0.5" width="49" height="49" rx="24.5" stroke="black" strokeOpacity="0.2" />
                            <path d="M19.1273 29.9409L27.6313 21.4369L21.1068 21.5183L21.1324 19.4681L31.1569 19.3431L31.0318 29.3676L28.9817 29.3932L29.0631 22.8687L20.5591 31.3727L19.1273 29.9409Z" fill="black" />
                        </svg>
                    </div>
                </div>



                {/* New transaction */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-between">
                    <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900">New transaction</h3>
                        <p className="text-sm text-gray-500 mt-1">Tap to view</p>
                    </div>
                    <div className="flex-1 px-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                                <span className="text-white text-sm font-medium">M</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-700">Md. Abid Hasan</span>
                                <div className=" flex items-center justify-center">
                                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.1 21.5L6.2 18.3L2.6 17.5L2.95 13.8L0.5 11L2.95 8.2L2.6 4.5L6.2 3.7L8.1 0.5L11.5 1.95L14.9 0.5L16.8 3.7L20.4 4.5L20.05 8.2L22.5 11L20.05 13.8L20.4 17.5L16.8 18.3L14.9 21.5L11.5 20.05L8.1 21.5ZM10.45 14.55L16.1 8.9L14.7 7.45L10.45 11.7L8.3 9.6L6.9 11L10.45 14.55Z" fill="#4285F4" />
                                    </svg>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 items-center space-x-6">
                        <div className="text-right">
                            <div className="flex items-center text-gray-500 text-sm mb-1">
                                <Calendar className="w-4 h-4 mr-2" />
                                05-04-2025
                            </div>
                            <div className="flex items-center text-gray-500 text-sm">
                                <Clock className="w-4 h-4 mr-2" />
                                05:50 PM
                            </div>
                        </div>
                    </div>
                    <div>
                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="0.5" width="49" height="49" rx="24.5" stroke="black" strokeOpacity="0.2" />
                            <path d="M19.1273 29.9409L27.6313 21.4369L21.1068 21.5183L21.1324 19.4681L31.1569 19.3431L31.0318 29.3676L28.9817 29.3932L29.0631 22.8687L20.5591 31.3727L19.1273 29.9409Z" fill="black" />
                        </svg>
                    </div>
                </div>



                {/* Service request */}
                <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-between">
                    <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900">Service request</h3>
                        <p className="text-sm text-gray-500 mt-1">Tap to view</p>
                    </div>
                    <div className="flex-1 px-6">
                        <p className="text-gray-700">Cooking</p>
                    </div>
                    <div className="flex-1 items-center space-x-6">
                        <div className="text-right">
                            <div className="flex items-center text-gray-500 text-sm mb-1">
                                <Calendar className="w-4 h-4 mr-2" />
                                05-04-2025
                            </div>
                            <div className="flex items-center text-gray-500 text-sm">
                                <Clock className="w-4 h-4 mr-2" />
                                05:50 PM
                            </div>
                        </div>
                    </div>
                    <div>
                        <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="0.5" width="49" height="49" rx="24.5" stroke="black" strokeOpacity="0.2" />
                            <path d="M19.1273 29.9409L27.6313 21.4369L21.1068 21.5183L21.1324 19.4681L31.1569 19.3431L31.0318 29.3676L28.9817 29.3932L29.0631 22.8687L20.5591 31.3727L19.1273 29.9409Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
