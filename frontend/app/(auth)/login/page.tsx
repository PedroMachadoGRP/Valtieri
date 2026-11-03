import Button from "@/app/components/ui/Button";
import Field from "@/app/components/ui/Field";

export default function Page() {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-[url('/images/auth/login-background.jpg')] bg-cover bg-center bg-no-repeat">
      <section className="flex h-180 w-280 flex-col items-center justify-center gap-2 rounded-[15px] border border-white/15 bg-(--color-surface)/60 p-2 shadow-xl backdrop-blur-xl">
       
        <div className="flex flex-col items-center">
          <h2 className="text-(length:--text-title)">Bem vindo de volta</h2>
          <p className="text-(length:--text-small)">
            Organize seus gastos. Simplifique sua vida.
          </p>
        </div>

        <form className="flex flex-col gap-2">
          <Field
            label="Email"
            name="email"
            type="email"
            placeholder="Digite seu email"
            autoComplete="email"
            required
          />

          <Field
            label="Senha"
            name="password"
            type="password"
            placeholder="Digite sua senha"
            autoComplete="new-password"
            required
          />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <p className="flex items-center justify-center gap-1 text-md">
          Não tem uma conta?
          <a
            className="text-blue-300 hover:cursor-pointer hover:text-blue-500 duration-100"
            href="/register"
          >
            Inscrever-se
          </a>
        </p>
      </section>
    </main>
  );
}
