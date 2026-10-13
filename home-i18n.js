// home-i18n.js — Automatic homepage translation
(function(){
  'use strict';

  // ═══ TRANSLATION DICTIONARY ═══
  var DICT = {
    'بيتك الجديد': {
      en: 'Your New Home', fr: 'Votre Nouvelle Maison', es: 'Tu Nuevo Hogar',
      de: 'Dein Neues Zuhause', tr: 'Yeni Yuvan', ur: 'آپ کا نیا گھر',
      id: 'Rumah Baru Anda', ru: 'Ваш Новый Дом', zh: '你的新家'
    },
    'أهلاً بك في': {
      en: 'Welcome to', fr: 'Bienvenue à', es: 'Bienvenido a',
      de: 'Willkommen bei', tr: 'Hoş Geldin', ur: 'خوش آمدید',
      id: 'Selamat Datang di', ru: 'Добро пожаловать в', zh: '欢迎来到'
    },
    '✦ موقع إسلامي شامل': {
      en: '✦ Comprehensive Islamic Site', fr: '✦ Site Islamique Complet',
      es: '✦ Sitio Islámico Completo', de: '✦ Umfassende Islamische Seite',
      tr: '✦ Kapsamlı İslami Site', ur: '✦ جامع اسلامی ویب سائٹ',
      id: '✦ Situs Islami Komprehensif', ru: '✦ Всеобъемлющий Исламский Сайт',
      zh: '✦ 综合伊斯兰网站'
    },
    'رحلتك تبدأ من هنا. سنكون معك خطوة بخطوة من لحظة نطق الشهادة إلى أن تصبح مسلماً عالماً عاملاً بإذن الله.': {
      en: 'Your journey starts here. We will walk with you step by step from the moment you say the Shahada until you become a knowledgeable Muslim, by Allah\'s will.',
      fr: 'Votre voyage commence ici. Nous vous accompagnerons pas à pas depuis le moment où vous prononcez la Chahada.',
      es: 'Tu viaje comienza aquí. Te acompañaremos paso a paso desde el momento en que pronuncies la Shahada.',
      de: 'Deine Reise beginnt hier. Wir begleiten dich Schritt für Schritt ab dem Moment der Schahada.',
      tr: 'Yolculuğun burada başlıyor. Şehadet getirdiğin andan itibaren adım adım yanında olacağız.',
      ur: 'آپ کا سفر یہاں سے شروع ہوتا ہے۔ ہم آپ کے ساتھ قدم بہ قدم چلیں گے۔',
      id: 'Perjalanan Anda dimulai di sini. Kami akan menemani Anda langkah demi langkah.',
      ru: 'Ваш путь начинается здесь. Мы будем рядом шаг за шагом.',
      zh: '你的旅程从这里开始。我们将陪伴你一步一步。'
    },
    '﴿ قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ﴾': {
      en: '"Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins."',
      fr: '"Dis : Ô Mes serviteurs qui avez commis des excès à votre propre détriment, ne désespérez pas de la miséricorde d\'Allah."',
      es: '"Di: ¡Oh Mis siervos que os habéis excedido contra vosotros mismos, no desesperéis de la misericordia de Allah!"',
      de: '"Sprich: O Meine Diener, die ihr gegen euch selbst maßlos gewesen seid, verzweifelt nicht an der Barmherzigkeit Allahs!"',
      tr: '"De ki: Ey kendilerine karşı aşırı giden kullarım! Allah\'ın rahmetinden ümidinizi kesmeyin."',
      ur: '﴿ قُلْ یَا عِبَادِیَ الَّذِینَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ﴾',
      id: '"Katakanlah: Hai hamba-hamba-Ku yang melampaui batas terhadap diri mereka sendiri, janganlah kamu berputus asa dari rahmat Allah."',
      ru: '"Скажи: О Мои рабы, которые преступили против самих себя, не отчаивайтесь в милости Аллаха!"',
      zh: '"你说：我的过分自害的众仆人呀！你们不要绝望于真主的慈恩。"'
    },
    'الزمر: 53': {
      en: 'Az-Zumar: 53', fr: 'Az-Zumar : 53', es: 'Az-Zumar: 53',
      de: 'Az-Zumar: 53', tr: 'Zümer: 53', ur: 'الزمر: 53',
      id: 'Az-Zumar: 53', ru: 'Аз-Зумар: 53', zh: '队伍章：53'
    },
    '🤍 أريد أن أُسلم الآن': {
      en: '🤍 I want to embrace Islam now', fr: '🤍 Je veux embrasser l\'Islam',
      es: '🤍 Quiero abrazar el Islam', de: '🤍 Ich möchte den Islam annehmen',
      tr: '🤍 İslam\'ı kabul etmek istiyorum', ur: '🤍 میں اسلام قبول کرنا چاہتا ہوں',
      id: '🤍 Saya ingin memeluk Islam', ru: '🤍 Я хочу принять Ислам',
      zh: '🤍 我想皈依伊斯兰'
    },
    'Chapter One': {
      en: 'Chapter One', fr: 'Chapitre Un', es: 'Capítulo Uno',
      de: 'Kapitel Eins', tr: 'Birinci Bölüm', ur: 'پہلا باب',
      id: 'Bab Satu', ru: 'Глава Первая', zh: '第一章'
    },
    '🌟 ابدأ رحلتك': {
      en: '🌟 Begin Your Journey', fr: '🌟 Commencez votre voyage',
      es: '🌟 Comienza tu viaje', de: '🌟 Beginne deine Reise',
      tr: '🌟 Yolculuğuna Başla', ur: '🌟 اپنا سفر شروع کریں',
      id: '🌟 Mulai Perjalanan Anda', ru: '🌟 Начните свой путь',
      zh: '🌟 开始你的旅程'
    },
    'أول ما يحتاجه المسلم الجديد': {
      en: 'What a new Muslim needs first', fr: 'Ce dont un nouveau musulman a besoin en premier',
      es: 'Lo que un nuevo musulmán necesita primero', de: 'Was ein neuer Muslim zuerst braucht',
      tr: 'Yeni bir Müslümanın ilk ihtiyacı', ur: 'نئے مسلمان کی پہلی ضرورت',
      id: 'Yang pertama dibutuhkan Muslim baru', ru: 'Что нужно новому мусульманину',
      zh: '新穆斯林最需要的第一件事'
    },
    'تعريف الله': {
      en: 'Does God Exist?', fr: 'Dieu existe-t-il ?', es: '¿Existe Dios?',
      de: 'Existiert Gott?', tr: 'Allah Var mı?', ur: 'کیا اللہ موجود ہے؟',
      id: 'Apakah Allah Ada?', ru: 'Существует ли Бог?', zh: '安拉存在吗？'
    },
    'حجج منطقية لمن يبحث عن الحق': {
      en: 'Logical arguments for seekers of truth', fr: 'Arguments logiques pour les chercheurs de vérité',
      es: 'Argumentos lógicos para buscadores de la verdad', de: 'Logische Argumente für Wahrheitssucher',
      tr: 'Hakikat arayanlar için mantıksal deliller', ur: 'سچ کے متلاشیوں کے لیے منطقی دلائل',
      id: 'Argumen logis untuk pencari kebenaran', ru: 'Логические аргументы для искателей истины',
      zh: '为寻求真理者的逻辑论证'
    },
    'أسماء الله الحسنى': {
      en: 'The 99 Names of Allah', fr: 'Les 99 Noms d\'Allah',
      es: 'Los 99 Nombres de Allah', de: 'Die 99 Namen Allahs',
      tr: 'Allah\'ın 99 İsmi', ur: 'اللہ کے 99 نام',
      id: '99 Nama Allah', ru: '99 имён Аллаха', zh: '安拉的99个尊名'
    },
    '99 اسماً حسناً بمعانيها': {
      en: 'All 99 names with meanings', fr: 'Les 99 noms avec leurs significations',
      es: 'Los 99 nombres con significados', de: 'Alle 99 Namen mit Bedeutungen',
      tr: 'Anlamlarıyla 99 isim', ur: 'معانی کے ساتھ 99 نام',
      id: '99 nama beserta artinya', ru: 'Все 99 имён со значениями',
      zh: '99个尊名及其含义'
    },
    'الأسئلة الشائعة': {
      en: 'FAQ for New Muslims', fr: 'FAQ du nouveau musulman',
      es: 'Preguntas frecuentes del nuevo musulmán', de: 'FAQ für neue Muslime',
      tr: 'Yeni Müslüman SSS', ur: 'نئے مسلمان کے سوالات',
      id: 'FAQ Muslim Baru', ru: 'Вопросы нового мусульманина',
      zh: '新穆斯林常见问题'
    },
    'أجوبة للمسلم الجديد': {
      en: 'Answers for the new Muslim', fr: 'Réponses pour le nouveau musulman',
      es: 'Respuestas para el nuevo musulmán', de: 'Antworten für den neuen Muslim',
      tr: 'Yeni Müslüman için cevaplar', ur: 'نئے مسلمان کے لیے جوابات',
      id: 'Jawaban untuk Muslim baru', ru: 'Ответы для нового мусульманина',
      zh: '新穆斯林的答案'
    },
    'الأذكار اليومية': {
      en: 'Daily Adhkar', fr: 'Adhkar quotidiens', es: 'Adhkar diarios',
      de: 'Tägliche Adhkar', tr: 'Günlük Zikirler', ur: 'روزانہ اذکار',
      id: 'Dzikir Harian', ru: 'Ежедневные азкары', zh: '每日赞念'
    },
    'صباح ومساء ونوم وطعام': {
      en: 'Morning, evening, sleep, food', fr: 'Matin, soir, sommeil, repas',
      es: 'Mañana, tarde, sueño, comida', de: 'Morgen, Abend, Schlaf, Essen',
      tr: 'Sabah, akşam, uyku, yemek', ur: 'صبح، شام، نیند، کھانا',
      id: 'Pagi, sore, tidur, makan', ru: 'Утро, вечер, сон, еда',
      zh: '晨、昏、睡眠、饮食'
    },
    'Chapter Two': {
      en: 'Chapter Two', fr: 'Chapitre Deux', es: 'Capítulo Dos',
      de: 'Kapitel Zwei', tr: 'İkinci Bölüm', ur: 'دوسرا باب',
      id: 'Bab Dua', ru: 'Глава Вторая', zh: '第二章'
    },
    '🎯 أدواتك الشخصية': {
      en: '🎯 Your Personal Tools', fr: '🎯 Vos outils personnels',
      es: '🎯 Tus herramientas personales', de: '🎯 Deine persönlichen Werkzeuge',
      tr: '🎯 Kişisel Araçların', ur: '🎯 آپ کے ذاتی اوزار',
      id: '🎯 Alat Pribadi Anda', ru: '🎯 Ваши личные инструменты',
      zh: '🎯 你的个人工具'
    },
    'أنظمة تفاعلية لتتبع رحلتك': {
      en: 'Interactive systems to track your progress', fr: 'Systèmes interactifs pour suivre votre progression',
      es: 'Sistemas interactivos para seguir tu progreso', de: 'Interaktive Systeme zur Fortschrittsverfolgung',
      tr: 'İlerlemeni takip etmek için etkileşimli sistemler', ur: 'آپ کی پیش رفت ٹریک کرنے کے لیے',
      id: 'Sistem interaktif untuk melacak kemajuan Anda', ru: 'Интерактивные системы для отслеживания прогресса',
      zh: '追踪你进步的互动系统'
    },
    'رحلتي': {
      en: 'My Journey', fr: 'Mon Voyage', es: 'Mi Viaje',
      de: 'Meine Reise', tr: 'Yolculuğum', ur: 'میرا سفر',
      id: 'Perjalanan Saya', ru: 'Мой путь', zh: '我的旅程'
    },
    'تتبع تقدمك اليومي': {
      en: 'Track your daily progress', fr: 'Suivez vos progrès quotidiens',
      es: 'Sigue tu progreso diario', de: 'Verfolge deinen täglichen Fortschritt',
      tr: 'Günlük ilerlemeni takip et', ur: 'اپنی روزانہ پیش رفت ٹریک کریں',
      id: 'Lacak kemajuan harian Anda', ru: 'Отслеживайте прогресс',
      zh: '追踪你的每日进步'
    },
    'شجرة الإيمان': {
      en: 'Faith Tree', fr: 'Arbre de la Foi', es: 'Árbol de la Fe',
      de: 'Baum des Glaubens', tr: 'İman Ağacı', ur: 'ایمان کا درخت',
      id: 'Pohon Iman', ru: 'Дерево веры', zh: '信仰之树'
    },
    'تنمو مع كل عمل صالح': {
      en: 'Grows with every good deed', fr: 'Grandit avec chaque bonne action',
      es: 'Crece con cada buena acción', de: 'Wächst mit jeder guten Tat',
      tr: 'Her iyi amelle büyür', ur: 'ہر نیک عمل سے بڑھتا ہے',
      id: 'Tumbuh dengan setiap amal baik', ru: 'Растёт с каждым добрым делом',
      zh: '随着每个善行成长'
    },
    'أول 40 يوم': {
      en: 'First 40 Days', fr: 'Les 40 premiers jours',
      es: 'Los primeros 40 días', de: 'Die ersten 40 Tage',
      tr: 'İlk 40 Gün', ur: 'پہلے 40 دن',
      id: '40 Hari Pertama', ru: 'Первые 40 дней', zh: '最初的40天'
    },
    'برنامج تدريجي شامل': {
      en: 'A complete step-by-step program', fr: 'Un programme complet étape par étape',
      es: 'Un programa completo paso a paso', de: 'Ein komplettes Schritt-für-Schritt-Programm',
      tr: 'Kapsamlı adım adım program', ur: 'مکمل قدم بہ قدم پروگرام',
      id: 'Program langkah demi langkah lengkap', ru: 'Полная пошаговая программа',
      zh: '完整的分步计划'
    },
    'حياتي بالأرقام': {
      en: 'My Life in Numbers', fr: 'Ma vie en chiffres',
      es: 'Mi vida en números', de: 'Mein Leben in Zahlen',
      tr: 'Rakamlarla Hayatım', ur: 'اعداد میں میری زندگی',
      id: 'Hidupku dalam Angka', ru: 'Моя жизнь в цифрах', zh: '数字中的我的人生'
    },
    'إحصائيات رحلتك': {
      en: 'Statistics of your journey', fr: 'Statistiques de votre voyage',
      es: 'Estadísticas de tu viaje', de: 'Statistiken deiner Reise',
      tr: 'Yolculuğunuzun istatistikleri', ur: 'آپ کے سفر کے اعدادوشمار',
      id: 'Statistik perjalanan Anda', ru: 'Статистика вашего пути',
      zh: '你旅程的统计'
    },
    'Chapter Three': {
      en: 'Chapter Three', fr: 'Chapitre Trois', es: 'Capítulo Tres',
      de: 'Kapitel Drei', tr: 'Üçüncü Bölüm', ur: 'تیسرا باب',
      id: 'Bab Tiga', ru: 'Глава Третья', zh: '第三章'
    },
    '📚 العلم والمعرفة': {
      en: '📚 Knowledge & Learning', fr: '📚 Connaissance et apprentissage',
      es: '📚 Conocimiento y aprendizaje', de: '📚 Wissen und Lernen',
      tr: '📚 İlim ve Öğrenme', ur: '📚 علم اور سیکھنا',
      id: '📚 Pengetahuan dan Pembelajaran', ru: '📚 Знание и обучение',
      zh: '📚 知识与学习'
    },
    'تعلّم دينك من المصادر الموثوقة': {
      en: 'Learn your religion from trusted sources', fr: 'Apprenez votre religion auprès de sources fiables',
      es: 'Aprende tu religión de fuentes confiables', de: 'Lerne deine Religion aus vertrauenswürdigen Quellen',
      tr: 'Dinini güvenilir kaynaklardan öğren', ur: 'اپنا دین قابل اعتماد ذرائع سے سیکھیں',
      id: 'Pelajari agama Anda dari sumber terpercaya', ru: 'Изучайте свою религию из надёжных источников',
      zh: '从可信赖的来源学习你的宗教'
    },
    'قصص الأنبياء': {
      en: 'Stories of the Prophets', fr: 'Histoires des Prophètes',
      es: 'Historias de los Profetas', de: 'Geschichten der Propheten',
      tr: 'Peygamberlerin Kıssaları', ur: 'انبیاء کی کہانیاں',
      id: 'Kisah Para Nabi', ru: 'Истории Пророков', zh: '先知的故事'
    },
    'من آدم إلى محمد ﷺ': {
      en: 'From Adam to Muhammad ﷺ', fr: 'D\'Adam à Muhammad ﷺ',
      es: 'De Adán a Muhammad ﷺ', de: 'Von Adam bis Muhammad ﷺ',
      tr: 'Adem\'den Muhammed ﷺ\'e', ur: 'آدم سے محمد ﷺ تک',
      id: 'Dari Adam hingga Muhammad ﷺ', ru: 'От Адама до Мухаммада ﷺ',
      zh: '从阿丹到穆罕默德 ﷺ'
    },
    'الحلال والحرام': {
      en: 'Halal & Haram', fr: 'Halal et Haram', es: 'Halal y Haram',
      de: 'Halal und Haram', tr: 'Helal ve Haram', ur: 'حلال اور حرام',
      id: 'Halal dan Haram', ru: 'Халяль и Харам', zh: '合法与非法'
    },
    'دليل شامل للمسلم': {
      en: 'A comprehensive Muslim guide', fr: 'Guide complet du musulman',
      es: 'Guía completa del musulmán', de: 'Ein umfassender muslimischer Leitfaden',
      tr: 'Kapsamlı Müslüman rehberi', ur: 'مسلمان کے لیے جامع رہنما',
      id: 'Panduan Muslim yang komprehensif', ru: 'Полное руководство мусульманина',
      zh: '全面的穆斯林指南'
    },
    'الأسئلة الصعبة': {
      en: 'Hard Questions', fr: 'Questions difficiles',
      es: 'Preguntas difíciles', de: 'Schwierige Fragen',
      tr: 'Zor Sorular', ur: 'مشکل سوالات',
      id: 'Pertanyaan Sulit', ru: 'Сложные вопросы', zh: '难题'
    },
    'لكل سؤال جواب': {
      en: 'An answer for every question', fr: 'Une réponse à chaque question',
      es: 'Una respuesta para cada pregunta', de: 'Eine Antwort auf jede Frage',
      tr: 'Her soruya bir cevap', ur: 'ہر سوال کا جواب',
      id: 'Jawaban untuk setiap pertanyaan', ru: 'Ответ на каждый вопрос',
      zh: '每个问题都有答案'
    },
    'الرقية الشرعية': {
      en: 'Islamic Ruqyah', fr: 'Ruqyah Islamique', es: 'Ruqyah Islámica',
      de: 'Islamische Ruqyah', tr: 'İslami Rukye', ur: 'اسلامی رقیہ',
      id: 'Ruqyah Islami', ru: 'Исламская Рукья', zh: '伊斯兰鲁格叶'
    },
    'شفاء بالقرآن والسنة': {
      en: 'Healing with Quran and Sunnah', fr: 'Guérison par le Coran et la Sunna',
      es: 'Sanación con el Corán y la Sunnah', de: 'Heilung durch Quran und Sunnah',
      tr: 'Kur\'an ve Sünnet ile şifa', ur: 'قرآن و سنت سے شفا',
      id: 'Penyembuhan dengan Quran dan Sunnah', ru: 'Исцеление Кораном и Сунной',
      zh: '以古兰经和圣训治疗'
    },
    'Chapter Four': {
      en: 'Chapter Four', fr: 'Chapitre Quatre', es: 'Capítulo Cuatro',
      de: 'Kapitel Vier', tr: 'Dördüncü Bölüm', ur: 'چوتھا باب',
      id: 'Bab Empat', ru: 'Глава Четвёртая', zh: '第四章'
    },
    '🕌 أدوات العبادة': {
      en: '🕌 Worship Tools', fr: '🕌 Outils d\'adoration',
      es: '🕌 Herramientas de adoración', de: '🕌 Anbetungswerkzeuge',
      tr: '🕌 İbadet Araçları', ur: '🕌 عبادت کے اوزار',
      id: '🕌 Alat Ibadah', ru: '🕌 Инструменты поклонения',
      zh: '🕌 崇拜工具'
    },
    'حاسبات وأدوات لمساعدتك': {
      en: 'Calculators and tools to help you', fr: 'Calculateurs et outils pour vous aider',
      es: 'Calculadoras y herramientas para ayudarte', de: 'Rechner und Werkzeuge, die dir helfen',
      tr: 'Sana yardımcı olacak hesaplayıcılar', ur: 'آپ کی مدد کے لیے اوزار',
      id: 'Kalkulator dan alat untuk membantu Anda', ru: 'Калькуляторы и инструменты в помощь',
      zh: '帮助你的计算器和工具'
    },
    'دليل الحج والعمرة': {
      en: 'Hajj & Umrah Guide', fr: 'Guide du Hajj et de la Omra',
      es: 'Guía de Hayy y Umrah', de: 'Hadsch- und Umra-Leitfaden',
      tr: 'Hac ve Umre Rehberi', ur: 'حج و عمرہ گائیڈ',
      id: 'Panduan Haji dan Umrah', ru: 'Руководство по Хаджу и Умре',
      zh: '朝觐和副朝指南'
    },
    'خطوة بخطوة مع الأدعية': {
      en: 'Step by step with supplications', fr: 'Étape par étape avec invocations',
      es: 'Paso a paso con súplicas', de: 'Schritt für Schritt mit Bittgebeten',
      tr: 'Dualarla adım adım', ur: 'دعاؤں کے ساتھ قدم بہ قدم',
      id: 'Langkah demi langkah dengan doa', ru: 'Пошагово с мольбами',
      zh: '分步指导及祈祷词'
    },
    'حاسبة الزكاة': {
      en: 'Zakat Calculator', fr: 'Calculateur de Zakat',
      es: 'Calculadora de Zakat', de: 'Zakat-Rechner',
      tr: 'Zekat Hesaplayıcı', ur: 'زکوٰۃ کیلکولیٹر',
      id: 'Kalkulator Zakat', ru: 'Калькулятор Закята', zh: '天课计算器'
    },
    'احسب زكاتك بدقة': {
      en: 'Calculate your zakat accurately', fr: 'Calculez votre zakat avec précision',
      es: 'Calcula tu zakat con precisión', de: 'Berechne deine Zakat genau',
      tr: 'Zekatını doğru hesapla', ur: 'اپنی زکوٰۃ درست حساب کریں',
      id: 'Hitung zakat Anda dengan akurat', ru: 'Рассчитайте закят точно',
      zh: '准确计算你的天课'
    },
    'التقويم الهجري': {
      en: 'Hijri Calendar', fr: 'Calendrier Hégirien',
      es: 'Calendario Hijri', de: 'Hijri-Kalender',
      tr: 'Hicri Takvim', ur: 'ہجری کیلنڈر',
      id: 'Kalender Hijriah', ru: 'Хиджрийский календарь', zh: '回历'
    },
    'التاريخ الهجري والمناسبات': {
      en: 'Hijri date and Islamic occasions', fr: 'Date hégirienne et occasions islamiques',
      es: 'Fecha hijri y ocasiones islámicas', de: 'Hijri-Datum und islamische Anlässe',
      tr: 'Hicri tarih ve İslami günler', ur: 'ہجری تاریخ اور اسلامی مواقع',
      id: 'Tanggal Hijriah dan hari besar Islam', ru: 'Хиджрийская дата и исламские события',
      zh: '回历日期和伊斯兰节日'
    },
    'أسماء المولود': {
      en: 'Baby Names', fr: 'Noms de Bébé', es: 'Nombres de Bebé',
      de: 'Babynamen', tr: 'Bebek İsimleri', ur: 'بچوں کے نام',
      id: 'Nama Bayi', ru: 'Имена для детей', zh: '婴儿名字'
    },
    'أسماء بمعانيها الجميلة': {
      en: 'Names with beautiful meanings', fr: 'Noms avec de belles significations',
      es: 'Nombres con significados hermosos', de: 'Namen mit schönen Bedeutungen',
      tr: 'Güzel anlamlı isimler', ur: 'خوبصورت معانی والے نام',
      id: 'Nama dengan arti yang indah', ru: 'Имена с красивыми значениями',
      zh: '含义优美的名字'
    },
    'Chapter Five': {
      en: 'Chapter Five', fr: 'Chapitre Cinq', es: 'Capítulo Cinco',
      de: 'Kapitel Fünf', tr: 'Beşinci Bölüm', ur: 'پانچواں باب',
      id: 'Bab Lima', ru: 'Глава Пятая', zh: '第五章'
    },
    '📖 القرآن الكريم': {
      en: '📖 The Holy Quran', fr: '📖 Le Saint Coran',
      es: '📖 El Sagrado Corán', de: '📖 Der Heilige Koran',
      tr: '📖 Kutsal Kur\'an', ur: '📖 قرآن کریم',
      id: '📖 Al-Quran', ru: '📖 Священный Коран', zh: '📖 古兰经'
    },
    'اقرأ وتدبّر كتاب الله — المصحف الشريف كاملاً': {
      en: 'Read and reflect on the Book of Allah — the complete Quran',
      fr: 'Lisez et méditez le Livre d\'Allah — le Coran complet',
      es: 'Lee y reflexiona sobre el Libro de Allah — el Corán completo',
      de: 'Lies und reflektiere das Buch Allahs — der vollständige Koran',
      tr: 'Allah\'ın Kitabını oku ve tefekkür et — tam Kur\'an',
      ur: 'اللہ کی کتاب پڑھیں اور تدبر کریں — مکمل قرآن',
      id: 'Baca dan renungkan Kitab Allah — Al-Quran lengkap',
      ru: 'Читайте и размышляйте над Книгой Аллаха — полный Коран',
      zh: '阅读并思考安拉的经典 — 完整的古兰经'
    },
    'المصحف الشريف': {
      en: 'The Holy Quran', fr: 'Le Saint Coran', es: 'El Sagrado Corán',
      de: 'Der Heilige Koran', tr: 'Kutsal Kur\'an', ur: 'قرآن کریم',
      id: 'Al-Quran', ru: 'Священный Коран', zh: '古兰经'
    },
    'اقرأ القرآن كاملاً مع التفسير': {
      en: 'Read the complete Quran with tafsir', fr: 'Lisez le Coran complet avec tafsir',
      es: 'Lee el Corán completo con tafsir', de: 'Lies den vollständigen Koran mit Tafsir',
      tr: 'Tefsir ile tam Kur\'an oku', ur: 'تفسیر کے ساتھ مکمل قرآن پڑھیں',
      id: 'Baca Al-Quran lengkap dengan tafsir', ru: 'Читайте полный Коран с тафсиром',
      zh: '阅读完整的古兰经及注释'
    },
    'بطاقات النور': {
      en: 'Cards of Light', fr: 'Cartes de Lumière', es: 'Tarjetas de Luz',
      de: 'Lichtkarten', tr: 'Nur Kartları', ur: 'نور کارڈز',
      id: 'Kartu Cahaya', ru: 'Карты Света', zh: '光明卡片'
    },
    'صمّم بطاقات إسلامية': {
      en: 'Design Islamic cards', fr: 'Créez des cartes islamiques',
      es: 'Diseña tarjetas islámicas', de: 'Gestalte islamische Karten',
      tr: 'İslami kartlar tasarla', ur: 'اسلامی کارڈز ڈیزائن کریں',
      id: 'Desain kartu Islami', ru: 'Создавайте исламские карты',
      zh: '设计伊斯兰卡片'
    },
    'خريطة الدول': {
      en: 'World Map', fr: 'Carte du Monde', es: 'Mapa del Mundo',
      de: 'Weltkarte', tr: 'Dünya Haritası', ur: 'دنیا کا نقشہ',
      id: 'Peta Dunia', ru: 'Карта мира', zh: '世界地图'
    },
    'الدول الإسلامية حول العالم': {
      en: 'Islamic countries around the world', fr: 'Pays islamiques à travers le monde',
      es: 'Países islámicos alrededor del mundo', de: 'Islamische Länder weltweit',
      tr: 'Dünyadaki İslam ülkeleri', ur: 'دنیا بھر میں اسلامی ممالک',
      id: 'Negara-negara Islam di seluruh dunia', ru: 'Исламские страны по всему миру',
      zh: '世界各地的伊斯兰国家'
    },
    'حبيبتي الجزائر': {
      en: 'My Beloved Algeria', fr: 'Mon Algérie Bien-Aimée',
      es: 'Mi Querida Argelia', de: 'Mein geliebtes Algerien',
      tr: 'Sevgili Cezayirim', ur: 'میرا پیارا الجزائر',
      id: 'Aljazair Tercinta', ru: 'Мой любимый Алжир', zh: '我亲爱的阿尔及利亚'
    },
    'بلد المليون شهيد': {
      en: 'Land of a Million Martyrs', fr: 'Terre d\'un Million de Martyrs',
      es: 'Tierra de un Millón de Mártires', de: 'Land einer Million Märtyrer',
      tr: 'Bir Milyon Şehit Ülkesi', ur: 'دس لاکھ شہیدوں کی سرزمین',
      id: 'Tanah Sejuta Syuhada', ru: 'Земля миллиона мучеников',
      zh: '百万烈士之地'
    },
    'The Testimony of Faith': {
      en: 'The Testimony of Faith', fr: 'Le Témoignage de Foi',
      es: 'El Testimonio de Fe', de: 'Das Glaubensbekenntnis',
      tr: 'İman Şahitliği', ur: 'کلمہ شہادت',
      id: 'Syahadat', ru: 'Свидетельство веры', zh: '信仰的证词'
    },
    'أشهد أن لا إله إلا الله،': {
      en: 'I bear witness that there is no god but Allah,',
      fr: 'J\'atteste qu\'il n\'y a de divinité qu\'Allah,',
      es: 'Doy testimonio de que no hay más divinidad que Allah,',
      de: 'Ich bezeuge, dass es keinen Gott außer Allah gibt,',
      tr: 'Şahitlik ederim ki Allah\'tan başka ilah yoktur,',
      ur: 'میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں،',
      id: 'Aku bersaksi bahwa tidak ada Tuhan selain Allah,',
      ru: 'Свидетельствую, что нет божества, кроме Аллаха,',
      zh: '我作证：万物非主，唯有安拉；'
    },
    'وأشهد أن محمداً رسول الله': {
      en: 'and I bear witness that Muhammad is the messenger of Allah',
      fr: 'et j\'atteste que Muhammad est le messager d\'Allah',
      es: 'y doy testimonio de que Muhammad es el mensajero de Allah',
      de: 'und ich bezeuge, dass Muhammad der Gesandte Allahs ist',
      tr: 've şahitlik ederim ki Muhammed Allah\'ın elçisidir',
      ur: 'اور میں گواہی دیتا ہوں کہ محمد اللہ کے رسول ہیں',
      id: 'dan aku bersaksi bahwa Muhammad adalah rasul Allah',
      ru: 'и свидетельствую, что Мухаммад — посланник Аллаха',
      zh: '我又作证：穆罕默德是安拉的使者'
    },
    'اسمع وردد': {
      en: 'Listen and repeat', fr: 'Écouter et répéter',
      es: 'Escuchar y repetir', de: 'Hören und wiederholen',
      tr: 'Dinle ve tekrarla', ur: 'سنیں اور دہرائیں',
      id: 'Dengar dan ulangi', ru: 'Слушайте и повторяйте',
      zh: '聆听并重复'
    },
    '🤍 لقد نطقتُ الشهادة الآن': {
      en: '🤍 I have taken my Shahada', fr: '🤍 J\'ai prononcé ma Chahada',
      es: '🤍 He tomado mi Shahada', de: '🤍 Ich habe meine Schahada gesprochen',
      tr: '🤍 Şehadet getirdim', ur: '🤍 میں نے کلمہ پڑھ لیا',
      id: '🤍 Saya sudah bersyahadat', ru: '🤍 Я принял Шахаду',
      zh: '🤍 我已念了清真言'
    },
    '📢 شارك الموقع': {
      en: '📢 Share the site', fr: '📢 Partager le site',
      es: '📢 Comparte el sitio', de: '📢 Seite teilen',
      tr: '📢 Siteyi paylaş', ur: '📢 ویب سائٹ شیئر کریں',
      id: '📢 Bagikan situs', ru: '📢 Поделиться сайтом',
      zh: '📢 分享网站'
    },
    'كل شخص يزور الموقع بسببك = أجر لك في ميزانك يوم القيامة': {
      en: 'Every person who visits because of you = reward for you on the Day of Judgment',
      fr: 'Chaque personne qui visite grâce à vous = récompense pour vous',
      es: 'Cada persona que visite gracias a ti = recompensa para ti',
      de: 'Jeder Besucher dank dir = Lohn für dich',
      tr: 'Senin sayende gelen her kişi = senin için sevap',
      ur: 'آپ کی وجہ سے آنے والا ہر شخص = آپ کے لیے ثواب',
      id: 'Setiap orang yang datang karena Anda = pahala untuk Anda',
      ru: 'Каждый посетитель благодаря вам = награда для вас',
      zh: '因你而来的每个人 = 你的回赐'
    },
    'واتساب': {
      en: 'WhatsApp', fr: 'WhatsApp', es: 'WhatsApp',
      de: 'WhatsApp', tr: 'WhatsApp', ur: 'واٹس ایپ',
      id: 'WhatsApp', ru: 'WhatsApp', zh: 'WhatsApp'
    },
    'فيسبوك': {
      en: 'Facebook', fr: 'Facebook', es: 'Facebook',
      de: 'Facebook', tr: 'Facebook', ur: 'فیس بک',
      id: 'Facebook', ru: 'Facebook', zh: 'Facebook'
    },
    'يوتيوب': {
      en: 'YouTube', fr: 'YouTube', es: 'YouTube',
      de: 'YouTube', tr: 'YouTube', ur: 'یوٹیوب',
      id: 'YouTube', ru: 'YouTube', zh: 'YouTube'
    },
    'نسخ الرابط': {
      en: 'Copy Link', fr: 'Copier le lien', es: 'Copiar enlace',
      de: 'Link kopieren', tr: 'Bağlantıyı kopyala', ur: 'لنک کاپی کریں',
      id: 'Salin tautan', ru: 'Копировать ссылку', zh: '复制链接'
    },
    '🔒 خصوصيتك محفوظة': {
      en: '🔒 Your Privacy is Protected', fr: '🔒 Votre vie privée est protégée',
      es: '🔒 Tu privacidad está protegida', de: '🔒 Deine Privatsphäre ist geschützt',
      tr: '🔒 Gizliliğiniz korunuyor', ur: '🔒 آپ کی رازداری محفوظ ہے',
      id: '🔒 Privasi Anda terlindungi', ru: '🔒 Ваша конфиденциальность защищена',
      zh: '🔒 你的隐私受到保护'
    },
    '✅ لا نجمع أي بيانات شخصية': {
      en: '✅ We do not collect any personal data', fr: '✅ Nous ne collectons aucune donnée personnelle',
      es: '✅ No recopilamos ningún dato personal', de: '✅ Wir sammeln keine persönlichen Daten',
      tr: '✅ Hiçbir kişisel veri toplamıyoruz', ur: '✅ ہم کوئی ذاتی ڈیٹا جمع نہیں کرتے',
      id: '✅ Kami tidak mengumpulkan data pribadi', ru: '✅ Мы не собираем личные данные',
      zh: '✅ 我们不收集任何个人数据'
    },
    '✅ لا نستخدم ملفات تتبع أو إعلانات': {
      en: '✅ We do not use tracking files or ads', fr: '✅ Nous n\'utilisons pas de fichiers de suivi ou de publicités',
      es: '✅ No usamos archivos de seguimiento ni anuncios', de: '✅ Wir verwenden keine Tracking-Dateien oder Werbung',
      tr: '✅ İzleme dosyaları veya reklamlar kullanmıyoruz', ur: '✅ ہم ٹریکنگ فائلیں یا اشتہارات استعمال نہیں کرتے',
      id: '✅ Kami tidak menggunakan file pelacak atau iklan', ru: '✅ Мы не используем файлы отслеживания или рекламу',
      zh: '✅ 我们不使用跟踪文件或广告'
    },
    '✅ لا نرسل أي شيء لأي طرف ثالث': {
      en: '✅ We do not send anything to any third party', fr: '✅ Nous n\'envoyons rien à un tiers',
      es: '✅ No enviamos nada a ningún tercero', de: '✅ Wir senden nichts an Dritte',
      tr: '✅ Hiçbir üçüncü tarafa bir şey göndermiyoruz', ur: '✅ ہم کسی تیسرے فریق کو کچھ نہیں بھیجتے',
      id: '✅ Kami tidak mengirim apa pun ke pihak ketiga', ru: '✅ Мы ничего не отправляем третьим лицам',
      zh: '✅ 我们不向任何第三方发送任何内容'
    },
    '✅ اسمك وتاريخ إسلامك يُحفظان في متصفحك فقط': {
      en: '✅ Your name and Islam date are saved only in your browser',
      fr: '✅ Votre nom et date d\'Islam sont enregistrés uniquement dans votre navigateur',
      es: '✅ Tu nombre y fecha de Islam se guardan solo en tu navegador',
      de: '✅ Dein Name und Islam-Datum werden nur in deinem Browser gespeichert',
      tr: '✅ Adınız ve İslam tarihiniz yalnızca tarayıcınızda kaydedilir',
      ur: '✅ آپ کا نام اور اسلام کی تاریخ صرف آپ کے براؤزر میں محفوظ ہے',
      id: '✅ Nama dan tanggal Islam Anda hanya disimpan di browser Anda',
      ru: '✅ Ваше имя и дата принятия Ислама хранятся только в вашем браузере',
      zh: '✅ 你的名字和入教日期只保存在你的浏览器中'
    },
    '✅ الموقع صُنع لوجه الله — لا لأي غرض تجاري': {
      en: '✅ The site is made for the sake of Allah — not for any commercial purpose',
      fr: '✅ Le site est fait pour Allah — pas à des fins commerciales',
      es: '✅ El sitio está hecho por Allah — no con fines comerciales',
      de: '✅ Die Seite ist für Allah gemacht — nicht für kommerzielle Zwecke',
      tr: '✅ Site Allah için yapıldı — ticari amaç için değil',
      ur: '✅ ویب سائٹ اللہ کے لیے بنائی گئی ہے — کسی تجارتی مقصد کے لیے نہیں',
      id: '✅ Situs ini dibuat untuk Allah — bukan untuk tujuan komersial',
      ru: '✅ Сайт сделан ради Аллаха — не для коммерческих целей',
      zh: '✅ 这个网站是为安拉而做的 — 不是为了任何商业目的'
    },
    'صاحب الموقع:': {
      en: 'Site owner:', fr: 'Propriétaire du site :', es: 'Dueño del sitio:',
      de: 'Website-Inhaber:', tr: 'Site sahibi:', ur: 'ویب سائٹ کے مالک:',
      id: 'Pemilik situs:', ru: 'Владелец сайта:', zh: '网站所有者：'
    },
    'واشمي محمد': {
      en: 'Mohamed Ouachemi', fr: 'Mohamed Ouachemi', es: 'Mohamed Ouachemi',
      de: 'Mohamed Ouachemi', tr: 'Mohamed Ouachemi', ur: 'واشمی محمد',
      id: 'Mohamed Ouachemi', ru: 'Мохамед Уашеми', zh: '穆罕默德·瓦舍米'
    },
    'اللهم ثبّت قلوبنا على دينك، واجعلنا من عبادك الصالحين': {
      en: 'O Allah, keep our hearts firm upon Your religion, and make us among Your righteous servants',
      fr: 'Ô Allah, affermis nos cœurs sur Ta religion et fais de nous Tes vertueux serviteurs',
      es: 'Oh Allah, afianza nuestros corazones en Tu religión y haznos de Tus siervos virtuosos',
      de: 'O Allah, festige unsere Herzen auf Deiner Religion und mache uns zu Deinen rechtschaffenen Dienern',
      tr: 'Allah\'ım, kalplerimizi dinin üzerinde sabit kıl ve bizi salih kullarından eyle',
      ur: 'اے اللہ، ہمارے دلوں کو اپنے دین پر ثابت رکھ اور ہمیں اپنے نیک بندوں میں شامل کر',
      id: 'Ya Allah, teguhkan hati kami di atas agama-Mu dan jadikan kami hamba-hamba-Mu yang saleh',
      ru: 'О Аллах, укрепи наши сердца на Твоей религии и сделай нас из Твоих праведных рабов',
      zh: '安拉啊，让我们的心坚定在你的宗教上，让我们成为你清廉的仆人'
    },
    'صُنع بمحبة ♥ لكل من يبحث عن النور': {
      en: 'Made with love ♥ for everyone searching for the light',
      fr: 'Fait avec amour ♥ pour tous ceux qui cherchent la lumière',
      es: 'Hecho con amor ♥ para todos los que buscan la luz',
      de: 'Mit Liebe gemacht ♥ für alle, die das Licht suchen',
      tr: 'Nur arayan herkes için sevgiyle yapıldı ♥',
      ur: 'نور کی تلاش کرنے والوں کے لیے محبت سے بنایا گیا ♥',
      id: 'Dibuat dengan cinta ♥ untuk semua pencari cahaya',
      ru: 'Сделано с любовью ♥ для всех, кто ищет свет',
      zh: '用爱为所有寻求光明的人制作 ♥'
    },
    'لوحة التحكم': {
      en: 'Admin Panel', fr: 'Panneau d\'administration', es: 'Panel de administración',
      de: 'Admin-Panel', tr: 'Yönetim Paneli', ur: 'ایڈمن پینل',
      id: 'Panel Admin', ru: 'Панель управления', zh: '管理面板'
    }
  };

  // ═══ LANGUAGE NAMES ═══
  var LANGS = {
    ar: '🇸🇦 العربية',
    en: '🇬🇧 English',
    fr: '🇫🇷 Français',
    es: '🇪🇸 Español',
    de: '🇩🇪 Deutsch',
    tr: '🇹🇷 Türkçe',
    ur: '🇵🇰 اردو',
    id: '🇮🇩 Indonesia',
    ru: '🇷🇺 Русский',
    zh: '🇨🇳 中文'
  };

  var currentLang = localStorage.getItem('lang') || 'ar';

  // ═══ APPLY TRANSLATION ═══
  function applyTranslation(lang){
    if (lang === 'ar') {
      // Restore Arabic
      document.querySelectorAll('[data-i18n-orig]').forEach(function(el){
        el.textContent = el.getAttribute('data-i18n-orig');
      });
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
      return;
    }

    // Get all text nodes
    document.querySelectorAll('h1, h2, h3, p, span, a, button, li, div, strong, label').forEach(function(el){
      // Skip if has children elements (only leaf nodes)
      if (el.children.length > 0) return;
      
      var text = el.getAttribute('data-i18n-orig') || el.textContent.trim();
      if (!text) return;
      
      // Save original
      if (!el.getAttribute('data-i18n-orig')) {
        el.setAttribute('data-i18n-orig', text);
      }
      
      // Look for translation
      if (DICT[text] && DICT[text][lang]) {
        el.textContent = DICT[text][lang];
      }
    });

    document.documentElement.lang = lang;
    document.documentElement.dir = ['ar','ur'].indexOf(lang) !== -1 ? 'rtl' : 'ltr';
  }

  // ═══ INJECT LANGUAGE SELECTOR ═══
  function injectSelector(){
    var headerActions = document.querySelector('.header-actions');
    if (!headerActions) return;
    if (document.getElementById('langSelect')) return;

    var sel = document.createElement('select');
    sel.id = 'langSelect';
    sel.className = 'lang-select';
    
    // Style for select
    sel.style.cssText = 'padding:.6rem 1rem;background:var(--paper);border:1.5px solid rgba(201,169,97,.2);border-radius:var(--r-pill);font-family:var(--f-body);font-size:.85rem;font-weight:700;color:var(--ink);outline:none;cursor:pointer;transition:all .3s ease;margin-left:.5rem;';

    Object.keys(LANGS).forEach(function(code){
      var opt = document.createElement('option');
      opt.value = code;
      opt.textContent = LANGS[code];
      if (code === currentLang) opt.selected = true;
      sel.appendChild(opt);
    });

    sel.addEventListener('change', function(){
      currentLang = this.value;
      localStorage.setItem('lang', currentLang);
      applyTranslation(currentLang);
    });

    headerActions.appendChild(sel);
  }

  // ═══ RUN ═══
  function init(){
    injectSelector();
    if (currentLang !== 'ar') {
      applyTranslation(currentLang);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
