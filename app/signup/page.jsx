import AccountNavbar from "../Components/AccountNavbar";
import PromotionCard from "../Components/PromotionCard";
import SignPage from "../Components/SignPage";

const page = () => {
    return (
      <div className="flex flex-col gap-4 ">
        <AccountNavbar  />
        <div className="flex flex-row justify-around items-center">
            <PromotionCard  />
            <SignPage  />
        </div>
      </div>
    )
  }

  export default page ;