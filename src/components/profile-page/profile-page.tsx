import { Component, h } from '@stencil/core';

@Component({
  tag: 'profile-page',
  styleUrl: 'profile-page.css',
  shadow: true
})

export class ProfilePage {

  render() {
    return (
      <div class="root">
        <div class="hero">
          <img src="https://research.cbc.osu.edu/sokolov.8/wp-content/uploads/2017/12/profile-icon-png-898.png" />
          <h1>Marco</h1>
          <span class="title">Contact</span> <span>+9199889988</span>
        </div>
        <div>
          <h3 class="detail-heading">Basic Details</h3>
          <div>
            <div class="inline">
              <div>Name</div>
              <div>Marco</div>
            </div>
            <div class="inline">
              <div>Date Of Birth</div>
              <div>02-Nov-1979</div>
            </div>
          </div>
        </div>
        <div>
          <h3 class="detail-heading">Contanct Details</h3>
        </div>
      </div>
    );
  }
}
