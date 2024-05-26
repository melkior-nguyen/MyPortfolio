const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-3 flex h-full items-center justify-center select-none">
      {children}
    </div>
  );
};

export default ContentLayout;
