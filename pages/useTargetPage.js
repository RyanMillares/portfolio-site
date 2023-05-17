import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function usePreviousPage() {
  const router = useRouter();
  const [previousPageName, setPreviousPageName] = useState("");

  useEffect(() => {
    const handleRouteChange = (url) => {
      const previousRoute = url.split("/").pop();
      setPreviousPageName(previousRoute);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return previousPageName;
}
