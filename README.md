# Movie-app

Movie-app, OMDb API kullanarak film, dizi ve bölümleri aramanızı sağlayan bir React uygulamasıdır. Kullanıcılar, film listelerini görüntüleyebilir, detaylarına erişebilir ve farklı filtreleme seçenekleri kullanarak arama yapabilirler.

## Özellikler

- **Film Arama**: İstediğiniz filmi arayabilirsiniz.
- **Filtreleme**: Yıl, tür ve sayfa numarasına göre sonuçları filtreleyebilirsiniz.
- **Film Detayları**: Seçilen filmin detaylarına erişebilirsiniz.
- **Responsive Tasarım**: Mobil ve masaüstü cihazlarda uyumlu kullanıcı arayüzü.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü oluşturmak için.
- **Redux Toolkit**: Durum yönetimi için.
- **React Router**: Sayfa yönlendirmeleri için.
- **Ant Design**: Kullanıcı arayüzü bileşenleri için.
- **Axios**: API istekleri için.
- **TypeScript**: Tip güvenliği ve daha iyi kod tamamlaması için.

## Kurulum

Proje dizinini klonladıktan sonra gerekli bağımlılıkları yüklemek için aşağıdaki adımları izleyin:

```bash
cd movie-app
npm install or yarn
```

## Ortam Değişkenleri

API anahtarınızı .env dosyasına eklemeniz gerekiyor. Proje kök dizininde ki .env.example dosyasini .env olarak degistirin.

## Çalıştırma

Projeyi yerel ortamda çalıştırmak için:

```bash
npm start or yarn start
```

Tarayıcınızda http://localhost:3000 adresine gidin.

## Yapılandırmalar

- **Redux Store**: Uygulama genelindeki verileri yönetmek için kullanılır.
- **Router**: Uygulamadaki sayfalar arasında geçiş yapmayı sağlar.
- **Async Thunks**: API isteklerini asenkron olarak yönetmek için kullanılır.

## Proje Yapısı
```
movie-app/
├── public/
├── src/
│   ├── components/    # Reusable React components
│   ├── store/         # Redux store configuration and slices
│   ├── styles/        # CSS and styling files
│   ├── router/        # Application routing setup
│   ├── App.tsx        # Main application component
│   ├── index.tsx      # Application entry point
│   
└── README.md
```
