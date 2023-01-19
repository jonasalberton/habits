interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Pregresso de Habitos completados nesse dia"
        aria-valuenow={progress}
        style={{ width: `${progress}%` }}
        className="h-3 rounded-3xl bg-violet-600"
      ></div>
    </div>
  );
}
