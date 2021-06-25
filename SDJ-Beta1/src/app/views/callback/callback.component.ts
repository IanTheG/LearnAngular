import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { completeSpotifyLogin } from '../../../auth/spotify'
import { Title } from '@angular/platform-browser'
import { UserService } from 'src/app/services/user/user.service'

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
})

/** Component for /callback route
 * Displays a loading screen while Spotify logs in the user
*/
export class CallbackComponent implements OnInit {

  constructor(
    private router: Router,
    private ngTitleService: Title,
    private userService: UserService,
  ) { }
  
  /** Completes the login when Spotify logs in successfully.
   * Re-navigates to the home page.
   * Fetches user from Spotify API after receiving valid token
   */
  async ngOnInit() {
    this.ngTitleService.setTitle('Loading...')
    try {
      await completeSpotifyLogin()
      await this.fetchUserData()
      this.router.navigateByUrl('/')
    }
    catch (error) {
      console.error(error)
    }
  }

  async fetchUserData() {
    await this.userService.fetchUserData()
  }
}
