interface ProfileCardProps {
  name?: string;
  bio?: string;
  avatarUrl?: string;
}

export function ProfileCard({ name, bio, avatarUrl }: ProfileCardProps) {
  return (
    <>
      <div className="bg-[#D9D9D9] rounded-3xl  w-[804px] h-[257px] flex items-start justify-start">
        <div className="flex items-center justify-center gap-8 py-[18px] pl-[33px] pr-[71px]">
          <img
            src={avatarUrl || "https://via.placeholder.com/200"}
            alt="user avatar"
            className="w-[220px] h-[220px] rounded-full border-4 border-[#005CFF]"
            loading="lazy"
          />
          <div className="flex flex-col text-left gap-4 ">
            <h2 className="text-xl font-bold text-[#005cff]">{name}</h2>
            <p className="text-[15px] ">
              {bio || "Este usuário não possui uma bio definida."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
