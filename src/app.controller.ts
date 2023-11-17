import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Felhasznalo } from './felhasznalo';

const felhasznalok: Felhasznalo[] = [
  {
    nev: 'Gipsz Jakab',
    nem: 'férfi',
    szulDatum: '1995.12.13',
    egyenleg: 120000,
    aktivitas: 'aktív',
  },
  {
    nev: 'Bohóc Lajos',
    nem: 'férfi',
    szulDatum: '2003.07.29',
    egyenleg: -34000,
    aktivitas: 'inaktív',
  },
  {
    nev: 'Vágó Ferenc',
    nem: 'férfi',
    szulDatum: '2009.02.10',
    egyenleg: -400000,
    aktivitas: 'aktív',
  },
  {
    nev: 'Egyip Tomi',
    nem: 'férfi',
    szulDatum: '2001.08.12',
    egyenleg: 500,
    aktivitas: 'inaktív',
  },
  {
    nev: 'Molnár Anna',
    nem: 'nő',
    szulDatum: '1970.03.04',
    egyenleg: 780000,
    aktivitas: 'inaktív',
  },
  {
    nev: 'Gál Laura',
    nem: 'nő',
    szulDatum: '1996.09.01',
    egyenleg: -35000,
    aktivitas: 'aktív',
  }
];

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(){
    return {
      users: felhasznalok.filter(felh => felh.aktivitas == "aktív"),
    };
  }
}
