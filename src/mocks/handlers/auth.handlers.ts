import { http, HttpResponse } from 'msw'

export const authHandlers = [
    http.post('/api/auth/login', async ({ request }) => {
        const { email, password } = await request.json() as { email: string, password: string }

        if (email === 'ada@test.com' && password === 'password') {
            return HttpResponse.json({
                user: { id: 'u1', name: 'Ada Lovelace', email, avatarUrl: '' },
                token: 'mock-jwt-token'
            })
        }

        return HttpResponse.json(
            { message: 'Credenciales incorrectas' },
            { status: 401 }
        )

    }),
    http.get('/api/auth/me', ({ request }) => {
  const auth = request.headers.get('Authorization')

  if (!auth) {
    return HttpResponse.json(
      { message: 'No autorizado' },
      { status: 401 }
    )
  }

  return HttpResponse.json({
    id: 'u1',
    name: 'Ada Lovelace',
    email: 'ada@test.com',
    avatarUrl: ''
  })
})
]

