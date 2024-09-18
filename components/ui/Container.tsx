const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  items-center justify-between gap-4 py-11 px-5">
      {children}
    </div>
  );
};

export default Container;
