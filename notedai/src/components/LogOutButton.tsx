"use client"

import { Button } from "./ui/button"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { toast } from "sonner"
import { logOutAction } from "@/actions/users";

function LogOutButton() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogOut = async () => {
    setLoading(true)
    const {errorMessage} = await logOutAction()

    if (!errorMessage) {
      toast.success("Logged out successfully", {
        description: "You have been logged out.",
      });
      router.push("/")
    } else {
      toast.error("Error", {
      description: errorMessage,
});
    }


    setLoading(false)
    console.log("Logging out...")
  }

  return (
    <Button
      variant="outline"
      onClick={handleLogOut}
      disabled={loading}
      className="w-24"
    >
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  )
}

export default LogOutButton
