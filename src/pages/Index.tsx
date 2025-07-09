import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Download, BarChart3, Target, Users, Zap, TrendingUp, Search, Brain, Globe, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import jsPDF from 'jspdf';

const Index = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [activeSection, setActiveSection] = useState<string>('');

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Table of Contents data
  const tableOfContents = [
    {
      id: 'introduction',
      title: 'Wprowadzenie',
      level: 1
    },
    {
      id: 'part1',
      title: 'Część I: Nieunikniona zmiana',
      level: 1
    },
    {
      id: 'chapter1',
      title: 'Rozdział 1: Koniec wyszukiwania, początek ery odpowiedzi',
      level: 2
    },
    {
      id: 'chapter2',
      title: 'Rozdział 2: Nowa podróż klienta',
      level: 2
    },
    {
      id: 'chapter3',
      title: 'Rozdział 3: Polska arena e-commerce',
      level: 2
    },
    {
      id: 'part2',
      title: 'Część II: Dekodowanie rewolucji',
      level: 1
    },
    {
      id: 'chapter4',
      title: 'Rozdział 4: Wewnątrz "silnika odpowiedzi"',
      level: 2
    },
    {
      id: 'chapter5',
      title: 'Rozdział 5: Arena gigantów',
      level: 2
    },
    {
      id: 'part3',
      title: 'Część III: GEO Playbook',
      level: 1
    },
    {
      id: 'chapter6',
      title: 'Rozdział 6: Nowa filozofia',
      level: 2
    },
    {
      id: 'chapter7',
      title: 'Rozdział 7: Budowanie "cytadeli zaufania"',
      level: 2
    },
    {
      id: 'chapter8',
      title: 'Rozdział 8: Fundament techniczny',
      level: 2
    },
    {
      id: 'part4',
      title: 'Część IV: Dowody i rezultaty',
      level: 1
    },
    {
      id: 'chapter9',
      title: 'Rozdział 9: Obalanie mitów',
      level: 2
    },
    {
      id: 'chapter10',
      title: 'Rozdział 10: Studia przypadków',
      level: 2
    },
    {
      id: 'part5',
      title: 'Część V: Droga naprzód',
      level: 1
    },
    {
      id: 'chapter11',
      title: 'Rozdział 11: Anatomia partnera GEO',
      level: 2
    },
    {
      id: 'chapter12',
      title: 'Rozdział 12: Twoje pierwsze 30 dni',
      level: 2
    },
    {
      id: 'appendices',
      title: 'Dodatki',
      level: 1
    }
  ];

  // Scroll tracking for table of contents
  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => document.getElementById(item.id)).filter(Boolean);
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(tableOfContents[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generatePDF = () => {
    const pdf = new jsPDF();
    pdf.setFontSize(20);
    pdf.text('Rewolucja AI Search: Przewodnik dla polskich firm', 20, 30);
    pdf.setFontSize(12);
    pdf.text('Po optymalizacji pod sztuczną inteligencję', 20, 45);
    pdf.text('Ten PDF zawiera podstawowe informacje z prezentacji.', 20, 60);
    pdf.text('Pełna treść dostępna w wersji online.', 20, 75);
    pdf.save('rewolucja-ai-search-przewodnik.pdf');
  };

  const InteractiveVisualization = ({ type, title }: { type: string; title: string }) => {
    const getVisualizationContent = () => {
      switch (type) {
        case 'growth':
          return (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Chatboty AI</span>
                <Badge variant="secondary">+80%</Badge>
              </div>
              <div className="w-full bg-secondary rounded-full h-3">
                <div className="bg-primary h-3 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Tradycyjne wyszukiwarki</span>
                <Badge variant="secondary">34x więcej wizyt</Badge>
              </div>
              <div className="w-full bg-secondary rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full w-full"></div>
              </div>
            </div>
          );
        case 'conversion':
          return (
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <div className="text-2xl font-bold">+35%</div>
                <div className="text-sm text-muted-foreground">Współczynnik konwersji</div>
              </Card>
              <Card className="p-4 text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <div className="text-2xl font-bold">+62%</div>
                <div className="text-sm text-muted-foreground">Ruch organiczny</div>
              </Card>
            </div>
          );
        case 'platforms':
          return (
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                <Search className="h-5 w-5 text-blue-500" />
                <span className="font-medium">Google AI Overviews</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                <Brain className="h-5 w-5 text-green-500" />
                <span className="font-medium">ChatGPT Search</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                <Globe className="h-5 w-5 text-purple-500" />
                <span className="font-medium">Perplexity AI</span>
              </div>
            </div>
          );
        default:
          return (
            <div className="flex items-center justify-center h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
              <BarChart3 className="h-12 w-12 text-primary" />
            </div>
          );
      }
    };

    return (
      <Card className="my-6">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-primary" />
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {getVisualizationContent()}
        </CardContent>
      </Card>
    );
  };

  const ExpandableSection = ({ id, title, children, level = 1 }: { 
    id: string; 
    title: string; 
    children: React.ReactNode; 
    level?: number;
  }) => {
    const isExpanded = expandedSections[id];
    const HeaderTag = level === 1 ? 'h2' : level === 2 ? 'h3' : 'h4';
    const textSize = level === 1 ? 'text-2xl' : level === 2 ? 'text-xl' : 'text-lg';
    
    return (
      <section id={id} className="mb-8">
        <HeaderTag 
          className={`${textSize} font-bold mb-4 flex items-center cursor-pointer hover:text-primary transition-colors`}
          onClick={() => toggleSection(id)}
        >
          {isExpanded ? <ChevronDown className="h-5 w-5 mr-2" /> : <ChevronRight className="h-5 w-5 mr-2" />}
          {title}
        </HeaderTag>
        {isExpanded && (
          <div className="ml-7 space-y-4 text-muted-foreground leading-relaxed">
            {children}
          </div>
        )}
      </section>
    );
  };

  const ChecklistItem = ({ area, questions }: { area: string; questions: string[] }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <Card className="mb-4">
        <CardHeader 
          className="cursor-pointer hover:bg-secondary/50 transition-colors"
          onClick={() => setIsChecked(!isChecked)}
        >
          <CardTitle className="flex items-center space-x-3">
            <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
              isChecked ? 'bg-primary border-primary' : 'border-muted-foreground'
            }`}>
              {isChecked && <CheckCircle className="h-4 w-4 text-primary-foreground" />}
            </div>
            <span className={isChecked ? 'line-through text-muted-foreground' : ''}>{area}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {questions.map((question, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-primary font-medium">•</span>
                <span className="text-sm">{question}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background">
      {/* Floating Table of Contents */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 w-64 bg-card border rounded-lg shadow-lg p-4 z-40 max-h-96 overflow-y-auto hidden lg:block">
        <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">Spis treści</h3>
        <nav className="space-y-1">
          {tableOfContents.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left text-xs p-2 rounded transition-colors ${
                item.level === 1 ? 'font-semibold' : 'font-normal pl-4'
              } ${
                activeSection === item.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-secondary'
              }`}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="lg:ml-72 p-6 max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
            Rewolucja AI Search
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Przewodnik dla polskich firm po optymalizacji pod sztuczną inteligencję
          </p>
          <Button onClick={generatePDF} className="mb-8">
            <Download className="h-4 w-4 mr-2" />
            Pobierz PDF
          </Button>
        </header>

        {/* Introduction */}
        <section id="introduction" className="mb-12">
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-blue-500/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-6">Wprowadzenie</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Jesteśmy świadkami jednej z najbardziej fundamentalnych transformacji w funkcjonowaniu internetu od dziesięcioleci. 
                Era, w której sukces biznesowy w sieci definiowała obecność na liście dziesięciu niebieskich linków, bezpowrotnie ustępuje 
                miejsca nowemu paradygmatowi.
              </p>
              <p>
                Ten przewodnik to mapa drogowa dla polskich firm, które chcą nie tylko przetrwać, ale prosperować w nowej erze 
                wyszukiwania napędzanego sztuczną inteligencją.
              </p>
            </div>
          </Card>
        </section>

        {/* Part I */}
        <ExpandableSection id="part1" title="Część I: Nieunikniona zmiana: dlaczego dotychczasowe zasady przestały obowiązywać" level={1}>
          <p>Ta część ustanawia fundamentalne "dlaczego". Tworzy poczucie pilności, wykazując, że rewolucja w wyszukiwaniu opartym na sztucznej inteligencji nie jest odległym trendem, lecz obecną rzeczywistością, która bezpośrednio wpływa na polski rynek.</p>
          
          <ExpandableSection id="chapter1" title="Rozdział 1: Koniec wyszukiwania, początek ery odpowiedzi – i nowego wzrostu" level={2}>
            <p>Jesteśmy świadkami jednej z najbardziej fundamentalnych transformacji w funkcjonowaniu internetu od dziesięcioleci. Era, w której sukces biznesowy w sieci definiowała obecność na liście dziesięciu niebieskich linków, bezpowrotnie ustępuje miejsca nowemu paradygmatowi. Wyszukiwarka, jaką znaliśmy, ewoluuje w inteligentny "silnik odpowiedzi" (ang. <em>answer engine</em>), napędzany przez generatywną sztuczną inteligencję. Użytkownicy – a więc i klienci – coraz rzadziej poszukują linków. Oczekują natychmiastowych, skondensowanych odpowiedzi, generowanych w czasie rzeczywistym, bezpośrednio na stronie wyników.</p>

            <p>Pojawienie się chatbotów i wyszukiwania AI wywołało falę spekulacji o "śmierci SEO". Jednak najnowsze, twarde dane rynkowe pokazują obraz zgoła odmienny: to nie jest gra o sumie zerowej. Obserwujemy nie zastąpienie, a dynamiczny, równoległy wzrost obu ekosystemów. W ciągu ostatnich dwóch lat (kwiecień 2023 - marzec 2025) rynek chatbotów AI odnotował <strong>eksplozyjny wzrost o ponad 80%, osiągając 55,2 miliarda wizyt</strong>. Mimo to, w tym samym okresie, tradycyjne wyszukiwarki zdominowały ruch internetowy, generując <strong>1863 miliardy wizyt – czyli 34 razy więcej</strong>. Nawet lider rynku AI, ChatGPT, notuje 26 razy mniej codziennych wizyt niż Google.</p>

            <InteractiveVisualization type="growth" title="Porównanie wzrostu ruchu: AI vs tradycyjne wyszukiwarki" />

            <p>Co więcej, po początkowym, niewielkim spadku, ruch w wyszukiwarkach na początku 2025 roku zaczął ponownie rosnąć, napędzany właśnie przez integrację funkcji AI, takich jak AI Overviews. To dowodzi, że SEO nie umiera – ewoluuje i staje się kluczowym elementem w jeszcze większym i bardziej zdywersyfikowanym ekosystemie.</p>

            <p>Ten globalny trend ma bezpośrednie przełożenie na polski rynek. <strong>Oficjalne uruchomienie funkcji AI Overviews w Polsce nastąpiło 26 marca 2025 roku</strong>, co czyni adaptację do nowych warunków palącą kwestią dla każdego polskiego przedsiębiorstwa. Ignorowanie tej zmiany nie jest już opóźnieniem w adaptacji do globalnych innowacji; jest świadomym pomijaniem fundamentalnej zmiany, która już zaszła na rodzimym rynku. Przy <strong>20-procentowym wzroście wartości rynku reklamy online w Polsce rok do roku</strong>, staje się jasne, że cały ekosystem cyfrowy dynamicznie przesuwa się w kierunku rozwiązań opartych na AI. Firmy, które nie dostosują swoich strategii, nie tylko pozostają w tyle za globalnym trendem, ale aktywnie ignorują zmianę, która już teraz redefiniuje sposób, w jaki polscy konsumenci wchodzą w interakcję z markami w internecie.</p>
          </ExpandableSection>

          <ExpandableSection id="chapter2" title="Rozdział 2: Nowa podróż klienta: od kliknięć do konwersacji" level={2}>
            <p>Zmiana w sposobie prezentacji wyników wyszukiwania w naturalny sposób przekształca interakcje użytkowników. Obserwujemy zjawisko, które można nazwać "przesunięciem uwagi" – od nawykowego klikania w linki w kierunku konsumpcji gotowych, wygenerowanych przez AI odpowiedzi. Szacuje się, że nawet do <strong>60% wyszukiwań w Google może kończyć się bez kliknięcia w jakikolwiek tradycyjny link organiczny</strong>. Użytkownicy otrzymują skondensowaną wiedzę bezpośrednio na stronie wyników, co fundamentalnie zmienia dynamikę i cel generowania ruchu na stronach internetowych.</p>

            <p>Obecność AI Overviews wpływa na liczbę kliknięć w linki, szczególnie w przypadku zapytań o charakterze informacyjnym. Niektóre analizy wskazują na potencjalne spadki ruchu dla tego typu treści sięgające od 18% do nawet 64%. Taka perspektywa może budzić obawy o zmniejszenie widoczności i utratę cennego źródła leadów. Jednakże w tej nowej rzeczywistości pojawia się fascynująca szansa biznesowa. Google aktywnie promuje koncepcję <strong>"kliknięć wyższej jakości"</strong>. Użytkownik, który zapoznał się z syntetyczną odpowiedzią AI i mimo to decyduje się przejść na stronę źródłową, robi to z o wiele silniejszą intencją. Jest już wstępnie poinformowany, a jego celem jest pogłębienie wiedzy, porównanie szczegółów lub dokonanie transakcji.</p>

            <p>Oznacza to, że ruch pochodzący z odnośników w AI Overviews staje się bardziej wartościowy. Użytkownicy ci są lepiej przygotowani, bardziej zaangażowani i, co kluczowe z perspektywy biznesowej, bardziej skłonni do konwersji. To prowadzi nas do fundamentalnej zmiany w mierzeniu sukcesu. Spadek ogólnej liczby sesji na stronie może iść w parze ze wzrostem jakości generowanych leadów i współczynnika konwersji. Narracja strategiczna przesuwa się z metryk ilościowych (liczba kliknięć) na jakościowe (wartość konwersji, ROI), które realnie przekładają się na wyniki biznesowe. Nowa era wyszukiwania nagradza marki, które potrafią budować autorytet i dostarczać wartość jeszcze zanim użytkownik kliknie w link, przyciągając tym samym najbardziej zdecydowanych klientów.</p>
          </ExpandableSection>

          <ExpandableSection id="chapter3" title="Rozdział 3: Polska arena e-commerce: nowe szanse i wyzwania" level={2}>
            <p>Dla polskiego sektora e-commerce, którego rentowność jest nierozerwalnie związana z widocznością w wyszukiwarkach, Generative Engine Optimization (GEO) nie jest jedynie kolejną taktyką optymalizacyjną. Staje się kluczowym elementem strategii, pozwalającym utrzymać udział w rynku i zdobyć mocną pozycję na nowej, zredefiniowanej przez AI arenie.</p>

            <p>Dane z jednego z kluczowych raportów branżowych, „SEO i AI w polskim e-commerce 2025", malują obraz rynku o wysokiej zależności i jednocześnie niepokojąco niskim poziomie przygotowania na nadchodzące zmiany. Analiza ta dostarcza trzech kluczowych wniosków, które powinny być strategicznym sygnałem dla każdego lidera w polskim e-commerce:</p>

            <ol className="list-decimal list-inside space-y-4">
              <li><strong>Organiczna linia życia:</strong> Ruch organiczny jest absolutnie dominującym kanałem pozyskiwania klientów, odpowiadając za <strong>44,56% całego ruchu</strong> w polskim e-commerce. Jest to więcej niż jakikolwiek inny kanał, w tym wejścia bezpośrednie (36,06%) czy ruch płatny (7,7%). Ta dana jednoznacznie pokazuje, jak krytyczna jest widoczność w Google dla stabilności i wzrostu przychodów.</li>
              <li><strong>Stagnacja większości:</strong> Mimo tak ogromnej zależności, przytłaczająca większość firm nie jest w stanie efektywnie wykorzystać tego kanału. Z 1000 przebadanych polskich firm e-commerce, <strong>tylko 295 – czyli mniej niż 30% – odnotowało jakikolwiek wzrost ruchu organicznego rok do roku</strong>. Oznacza to, że ponad 70% rynku już teraz ma trudności z utrzymaniem status quo, jeszcze przed pełnym wpływem rewolucji AI.</li>
              <li><strong>Kryzys niewidzialności:</strong> Najbardziej znaczącym sygnałem jest fakt, że znaczna część polskich marek jest już teraz całkowicie niewidoczna w nowym ekosystemie odpowiedzi. Aż <strong>38% polskich firm e-commerce nie pojawia się w odpowiedziach generowanych przez AI</strong> dla typowych zapytań transakcyjnych, takich jak „najlepszy smartwatch do 1000 zł". Ich oferta, nawet jeśli jest konkurencyjna cenowo i produktowo, po prostu nie istnieje w miejscu, gdzie coraz częściej zapadają decyzje zakupowe.</li>
            </ol>

            <InteractiveVisualization type="conversion" title="Wpływ AI na polski e-commerce: kluczowe metryki" />

            <p>Połączenie tych trzech czynników – ogromnej zależności od kanału, który ulega transformacji, powszechnej stagnacji w jego dotychczasowej formie oraz masowej niewidzialności w jego nowej odsłonie – tworzy poważne wyzwanie biznesowe. To nie jest już kwestia technicznej optymalizacji SEO, lecz strategicznego wyzwania dla ciągłości działania i utrzymania przychodów. Firmy, które zignorują tę nową przestrzeń konkurencyjną, mogą nie tylko stracić pozycję w rankingu, ale całkowicie zniknąć z pola widzenia swoich potencjalnych klientów.</p>
          </ExpandableSection>
        </ExpandableSection>

        {/* Part II */}
        <ExpandableSection id="part2" title="Część II: Dekodowanie rewolucji: przewodnik lidera po nowym ekosystemie AI" level={1}>
          <p>Ta część wyjaśnia "co". Demistyfikuje technologię w kategoriach biznesowych i mapuje nowy krajobraz konkurencyjny, dostarczając liderom wiedzy niezbędnej do podejmowania strategicznych decyzji.</p>
          
          <ExpandableSection id="chapter4" title="Rozdział 4: Wewnątrz silnika odpowiedzi: jak myśli sztuczna inteligencja" level={2}>
            <p>Aby wygrać w nowej erze, należy zrozumieć jej fundamentalne zasady. Oznacza to zrozumienie mechanizmów, za pomocą których modele AI przetwarzają informacje, aby formułować inteligentne i trafne odpowiedzi. U podstaw tej ewolucji leżą trzy kluczowe technologie, które należy postrzegać nie jako techniczne detale, lecz jako nowe reguły gry.</p>

            <ol className="list-decimal list-inside space-y-4">
              <li><strong>Zaawansowane modele językowe (LLM):</strong> Sercem systemów takich jak Google AI Mode czy ChatGPT są potężne modele z rodziny Gemini (Google) i GPT (OpenAI). Można je postrzegać jako niezwykle zaawansowane silniki rozumienia języka, wytrenowane na ogromnych zbiorach danych. Ich zadaniem jest nie tylko wyszukiwanie, ale inteligentna synteza informacji – potrafią rozumieć, podsumowywać, tłumaczyć i generować tekst w sposób naśladujący ludzką logikę i mowę.</li>
              <li><strong>Retrieval-Augmented Generation (RAG):</strong> Jest to mechanizm, który stanowi pomost między wiedzą posiadaną przez model a aktualnością internetu. Działa on na zasadzie „egzaminu z otwartą książką". Zamiast polegać wyłącznie na swojej wstępnie wytrenowanej, statycznej wiedzy, system RAG w odpowiedzi na zapytanie aktywnie przeszukuje sieć w poszukiwaniu świeżych, wiarygodnych informacji. Następnie wykorzystuje te znalezione dane, aby „ugruntować" generowaną odpowiedź w weryfikowalnych, aktualnych faktach. Dzięki RAG, odpowiedzi AI są znacznie bardziej wiarygodne i adekwatne do bieżącej sytuacji.</li>
              <li><strong>Grafy wiedzy (Knowledge Graphs):</strong> Zarówno Google, jak i inne platformy, intensywnie korzystają z grafów wiedzy. Są to gigantyczne bazy danych, które przechowują informacje nie o słowach, ale o <strong>encjach</strong> – konkretnych obiektach, takich jak ludzie, miejsca, organizacje, produkty – oraz o relacjach między nimi. Graf wiedzy rozumie, że „Apple" to firma technologiczna, a nie owoc, i że jest ona powiązana z takimi encjami jak „iPhone" czy „Tim Cook". Optymalizacja pod kątem encji (Entity SEO) staje się kluczowa, ponieważ pomaga AI zrozumieć, kim jest dana marka, jaki jest jej autorytet i w jakiej dziedzinie się specjalizuje.</li>
            </ol>

            <InteractiveVisualization type="platforms" title="Ekosystem platform AI: kluczowi gracze" />

            <p>Te technologie napędzają proces znany jako <strong>„query fan-out"</strong>. Kiedy użytkownik wprowadza złożone zapytanie, na przykład „Jaki jest najlepszy aparat dla początkującego fotografa podróżniczego?", system AI autonomicznie rozkłada je na szereg ukrytych, jednoczesnych pod-zapytań, takich jak „łatwe w obsłudze aparaty", „lekkie aparaty na podróż" czy „recenzje aparatów do 5000 zł". Następnie pobiera informacje z najlepszych źródeł dla każdego z tych pod-zapytań i syntetyzuje je w jedną, spójną odpowiedź. Z perspektywy biznesowej oznacza to, że aby zostać zacytowanym, treść marki musi być autorytetem nie tylko w szerokim temacie, ale także w wielu powiązanych z nim, bardziej szczegółowych aspektach.</p>
          </ExpandableSection>

          <ExpandableSection id="chapter5" title="Rozdział 5: Arena gigantów: przewodnik po kluczowych platformach AI" level={2}>
            <p>Monopol jednego silnika wyszukiwania ulega fragmentacji. Widoczność marki musi być teraz budowana w sposób strategiczny w całym, zdywersyfikowanym ekosystemie „silników odpowiedzi". Każda z głównych platform oferuje unikalne możliwości i inaczej ocenia treści, co wymaga dostosowania strategii.</p>

            <ul className="list-disc list-inside space-y-4">
              <li><strong>Google AI Overviews & AI Mode:</strong> Stanowią one ewolucję tradycyjnego wyszukiwania. AI Overviews to syntetyczne podsumowania pojawiające się nad wynikami organicznymi, podczas gdy AI Mode oferuje w pełni immersyjne, konwersacyjne doświadczenie. Obie funkcje są głęboko zintegrowane z podstawowymi systemami rankingowymi Google, co oznacza, że nadal nagradzają pomocne, wiarygodne i dobrze zoptymalizowane treści (E-E-A-T). Szansa biznesowa polega na budowaniu głębokiego autorytetu tematycznego i tworzeniu „cytowalnych" fragmentów treści, wspartych precyzyjną implementacją danych strukturalnych.</li>
              <li><strong>ChatGPT Search:</strong> Działając w oparciu o silnik wyszukiwania Bing i własny model językowy, ChatGPT jest idealny do generowania kompleksowych, kreatywnych lub konwersacyjnych odpowiedzi. W swoich rekomendacjach często polega na 2-3 najbardziej autorytatywnych, zewnętrznych źródłach. Oznacza to, że kluczowe staje się budowanie autorytetu marki poza własną stroną internetową – poprzez zdobywanie wzmianek na wysoko ocenianych portalach, w branżowych mediach czy na autorytatywnych listach typu „best of". Jest to potężna szansa dla strategicznych działań Digital PR.</li>
              <li><strong>Perplexity AI:</strong> Pozycjonuje się jako „silnik badawczy" dla profesjonalistów i researcherów. Jego główną cechą jest transparentność – każda informacja w odpowiedzi jest opatrzona wyraźnym cytatem i linkiem do źródła. Priorytetem dla Perplexity jest aktualność i wiarygodność faktograficzna. Dla marek, które chcą być postrzegane jako liderzy myśli (<em>thought leaders</em>) i eksperci w swojej dziedzinie, jest to idealna platforma. Sukces osiąga się tu poprzez publikowanie oryginalnych danych, badań, analiz i treści opartych na twardych faktach, które stają się niezbędnym źródłem dla innych.</li>
            </ul>

            <div className="my-6">
              <h4 className="text-lg font-semibold mb-4">Tabela 1: Implikacje strategiczne kluczowych platform typu „Answer Engine"</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="border border-gray-300 p-3 text-left font-semibold">Cecha</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Google AI Overviews / AI Mode</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">ChatGPT Search</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold">Perplexity AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Główny cel dla użytkownika</td>
                      <td className="border border-gray-300 p-3">Szybkie, syntetyczne podsumowania i głęboka eksploracja tematów.</td>
                      <td className="border border-gray-300 p-3">Konwersacja, kreatywność, rozwiązywanie złożonych problemów.</td>
                      <td className="border border-gray-300 p-3">Badania, weryfikacja faktów, odpowiedzi z precyzyjnymi cytatami.</td>
                    </tr>
                    <tr className="bg-secondary/50">
                      <td className="border border-gray-300 p-3 font-medium">Jak wybiera źródła?</td>
                      <td className="border border-gray-300 p-3">Kombinacja tradycyjnych sygnałów SEO (E-E-A-T, linki) i „cytowalności" treści.</td>
                      <td className="border border-gray-300 p-3">Silny nacisk na zewnętrzny autorytet marki i wzmianki w zaufanych źródłach trzecich.</td>
                      <td className="border border-gray-300 p-3">Priorytet dla aktualności, danych faktograficznych i źródeł o charakterze badawczym.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Twoja kluczowa strategia</td>
                      <td className="border border-gray-300 p-3">Budowanie głębokiego autorytetu tematycznego i tworzenie „cytowalnych" fragmentów eksperckich na własnej domenie.</td>
                      <td className="border border-gray-300 p-3">Inwestycja w Digital PR i budowanie autorytetu na zewnętrznych, wysoko ocenianych portalach (recenzje, listy „best of").</td>
                      <td className="border border-gray-300 p-3">Publikowanie oryginalnych danych, badań i analiz, aby stać się niezbędnym źródłem faktów.</td>
                    </tr>
                    <tr className="bg-secondary/50">
                      <td className="border border-gray-300 p-3 font-medium">Klucz do sukcesu</td>
                      <td className="border border-gray-300 p-3">Holistyczne, dobrze ustrukturyzowane treści eksperckie.</td>
                      <td className="border border-gray-300 p-3">Silna reputacja marki, która istnieje również poza własną stroną internetową.</td>
                      <td className="border border-gray-300 p-3">Stanie się źródłem unikalnych, weryfikowalnych informacji.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ExpandableSection>
        </ExpandableSection>

        {/* Part III */}
        <ExpandableSection id="part3" title="Część III: GEO Playbook: twój plan działania na rzecz pozycji lidera rynku" level={1}>
          <p>Ta część szczegółowo omawia „jak". Dostarcza strategicznego, praktycznego schematu działania, który pozwala liderom biznesowym zrozumieć, jakie konkretne kroki należy podjąć, aby dostosować swoją organizację do nowej rzeczywistości.</p>
          
          <ExpandableSection id="chapter6" title="Rozdział 6: Nowa filozofia: od pozycji w rankingu do bycia cytowanym" level={2}>
            <p>Era wyszukiwania AI zaprasza do ewolucji myślenia o widoczności w internecie. Zamiast koncentrować się wyłącznie na zdobywaniu najwyższych pozycji, nowym celem staje się uczynienie treści marki kluczowym, cytowalnym źródłem dla systemów AI. To wymaga poszerzenia tradycyjnego podejścia znanego jako <strong>Search Engine Optimization (SEO)</strong> o nowe, bardziej wyspecjalizowane dyscypliny. Najszerszym z nowych pojęć jest <strong>Generative Engine Optimization (GEO)</strong>, które obejmuje kompleksową optymalizację pod kątem wszystkich platform generatywnej AI, w tym chatbotów i silników odpowiedzi. W ramach GEO wyróżniamy bardziej szczegółowe podejście, jakim jest <strong>Answer Engine Optimization (AEO)</strong>, skupiające się na platformach udzielających bezpośrednich odpowiedzi, jak Google AI Overviews. Czasem w branży używa się również ogólnego terminu <strong>AI Optimization (AIO)</strong>, który odnosi się do wszelkich działań mających na celu dostosowanie treści do algorytmów sztucznej inteligencji. Niezależnie od nazewnictwa, fundamentalna zmiana polega na przejściu od optymalizacji pod kątem rankingu do optymalizacji pod kątem bycia cytowanym.</p>

            <p>Nowa filozofia opiera się na dwóch fundamentalnych filarach:</p>

            <ol className="list-decimal list-inside space-y-4">
              <li><strong>Od optymalizacji stron do optymalizacji fragmentów (passages):</strong> Systemy AI, aby udzielić odpowiedzi, często nie potrzebują analizować całej strony internetowej. Zamiast tego poszukują najbardziej trafnych, zwięzłych i autorytatywnych fragmentów – pojedynczych akapitów, list, definicji czy danych zawartych w tabeli. Zadaniem strategicznym staje się więc takie projektowanie treści, aby te „cytowalne fragmenty" były łatwe do zidentyfikowania, wyodrębnienia i ponownego wykorzystania przez algorytmy. Celem jest dostarczenie AI gotowych „klocków", z których może zbudować odpowiedź.</li>
              <li><strong>Od słów kluczowych do encji (entities):</strong> Wyszukiwarki AI myślą w kategoriach „rzeczy, a nie ciągów znaków". Rozumieją, że „Jacek Dukaj" to konkretna osoba (pisarz), a nie tylko zbitka liter, i że jest on powiązany z takimi encjami jak „Lód" (książka) czy „literatura science fiction" (gatunek). Dlatego budowanie silnej, rozpoznawalnej cyfrowo encji marki, produktu czy autora staje się fundamentem sukcesu. Chodzi o stworzenie spójnego, jednoznacznego obrazu autorytetu w całym internecie, który sztuczna inteligencja może zrozumieć i któremu może zaufać.</li>
            </ol>

            <p>Przyjęcie tej filozofii pozwala świadomie projektować zasoby cyfrowe, które nie tylko odpowiadają na potrzeby użytkowników, ale także stają się wysokiej jakości paliwem dla inteligentnych silników odpowiedzi, zapewniając marce centralne miejsce w nowym ekosystemie informacyjnym.</p>
          </ExpandableSection>

          <ExpandableSection id="chapter7" title="Rozdział 7: Budowanie „cytadeli zaufania": treść i autorytet w erze AI" level={2}>
            <p>W świecie, w którym sztuczna inteligencja może generować ogromne ilości treści, weryfikowalna wiedza ekspercka i autorytet (E-E-A-T) stają się najcenniejszymi aktywami biznesowymi. To one odróżniają wiarygodne źródła od szumu informacyjnego i decydują o tym, które marki zostaną zacytowane przez AI.</p>

            <p>Koncepcja <strong>E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness – Doświadczenie, Ekspertyza, Autorytet, Wiarygodność)</strong> ewoluuje z wytycznej dla ludzkich oceniających jakość stron w zbiór konkretnych, mierzalnych sygnałów dla algorytmów AI. Aby zbudować autorytet, który maszyny mogą zrozumieć, należy skupić się na:</p>

            <ul className="list-disc list-inside space-y-2">
              <li><strong>Doświadczenie (Experience):</strong> Publikowanie autentycznych studiów przypadku, testów produktów i treści pisanych z perspektywy pierwszej osoby („testowaliśmy", „sprawdziliśmy").</li>
              <li><strong>Ekspertyza (Expertise):</strong> Tworzenie szczegółowych biogramów autorów, podkreślanie ich kwalifikacji i linkowanie do profili zawodowych (np. za pomocą danych strukturalnych schema:Person i sameAs).</li>
              <li><strong>Autorytet (Authoritativeness):</strong> Zdobywanie wzmianek i linków zwrotnych z renomowanych, branżowych publikacji.</li>
              <li><strong>Wiarygodność (Trustworthiness):</strong> Regularne aktualizowanie treści, transparentne podawanie danych kontaktowych i, co kluczowe, cytowanie wiarygodnych źródeł zewnętrznych (np. przy użyciu schema:Citation), co pokazuje, że marka jest częścią większego, wiarygodnego ekosystemu wiedzy.</li>
            </ul>

            <InteractiveVisualization type="default" title="Architektura treści Hub-and-Spoke: budowanie autorytetu tematycznego" />

            <p>Idealnym modelem do budowania takiego postrzeganego autorytetu jest architektura treści <strong>Hub-and-Spoke</strong>. Systemy AI lepiej rozumieją i wyżej oceniają witryny, które wyczerpująco pokrywają dany temat. Model ten polega na stworzeniu centralnej, kompleksowej strony filarowej (Hub) na szeroki temat (np. „Kompletny przewodnik po marketingu cyfrowym") oraz serii szczegółowych artykułów klastrowych (Spokes) na powiązane podtematy (np. „Strategia SEO", „Reklama w social media"). Strategiczne linkowanie wewnętrzne – gdzie każda strona klastrowa linkuje do filaru, a filar do klastrów – tworzy silną sieć semantyczną, która jest dla AI jednoznacznym dowodem głębokiej ekspertyzy.</p>

            <p>Równie ważny jest sposób prezentacji treści. Aby zwiększyć szanse na bycie cytowanym, należy stosować proste, ale potężne zasady formatowania:</p>

            <ul className="list-disc list-inside space-y-2">
              <li><strong>Odpowiedź na początku (BLUF - Bottom Line Up Front):</strong> Zaczynanie kluczowych sekcji od zwięzłej, bezpośredniej odpowiedzi na pytanie. AI preferuje takie gotowe do zacytowania fragmenty.</li>
              <li><strong>Struktura dla skanowalności:</strong> Używanie klarownych nagłówków (H2, H3), list punktowanych i numerowanych oraz tabel. Te elementy są dla AI łatwe do sparsowania i ponownego wykorzystania w generowanych odpowiedziach.</li>
            </ul>
          </ExpandableSection>

          <ExpandableSection id="chapter8" title="Rozdział 8: Fundament techniczny: jak uczynić markę zrozumiałą dla maszyn" level={2}>
            <p>Aby systemy AI mogły w pełni zrozumieć i docenić wartość treści, komunikacja z nimi musi odbywać się w ich języku – języku ustrukturyzowanych danych. Solidny fundament techniczny jest nie tyle opcją, co absolutną koniecznością, kluczem do odblokowania pełnego potencjału w strategii GEO.</p>

            <p>Najważniejszym sojusznikiem w tym procesie są <strong>dane strukturalne (Schema.org)</strong>. Działają one jak precyzyjne etykiety, które tłumaczą nieustrukturyzowaną treść na stronie na format jednoznacznie zrozumiały dla maszyn. Zamiast zmuszać AI do domyślania się, czym jest dana informacja, można jej to wprost zakomunikować. Priorytetowe typy schema, które pozwalają wyróżnić się w wyszukiwaniu AI, to:</p>

            <ul className="list-disc list-inside space-y-2">
              <li>Article, BlogPosting: Sygnalizują autorytet i kontekst tematyczny treści.</li>
              <li>FAQPage, HowTo: Idealnie strukturyzują odpowiedzi i instrukcje, czyniąc je głównymi kandydatami do bycia zacytowanym w AI Overviews.</li>
              <li>Product, Offer, AggregateRating: Niezbędne dla e-commerce, dostarczają AI konkretnych danych o produktach, ich cenach, dostępności i opiniach.</li>
              <li>Organization, Person: Budują fundament pod cyfrową encję marki i autora, wzmacniając sygnały E-E-A-T.</li>
              <li>Citation: Nowy, potężny typ, który pozwala jawnie oznaczyć, że treść powołuje się na wiarygodne, zewnętrzne źródła, co dodatkowo buduje zaufanie w oczach AI.</li>
            </ul>

            <p>Wiele crawlerów AI, w tym te używane przez Google, ma ograniczony czas i zasoby na renderowanie skomplikowanego kodu JavaScript. Jeśli kluczowe treści i dane strukturalne są ładowane dopiero po wykonaniu skryptów po stronie klienta, istnieje ryzyko, że nie zostaną w ogóle odczytane. Dlatego kluczowe jest, aby najważniejsze informacje były renderowane po stronie serwera (<strong>Server-Side Rendering - SSR</strong>) i dostępne w początkowym kodzie HTML strony. Zapewnia to natychmiastowy dostęp do danych i maksymalizuje szanse na ich przetworzenie.</p>

            <p>Poniższa checklista stanowi proste narzędzie do samooceny, pozwalające liderom biznesowym szybko zdiagnozować, czy ich firma jest technicznie przygotowana na erę AI. Przejście przez te pytania często ujawnia strategiczne i techniczne luki, które wymagają specjalistycznej interwencji.</p>

            <div className="my-8">
              <h4 className="text-xl font-semibold mb-6 flex items-center">
                <Target className="h-6 w-6 mr-2 text-primary" />
                Checklista gotowości technicznej na GEO
              </h4>
              
              <ChecklistItem 
                area="Autorytet i treść"
                questions={[
                  "Czy posiadamy kompleksowe, eksperckie treści, które dogłębnie pokrywają nasze kluczowe tematy (model Hub-and-Spoke)?",
                  "Czy nasze artykuły są tworzone przez wiarygodnych ekspertów z widocznymi biografiami i kwalifikacjami?",
                  "Czy regularnie publikujemy oryginalne dane, badania lub unikalne studia przypadku?"
                ]}
              />
              
              <ChecklistItem 
                area="Cytowalność i formatowanie"
                questions={[
                  "Czy nasze artykuły dostarczają bezpośrednich, zwięzłych odpowiedzi na popularne pytania na początku tekstu?",
                  "Czy nasze treści są dobrze ustrukturyzowane z użyciem nagłówków (H2, H3), list i tabel, aby ułatwić ich parsowanie przez AI?"
                ]}
              />
              
              <ChecklistItem 
                area="Fundament techniczny"
                questions={[
                  "Czy używamy danych strukturalnych (Schema Markup) do jednoznacznego definiowania kluczowych informacji (produktów, artykułów, FAQ, autorów)?",
                  "Czy nasze kluczowe treści i dane schema są dostępne w początkowym kodzie HTML (SSR), bez konieczności renderowania JavaScriptu?"
                ]}
              />
              
              <ChecklistItem 
                area="Dostęp do ekosystemu AI"
                questions={[
                  "Czy nasz plik robots.txt jednoznacznie zezwala na dostęp kluczowym crawlerom AI (takim jak GPTBot, PerplexityBot)?"
                ]}
              />
            </div>
          </ExpandableSection>
        </ExpandableSection>

        {/* Part IV */}
        <ExpandableSection id="part4" title="Część IV: Dowody i rezultaty: strategie GEO w praktyce" level={1}>
          <p>Ta część dostarcza „dowodów". Przezwycięża sceptycyzm za pomocą twardych danych i pokazuje wymierny zwrot z inwestycji poprzez analizę rzeczywistych przykładów, obalając jednocześnie najczęstsze mity.</p>
          
          <ExpandableSection id="chapter9" title="Rozdział 9: Obalanie mitów: oddzielenie hype'u AI od rzeczywistości biznesowej" level={2}>
            <p>Każda transformacja technologiczna rodzi niepewność i dezinformację. Przejście do ery wyszukiwania AI nie jest wyjątkiem. Zanim przeanalizujemy konkretne sukcesy, kluczowe jest rozprawienie się z najczęstszymi mitami, które mogą paraliżować proces decyzyjny i prowadzić do strategicznych błędów.</p>

            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-red-700">Mit 1: „SEO umarło. Nikt już nie będzie potrzebował mojej strony."</h4>
                <p className="mt-2"><strong>Rzeczywistość:</strong> To fundamentalne nieporozumienie. Sztuczna inteligencja nie tworzy wiedzy z próżni. AI Overviews to kompilacje informacji pochodzących z istniejących stron internetowych. Google, aby wygenerować swoje podsumowania, musi czerpać dane z witryn, które uzna za najbardziej wiarygodne, merytoryczne i najlepiej zoptymalizowane. Oznacza to, że fundamenty SEO, takie jak budowanie autorytetu poprzez sygnały E-E-A-T, są dziś ważniejsze niż kiedykolwiek. Aby AI w ogóle wzięło pod uwagę stronę jako źródło, musi ona być postrzegana jako ekspert w swojej dziedzinie. SEO nie umarło; ewoluowało w bardziej wymagającą i strategiczną dyscyplinę.</p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-yellow-700">Mit 2: „Użytkownicy przestaną klikać w linki."</h4>
                <p className="mt-2"><strong>Rzeczywistość:</strong> AI Overviews są skuteczne w przypadku prostych, faktograficznych zapytań (np. „jaka jest stolica Australii?"). Jednak w przypadku zapytań złożonych, transakcyjnych lub wymagających głębokiej analizy, użytkownicy nadal będą poszukiwać bardziej szczegółowych treści. Nikt nie podejmie decyzji o zakupie samochodu na podstawie krótkiego podsumowania AI; będzie szukał recenzji, testów i opinii. Nikt nie nauczy się skomplikowanej umiejętności z listy punktowanej; będzie szukał poradników wideo i szczegółowych instrukcji. Co więcej, same AI Overviews często zawierają linki do źródeł. Bycie cytowanym źródłem to potężny sygnał autorytetu i szansa na pozyskanie bardzo wartościowego, już wstępnie poinformowanego ruchu.</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-700">Mit 3: „Google karze treści generowane przez AI."</h4>
                <p className="mt-2"><strong>Rzeczywistość:</strong> Oficjalne stanowisko Google jest jednoznaczne: firma nagradza treści wysokiej jakości, niezależnie od tego, jak zostały wyprodukowane. Google nie karze za użycie AI; karze za tworzenie spamerskich, niskiej jakości treści, które nie niosą wartości dla użytkownika. Sztuczna inteligencja jest narzędziem. Można jej użyć do stworzenia błyskotliwej analizy lub do wygenerowania tysięcy bezwartościowych artykułów. Ostateczna odpowiedzialność za jakość spoczywa na człowieku, który nadzoruje proces.</p>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection id="chapter10" title="Rozdział 10: Studia przypadków: od teorii do wymiernego ROI" level={2}>
            <p>Teoria i strategie nabierają pełnego znaczenia, gdy widzimy je w działaniu. Analiza firm, które już zaadaptowały swoje działania do ery AI, dostarcza bezcennych dowodów na skuteczność podejścia GEO i pokazuje wymierne korzyści biznesowe.</p>

            <p>Międzynarodowe przykłady pokazują skalę możliwych do osiągnięcia rezultatów. Firma z branży motoryzacyjnej, po wdrożeniu agresywnej optymalizacji pod kątem AI na zaledwie 15% swoich najważniejszych stron, odnotowała <strong>wzrost ruchu pochodzącego z referencji AI o imponujące 2,300%</strong> w ciągu kilku miesięcy. Kluczowe działania obejmowały restrukturyzację treści pod kątem czytelności dla AI, wzmocnienie sygnałów E-E-A-T oraz implementację zaawansowanych danych strukturalnych.</p>

            <p>Aby jednak w pełni zademonstrować znaczenie tych strategii dla polskiego rynku, kluczowe jest przyjrzenie się lokalnym przykładom sukcesu.</p>

            <div className="space-y-6">
              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-primary">Studium przypadku e-commerce: zwycięstwo w konwersji i widoczności</h4>
                <div className="space-y-3">
                  <div>
                    <strong>Wyzwanie:</strong> Polski sklep internetowy z branży części samochodowych borykał się z niską konwersją i stagnacją ruchu organicznego, mimo szerokiego asortymentu.
                  </div>
                  <div>
                    <strong>Wdrożone rozwiązania:</strong> Zastosowano kompleksową strategię opartą na AI. Wdrożono systemy, które automatycznie rozbudowywały opisy produktów o dane techniczne i wskazówki montażowe, wykorzystując przetwarzanie języka naturalnego (NLP). Algorytmy rozpoznawania obrazu analizowały zdjęcia produktów, wzbogacając opisy i tagi alt. AI automatycznie dobierało słowa kluczowe i generowało unikalne meta tagi, jednocześnie weryfikując duplikację treści. Stworzono również inteligentny system kategoryzacji i rekomendacji produktów.
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <strong>Rezultaty:</strong> Wdrożenie tych działań przyniosło spektakularne rezultaty biznesowe: <strong>wzrost ruchu organicznego o 62%</strong>, <strong>wzrost ogólnego współczynnika konwersji o 35%</strong> oraz <strong>redukcję współczynnika porzuconych koszyków o 41%</strong>. Ten przykład dobitnie pokazuje, że strategiczne wykorzystanie AI w e-commerce bezpośrednio przekłada się na wzrost przychodów.
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-primary">Studium przypadku usługi niszowe: budowanie ruchu od zera</h4>
                <div className="space-y-3">
                  <div>
                    <strong>Wyzwanie:</strong> Polska agencja edukacyjna posiadała stronę internetową, która nie generowała praktycznie żadnego ruchu ani zapytań z powodu całkowitego braku optymalizacji.
                  </div>
                  <div>
                    <strong>Wdrożone rozwiązania:</strong> Wdrożono ustrukturyzowane podejście SEO/GEO. Przeprowadzono audyt techniczny, naprawiono błędy indeksacji, wdrożono prawidłową strukturę językową i tagi hreflang. Opracowano strategię contentową opartą na analizie słów kluczowych i intencji użytkowników, tworząc treści odpowiadające na potrzeby studentów na różnych etapach procesu decyzyjnego.
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <strong>Rezultaty:</strong> W ciągu zaledwie sześciu miesięcy (od lipca 2024 do stycznia 2025) <strong>ruch organiczny na stronie wzrósł dziewięciokrotnie</strong>, a klient osiągnął stabilną widoczność dla kluczowych zapytań. To studium przypadku dowodzi, że zasady GEO mają uniwersalne zastosowanie i przynoszą wymierne korzyści nie tylko w wielkoskalowym e-commerce, ale również w niszowych branżach usługowych.
                  </div>
                </div>
              </Card>
            </div>

            <p>Połączenie tych dwóch studiów przypadku – jednego skoncentrowanego na zaawansowanym e-commerce, a drugiego na usługach B2C – pokazuje uniwersalną moc i elastyczność strategii GEO. Dowodzi, że niezależnie od modelu biznesowego, adaptacja do ery wyszukiwania AI jest kluczem do wzrostu.</p>
          </ExpandableSection>
        </ExpandableSection>

        {/* Part V */}
        <ExpandableSection id="part5" title="Część V: Droga naprzód: aktywacja strategii GEO" level={1}>
          <p>Ta ostatnia część stanowi „wezwanie do działania". Prowadzi czytelnika od wiedzy do konkretnych kroków, jakie może podjąć, i subtelnie pozycjonuje agencję jako idealnego partnera w tej transformacji.</p>
          
          <ExpandableSection id="chapter11" title="Rozdział 11: Anatomia partnera GEO światowej klasy" level={2}>
            <p>Nowa era wymaga nowego rodzaju partnera strategicznego. Wybór agencji do prowadzenia działań w zakresie Generative Engine Optimization to decyzja, która będzie miała długofalowe skutki dla pozycji rynkowej firmy. Zamiast pytać „jak agencje sprzedają GEO?", liderzy biznesowi powinni pytać „jakich kompetencji i zdolności powinniśmy wymagać od naszego partnera?". Na podstawie analizy ofert wiodących polskich agencji, które już wdrożyły usługi GEO, można zdefiniować zestaw kluczowych cech idealnego partnera.</p>

            <InteractiveVisualization type="default" title="Kluczowe kompetencje partnera GEO" />

            <ul className="list-disc list-inside space-y-4">
              <li><strong>Szerszy zakres kompetencji:</strong> Partner musi myśleć strategicznie poza tradycyjnym SEO. Powinien wykazywać się głębokim zrozumieniem niuansów działania różnych platform, takich jak ChatGPT, Perplexity czy Gemini, i potrafić opracować zdywersyfikowaną strategię obecności na każdej z nich.</li>
              <li><strong>Zaawansowane narzędzia i analityka:</strong> Wiodący partner nie może opierać się wyłącznie na standardowych narzędziach SEO. Powinien dysponować zaawansowanymi, często autorskimi rozwiązaniami analitycznymi, które pozwalają monitorować widoczność w odpowiedziach AI, identyfikować czynniki rankingowe specyficzne dla GEO i śledzić działania konkurencji w nowym ekosystemie.</li>
              <li><strong>Nowa definicja sukcesu (nowe KPI):</strong> Partner musi być w stanie mierzyć to, co teraz ma znaczenie. Zamiast skupiać się na przestarzałych metrykach, takich jak średnia pozycja, powinien raportować w oparciu o nowe wskaźniki efektywności, takie jak <strong>AI Attribution Rate</strong> (jaki procent odpowiedzi AI cytuje naszą markę), <strong>Share of AI Voice</strong> (nasz udział w odpowiedziach AI w porównaniu z konkurencją) oraz <strong>jakość ruchu</strong> pochodzącego z referencji AI. To pokazuje dojrzałość strategiczną i koncentrację na wynikach biznesowych.</li>
              <li><strong>Holistyczny, hybrydowy zespół:</strong> Skuteczne GEO wymaga interdyscyplinarnego podejścia. Idealny partner powinien dysponować zespołem, który łączy w sobie kompetencje z zakresu technicznego SEO, strategii contentowej, analizy danych (data science) oraz strategicznego Digital PR. Tylko taka synergia pozwala na budowanie autorytetu marki w sposób zrozumiały zarówno dla ludzi, jak i dla maszyn.</li>
            </ul>
          </ExpandableSection>

          <ExpandableSection id="chapter12" title="Rozdział 12: Twoje pierwsze 30 dni: plan działania na nową erę" level={2}>
            <p>Wiedza bez działania jest bezwartościowa. Czas na adaptację jest teraz. Poniższy plan to pięć strategicznych kroków, które każdy lider biznesowy może podjąć w ciągu najbliższego miesiąca, aby rozpocząć transformację swojej firmy i przygotować ją na wyzwania ery wyszukiwania AI. Plan ten został zaadaptowany z wewnętrznych wytycznych dla agencji i przekształcony w empoweringowy schemat działania dla klienta.</p>

            <div className="space-y-4">
              <Card className="p-4">
                <div className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-1">1</Badge>
                  <div>
                    <h4 className="font-semibold mb-2">Zwołaj strategiczną odprawę</h4>
                    <p className="text-sm text-muted-foreground">Zbierz kluczowych liderów z działów marketingu, sprzedaży i rozwoju produktu. Przedstaw im kluczowe wnioski z tego raportu, koncentrując się na bezpośrednim wpływie zmian na Wasz model biznesowy i pozycję konkurencyjną. Celem jest zbudowanie wspólnego zrozumienia skali wyzwania.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-1">2</Badge>
                  <div>
                    <h4 className="font-semibold mb-2">Przeprowadź bazowy „audyt widoczności w AI"</h4>
                    <p className="text-sm text-muted-foreground">Wykonaj proste, ale otwierające oczy ćwiczenie. Ręcznie sprawdź widoczność swojej marki dla 10 najważniejszych zapytań komercyjnych w Google AI Overviews oraz na platformie Perplexity. Zapisz wyniki. Czy Twoja marka jest widoczna? Kto jest cytowany, jeśli nie Ty?</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-1">3</Badge>
                  <div>
                    <h4 className="font-semibold mb-2">Zidentyfikuj swój „klejnot koronny"</h4>
                    <p className="text-sm text-muted-foreground">Wskaż jeden, najbardziej kompleksowy i ekspercki zasób treści, jaki posiada Twoja firma (np. flagowy poradnik, szczegółowe badanie, kluczowy artykuł filarowy). Wyznacz go jako projekt pilotażowy do pełnej optymalizacji pod kątem GEO. To pozwoli przetestować procesy na mniejszą skalę.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-1">4</Badge>
                  <div>
                    <h4 className="font-semibold mb-2">Zrewiduj swoje metryki</h4>
                    <p className="text-sm text-muted-foreground">Dokonaj krytycznego przeglądu obecnych raportów marketingowych. Czy metryki, na które patrzysz, nadal adekwatnie odzwierciedlają sukces w erze, gdzie 60% wyszukiwań może nie generować kliknięć? Zacznij dyskusję na temat wprowadzenia nowych KPI, takich jak jakość leadów z AI czy udział w odpowiedziach.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-1">5</Badge>
                  <div>
                    <h4 className="font-semibold mb-2">Zasięgnij eksperckiej diagnozy</h4>
                    <p className="text-sm text-muted-foreground">Najważniejszym i najbardziej efektywnym pierwszym krokiem jest zaangażowanie specjalistycznego partnera w celu przeprowadzenia kompleksowego audytu GEO i opracowania strategicznej mapy drogowej. Samodzielna diagnoza może wskazać objawy, ale tylko dogłębna, zewnętrzna analiza odkryje przyczyny i wyznaczy najskuteczniejszą ścieżkę do osiągnięcia pozycji lidera w nowej erze wyszukiwania.</p>
                  </div>
                </div>
              </Card>
            </div>
          </ExpandableSection>
        </ExpandableSection>

        {/* Appendices */}
        <ExpandableSection id="appendices" title="Dodatki" level={1}>
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold mb-4">Dodatek A: Katalog elementów wizualnych Google AI Overviews</h3>
              <p className="mb-4">Zrozumienie poszczególnych komponentów wizualnych, które pojawiają się w nowych formatach wyszukiwania, jest kluczowe do precyzyjnej optymalizacji. Poniżej znajduje się katalog najczęściej występujących elementów.</p>
              
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Podsumowania tekstowe (paragrafy, listy):</strong> Najbardziej powszechny format – blok tekstu lub lista punktowana/numerowana, która bezpośrednio odpowiada na zapytanie. Optymalizacja polega na tworzeniu zwięzłych odpowiedzi na początku treści i stosowaniu znaczników &lt;ul&gt;, &lt;ol&gt; oraz schema:FAQPage.</li>
                <li><strong>Tabele porównawcze:</strong> Ustrukturyzowane tabele porównujące cechy, specyfikacje lub ceny produktów. Wymagają stosowania semantycznego znacznika &lt;table&gt; i dostarczania twardych, faktograficznych danych.</li>
                <li><strong>Siatki i karuzele produktowe:</strong> Wizualne formaty prezentujące produkty z obrazami, cenami i ocenami. Kluczowa jest tu integracja z Google Merchant Center i wdrożenie szczegółowego schema:Product.</li>
                <li><strong>Lokalne podsumowania generowane przez AI:</strong> Akapit lub lista lokalnych firm w odpowiedzi na zapytania z intencją lokalną (np. „najlepsza restauracja w pobliżu"). Optymalizacja wymaga zadbanego Profilu Firmy w Google i zbierania szczegółowych, opisowych recenzji.</li>
                <li><strong>Formaty planistyczne i instruktażowe:</strong> Ustrukturyzowane plany (np. podróży, żywieniowe) z podziałem na etapy. Wymagają odpowiedniej struktury treści (nagłówki dla dni/kroków) i wdrożenia schema:HowTo.</li>
                <li><strong>Osadzone filmy wideo:</strong> Klipy wideo (często z YouTube) osadzone bezpośrednio w odpowiedzi AI. Optymalizacja obejmuje tworzenie krótkich filmów odpowiadających na konkretne pytania i wdrażanie schema:VideoObject.</li>
                <li><strong>Zakładki rozszerzające zapytanie:</strong> Dodatkowe zakładki sugerujące użytkownikowi kolejne, powiązane pytania. Aby się w nich pojawić, należy budować kompleksowe klastry tematyczne.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Dodatek B: Słownik kluczowych terminów wyszukiwania AI</h3>
              <p className="mb-4">Zrozumienie nowego języka jest pierwszym krokiem do opanowania nowej dyscypliny.</p>
              
              <div className="space-y-3">
                <div>
                  <strong>AEO (Answer Engine Optimization):</strong> Proces optymalizacji treści, aby stała się ona cytowalnym źródłem dla silników odpowiedzi, takich jak Google AI Overviews czy Perplexity.
                </div>
                <div>
                  <strong>AIO (AI Optimization):</strong> Ogólny termin opisujący wszelkie działania mające na celu optymalizację treści, danych i zasobów cyfrowych tak, aby były one zrozumiałe, dostępne i preferowane przez algorytmy sztucznej inteligencji. Jest to pojęcie szersze i mniej sformalizowane niż GEO czy AEO.
                </div>
                <div>
                  <strong>Encja (Entity):</strong> W kontekście SEO, to konkretny, unikalny obiekt lub koncepcja (np. osoba, firma, produkt), którą wyszukiwarki potrafią zidentyfikować i zrozumieć relacje między nimi.
                </div>
                <div>
                  <strong>GEO (Generative Engine Optimization):</strong> Szersze pojęcie niż AEO, obejmujące optymalizację pod kątem wszystkich platform generatywnej AI, w tym chatbotów (ChatGPT, Claude) i silników odpowiedzi. Celem jest wpłynięcie na generowane przez nie treści.
                </div>
                <div>
                  <strong>LLM (Large Language Model):</strong> Duży model językowy (np. Gemini, GPT-4), czyli zaawansowana sieć neuronowa wytrenowana na ogromnych ilościach danych, zdolna do rozumienia i generowania języka naturalnego.
                </div>
                <div>
                  <strong>RAG (Retrieval-Augmented Generation):</strong> Proces technologiczny, w którym model językowy przed wygenerowaniem odpowiedzi aktywnie pobiera aktualne informacje z zewnętrznej bazy wiedzy (np. z internetu), aby jego odpowiedź była bardziej dokładna i oparta na faktach.
                </div>
                <div>
                  <strong>Schema Markup (Dane Strukturalne):</strong> Ustandaryzowany format do oznaczania informacji na stronie internetowej, który pomaga wyszukiwarkom zrozumieć kontekst i znaczenie treści (np. co jest recenzją, co ceną, a co nazwiskiem autora).
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4">Dodatek C: Wybrane źródła i lektury uzupełniające</h3>
              <p className="mb-4">Dla liderów pragnących pogłębić swoją wiedzę, poniższa lista stanowi punkt wyjścia do dalszych badań nad transformacją cyfrową w erze AI.</p>
              
              <div className="space-y-4">
                <div>
                  <strong>Raporty rynkowe:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Raporty dotyczące rynku reklamy i internetu w Polsce</li>
                    <li>Raporty dotyczące polskiego e-commerce</li>
                  </ul>
                </div>
                <div>
                  <strong>Oficjalna dokumentacja Google:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Google Search Central: AI Features and Your Website</li>
                    <li>Google Search Central: AI Overviews and Your Website</li>
                  </ul>
                </div>
                <div>
                  <strong>Kluczowe analizy i studia przypadków:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Analiza wpływu AI Overviews na ruch</li>
                    <li>Studia przypadku wdrożeń GEO</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </ExpandableSection>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t text-center text-muted-foreground">
          <p>© 2025 Przewodnik po rewolucji AI Search dla polskich firm</p>
          <p className="text-sm mt-2">Ta prezentacja została stworzona w oparciu o najnowsze dane i trendy w branży wyszukiwania AI.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
