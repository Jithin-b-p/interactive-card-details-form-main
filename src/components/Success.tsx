import Button from "./Button";

function Success({ handleContinue }: { handleContinue: () => void }) {
  return (
    <div className="flex flex-col justify-center w-full gap-6 text-center lg:w-2/4 md:w-3/4">
      <img
        className="mx-auto"
        src="/images/icon-complete.svg"
        alt=""
        width={60}
        height={50}
      />
      <h1 className="text-xl font-bold tracking-[0.2rem]">THANK YOU!</h1>
      <span className="text-customNeutral-200">
        We've added your card details
      </span>
      <Button clickHandler={handleContinue}>Continue</Button>
    </div>
  );
}

export default Success;
