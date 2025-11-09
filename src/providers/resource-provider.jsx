import React from "react";
import resourcesData from "@/data/resources.json";
import { ResourceProviderContext } from "../contexts/resource-context";

const ResourceProvider = ({ children }) => {
  return (
    <ResourceProviderContext.Provider value={resourcesData}>
      {children}
    </ResourceProviderContext.Provider>
  );
};

export default ResourceProvider;
