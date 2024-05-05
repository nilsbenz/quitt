import { BoxSelectIcon } from "lucide-react";
import Loading from "../common/Loading";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 grid place-items-center">
      <div className="flex flex-col items-center gap-12">
        <div className="flex items-center gap-2">
          <BoxSelectIcon className="size-12" strokeWidth={3} />
          <p className="font-brand text-4xl">pwa-starter-vite</p>
        </div>
        <Loading />
      </div>
    </div>
  );
}
