import React from "react";
import LineChart from "./Ha";
import { Building2, HandCoins, Landmark, UserPen, Wallet } from "lucide-react";

const Dashboard = () => {
  const dashboardHeaders = [
    {
      label: "Total goods sold",
      total: "125",
      icon: <HandCoins className="size-5" />,
      percentage: 22,
    },
    {
      label: "Total amount gathered",
      total: "$45000",
      icon: <Building2 className="size-5" />,
      percentage: 12,
    },
    {
      label: "Total Profit made",
      total: "$23500",
      icon: <UserPen className="size-5" />,
      percentage: 13,
    },
    {
      label: "Total Loss made",
      total: "$500",
      icon: <Wallet className="size-5" />,
      percentage: -18,
    },
    {
      label: "Customers Visits",
      total: "23",
      icon: <Landmark className="size-5" />,
      percentage: -7,
    },
  ];

  return (
    <div className=" ">
      <h1 className="text-2xl font-bold text-green-950 underline text-shadow-green-900 text-shadow-xs">
        Admin Dashboard
      </h1>

      <div className="flex items-center justify-between  gap-3 mt-4 mb-3">
        {dashboardHeaders.map((header) => (
          <div
            className="flex flex-col gap-3 items-center border border-green-950 rounded-xl py-4 px-8 bg-green-950/30 shadow-xl relative"
            key={header.label}
          >
            <div className="absolute top-1 right-1 size-8 rounded-full bg-orange-500 flex items-center p-1 justify-center">
              {header.icon}
            </div>

            <h1 className="text-green-950 font-bold text-4xl  text-center">
              {header.label}
            </h1>
            <div className="flex items-baseline justify-between w-full">
              <span className="font-bold text-xl  text-green-800">
                {header.total}
              </span>
              <span
                className={` ${
                  header.percentage >= 0 ? "bg-green-600/30 " : "bg-red-600/30"
                } font-bold text-md  text-green-800 py-0.5 px-1 rounded-full`}
              >
                {header.percentage}% than last month
              </span>
            </div>
          </div>
        ))}
      </div>

      <LineChart />
    </div>
  );
};

export default Dashboard;
