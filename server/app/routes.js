module.exports = function(app) {

    news = [{
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
    ];

    app.get('/', function(req, res) {
        res.send(news);
    });

    app.get('/main', function(req, res) {
        // Contest.find(function(err, contests) {
        //     if (err) {
        //         res.send(err);
        //     }
        //     res.json(contests);
        // });
        console.log('get main');
    });

    // app.put('/contest/:id', function(req, res) {
    //     Contest.findById(req.body.id, function(err, contest) {
    //         if (err) {
    //             res.send(err);
    //         }
    //         res.json(contest);
    //     });
    //     console.log('put contest/id');
    // });

    // app.put('/admin', parser.single('image'), validateToken, function(req, res) {
    //     // console.log("put admin " + req.headers.authorization);

    //     Contest.create({
    //         name: req.body.name,
    //         image: req.file.secure_url,
    //         description: req.body.description
    //     }, function(err) {
    //         if (err) {
    //             res.send(err);
    //         }
    //     });
    //     console.log('put admin');
    // });

    // app.post('/login', function(req, res) {
    //     User.findOne({ login: req.body.login, password: req.body.password },
    //         function(err, users) {
    //             if (err) {
    //                 res.send(err);
    //             }
    //             const token = jwt.sign(users.login, serverJWTSecret);
    //             res.status(200).send({
    //                 user: users.login,
    //                 token: token
    //             });
    //         })
    //     console.log('post /login');
    // });
}