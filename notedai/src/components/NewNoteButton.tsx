"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { createNoteAction } from "@/actions/notes";
import { toast } from "sonner"; // ✅ Using Sonner

type Props = {
  user: User | null;
};

function NewNoteButton({ user }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClickNewNoteButton = async () => {
    if (!user) {
      router.push("/login");
      return;
    }

    setLoading(true);

    // 🟡 Show a toast saying "Saving current note"
    const toastId = toast.loading("Saving Current Note", {
      description: "Saving your current note before creating a new one.",
    });

    try {
      // optional delay like in the repo if needed
      await new Promise((resolve) => setTimeout(resolve, 500));

      const uuid = uuidv4();
      await createNoteAction(uuid);
      router.push(`/?noteId=${uuid}`);

      toast.success("New Note Created", {
        id: toastId,
        description: "You have created a new note.",
      });
    } catch (error) {
      toast.error("Failed to create note", {
        id: toastId,
        description: "Something went wrong while creating a note.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleClickNewNoteButton}
      variant="secondary"
      className="w-24"
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : "New Note"}
    </Button>
  );
}

export default NewNoteButton;
