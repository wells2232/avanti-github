import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import { ProfileCard } from "./ProfileCard";
import { Loading } from "./Loading";
import { fetchGitHubUser } from "../data/api";

export default function MainContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState<{
    avatarUrl: string;
    name: string;
    bio: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    const value = searchQuery.trim();
    if (!value) {
      setError("Please enter a username");
      return;
    }

    setIsLoading(true);
    setError(null);
    setUserData(null);

    try {
      const [user] = await Promise.all([
        fetchGitHubUser(value),
        new Promise((resolve) => setTimeout(resolve, 1000)),
      ]);
      setUserData(user);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full h-full px-[142px] py-[136px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute top-15 -right-200 -translate-x-1/2 -translate-y-1/2 
                   w-[888px] h-[888px] rounded-full 
                   bg-[radial-gradient(circle,#005CFF_0%,transparent_60%)] 
                   opacity-90 blur-xl "
      />
      <div
        className="absolute top-130 -left-10 -translate-x-1/2 -translate-y-1/2 
                   w-[600px] h-[600px] rounded-full z-10
                   bg-[radial-gradient(circle,#005CFF_0%,transparent_60%)] 
                   opacity-90 blur-xl "
      />
      <div className="absolute top-10 left-20 bg-[url(/public/Camada_1.png)] bg-cover w-[240px] h-[225px]" />

      <div className="flex flex-col bg-black px-[326px] scale-z-100 pt-[40px] gap-7 w-full h-[538px] rounded-2xl items-center">
        <div className="flex items-center justify-center gap-[11px] px-[60px]">
          <img src="github-icon.svg" alt="" className="bg-black" />
          <h2 className="text-6xl text-white font-nunito-sans">Perfil</h2>
          <img src="github-text.svg" alt="" />
        </div>

        <div className="bg-white rounded-lg w-full h-[62px] px flex items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Digite um usuário do Github"
            className="pl-4 w-full font-semibold font-nunito-sans text-[20px] text-black outline-none bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <div className="flex items-center justify-center">
            <button
              className="bg-[#005CFF] w-[62px] h-[62px] rounded-lg 
                        flex items-center border border-white justify-center cursor-pointer"
              onClick={handleSearch}
            >
              <MagnifyingGlass size={25} color="white" />
            </button>
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : error ? (
          <div className="text-red-500 text-center font-nunito-sans text-xl px-[105px] py-[17px] bg-[#D9D9D9] rounded-md w-[710px]">
            <span className="">
              Nenhum perfil foi encontrado com esse nome de usuário. Tente
              novamente
            </span>
          </div>
        ) : userData ? (
          <ProfileCard
            avatarUrl={userData.avatarUrl}
            name={userData.name}
            bio={userData.bio}
          />
        ) : null}
      </div>
    </div>
  );
}
