"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "./LoadingScreen";

export default function GlobalLoadingWrapper({ children }) {
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);
  const [showLoader, setShowLoader] = useState(true);
  const [loaderKey, setLoaderKey] = useState(0);

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setShowLoader(true);
      setLoaderKey((v) => v + 1);
    }
  }, [pathname]);

  return (
    <>
      {showLoader && (
        <LoadingScreen
          key={`${pathname}-${loaderKey}`}
          onComplete={() => setShowLoader(false)}
        />
      )}
      {children}
    </>
  );
}
