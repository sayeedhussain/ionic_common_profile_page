import { Component, h } from '@stencil/core';

@Component({
  tag: 'profile-page',
  styleUrl: 'profile-page.css',
  shadow: true
})

export class ProfilePage {

  render() {
    return (
          <div>
            <div class="hero">
              <img src="https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"/>
              <h1>Marco</h1>
              <span class="title">Contact</span> <span>+9199889988</span>
            </div>
            <div>
              <br/>
              <br/>
              <br/>
              <span class="left">Completed Claims</span><span class="right numberCircle">10</span>
              <br />
              <br />
              <span class="left">Pending Claims</span><span class="right numberCircle">2</span>
            </div>
        </div>
    );
  }
}