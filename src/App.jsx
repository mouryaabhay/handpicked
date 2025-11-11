import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavSidebar from "@/components/sidebar/nav-sidebar";
import AppHeader from "@/components/header/header-layout";
import ResourceProvider from "@/providers/resource-provider";
import PageRoutes from "@/pages/PageRoutes";
import ThemeProvider from "@/providers/theme-provider";
import ThemedToaster from "@/components/other/themed-toaster";

function App() {
  return (
    <ResourceProvider>
      <ThemeProvider>
        <BrowserRouter>
          <NavSidebar>
            <div className="flex flex-col min-h-screen w-screen">
              <AppHeader />
              <ThemedToaster />
              <main className="flex-1 overflow-y-auto pt-[--header-height]">
                <PageRoutes />
              </main>
            </div>
          </NavSidebar>
        </BrowserRouter>
      </ThemeProvider>
    </ResourceProvider>
  );
}

export default App;
