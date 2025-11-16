import api from './BaseRepository'

export class UserRepository {
  async getUsers(): Promise<any[]> {
    const { data } = await api.get('/users?page=2')
    return data.data
  }
  async getUser(id: number): Promise<any> {
    const { data } = await api.get(`/users/${id}`)
    return data.data
  }
}
