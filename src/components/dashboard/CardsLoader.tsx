export default function CardsLoader() {
  return (
    <div className="flex h-[150px] items-center justify-center">
      <div
        className="inline-block size-10 animate-spin-fast rounded-full border-[8px] border-current border-t-transparent text-amber-500"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Chargement en cours...</span>
      </div>
    </div>
  );
}
