import { Injectable } from '@angular/core';
import { SpotifyUser } from 'src/models/spotify-user';
import { fetchWithToken } from '../../../auth/spotify'

// Injects the UserService into any class that requests it
@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: SpotifyUser = {}

  constructor() { }

  async fetchUserData() {
    const data = await fetchWithToken('https://api.spotify.com/v1/me')
    if (data) {
      this.user = data
      console.log(this.user)
      return data
    }
    else return {}
  }

  getUser() {
    return this.user
  }

  signOut() {
    this.user = {}
  }
}
