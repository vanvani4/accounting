import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor() { }

  menu: Menu[] = [
    { id: 1, name: 'Головна', link: '/main' },
    { id: 2, name: 'Новини', link: 'news' },
    { id: 3, name: 'Про нас', link: '#' },
    { id: 4, name: 'Мій кабінет', link: '#' },
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
    },
    {
      id: 3,
      title: 'До уваги керівників ОСББ: рекомендації з дезінфекції. Відеокоментар',
      description: 'Рекомендації щодо оптимізації заходів з протидії COVID-19 на об’єктах житлового господарства',
      link: 'https://omr.gov.ua/ua/news/housing/',
      image: '../../assets/img/img-news-3.jpg'
    },
    {
      id: 4,
      title: 'В Одесі тимчасово припинить роботу бювет у Старобазарному сквері',
      description: 'Бюветний комплекс у Старобазарному сквері закритий до 16 квітня',
      link: 'https://omr.gov.ua/ua/news/219387/',
      image: '../../assets/img/img-news-4.jpg'
    },
    {
      id: 5,
      title: 'Офіційно: дані на ранок 23 квітня по захворюваності COVID-19 в Одесі',
      description: 'За даними на ранок 23 квітня 2020 року, негативні результати двох контрольних ПЛР отримані у двох одеситів, які захворіли на COVID-19, - жінки 1958 р.н. і чоловіки 1963 р.н.Ці пацієнти є здоровими від коронавірусної хвороби COVID-19 і зняті з обліку.',
      link: 'https://omr.gov.ua/ua/news/219467/',
      image: '../../assets/img/img-news-5.jpg'
    },
    {
      id: 6,
      title: 'Відкрилося дистанційне позачергове засідання виконкому. Пряма трансляція',
      description: '23 квітня 2020 року відбувається дистанційне позачергове засідання виконавчого комітету Одеської міської ради.Пряма трансляція засідання.',
      link: 'https://omr.gov.ua/ua/news/219466/',
      image: '../../assets/img/img-news-6.jpg'
    }
  ]

  getMenu() {
    return this.menu;
  }

  getNews() {
    return this.news;
  }
}
