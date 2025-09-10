import fs from 'fs';
import path from 'path';

const file = fs.readFileSync('translation.txt', 'utf8');
const lines = file.split('\n').filter(Boolean);

const languages = ['en','de','es','ru','fr','it'];
const data = {};

lines.forEach(line => {
    // Remove trailing | and split
    const parts = line.replace(/\|+$/,'').split('|'); // handle multiple trailing pipes
    if (parts.length < 3) return;

    const [section, key, ...translations] = parts;

    // Debug: check parsing
    console.log(section, key, translations);

    if (!data[section]) data[section] = {};
    data[section][key] = {};

    languages.forEach((lang, i) => {
        data[section][key][lang] = translations[i] || '';
    });
});

// Write JSON per language
languages.forEach(lang => {
    const langDir = path.join('public', 'locales', lang);
    if (!fs.existsSync(langDir)) fs.mkdirSync(langDir, { recursive: true });

    const langData = {};
    for (const section in data) {
        langData[section] = {};
        for (const key in data[section]) {
            langData[section][key] = data[section][key][lang];
        }
    }

    fs.writeFileSync(path.join(langDir, 'common.json'), JSON.stringify(langData, null, 2));
});

console.log('Conversion complete!');