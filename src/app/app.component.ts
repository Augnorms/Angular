import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <section class="">
      <header class="p-2 bg-red-300">
        <img src="../assets/home.svg" alt="logo" aria-hidden="true" />
      </header>

      <main class="mt-2 p-2">
        <router-outlet> </router-outlet>
      </main>
    </section>
  `,
})
export class AppComponent {}
