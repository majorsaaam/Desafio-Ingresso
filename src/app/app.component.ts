import { Component, OnInit } from '@angular/core';
// import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  filmes: any;
  cidades: any = [
    { cidade: "São Paulo", id: "1" },
    { cidade: "Rio de Janeiro", id: "2" }
  ];
  cidadeEscolhida: string = "São Paulo";
  url: string = "https://api-content.ingresso.com/v0/templates/highlights/1/partnership/home";
  filtroFilme: any = {event: { title: '' }};
  filterVal: any;

  GetFilmes()  {
    fetch(this.url).then((next) => {
      return next.json()
    }).then((cartaz) => {
      this.filmes = cartaz;
      console.log(this.filmes);
    })
  }

  GoToTrailer(id: string) {
    let filme = this.filmes.filter((el: any) => el.event.id == id);
    let urlSite = filme[0].event.siteURL
    let trailers = filme[0].event.trailers;
    if (trailers == null ) { 
      window.open(urlSite, '_blank');
    } else {
      window.open(trailers[0].url, '_blank');
    }
  }

  ChangeLocation(id: number) {
    this.url = "https://api-content.ingresso.com/v0/templates/highlights/" + id + "/partnership/home";    
    this.GetFilmes();
    this.cidadeEscolhida = this.cidades.filter((el: any) => el.id == id)[0].cidade;
  }

  constructor() { }
  
  ngOnInit() {
    this.GetFilmes();
    this.DirectionArrows();
  }

  DirectionArrows() { 
    let left = document.getElementById('arrow-left');
    let right = document. getElementById('arrow-right');
    let scroll = document.getElementById('modules');
    left.addEventListener("click", function() {
      scroll.scrollBy(-280,0)
    }, false);
    right.addEventListener("click", function() {
      scroll.scrollBy(280,0)
    }, false)
  }
}
