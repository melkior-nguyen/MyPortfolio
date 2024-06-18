const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-8 mb-24 px-12 flex h-full items-center justify-center select-none ">
      {children}
    </div>
  );
};

export default ContentLayout;
