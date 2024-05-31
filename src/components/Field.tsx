type FieldTypes = {
  label: string;
  id: string;
  children: React.ReactNode;
};

function Field({ label, id, children }: FieldTypes) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-sm font-bold tracking-wider text-customNeutral-100"
        htmlFor={id}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default Field;
