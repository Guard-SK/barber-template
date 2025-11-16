export const siteConfig = {
  meta: {
    title: 'Golden Chair Barber | Barbershop Bratislava',
    description:
      'Moderný barbershop v centre Bratislavy. Presný strih, úprava brady a pohodová atmosféra. Rezervujte si svoj termín online.',
  },
  brand: {
    name: 'Golden Chair Barber',
    shortName: 'Golden Chair',
    cityTag: 'Bratislava – Staré Mesto',
  },
  navigation: [
    { href: '#hero', label: 'Domov' },
    { href: '#services', label: 'Služby' },
    { href: '#pricing', label: 'Cenník' },
    { href: '#about', label: 'O nás' },
    { href: '#team', label: 'Tím' },
    { href: '#reviews', label: 'Recenzie' },
    { href: '#gallery', label: 'Galéria' },
    { href: '#booking', label: 'Booking' },
    { href: '#contact', label: 'Kontakt' },
  ],
  hero: {
    eyebrow: 'Barbershop Bratislava',
    title: 'Presný strih. Žiadne kompromisy.',
    subtitle:
      'Golden Chair Barber je miesto, kde sa spája remeslo, atmosféra a férový prístup. Rezervuj si svoj čas a ostatné nechaj na nás.',
    primaryCta: {
      label: 'Rezervovať termín',
      href: '#booking',
    },
    secondaryCta: {
      label: 'Pozrieť cenník',
      href: '#pricing',
    },
    stats: [
      { label: 'Rokov skúseností', value: '10+' },
      { label: 'Spokojných klientov', value: '4 800+' },
      { label: 'Priemerné hodnotenie', value: '4.9★' },
    ],
  },
  services: [
    {
      name: 'Pánsky strih',
      description:
        'Precízny strih strojčekom aj nožnicami, styling na mieru a poradenstvo podľa typu vlasov.',
      imageSrc: '/service_strih.jpg',
      imageAlt: 'Barber strihá klienta v kresle, záber zboku.',
    },
    {
      name: 'Úprava brady',
      description:
        'Tvarovanie brady, čistenie kontúr britvou a horúci uterák pre dokonalý finiš.',
      imageSrc: '/service_brada.jpg',
      imageAlt: 'Barber strihá klienta v kresle, záber zboku.',
    },
    {
      name: 'Combo: vlasy + brada',
      description:
        'Kompletný servis pre tých, ktorí chcú odísť s absolútne fresh lookom.',
      imageSrc: '/service_combo.jpg',
      imageAlt: 'Barber strihá klienta v kresle, záber zboku.',
    },
    {
      name: 'Holenie britvou',
      description:
        'Tradičné holenie s horúcim uterákom a starostlivosťou o pokožku tváre.',
      imageSrc: '/service_britva.jpg',
      imageAlt: 'Barber strihá klienta v kresle, záber zboku.',
    },
    {
      name: 'Junior cut',
      description:
        'Strih pre mladých gentlemanov do 13 rokov s rovnakou pozornosťou k detailu.',
      imageSrc: '/service_junior.jpg',
      imageAlt: 'Barber strihá klienta v kresle, záber zboku.',
    },
    {
      name: 'Rituál Golden Chair',
      description:
        'Strih, brada, maska, masáž hlavy a styling – kompletný reset pre hlavu aj myseľ.',
      imageSrc: '/service_golden.jpg',
      imageAlt: 'Barber strihá klienta v kresle, záber zboku.',
    },
  ],
  pricing: {
    note: 'Všetky ceny sú orientačné. Finálna cena závisí od náročnosti a dĺžky vlasov/brady.',
    categories: [
      {
        name: 'Vlasy',
        items: [
          {
            name: 'Pánsky strih',
            description: 'Strih strojčekom aj nožnicami + styling.',
            price: '28 €',
            duration: '45 min',
          },
          {
            name: 'Skin fade',
            description: 'Moderný skin fade s dôrazom na prechody.',
            price: '30 €',
            duration: '45–60 min',
          },
          {
            name: 'Junior cut',
            description: 'Strih pre mladých gentlemanov do 13 rokov.',
            price: '25 €',
            duration: '30 min',
          },
        ],
      },
      {
        name: 'Brada',
        items: [
          {
            name: 'Úprava brady',
            description: 'Tvarovanie, britva, hot towel, olej/ balzam.',
            price: '20 €',
            duration: '30 min',
          },
          {
            name: 'Holenie britvou',
            description: 'Tradičné holenie s horúcim uterákom.',
            price: '24 €',
            duration: '40 min',
          },
        ],
      },
      {
        name: 'Balíčky',
        items: [
          {
            name: 'Classic combo',
            description: 'Strih + úprava brady.',
            price: '38 €',
            duration: '75 min',
          },
          {
            name: 'Gentleman’s Ritual',
            description:
              'Strih, brada, maska, vosk, úprava obočia a masáž hlavy.',
            price: '58 €',
            duration: '90 min',
          },
        ],
      },
      {
        name: 'Extra',
        items: [
          {
            name: 'Hot towel + masáž',
            description: 'Horúci uterák, masáž hlavy a šije.',
            price: '8 €',
          },
          {
            name: 'Čistiaca maska',
            description: 'Ošetrenie pleti pre svieži vzhľad.',
            price: '6 €',
          },
          {
            name: 'Úprava obočia',
            description: 'Jemné, maskulínne čistenie obočia.',
            price: '5 €',
          },
        ],
      },
    ],
  },
  about: {
    title: 'O barbershope',
    tagline: 'Pre mužov, ktorí vedia, čo chcú.',
    body: [
      'Golden Chair Barber vznikol z jednoduchej myšlienky – vytvoriť priestor, kde sa chlap cíti dobre ešte skôr, než si sadne do kresla.',
      'Kombinujeme tradičné barber remeslo s moderným prístupom. Sledujeme trendy, ale nikdy nezabúdame na klasiku, ktorá funguje vždy.',
      'Namiesto pásovej výroby si na každého klienta vyhradíme čas. Zaujíma nás, čo nosíš, kde pracuješ a čo ti sedí – aby si z nášho kresla odchádzal s účesom, ktorý ti fakt sedí.',
    ],
    highlights: [
      'Férový prístup a otvorená komunikácia',
      'Prémiové produkty pre vlasy aj bradu',
      'Káva alebo drink ako samozrejmosť',
    ],
  },
  team: {
    enabled: true,
    members: [
      {
        name: 'Martin “Goldie” Kováč',
        role: 'Head barber & founder',
        bio: 'Špecializuje sa na presné fade-y, klasické business strihy a celkový styling podľa tvaru tváre.',
        imageAlt: 'Martin strihá zákazníka v kresle.',
        bookingLabel: 'Booknuť k Martinovi',
      },
      {
        name: 'Patrik “Pat” Novák',
        role: 'Barber – brady & rituály',
        bio: 'Miluje prácu s bradou, tradičné holenie a rituály s horúcim uterákom.',
        imageAlt: 'Patrik pripravuje horúci uterák na holenie.',
        bookingLabel: 'Booknuť k Patrikovi',
      },
      {
        name: 'Adam “Ace” Horváth',
        role: 'Fade & moderné strihy',
        bio: 'Zameriava sa na moderné strihy, skin fade a textúrované účesy.',
        imageAlt: 'Adam dokončuje prechody na skin fade.',
        bookingLabel: 'Booknuť k Adamovi',
      },
    ],
  },
  reviews: [
    {
      quote:
        'Najlepší barbershop, v akom som bol. Žiadne rýchle strihanie, ale poctivý prístup a výsledok, ktorý drží týždne.',
      name: 'Roman, 32',
      label: 'Pravidelný klient',
    },
    {
      quote:
        'Skvelá atmosféra, super hudba a hlavne chalani vedia, čo robia. Vždy odchádzam s pocitom, že vyzerám lepšie než som prišiel.',
      name: 'Marek, 28',
      label: 'Combo vlasy + brada',
    },
    {
      quote:
        'Konečne miesto, kde berú čas klienta vážne. Online booking, žiadne čakanie a top výsledok.',
      name: 'Peter, 35',
      label: 'Business strih',
    },
  ],
  gallery: {
    images: [
      {
        // src: 'https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg',
        alt: 'Barber dolaďuje detail na fade strihu.',
      },
      {
        // src: 'https://images.pexels.com/photos/3998409/pexels-photo-3998409.jpeg',
        alt: 'Detail na úpravu brady britvou.',
      },
      {
        // src: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg',
        alt: 'Barber shop interiér s kreslom a zrkadlom.',
      },
      {
        // src: 'https://images.pexels.com/photos/3998421/pexels-photo-3998421.jpeg',
        alt: 'Klient počas relaxačného rituálu s horúcim uterákom.',
      },
      {
        // src: 'https://images.pexels.com/photos/3998428/pexels-photo-3998428.jpeg',
        alt: 'Strih s dôrazom na detail na bokoch.',
      },
      {
        // src: 'https://images.pexels.com/photos/3998420/pexels-photo-3998420.jpeg',
        alt: 'Úprava brady s použitím oleja.',
      },
    ],
  },
  booking: {
    heading: 'Booking & rezervácie',
    subheading:
      'Objednaj sa online alebo nám jednoducho zavolaj. Termín máš istý, bez čakania.',
    primary: {
      label: 'Rezervovať termín online',
      href: '#', // sem potom Bookio / iný systém
      note: 'Online booking cez externtý systém (Bookio, Fresha, …)',
    },
    secondary: {
      label: 'Zavolať do barbershopu',
      href: 'tel:+421900000000',
      note: 'Ak preferuješ telefonickú rezerváciu.',
    },
    infoLines: [
      'Rezerváciu môžeš zmeniť alebo zrušiť najneskôr 3 hodiny pred termínom.',
      'Pri meškaní 10+ minút nemôžeme garantovať celý servis.',
    ],
  },
  contact: {
    heading: 'Kontakt & adresa',
    addressTitle: 'Nájdeš nás v Starom Meste',
    addressLines: ['Štefánikova 12', '811 05 Bratislava – Staré Mesto'],
    phone: '+421 900 000 000',
    email: 'info@goldenchair.sk',
    hours: [
      'Pondelok – Piatok: 10:00 – 20:00',
      'Sobota: 10:00 – 16:00',
      'Nedeľa: zatvorené',
    ],
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...fake-placeholder...',
    socials: [
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
    ],
  },
  footer: {
    legalName: 'Golden Chair Barber s. r. o.',
    ico: 'IČO: 00 000 000',
    links: [
      { label: 'Obchodné podmienky', href: '#' },
      { label: 'Ochrana súkromia', href: '#' },
    ],
  },
};
