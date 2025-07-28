
import { Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

// Define activity types as constants for better type safety
const ACTIVITY_TYPES = {
    USER_REGISTERED: "User registered",
    NEW_REPORT: "New report",
    NEW_TRANSACTION: "New transaction",
    SERVICE_REQUEST: "Service request",
} as const;

type ActivityType = typeof ACTIVITY_TYPES[keyof typeof ACTIVITY_TYPES];

interface UserActivityBase {
    type: ActivityType;
    description: string;
    date: string;
    time: string;
}

interface TransactionInfo {
    avatar: string;
    name: string;
    verified: boolean;
}

interface ActivityWithTextInfo extends UserActivityBase {
    type: Exclude<ActivityType, "New transaction">;
    info: string;
}

interface ActivityWithObjectInfo extends UserActivityBase {
    type: "New transaction";
    info: TransactionInfo;
}

type UserActivity = ActivityWithTextInfo | ActivityWithObjectInfo;

const activities: UserActivity[] = [
    {
        type: ACTIVITY_TYPES.USER_REGISTERED,
        description: "Tap to view",
        info: "example@gmail.com",
        date: "05-04-2025",
        time: "05:50 PM",
    },
    {
        type: ACTIVITY_TYPES.NEW_REPORT,
        description: "Tap to view",
        info: "Sexual content",
        date: "05-04-2025",
        time: "05:50 PM",
    },
    {
        type: ACTIVITY_TYPES.NEW_TRANSACTION,
        description: "Tap to view",
        info: {
            avatar: "M",
            name: "Md. Abid Hasan",
            verified: true,
        },
        date: "05-04-2025",
        time: "05:50 PM",
    },
    {
        type: ACTIVITY_TYPES.SERVICE_REQUEST,
        description: "Tap to view",
        info: "Cooking",
        date: "05-04-2025",
        time: "05:50 PM",
    },
];

export default function RecentActivities() {
    const router = useRouter();

    const handleNavigate = () => {
        router.push("/users");
    };

    // Type guard to check if activity is of type ActivityWithObjectInfo
    const isTransactionActivity = (
        activity: UserActivity
    ): activity is ActivityWithObjectInfo => {
        return activity.type === ACTIVITY_TYPES.NEW_TRANSACTION;
    };

    return (
        <div className="w-full">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2 mt-4">
                Recent activities
            </h1>

            <div className="space-y-4">
                {activities.map((activity, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg border border-gray-200 p-6 flex items-center justify-between"
                    >
                        {/* Left Section */}
                        <div className="flex-1">
                            <h3 className="text-lg font-medium text-gray-900">
                                {activity.type}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">{activity.description}</p>
                        </div>

                        {/* Middle Section */}
                        <div className="flex-1 px-6">
                            {isTransactionActivity(activity) ? (
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">
                                            {activity.info.avatar}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-gray-700">{activity.info.name}</span>
                                        {activity.info.verified && (
                                            <svg
                                                width="23"
                                                height="22"
                                                viewBox="0 0 23 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8.1 21.5L6.2 18.3L2.6 17.5L2.95 13.8L0.5 11L2.95 8.2L2.6 4.5L6.2 3.7L8.1 0.5L11.5 1.95L14.9 0.5L16.8 3.7L20.4 4.5L20.05 8.2L22.5 11L20.05 13.8L20.4 17.5L16.8 18.3L14.9 21.5L11.5 20.05L8.1 21.5ZM10.45 14.55L16.1 8.9L14.7 7.45L10.45 11.7L8.3 9.6L6.9 11L10.45 14.55Z"
                                                    fill="#4285F4"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <p className="text-gray-700">{activity.info}</p>
                            )}
                        </div>

                        {/* Date & Time */}
                        <div className="flex-1 items-center space-x-6">
                            <div className="text-right">
                                <div className="flex items-center text-gray-500 text-sm mb-1">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    {activity.date}
                                </div>
                                <div className="flex items-center text-gray-500 text-sm">
                                    <Clock className="w-4 h-4 mr-2" />
                                    {activity.time}
                                </div>
                            </div>
                        </div>

                        {/* Icon */}
                        <div>
                            <span
                                onClick={handleNavigate}
                                className="group inline-flex items-center justify-center rounded-full transition duration-300 hover:bg-primary cursor-pointer"
                            >
                                <svg
                                    width="51"
                                    height="50"
                                    viewBox="0 0 51 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transition duration-300"
                                >
                                    <rect
                                        x="1"
                                        y="0.5"
                                        width="49"
                                        height="49"
                                        rx="24.5"
                                        className="transition duration-300 stroke-black/20 group-hover:stroke-none"
                                    />
                                    <path
                                        d="M19.1273 29.9409L27.6313 21.4369L21.1068 21.5183L21.1324 19.4681L31.1569 19.3431L31.0318 29.3676L28.9817 29.3932L29.0631 22.8687L20.5591 31.3727L19.1273 29.9409Z"
                                        className="transition duration-300 fill-black group-hover:fill-white"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}