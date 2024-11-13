## Wymagania

- Node.js w wersji `>=18`
- Klucz API OpenAI
- Plik `article.txt` zawierający treść artykułu do przekształcenia


## Instalacja:

1. Sklonuj repozytorium lub pobierz pliki na swoje urządzenie.
2. Zainstaluj wszystkie zależności za pomocą komendy:  
```bash
npm i
```

## Instrukcja uruchomienia:

1. Wejdź w plik `.env.template` i w miejsce `YOUR_API_KEY` wpisz własny klucz 
2. Zmień nazwę z `.env.template` na `.env`
3. Wpisz komendę 
```bash
npm run start
```
4. Wygenerowane ciało powinno znajdować się w pliku `artykul.html`
5. Wygenerowany w ten sposób artykuł możesz wkleić w wyznaczone miejsce w pliku `Szablon.html`


## Opis działania:

Program korzysta z API OpenAI, aby wygenerować HTML na podstawie treści pliku txt. Używa modelu AI do strukturyzowania artykułu w HTML, dodając odpowiednie tagi, miejsca na obrazy oraz opisy, dzięki czemu wygenerowany plik HTML jest gotowy do umieszczenia w znacznikach `<body>`.
