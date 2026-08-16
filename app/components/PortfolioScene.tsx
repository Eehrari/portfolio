"use client";

import { useEffect, useState, type ComponentType } from "react";

type SceneModule = {
  PortfolioScene3D: ComponentType;
};

type IdleWindow = Window & {
  requestIdleCallback?: (
    callback: () => void,
    options?: { timeout?: number },
  ) => number;
  cancelIdleCallback?: (handle: number) => void;
};

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

export function PortfolioScene() {
  const [Scene, setScene] = useState<ComponentType | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallScreen = window.matchMedia("(max-width: 767px)").matches;
    const saveData = (navigator as NavigatorWithConnection).connection?.saveData === true;

    // On phones, reduced-motion setups, and data-saver connections, keep the
    // lightweight CSS fallback instead of downloading and running WebGL.
    if (reducedMotion || smallScreen || saveData) return;

    let cancelled = false;
    let loaded = false;
    let idleHandle: number | undefined;
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined;

    const loadScene = () => {
      if (loaded || cancelled) return;
      loaded = true;
      import("./PortfolioScene3D").then((module: SceneModule) => {
        if (!cancelled) setScene(() => module.PortfolioScene3D);
      });
    };

    const idleWindow = window as IdleWindow;
    if (idleWindow.requestIdleCallback) {
      idleHandle = idleWindow.requestIdleCallback(loadScene, { timeout: 1400 });
    } else {
      timeoutHandle = setTimeout(loadScene, 700);
    }

    // If the visitor interacts before the browser becomes idle, load the scene
    // immediately so the experience still feels responsive.
    const interactionEvents: Array<keyof WindowEventMap> = [
      "pointerdown",
      "keydown",
      "scroll",
    ];
    interactionEvents.forEach((eventName) =>
      window.addEventListener(eventName, loadScene, { passive: true, once: true }),
    );

    return () => {
      cancelled = true;
      interactionEvents.forEach((eventName) =>
        window.removeEventListener(eventName, loadScene),
      );
      if (idleHandle !== undefined) idleWindow.cancelIdleCallback?.(idleHandle);
      if (timeoutHandle !== undefined) clearTimeout(timeoutHandle);
    };
  }, []);

  if (Scene) return <Scene />;

  return (
    <div className="world-canvas" aria-hidden="true">
      <div className="world-fallback" />
    </div>
  );
}
