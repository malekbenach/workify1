"use client";
import { getSellerData } from "@/actions/getsellerdata";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getLoggedUser } from "@/actions/get-logged-user";

interface DashboardData {
  dashboardData: Awaited<ReturnType<typeof getSellerData>>;
  userInfo: Awaited<ReturnType<typeof getLoggedUser>>;
}

function Singledash({ dashboardData, userInfo }: DashboardData) {
  const router = useRouter();

  return (
    <>
      {userInfo && (
        <div className="flex min-h-[80vh] my-10 mt-0 px-32 gap-5">
          <div className="shadow-md h-max p-10 flex flex-col gap-5 min-w-96 w-96">
            <div className="flex gap-5 justify-center items-center">
              <div>
                {userInfo?.profileImage ? (
                  <Image
                    src={userInfo.profileImage}
                    alt="Profile"
                    width={140}
                    height={140}
                    className="rounded-full"
                  />
                ) : (
                  <div className="bg-purple-500 h-24 w-24 flex items-center justify-center rounded-full relative">
                    <span className="text-5xl text-white">
                      {userInfo.email[0].toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#62646a] text-lg font-medium">
                  {userInfo.username}
                </span>
                <span className="font-bold text-md">{userInfo.fullname}</span>
              </div>
            </div>
            <div className="border-t py-5">
              <p>{userInfo.description}</p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-10 w-full">
              <div
                className="shadow-md h-max p-10 flex flex-col gap-2 cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => router.push("/seller/gigs")}
              >
                <h2 className="text-xl">Total Gigs</h2>
                <h3 className="text-[#1DBF73] text-3xl font-extrabold">
                  {dashboardData?.gigs}
                </h3>
              </div>
              <div
                className="shadow-md h-max p-10 flex flex-col gap-2 cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => router.push("/seller/orders")}
              >
                <h2 className="text-xl">Total Orders</h2>
                <h3 className="text-[#1DBF73] text-3xl font-extrabold">
                  {dashboardData?.orders}
                </h3>
              </div>
              <div
                className="shadow-md h-max p-10 flex flex-col gap-2 cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => router.push("/seller/unread-messages")}
              >
                <h2 className="text-xl"> Unread Messages</h2>
                <h3 className="text-[#1DBF73] text-3xl font-extrabold">
                  {dashboardData?.message}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Singledash;
