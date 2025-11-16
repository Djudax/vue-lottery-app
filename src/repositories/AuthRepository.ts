import api from './BaseRepository'

export class AuthRepository {
  async login(email: string, password: string): Promise<string> {
    const { data } = await api.post<{ token: string }>('/login', { email, password })
    return data.token
  }
}
