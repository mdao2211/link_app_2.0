import { Loader } from "lucide-react";
import { useState } from "react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  const [isLoading, setLoading] = useState(true);

  if (isLoading)
    return (
      <div>
        <div className="flex justify-center items-center min-h-screen">
          <Loader
            className="animate-spin"
            size={150}
            color="rgba(210, 210, 210, 1)"
          />
        </div>
      </div>
    );
}
