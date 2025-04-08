import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainContainer from "./components/MainContainer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-[#1F1F1F] h-screen w-full flex items-center justify-center overflow-hidden">

        <MainContainer />
      </main>
    </QueryClientProvider>
  );
}

export default App;
