import { Suspense, lazy } from "react";
import AppLoader from "../components/AppLoader/AppLoader";

export const HomeLazy = () => {
  const LazyComponent = lazy(() => import("../Pages/Home/Home"));
  return (
    <Suspense fallback={<AppLoader />}>
      <LazyComponent />
    </Suspense>
  );
};

export const ProjectsLazy = () => {
  const LazyComponent = lazy(() => import("../Pages/Projects/Projects"));
  return (
    <Suspense fallback={<AppLoader />}>
      <LazyComponent />
    </Suspense>
  );
};

export const BioLazy = () => {
  const LazyComponent = lazy(() => import("../Pages/Bio/Bio"));
  return (
    <Suspense fallback={<AppLoader />}>
      <LazyComponent />
    </Suspense>
  );
};

export const ContactLazy = () => {
  const LazyComponent = lazy(() => import("../Pages/Contact/Contact"));
  return (
    <Suspense fallback={<AppLoader />}>
      <LazyComponent />
    </Suspense>
  );
};
