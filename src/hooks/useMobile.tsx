import React, { useEffect, useState } from "react";

export default function useMobile() {
  const [mobile, setMobile] = useState(window.innerWidth < 414);

  useEffect(() => {
    window.addEventListener("resize", () => setMobile(window.innerWidth <= 414));

    return () => window.removeEventListener("resize", () => setMobile(window.innerWidth <= 414));
  }, []);

  return { mobile };
}
