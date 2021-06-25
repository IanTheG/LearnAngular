import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { completeLogin } from '../../../auth/spotify'

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
})

/** Component for /callback route
 * Displays a loading screen while Spotify logs in the user
*/
export class CallbackComponent implements OnInit {

  constructor(private router: Router) { }

  /** Completes the login when Spotify logs in successfully.
   * Re-navigates to the home page
   */
  async ngOnInit() {
    try {
      await completeLogin()
      this.router.navigateByUrl('/')
    }
    catch (error) {
      console.error(error)
    }
  }

}
