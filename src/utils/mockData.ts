import appleProcessor from '../assets/images/apple_processor.png';
import internetHistory from '../assets/images/internet_history.png';
import kamchatkaNature from '../assets/images/kamchatka_nature.png';
import minimalistUi from '../assets/images/minimalist_ui.png';
import reactCoding from '../assets/images/react_coding.png';
import vscodeSetup from '../assets/images/vscode_setup.png';

export const videos = [
    {
        id: { videoId: 'apple-m3' },
        snippet: {
            title: 'Революция Apple M3: Будущее процессоров',
            channelId: 'UC_tech_review',
            channelTitle: 'TechReview RU',
            description: 'Подробный обзор нового чипа M3 от Apple. Тесты производительности и сравнение с конкурентами.',
            thumbnails: {
                high: { url: appleProcessor }
            },
            publishedAt: '2023-11-15T10:00:00Z'
        }
    },
    {
        id: { videoId: 'internet-history' },
        snippet: {
            title: 'История Интернета: От ARPANET до наших дней',
            channelId: 'UC_history_channel',
            channelTitle: 'History Channel',
            description: 'Увлекательное путешествие в историю создания всемирной паутины. Кто на самом деле изобрел интернет?',
            thumbnails: {
                high: { url: internetHistory }
            },
            publishedAt: '2023-10-20T14:30:00Z'
        }
    },
    {
        id: { videoId: 'kamchatka' },
        snippet: {
            title: 'Дикая природа Камчатки: Медведи и Вулканы',
            channelId: 'UC_world_geo',
            channelTitle: 'World Geographic',
            description: 'Невероятные кадры из самого сердца Камчатки. Встреча с бурыми медведями и извержение вулкана.',
            thumbnails: {
                high: { url: kamchatkaNature }
            },
            publishedAt: '2023-09-05T09:15:00Z'
        }
    },
    {
        id: { videoId: 'ui-design' },
        snippet: {
            title: 'Принципы Минимализма в UI/UX Дизайне',
            channelId: 'UC_design_master',
            channelTitle: 'Design Masterclass',
            description: 'Как создавать чистые и удобные интерфейсы. Разбор лучших практик и ошибок начинающих дизайнеров.',
            thumbnails: {
                high: { url: minimalistUi }
            },
            publishedAt: '2023-12-01T16:45:00Z'
        }
    },
    {
        id: { videoId: 'react-advanced' },
        snippet: {
            title: 'Продвинутый React: Хуки, Context и оптимизация',
            channelId: 'UC_code_academy',
            channelTitle: 'Code Academy',
            description: 'Глубокое погружение в разработку на React. Учимся писать эффективный и масштабируемый код.',
            thumbnails: {
                high: { url: reactCoding }
            },
            publishedAt: '2024-01-10T11:20:00Z'
        }
    },
    {
        id: { videoId: 'vscode-setup' },
        snippet: {
            title: 'Идеальная настройка VS Code для веб-разработчика',
            channelId: 'UC_devtools',
            channelTitle: 'DevTools Pro',
            description: 'Лучшие плагины, темы и горячие клавиши, которые ускорят вашу работу в 10 раз.',
            thumbnails: {
                high: { url: vscodeSetup }
            },
            publishedAt: '2024-02-01T13:00:00Z'
        }
    }
];

export const categories = [
    { name: 'Главная', id: 'home' },
    { name: 'Тренды', id: 'trending' },
    { name: 'Подписки', id: 'subscriptions' },
    { name: 'Музыка', id: 'music' },
    { name: 'Игры', id: 'gaming' },
    { name: 'Фильмы', id: 'movies' },
    { name: 'Спорт', id: 'sports' },
];
