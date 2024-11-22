import { Navbar, Footer, Staking, Tier } from "@/components";
import { FC } from "react";

export const Stake: FC = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center overflow-x-hidden">
      <div className="relative flex h-screen w-full max-w-[1066px] flex-col items-center">
        {/* navbar */}
        <div className="absolute top-0 w-full">
          <Navbar />
        </div>

        <div className="mt-20 w-full xl:mt-24">
          <Staking />
          <Tier />
          <Footer />
        </div>
      </div>
    </section>
  );
};
