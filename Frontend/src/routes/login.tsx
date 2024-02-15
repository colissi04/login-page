import { Link } from "react-router-dom"

// TODO: preciso fazer um get para ver se o usuario e a senha existem no bd para aprovar o login
// TODO: ao clicar em esqueceu senha deve direcionar para uma rota onde preenche so o email e recebe um email com a senha
// TODO: adicionar funcionalidade ao botao mantenha-me conectado

export default function Login(){ 
  return (
    <main className="h-screen flex flex-1 justify-center items-center">

      <div className="bg-slate-700 h-auto w-[450px] rounded-md mx-5">

        <div className="flex flex-col"> 
          <div className="p-5 flex justify-center items-center border-b border-slate-50/10">
            <h3 className="font-bold text-xl">Faça login em nossa plataforma</h3>
          </div>

          <form action="" className="p-5">
            <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">E-mail</label>
                  <input className="bg-slate-600 border border-slate-500 p-2.5 rounded-lg text-sm outline-none focus:border-emerald-400" type="email" name="email" id="email" placeholder="nome@dominio.com.br" />
                </div>
                <div className="flex flex-col my-4 gap-2">
                  <label className="text-sm font-medium">Senha</label>
                  <input className="bg-slate-600 border border-slate-500 p-2.5 rounded-lg text-sm outline-none focus:border-emerald-400" type="password" name="senha" id="senha" placeholder="••••••••"/>
                </div>
            </div>

            <div className="flex justify-between text-sm font-medium text-slate-200 ">
              <div className="flex gap-1.5 items-center">
                <input className="bg-slate-600 border border-slate-500 rounded h-4 w-4 focus:outline-emerald-400" type="checkbox" name="remember_login" id="remember_login" />
                <label htmlFor="remember_login">Mantenha-me conectado</label>
              </div>

              <a className="text-emerald-400 hover:underline focus:outline-emerald-400" href="#">Esqueceu sua senha?</a>
            </div>

            <div className="flex justify-center items-center my-4">
              <button className="w-full py-2.5 px-5 font-semibold rounded-lg border border-emerald-500 bg-emerald-500 hover:bg-emerald-600 hover:border-emerald-600 outline-none focus:border focus:border-slate-50" type="submit">Faça login na sua conta</button>
            </div>

            <div className="font-medium text-sm text-slate-200">
              <span>Não registrado? <Link className="text-emerald-400 hover:underline focus:outline-emerald-400" to="/sign-up">Criar uma conta</Link></span>
            </div>

          </form>
        </div>

      </div>
    </main>
  )
}