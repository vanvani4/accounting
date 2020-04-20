import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor() { }

  menu: Menu[] = [
    { id: 1, name: 'Головна' },
    { id: 2, name: 'Новини' },
    { id: 3, name: 'Про нас' },
    { id: 4, name: 'Мій кабінет' },
  ]

  news: News[] = [
    {
      id: 1,
      title: 'Новий платіж на тепло та гарячу воду: як зміниться тариф',
      description: ' У квітневих платіжках кияни побачать новий платіж — за обслуговування загальнобудинкових лічильників. Що це за платіж, як зміниться тариф та чи запрацює нововведення в інших містах — читайте у матеріалі сайту 24 каналу.',
      link: 'https://24tv.ua/komunalka_2020_teplo_ta_garyacha_voda_noviy_platizh_tarif_u_kiyevi_n1312869',
      image: '../../assets/img/img-news-1.webp'
    },
    {
      id: 2,
      title: 'Комунальні послуги: скільки заборгували українці',
      description: 'Через карантин українці змушені економити на всьому, зокрема, на оплаті житлово-комунальних послуг. Багато українців опинилися без роботи, тож просто не мають чим платити.',
      link: 'https://24tv.ua/komunalni_poslugi_skilki_zaborguvali_ukrayintsi_n1329267',
      image: '../../assets/img/img-news-2.webp'
    }
  ]

  getMenu() {
    return this.menu;
  }

  getNews() {
    return this.news;
  }
}
