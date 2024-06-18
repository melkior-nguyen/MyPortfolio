import { Outlet } from "react-router-dom";
import AppHeader from "./components/AppHeader/AppHeader";
import AppLayout from "./components/AppLayout/AppLayout";
import { Suspense, useEffect, useState } from "react";
import AppLoader from "./components/AppLoader/AppLoader";
import AppDialog from "./components/AppDialog/AppDialog";
import { Global } from "./Utils/Global/Global";
import ContentLayout from "./components/ContentLayout/ContentLayout";

export type themeProps = "dark" | "light";

function App() {
  const [theme, setTheme] = useState<themeProps>("light");

  const themeHandle = (): void => {
    const rootElement = document.documentElement;

    if (rootElement.classList.contains("dark")) {
      rootElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      rootElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  useEffect(() => {
    const rootElement = document.documentElement;
    if (localStorage.getItem("theme") === "dark") {
      rootElement.classList.add("dark");
      setTheme("dark");
    } else {
      rootElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  return (
    <Suspense fallback={<AppLoader />}>
      <AppLayout theme={theme}>
        <AppHeader themeHandle={themeHandle} theme={theme} />
        <ContentLayout>
          <Outlet />
        </ContentLayout>
      </AppLayout>
      <AppDialog ref={Global.appDialog.set} />
    </Suspense>
  );
}

export default App;
