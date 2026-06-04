import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../auth/store/authStore'

export function Header() {
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)
  const user = useAuthStore((state) => state.user)
  const [menuOpen, setMenuOpen] = useState(false)

  const initials = user?.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="flex flex-row items-center justify-between px-6 py-3 border-b border-gray-200 bg-white">
      <span className="font-bold text-lg text-gray-900">FLOWBOARD</span>

      <div className="relative">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-medium flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          {initials}
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col py-1">
            <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 text-left">
              Perfil
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm text-red-600 hover:bg-gray-50 text-left"
            >
              Desconectar
            </button>
          </div>
        )}
      </div>
    </header>
  )
}