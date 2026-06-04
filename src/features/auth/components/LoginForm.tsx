type Credentials = {
    email: string
    password: string
}

type LoginFormProps = {
    credentials: Credentials
    setCredentials: React.Dispatch<React.SetStateAction<Credentials>>
    handleSubmit: () => void
}

export default function LoginForm({ credentials, setCredentials, handleSubmit }: LoginFormProps) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm w-full max-w-sm">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Flowboard</h1>

            <div className="flex flex-col gap-4">
                <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        value={ credentials.email }
                        onChange={ (e) =>
                            setCredentials((prev) => ({ ...prev, email: e.target.value }))
                        }
                        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        value={ credentials.password }
                        onChange={ (e) =>
                            setCredentials((prev) => ({ ...prev, password: e.target.value }))
                        }
                        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    onClick={ handleSubmit }
                    className="mt-2 w-full bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                    Entrar
                </button>
            </div>
        </div>)


}
