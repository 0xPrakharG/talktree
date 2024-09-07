import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ConversationHeroProps {
  name?: string;
  image?: string;
}

export const ConversationHero = ({
  name = "Member",
  image,
}: ConversationHeroProps) => {
  const avatarFallback = name.charAt(0).toUpperCase();

  return (
    <div className="mt-[88px] mx-5 mb-4">
      <div className="flex items-center gap-x-1 mb-2">
        <Avatar className="size-14 mr-2">
          <AvatarImage src={image} />
          <AvatarFallback className="text-lg">{avatarFallback}</AvatarFallback>
        </Avatar>
      </div>
      <p className="text-2xl font-bold">{name}</p>
      <p className="font-normal text-slate-800 mb-4">
        This conversation is only between you and <strong>{name}</strong>
      </p>
    </div>
  );
};