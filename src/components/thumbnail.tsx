/* exlint-disable @next/next/no-img-element */

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ThumbnailProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  url: string | null | undefined;
}

export const Thumbnail = ({ open, setOpen, url }: ThumbnailProps) => {
  if (!url) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="relative overflow-hidden max-w-[360px] border rounded-lg my-2 cursor-zoom-in">
          <img
            src={url}
            alt="Message image"
            className="rounded-md object-cover size-full"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="border-none bg-transparent p-0 shadow-none">
        <img
          src={url}
          alt="Message image"
          className="rounded-md max-h-[85vh] aspect-auto m-auto size-full"
        />
      </DialogContent>
    </Dialog>
  );
};
