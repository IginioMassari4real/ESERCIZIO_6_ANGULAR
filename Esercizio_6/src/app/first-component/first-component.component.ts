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

    {nome: "Kylian", cognome: "Mbappè", età:25, colore:"lightgreen", nazionalità: "francia",ruolo: "attaccante", overall:91,immagine:"../../assets/antonino_.jpg"  },
 
    {nome: "Kylian", cognome: "Mbappè", età:25, colore:"lightgreen", nazionalità: "francia",ruolo: "attaccante", overall:91,immagine:"../../assets/antonino_.jpg"  },

    {nome: "Kylian", cognome: "Mbappè", età:25, colore:"lightgreen", nazionalità: "francia",ruolo: "attaccante", overall:91, immagine:"../../assets/antonino_.jpg"  },

    {nome: "Kevin", cognome: "De Bruyne", età:32, colore:"lightgreen", nazionalità: "belgio",ruolo: "centrocampista", immagine:"../../assets/antonino_.jpg"  },

    {nome: "Erling", cognome: "Haaland", età:23, colore:"lightgreen", nazionalità: "norvegia",ruolo: "attaccante", immagine:"../../assets/antonino_.jpg"  },

    {nome: "Alexia", cognome: "Putellas", età:30, colore:"lightgreen", nazionalità: "spagna",ruolo: "attaccante", immagine:"../../assets/antonino_.jpg"  },

    {nome: "Kylian", cognome: "Mbappè", età:25, colore:"lightgreen", nazionalità: "francia",ruolo: "attaccante", immagine:"../../assets/antonino_.jpg"  },

    {nome: "Kylian", cognome: "Mbappè", età:25, colore:"lightgreen", nazionalità: "francia",ruolo: "attaccante", immagine:"../../assets/antonino_.jpg"  },

    {nome: "Kylian", cognome: "Mbappè", età:25, colore:"lightgreen", nazionalità: "francia",ruolo: "attaccante", immagine:"../../assets/antonino_.jpg"  },

    {nome: "Kylian", cognome: "Mbappè", età:25, colore:"lightgreen", nazionalità: "francia",ruolo: "attaccante", immagine:"../../assets/antonino_.jpg"  },
  ]

}
