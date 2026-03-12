# Hisob Website

Официальный лендинг для приложения Hisob — профессиональное решение для управления финансами и бизнесом.

## 📁 Структура проекта

```
website/
├── index.html          # Главная страница (лендинг)
├── privacy.html        # Политика конфиденциальности
├── terms.html          # Условия использования
├── styles.css          # Стили для всех страниц
└── README.md          # Этот файл
```

## 🎨 Дизайн

Сайт выполнен в премиальном стиле:
- Минималистичный и элегантный дизайн
- Цветовая схема: зелёный акцент (#2C5F4F) на светлом фоне
- Шрифты Manrope + Playfair Display
- Адаптивная верстка для всех устройств

## 🚀 Запуск

### Локальный просмотр

Просто откройте `index.html` в браузере.

### Хостинг

Рекомендуемые платформы для размещения:

1. **GitHub Pages** (бесплатно)
   ```bash
   git add website/
   git commit -m "Add website"
   git push origin main
   ```
   Settings → Pages → Source: `main branch` → `/website`

2. **Netlify** (бесплатно)
   - Перетащите папку `website/` на [netlify.com/drop](https://app.netlify.com/drop)
   - Или подключите GitHub репозиторий

3. **Vercel** (бесплатно)
   - Импортируйте проект с GitHub
   - Root Directory: `website`

4. **Firebase Hosting**
   ```bash
   cd website
   firebase init hosting
   firebase deploy
   ```

## 🔗 Важно перед публикацией

### 1. Обновите ссылки на сторы

В файлах `index.html` замените `#` на реальные ссылки:

```html
<!-- App Store -->
<a href="https://apps.apple.com/app/idYOUR_APP_ID">
    App Store
</a>

<!-- Google Play -->
<a href="https://play.google.com/store/apps/details?id=com.yourapp.hisob">
    Google Play
</a>
```

### 2. Настройте контакты

Обновите email и Telegram в разделах:
- Контакты (`index.html`)
- Политика конфиденциальности (`privacy.html`)
- Условия использования (`terms.html`)

```html
<!-- Пример -->
<a href="mailto:your-email@domain.com">your-email@domain.com</a>
<a href="https://t.me/your_support">@your_support</a>
```

### 3. Добавьте favicon

Создайте файл `favicon.ico` и добавьте в `<head>`:

```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### 4. Обновите домен для SEO

Если у вас свой домен, замените `hisob.tj` в файлах:
- `index.html` — og:url, canonical
- `sitemap.xml` — все URL
- `robots.txt` — Sitemap URL

### 5. SEO метатеги

В `index.html` уже настроены: meta description, keywords, Open Graph, Twitter Card, JSON-LD. При необходимости обновите:

```html
<meta name="description" content="Ваше описание">
<meta property="og:title" content="Hisob">
<meta property="og:description" content="Ваше описание">
<meta property="og:image" content="https://yoursite.com/og-image.jpg">
```

## 📱 Скриншоты

Рекомендуется добавить скриншоты приложения:
1. Создайте папку `images/`
2. Добавьте скриншоты
3. Обновите класс `.phone-screen` в `styles.css`:

```css
.phone-screen {
    background: url('images/screenshot.png') center/cover;
    /* вместо градиента */
}
```

## 📄 Юридические документы

Созданы полноценные документы:
- **Политика конфиденциальности** — соответствует GDPR и требованиям App Store/Google Play
- **Условия использования** — покрывают все аспекты использования приложения

⚠️ **Важно:** Проконсультируйтесь с юристом перед публикацией для соответствия местному законодательству.

## 🎯 Чеклист перед модерацией

- [ ] Обновлены ссылки на App Store и Google Play
- [ ] Настроены контактные данные (email, Telegram)
- [ ] Добавлены реальные скриншоты приложения
- [ ] Проверена работа на мобильных устройствах
- [ ] Настроен SSL (HTTPS) на хостинге
- [ ] Добавлен favicon
- [ ] Проверены юридические документы
- [ ] Настроена Google Analytics (опционально)

## 🌐 Поддерживаемые браузеры

- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+
- Мобильные браузеры (iOS Safari, Chrome Mobile)

## 📞 Поддержка

При возникновении вопросов:
- Email: support@hisob.tj
- Telegram: @hisob_support

---

**Создано:** 2 марта 2026 г.  
**Версия:** 1.0.0
