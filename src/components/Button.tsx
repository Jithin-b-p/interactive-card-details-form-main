function Button({
  clickHandler,
  children,
}: {
  clickHandler?: () => void;
  children: string;
}) {
  return (
    <button
      onClick={clickHandler}
      className="py-4 rounded-lg max-md:mt-3 bg-customNeutral-100 text-customNeutral-400"
      type="submit"
    >
      {children}
    </button>
  );
}

export default Button;
