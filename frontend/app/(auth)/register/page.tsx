import Button from '@/app/components/ui/Button'
import Field from '@/app/components/ui/Field'

export default function Page() {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-[url('/images/auth/background.jpg')] bg-cover bg-center bg-no-repeat">
      <section className="flex h-180 w-280 flex-col items-center justify-center gap-2 rounded-[15px] border border-white/15 bg-(--color-surface)/60 p-2 shadow-xl backdrop-blur-xl">
        <h2 className="text-(length:--text-title)">
          Página de registro
        </h2>

        <form className="flex flex-col gap-2">
          <Field
            label="Nome"
            name="name"
            type="text"
            placeholder="Digite seu nome"
            autoComplete="name"
            required
          />

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
            Registrar
          </Button>
        </form>
      </section>
    </main>
  )
}