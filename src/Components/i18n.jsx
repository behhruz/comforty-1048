import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                freeShipping: "Free shipping on all orders over $50",
                language: "Language",
                uzbek: "Uzbek",
                russian: "Russian",
                english: "English",
                faqs: "FAQs",
                needHelp: "Need Help",
                searchPlaceholder: "Search here...",
                allCategories: "All Categories",
                home: "Home",
                shop: "Shop",
                product: "Product",
                pages: "Pages",
                about: "About",
                contact: "Contact",
            },
        },
        uz: {
            translation: {
                freeShipping: "Barcha buyurtmalar uchun bepul yetkazib berish $50 dan oshiq",
                language: "Til",
                uzbek: "O‘zbek",
                russian: "Rus",
                english: "Ingliz",
                faqs: "Savollar",
                needHelp: "Yordam kerakmi",
                searchPlaceholder: "Bu yerda izlang...",
                allCategories: "Barcha Kategoriyalar",
                home: "Bosh sahifa",
                shop: "Do‘kon",
                product: "Mahsulot",
                pages: "Sahifalar",
                about: "Haqida",
                contact: "Bog‘lanish",
            },
        },
        ru: {
            translation: {
                freeShipping: "Бесплатная доставка на все заказы свыше $50",
                language: "Язык",
                uzbek: "Узбекский",
                russian: "Русский",
                english: "Английский",
                faqs: "Вопросы",
                needHelp: "Нужна помощь",
                searchPlaceholder: "Ищите здесь...",
                allCategories: "Все категории",
                home: "Главная",
                shop: "Магазин",
                product: "Продукт",
                pages: "Страницы",
                about: "О нас",
                contact: "Контакт",
            },
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false, 
    },
});

export default i18n;
