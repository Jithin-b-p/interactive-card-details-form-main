type FieldTypes = {
  label: string;
  id: string;
  children: React.ReactNode;
};

function Field({ label, id, children }: FieldTypes) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {children}
    </div>
  );
}

export default Field;
