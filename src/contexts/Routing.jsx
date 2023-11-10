import React, { useState, useMemo } from "react";

//Setting route
export const pageUrl = {
  home: "home",
  todo: "todo",
  register: "register",
  convert: "convert",
};

export const RoutingContext = React.createContext({ page: pageUrl.home });
export default function Routing({ children }) {
  const [page, setPage] = useState(pageUrl.home);

  const value = useMemo(() => ({ page, setPage }), [page, setPage]);
  return (
    <RoutingContext.Provider value={value}>{children}</RoutingContext.Provider>
  );
}
