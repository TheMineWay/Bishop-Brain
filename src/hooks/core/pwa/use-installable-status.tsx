import { useEffect, useState } from "react";

export function useInstallableStatus() {
  const [installPrompt, setInstallPrompt] = useState<Event>();

  useEffect(() => {
    const ev = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };
    window.addEventListener("beforeinstallprompt", ev);

    return () => window.removeEventListener("beforeinstallprompt", ev);
  }, []);

  const install = () => {
    if (!installPrompt) return;

    const p = installPrompt as unknown as { prompt?: () => void };

    p.prompt && p.prompt();
  };

  return {
    isInstallable: installPrompt !== undefined,
    installPrompt,
    install,
  };
}
