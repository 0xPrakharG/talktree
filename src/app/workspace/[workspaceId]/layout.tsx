"use client";

import { Sidebar } from "./sidebar";
import { Toolbar } from "./toolbar";

interface WorkspaceIdLayputProps {
  children: React.ReactNode;
}

const WorkspaceIdLayout = ({ children }: WorkspaceIdLayputProps) => {
  return (
    <div className="h-full">
      <Toolbar />
      <div className="flex h-[calc(100vh-40px)]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default WorkspaceIdLayout;
