import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-title font-semibold">Valtieri</h1>
      <p className="text-text-secondary">
        Gerencie suas finanças responsavelmente.
      </p>
      <Link
        className="rounded bg-primary px-4 py-2 font-semibold text-white"
        href="/login"
      >
        Entrar ou criar conta
      </Link>
    </main>
  );
}
