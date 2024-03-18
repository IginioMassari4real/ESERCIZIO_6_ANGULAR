import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  
  calciatori = [

    {nome: "Kylian", cognome: "Mbappè", età:25, colore:"lightgreen", nazionalità: "francia",ruolo: "attaccante", overall:91, immagine:"../../assets/antonino_.jpg"  },

    {nome: "Kevin", cognome: "De Bruyne", età:32, colore:"lightgreen", nazionalità: "belgio",ruolo: "centrocampista", overall:91,immagine:"../../assets/antonino_.jpg"  },

    {nome: "Erling", cognome: "Haaland", età:23, colore:"lightgreen", nazionalità: "norvegia",ruolo: "attaccante", overall:91,immagine:"../../assets/antonino_.jpg"  },

    {nome: "Alexia", cognome: "Putellas", età:30, colore:"lightgreen", nazionalità: "spagna",ruolo: "attaccante", overall:91,immagine:"../../assets/antonino_.jpg"  },

    {nome: "Lionel", cognome: "Messi", età:36, colore:"lightgreen", nazionalità: "argentina",ruolo: "attaccante", overall:90,immagine:"../../assets/antonino_.jpg"  },

    {nome: "Sam", cognome: "Kerr", età:30, colore:"lightgreen", nazionalità: "australia",ruolo: "attaccante", overall:90,immagine:"../../assets/antonino_.jpg"  },

    {nome: "Karim", cognome: "Benzema", età:36, colore:"lightgreen", nazionalità: "francia",ruolo: "attaccante", overall:90,immagine:"../../assets/antonino_.jpg"  },

    {nome: "Caroine Graham", cognome: "Hansen", età:33, colore:"lightgreen", nazionalità: "norvegia",ruolo: "attaccante", overall:90,immagine:"../../assets/antonino_.jpg"  },

    {nome: "Thibaut", cognome: "Courtois", età:31, colore:"lightgreen", nazionalità: "belgio",ruolo: "portiere", overall:90,immagine:"../../assets/antonino_.jpg"  },
 
    {nome: "Aitana", cognome: "Bonmati'", età:26, colore:"lightgreen", nazionalità: "spagna",ruolo: "attaccante", overall:90,immagine:"../../assets/antonino_.jpg"  },
  ]

}
