import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"
import MaskedInput from "react-text-mask"
import axios from "axios"

// TODO: preciso garantir que o e-mail seja um email valido
// TODO: preciso garantir que a senha tenha no minimo 6 digitos
// TODO: preciso garantir que todas as informacoes sejam preenchidas antes do envio do form
// TODO: preciso fazer um get e validar se o email ou cpf ja nao existe na base de dados antes de submeter o envio
// TODO: adicionar toast para quando as informacoes nao forem preenchidas corretamente ou ja existe o email/cpf no bd e quando for criado com sucesso
// TODO: ao criar deve ser redirecionado para /login

interface dataProps {
  name: string
  email: string
  password: string
  cpf: string
}

export default function SignUp(){

  const [user, setUser] = useState<dataProps>({
    name: "",
    email: "",
    password: "",
    cpf: ""
  })

  const userInfos = (event: ChangeEvent<HTMLInputElement>) => setUser({...user, [event.target.name]: event.target.value})

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const mask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  const handleCreateUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const headers = {
      "headers": {
        "Content-Type": "application/json"
      }
    }

    await axios.post("http://localhost:3333/createUser", user, headers).then((response) => {
      console.log(`Status ${response.status}. Cadastrado com sucesso!"`)
      const userId = response.data.userId
      console.log(`UserId: ${userId}`)
    }).catch((erro) => {
      console.log(`"Não foi possível cadastrar!" ${erro.response.status}`)
    })
  }
  

  return (
    <main className="h-screen flex flex-1 justify-center items-center">

      <div className="bg-slate-700 h-auto w-[450px] rounded-md mx-5">

        <div className="flex flex-col"> 
          <div className="p-5 flex justify-center items-center border-b border-slate-50/10">
            <h3 className="font-bold text-xl">Preencha seus dados de cadastro</h3>
          </div>

          <form onSubmit={handleCreateUser} className="p-5">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Nome e Sobrenome</label>
                  <input onChange={userInfos} className="bg-slate-600 border border-slate-500 p-2.5 rounded-lg text-sm outline-none focus:border-emerald-400" type="text" name="name" id="name" placeholder="Digite seu nome completo" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">E-mail</label>
                  <input onChange={userInfos} className="bg-slate-600 border border-slate-500 p-2.5 rounded-lg text-sm outline-none focus:border-emerald-400" type="email" name="email" id="email" placeholder="nome@dominio.com.br" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Senha</label>
                  <input onChange={userInfos} className="bg-slate-600 border border-slate-500 p-2.5 rounded-lg text-sm outline-none focus:border-emerald-400" type="password" name="password" id="password" placeholder="••••••••"/>
                </div>

                <div className="flex flex-col gap-2 mb-1">
                  <label className="text-sm font-medium">CPF</label>
                  <MaskedInput 
                  mask={mask}
                  guide={false}
                  value={user.cpf}
                  onChange={handleInputChange}
                  className="bg-slate-600 border border-slate-500 p-2.5 rounded-lg text-sm outline-none focus:border-emerald-400" type="text" name="cpf" id="cpf" placeholder="000.000.000-00"/>
                </div>
            </div>

            <div className="flex justify-center items-center my-4">
              <button className="w-full py-2.5 px-5 font-semibold rounded-lg border border-emerald-500 bg-emerald-500 hover:bg-emerald-600 hover:border-emerald-600 outline-none focus:border focus:border-slate-50" type="submit">Criar minha conta</button>
            </div>

            <div className="font-medium text-sm text-slate-200">
              <span>Já tenho conta. <Link className="text-emerald-400 hover:underline focus:outline-emerald-400" to="/login">Fazer login</Link></span>
            </div>

          </form>
        </div>

      </div>
    </main>
  )
}
