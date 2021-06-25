import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'

import { UserService } from '../../services/user/user.service'
import { beginSpotifyLogin, logoutSpotify } from '../../../auth/spotify'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  constructor(
    private ngTitleService: Title,
    private userService: UserService,
  ) { }
  
  ngOnInit(): void {
    this.ngTitleService.setTitle('Home SDJ')
  }

  async signIn() {
    await beginSpotifyLogin()
  }

  async signOut() {
    logoutSpotify()
    this.userService.signOut()
  }

  getUser() {
    const user = this.userService.getUser()
    if (user.display_name) return user
    else return false
  }
}
