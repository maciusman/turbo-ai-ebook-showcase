
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronRight, ChevronDown, BookOpen, Download, Menu, X, Target, Lightbulb, TrendingUp, Users, BarChart3, Zap } from 'lucide-react';

const EbookPresentation = () => {
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({});
  const [activeSection, setActiveSection] = useState<string>('');
  const [tocOpen, setTocOpen] = useState(false);

  const toggleChapter = (chapterId: string) => {
    setOpenChapters(prev => ({
      ...prev,
      [chapterId]: !prev[chapterId]
    }));
  };

  // Table of Contents structure
  const tableOfContents = [
    {
      id: 'intro',
      title: 'Wprowadzenie',
      sections: []
    },
    {
      id: 'part1',
      title: 'Część I: Nieunikniona zmiana',
      sections: [
        { id: 'chapter1', title: 'Rozdział 1: Koniec wyszukiwania, początek ery odpowiedzi' },
        { id: 'chapter2', title: 'Rozdział 2: Nowa podróż klienta' },
        { id: 'chapter3', title: 'Rozdział 3: Polska arena e-commerce' }
      ]
    },
    {
      id: 'part2',
      title: 'Część II: Dekodowanie rewolucji',
      sections: [
        { id: 'chapter4', title: 'Rozdział 4: Wewnątrz „silnika odpowiedzi"' },
        { id: 'chapter5', title: 'Rozdział 5: Arena gigantów' }
      ]
    },
    {
      id: 'part3',
      title: 'Część III: GEO Playbook',
      sections: [
        { id: 'chapter6', title: 'Rozdział 6: Nowa filozofia' },
        { id: 'chapter7', title: 'Rozdział 7: Budowanie „cytadeli zaufania"' },
        { id: 'chapter8', title: 'Rozdział 8: Fundament techniczny' }
      ]
    },
    {
      id: 'part4',
      title: 'Część IV: Dowody i rezultaty',
      sections: [
        { id: 'chapter9', title: 'Rozdział 9: Obalanie mitów' },
        { id: 'chapter10', title: 'Rozdział 10: Studia przypadków' }
      ]
    },
    {
      id: 'part5',
      title: 'Część V: Droga naprzód',
      sections: [
        { id: 'chapter11', title: 'Rozdział 11: Anatomia partnera GEO' },
        { id: 'chapter12', title: 'Rozdział 12: Twoje pierwsze 30 dni' }
      ]
    },
    {
      id: 'appendices',
      title: 'Dodatki',
      sections: [
        { id: 'appendixA', title: 'Dodatek A: Katalog elementów wizualnych' },
        { id: 'appendixB', title: 'Dodatek B: Słownik terminów' },
        { id: 'appendixC', title: 'Dodatek C: Źródła i lektury' }
      ]
    }
  ];

  // Scroll tracking for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let current = '';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.getAttribute('data-section') || '';
        }
      });
      
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTocOpen(false);
    }
  };

  const generatePDF = async () => {
    try {
      // Import jsPDF dynamically
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF();
      
      // Add title
      doc.setFontSize(20);
      doc.text('Rewolucja AI Search', 20, 20);
      doc.setFontSize(16);
      doc.text('Przewodnik dla polskich firm po optymalizacji pod sztuczną inteligencję', 20, 30);
      
      // Add some content (you can expand this)
      doc.setFontSize(12);
      let yPosition = 50;
      
      const content = [
        'Ten przewodnik zawiera kompletną treść e-booka o optymalizacji',
        'pod kątem sztucznej inteligencji dla polskich firm.',
        '',
        'Spis treści:',
        '• Część I: Nieunikniona zmiana',
        '• Część II: Dekodowanie rewolucji', 
        '• Część III: GEO Playbook',
        '• Część IV: Dowody i rezultaty',
        '• Część V: Droga naprzód',
        '',
        'Pełna treść dostępna na stronie internetowej.'
      ];
      
      content.forEach((line) => {
        if (yPosition > 270) {
          doc.addPage();
          yPosition = 20;
        }
        doc.text(line, 20, yPosition);
        yPosition += 10;
      });
      
      doc.save('rewolucja-ai-search.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Wystąpił błąd podczas generowania PDF. Spróbuj ponownie.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Floating Table of Contents */}
      <div className={`fixed left-4 top-4 bottom-4 w-80 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg z-40 transition-transform duration-300 ${tocOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Spis treści
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTocOpen(false)}
              className="lg:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2">
            {tableOfContents.map((part) => (
              <div key={part.id} className="mb-2">
                <button
                  onClick={() => scrollToSection(part.id)}
                  className={`w-full text-left p-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === part.id 
                      ? 'bg-blue-100 text-blue-900' 
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {part.title}
                </button>
                
                {part.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left p-2 pl-6 rounded-md text-xs transition-colors ${
                      activeSection === section.id 
                        ? 'bg-blue-50 text-blue-800 border-l-2 border-blue-400' 
                        : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile TOC Toggle */}
      <Button
        onClick={() => setTocOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden"
        size="sm"
        variant="outline"
      >
        <Menu className="h-4 w-4" />
      </Button>

      {/* Main Content */}
      <div className="lg:ml-84 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="text-center mb-12" data-section="intro">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              Przewodnik strategiczny
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Rewolucja AI Search
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Przewodnik dla polskich firm po optymalizacji pod sztuczną inteligencję
            </p>
            
            <Button onClick={generatePDF} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto">
              <Download className="h-5 w-5" />
              Pobierz PDF
            </Button>
          </div>

          {/* Interactive Visualization 1 */}
          <Card className="mb-12 overflow-hidden">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                  <TrendingUp className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-red-700 mb-2">80%</h3>
                  <p className="text-red-600 font-medium">Wzrost rynku chatbotów AI</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">1863 mld</h3>
                  <p className="text-blue-600 font-medium">Wizyt w wyszukiwarkach</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-700 mb-2">26x</h3>
                  <p className="text-green-600 font-medium">Więcej wizyt Google vs ChatGPT</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Part I */}
          <div className="mb-16" data-section="part1">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-lg font-bold">I</div>
              Nieunikniona zmiana: dlaczego dotychczasowe zasady przestały obowiązywać
            </h2>

            <Collapsible open={openChapters.chapter1} onOpenChange={() => toggleChapter('chapter1')}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow mb-6" data-section="chapter1">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">Rozdział 1: Koniec wyszukiwania, początek ery odpowiedzi – i nowego wzrostu</span>
                      {openChapters.chapter1 ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Jesteśmy świadkami jednej z najbardziej fundamentalnych transformacji w funkcjonowaniu internetu od dziesięcioleci. Era, w której sukces biznesowy w sieci definiowała obecność na liście dziesięciu niebieskich linków, bezpowrotnie ustępuje miejsca nowemu paradygmatowi. Wyszukiwarka, jaką znaliśmy, ewoluuje w inteligentny „silnik odpowiedzi" (ang. <em>answer engine</em>), napędzany przez generatywną sztuczną inteligencję. Użytkownicy – a więc i klienci – coraz rzadziej poszukują linków. Oczekują natychmiastowych, skondensowanych odpowiedzi, generowanych w czasie rzeczywistym, bezpośrednio na stronie wyników.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Pojawienie się chatbotów i wyszukiwania AI wywołało falę spekulacji o „śmierci SEO". Jednak najnowsze, twarde dane rynkowe pokazują obraz zgoła odmienny: to nie jest gra o sumie zerowej. Obserwujemy nie zastąpienie, a dynamiczny, równoległy wzrost obu ekosystemów. W ciągu ostatnich dwóch lat (kwiecień 2023 - marzec 2025) rynek chatbotów AI odnotował <strong>eksplozyjny wzrost o ponad 80%, osiągając 55,2 miliarda wizyt</strong>. Mimo to, w tym samym okresie, tradycyjne wyszukiwarki zdominowały ruch internetowy, generując <strong>1863 miliardy wizyt – czyli 34 razy więcej</strong>. Nawet lider rynku AI, ChatGPT, notuje 26 razy mniej codziennych wizyt niż Google.
                  </p>

                  {/* Interactive Visualization */}
                  <Card className="my-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-4 text-center">Porównanie ruchu: Wyszukiwarki vs AI Chatboty</h4>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <span className="w-32 text-sm font-medium">Wyszukiwarki</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-6">
                            <div className="bg-blue-600 h-6 rounded-full" style={{width: '97%'}}></div>
                          </div>
                          <span className="text-sm font-bold">1863 mld</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="w-32 text-sm font-medium">AI Chatboty</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-6">
                            <div className="bg-purple-600 h-6 rounded-full" style={{width: '3%'}}></div>
                          </div>
                          <span className="text-sm font-bold">55,2 mld</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p className="text-lg leading-relaxed mb-6">
                    Co więcej, po początkowym, niewielkim spadku, ruch w wyszukiwarkach na początku 2025 roku zaczął ponownie rosnąć, napędzany właśnie przez integrację funkcji AI, takich jak AI Overviews. To dowodzi, że SEO nie umiera – ewoluuje i staje się kluczowym elementem w jeszcze większym i bardziej zdywersyfikowanym ekosystemie.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Ten globalny trend ma bezpośrednie przełożenie na polski rynek. <strong>Oficjalne uruchomienie funkcji AI Overviews w Polsce nastąpiło 26 marca 2025 roku</strong>, co czyni adaptację do nowych warunków palącą kwestią dla każdego polskiego przedsiębiorstwa. Ignorowanie tej zmiany nie jest już opóźnieniem w adaptacji do globalnych innowacji; jest świadomym pomijaniem fundamentalnej zmiany, która już zaszła na rodzimym rynku. Przy <strong>20-procentowym wzroście wartości rynku reklamy online w Polsce rok do roku</strong>, staje się jasne, że cały ekosystem cyfrowy dynamicznie przesuwa się w kierunku rozwiązań opartych na AI. Firmy, które nie dostosują swoich strategii, nie tylko pozostają w tyle za globalnym trendem, ale aktywnie ignorują zmianę, która już teraz redefiniuje sposób, w jaki polscy konsumenci wchodzą w interakcję z markami w internecie.
                  </p>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>

            {/* Chapter 2 */}
            <Collapsible open={openChapters.chapter2} onOpenChange={() => toggleChapter('chapter2')}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow mb-6" data-section="chapter2">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">Rozdział 2: Nowa podróż klienta: od kliknięć do konwersacji</span>
                      {openChapters.chapter2 ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Zmiana w sposobie prezentacji wyników wyszukiwania w naturalny sposób przekształca interakcje użytkowników. Obserwujemy zjawisko, które można nazwać „przesunięciem uwagi" – od nawykowego klikania w linki w kierunku konsumpcji gotowych, wygenerowanych przez AI odpowiedzi. Szacuje się, że nawet do <strong>60% wyszukiwań w Google może kończyć się bez kliknięcia w jakikolwiek tradycyjny link organiczny</strong>. Użytkownicy otrzymują skondensowaną wiedzę bezpośrednio na stronie wyników, co fundamentalnie zmienia dynamikę i cel generowania ruchu na stronach internetowych.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Obecność AI Overviews wpływa na liczbę kliknięć w linki, szczególnie w przypadku zapytań o charakterze informacyjnym. Niektóre analizy wskazują na potencjalne spadki ruchu dla tego typu treści sięgające od 18% do nawet 64%. Taka perspektywa może budzić obawy o zmniejszenie widoczności i utratę cennego źródła leadów. Jednakże w tej nowej rzeczywistości pojawia się fascynująca szansa biznesowa. Google aktywnie promuje koncepcję <strong>„kliknięć wyższej jakości"</strong>. Użytkownik, który zapoznał się z syntetyczną odpowiedzią AI i mimo to decyduje się przejść na stronę źródłową, robi to z o wiele silniejszą intencją. Jest już wstępnie poinformowany, a jego celem jest pogłębienie wiedzy, porównanie szczegółów lub dokonanie transakcji.
                  </p>

                  {/* Interactive Visualization */}
                  <Card className="my-8 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-4 text-center">Ewolucja podróży klienta</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="text-center">
                          <h5 className="font-semibold text-gray-700 mb-3">Tradycyjna podróż</h5>
                          <div className="space-y-2">
                            <div className="p-3 bg-gray-100 rounded">Wyszukiwanie</div>
                            <div className="text-2xl">↓</div>
                            <div className="p-3 bg-gray-100 rounded">Lista linków</div>
                            <div className="text-2xl">↓</div>
                            <div className="p-3 bg-gray-100 rounded">Kliknięcie</div>
                            <div className="text-2xl">↓</div>
                            <div className="p-3 bg-gray-100 rounded">Strona</div>
                          </div>
                        </div>
                        <div className="text-center">
                          <h5 className="font-semibold text-amber-700 mb-3">Podróż AI</h5>
                          <div className="space-y-2">
                            <div className="p-3 bg-amber-100 rounded">Wyszukiwanie</div>
                            <div className="text-2xl">↓</div>
                            <div className="p-3 bg-amber-100 rounded">AI Odpowiedź</div>
                            <div className="text-2xl">↓</div>
                            <div className="p-3 bg-amber-200 rounded font-semibold">Celowe kliknięcie</div>
                            <div className="text-2xl">↓</div>
                            <div className="p-3 bg-amber-300 rounded font-bold">Wysoka konwersja</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p className="text-lg leading-relaxed">
                    Oznacza to, że ruch pochodzący z odnośników w AI Overviews staje się bardziej wartościowy. Użytkownicy ci są lepiej przygotowani, bardziej zaangażowani i, co kluczowe z perspektywy biznesowej, bardziej skłonni do konwersji. To prowadzi nas do fundamentalnej zmiany w mierzeniu sukcesu. Spadek ogólnej liczby sesji na stronie może iść w parze ze wzrostem jakości generowanych leadów i współczynnika konwersji. Narracja strategiczna przesuwa się z metryk ilościowych (liczba kliknięć) na jakościowe (wartość konwersji, ROI), które realnie przekładają się na wyniki biznesowe. Nowa era wyszukiwania nagradza marki, które potrafią budować autorytet i dostarczać wartość jeszcze zanim użytkownik kliknie w link, przyciągając tym samym najbardziej zdecydowanych klientów.
                  </p>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>

            {/* Chapter 3 */}
            <Collapsible open={openChapters.chapter3} onOpenChange={() => toggleChapter('chapter3')}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow mb-6" data-section="chapter3">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">Rozdział 3: Polska arena e-commerce: nowe szanse i wyzwania</span>
                      {openChapters.chapter3 ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Dla polskiego sektora e-commerce, którego rentowność jest nierozerwalnie związana z widocznością w wyszukiwarkach, Generative Engine Optimization (GEO) nie jest jedynie kolejną taktyką optymalizacyjną. Staje się kluczowym elementem strategii, pozwalającym utrzymać udział w rynku i zdobyć mocną pozycję na nowej, zredefiniowanej przez AI arenie.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Dane z jednego z kluczowych raportów branżowych, „SEO i AI w polskim e-commerce 2025", malują obraz rynku o wysokiej zależności i jednocześnie niepokojąco niskim poziomie przygotowania na nadchodzące zmiany. Analiza ta dostarcza trzech kluczowych wniosków, które powinny być strategicznym sygnałem dla każdego lidera w polskim e-commerce:
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 my-8">
                    <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-green-700 mb-2">44,56%</div>
                        <div className="text-green-600 font-semibold mb-2">Organiczna linia życia</div>
                        <p className="text-sm text-green-700">Ruch organiczny jako dominujący kanał pozyskiwania klientów</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-orange-700 mb-2">30%</div>
                        <div className="text-orange-600 font-semibold mb-2">Stagnacja większości</div>
                        <p className="text-sm text-orange-700">Tylko tyle firm odnotowało wzrost ruchu organicznego</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                      <CardContent className="p-6 text-center">
                        <div className="text-3xl font-bold text-red-700 mb-2">38%</div>
                        <div className="text-red-600 font-semibold mb-2">Kryzys niewidzialności</div>
                        <p className="text-sm text-red-700">Firm nie pojawia się w odpowiedziach AI</p>
                      </CardContent>
                    </Card>
                  </div>

                  <ol className="list-decimal list-inside space-y-4 text-lg leading-relaxed">
                    <li><strong>Organiczna linia życia:</strong> Ruch organiczny jest absolutnie dominującym kanałem pozyskiwania klientów, odpowiadając za <strong>44,56% całego ruchu</strong> w polskim e-commerce. Jest to więcej niż jakikolwiek inny kanał, w tym wejścia bezpośrednie (36,06%) czy ruch płatny (7,7%). Ta dana jednoznacznie pokazuje, jak krytyczna jest widoczność w Google dla stabilności i wzrostu przychodów.</li>
                    
                    <li><strong>Stagnacja większości:</strong> Mimo tak ogromnej zależności, przytłaczająca większość firm nie jest w stanie efektywnie wykorzystać tego kanału. Z 1000 przebadanych polskich firm e-commerce, <strong>tylko 295 – czyli mniej niż 30% – odnotowało jakikolwiek wzrost ruchu organicznego rok do roku</strong>. Oznacza to, że ponad 70% rynku już teraz ma trudności z utrzymaniem status quo, jeszcze przed pełnym wpływem rewolucji AI.</li>
                    
                    <li><strong>Kryzys niewidzialności:</strong> Najbardziej znaczącym sygnałem jest fakt, że znaczna część polskich marek jest już teraz całkowicie niewidoczna w nowym ekosystemie odpowiedzi. Aż <strong>38% polskich firm e-commerce nie pojawia się w odpowiedziach generowanych przez AI</strong> dla typowych zapytań transakcyjnych, takich jak „najlepszy smartwatch do 1000 zł". Ich oferta, nawet jeśli jest konkurencyjna cenowo i produktowo, po prostu nie istnieje w miejscu, gdzie coraz częściej zapadają decyzje zakupowe.</li>
                  </ol>

                  {/* Interactive Visualization */}
                  <Card className="my-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-4 text-center">Rozkład źródeł ruchu w polskim e-commerce</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-4">
                          <span className="w-32 text-sm font-medium">Ruch organiczny</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-6">
                            <div className="bg-green-600 h-6 rounded-full flex items-center justify-end pr-2" style={{width: '44.56%'}}>
                              <span className="text-white text-xs font-bold">44,56%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="w-32 text-sm font-medium">Ruch bezpośredni</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-6">
                            <div className="bg-blue-600 h-6 rounded-full flex items-center justify-end pr-2" style={{width: '36.06%'}}>
                              <span className="text-white text-xs font-bold">36,06%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="w-32 text-sm font-medium">Ruch płatny</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-6">
                            <div className="bg-purple-600 h-6 rounded-full flex items-center justify-end pr-2" style={{width: '7.7%'}}>
                              <span className="text-white text-xs font-bold">7,7%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p className="text-lg leading-relaxed">
                    Połączenie tych trzech czynników – ogromnej zależności od kanału, który ulega transformacji, powszechnej stagnacji w jego dotychczasowej formie oraz masowej niewidzialności w jego nowej odsłonie – tworzy poważne wyzwanie biznesowe. To nie jest już kwestia technicznej optymalizacji SEO, lecz strategicznego wyzwania dla ciągłości działania i utrzymania przychodów. Firmy, które zignorują tę nową przestrzeń konkurencyjną, mogą nie tylko stracić pozycję w rankingu, ale całkowicie zniknąć z pola widzenia swoich potencjalnych klientów.
                  </p>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Continue with remaining parts... */}
          {/* Part II */}
          <div className="mb-16" data-section="part2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center text-lg font-bold">II</div>
              Dekodowanie rewolucji: przewodnik lidera po nowym ekosystemie AI
            </h2>

            {/* Chapter 4 */}
            <Collapsible open={openChapters.chapter4} onOpenChange={() => toggleChapter('chapter4')}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow mb-6" data-section="chapter4">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">Rozdział 4: Wewnątrz „silnika odpowiedzi": jak myśli sztuczna inteligencja</span>
                      {openChapters.chapter4 ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Aby wygrać w nowej erze, należy zrozumieć jej fundamentalne zasady. Oznacza to zrozumienie mechanizmów, za pomocą których modele AI przetwarzają informacje, aby formułować inteligentne i trafne odpowiedzi. U podstaw tej ewolucji leżą trzy kluczowe technologie, które należy postrzegać nie jako techniczne detale, lecz jako nowe reguły gry.
                  </p>

                  {/* Interactive Visualization */}
                  <Card className="my-8 bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-6 text-center">Trzy filary technologii AI</h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-blue-600">LLM</span>
                          </div>
                          <h5 className="font-semibold mb-2">Large Language Models</h5>
                          <p className="text-sm text-gray-600">Potężne silniki rozumienia języka (Gemini, GPT)</p>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-purple-600">RAG</span>
                          </div>
                          <h5 className="font-semibold mb-2">Retrieval-Augmented Generation</h5>
                          <p className="text-sm text-gray-600">Połączenie wiedzy AI z aktualnymi danymi</p>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-green-600">KG</span>
                          </div>
                          <h5 className="font-semibold mb-2">Knowledge Graphs</h5>
                          <p className="text-sm text-gray-600">Bazy relacji między encjami</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <ol className="list-decimal list-inside space-y-4 text-lg leading-relaxed">
                    <li><strong>Zaawansowane modele językowe (LLM):</strong> Sercem systemów takich jak Google AI Mode czy ChatGPT są potężne modele z rodziny Gemini (Google) i GPT (OpenAI). Można je postrzegać jako niezwykle zaawansowane silniki rozumienia języka, wytrenowane na ogromnych zbiorach danych. Ich zadaniem jest nie tylko wyszukiwanie, ale inteligentna synteza informacji – potrafią rozumieć, podsumowywać, tłumaczyć i generować tekst w sposób naśladujący ludzką logikę i mowę.</li>
                    
                    <li><strong>Retrieval-Augmented Generation (RAG):</strong> Jest to mechanizm, który stanowi pomost między wiedzą posiadaną przez model a aktualnością internetu. Działa on na zasadzie „egzaminu z otwartą książką". Zamiast polegać wyłącznie na swojej wstępnie wytrenowanej, statycznej wiedzy, system RAG w odpowiedzi na zapytanie aktywnie przeszukuje sieć w poszukiwaniu świeżych, wiarygodnych informacji. Następnie wykorzystuje te znalezione dane, aby „ugruntować" generowaną odpowiedź w weryfikowalnych, aktualnych faktach. Dzięki RAG, odpowiedzi AI są znacznie bardziej wiarygodne i adekwatne do bieżącej sytuacji.</li>
                    
                    <li><strong>Grafy wiedzy (Knowledge Graphs):</strong> Zarówno Google, jak i inne platformy, intensywnie korzystają z grafów wiedzy. Są to gigantyczne bazy danych, które przechowują informacje nie o słowach, ale o <strong>encjach</strong> – konkretnych obiektach, takich jak ludzie, miejsca, organizacje, produkty – oraz o relacjach między nimi. Graf wiedzy rozumie, że „Apple" to firma technologiczna, a nie owoc, i że jest ona powiązana z takimi encjami jak „iPhone" czy „Tim Cook". Optymalizacja pod kątem encji (Entity SEO) staje się kluczowa, ponieważ pomaga AI zrozumieć, kim jest dana marka, jaki jest jej autorytet i w jakiej dziedzinie się specjalizuje.</li>
                  </ol>

                  <p className="text-lg leading-relaxed mt-6">
                    Te technologie napędzają proces znany jako <strong>„query fan-out"</strong>. Kiedy użytkownik wprowadza złożone zapytanie, na przykład „Jaki jest najlepszy aparat dla początkującego fotografa podróżniczego?", system AI autonomicznie rozkłada je na szereg ukrytych, jednoczesnych pod-zapytań, takich jak „łatwe w obsłudze aparaty", „lekkie aparaty na podróż" czy „recenzje aparatów do 5000 zł". Następnie pobiera informacje z najlepszych źródeł dla każdego z tych pod-zapytań i syntetyzuje je w jedną, spójną odpowiedź. Z perspektywy biznesowej oznacza to, że aby zostać zacytowanym, treść marki musi być autorytetem nie tylko w szerokim temacie, ale także w wielu powiązanych z nim, bardziej szczegółowych aspektach.
                  </p>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>

            {/* Chapter 5 */}
            <Collapsible open={openChapters.chapter5} onOpenChange={() => toggleChapter('chapter5')}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow mb-6" data-section="chapter5">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">Rozdział 5: Arena gigantów: przewodnik po kluczowych platformach AI</span>
                      {openChapters.chapter5 ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Monopol jednego silnika wyszukiwania ulega fragmentacji. Widoczność marki musi być teraz budowana w sposób strategiczny w całym, zdywersyfikowanym ekosystemie „silników odpowiedzi". Każda z głównych platform oferuje unikalne możliwości i inaczej ocenia treści, co wymaga dostosowania strategii.
                  </p>

                  <ul className="space-y-4 text-lg leading-relaxed mb-6">
                    <li><strong>Google AI Overviews & AI Mode:</strong> Stanowią one ewolucję tradycyjnego wyszukiwania. AI Overviews to syntetyczne podsumowania pojawiające się nad wynikami organicznymi, podczas gdy AI Mode oferuje w pełni immersyjne, konwersacyjne doświadczenie. Obie funkcje są głęboko zintegrowane z podstawowymi systemami rankingowymi Google, co oznacza, że nadal nagradzają pomocne, wiarygodne i dobrze zoptymalizowane treści (E-E-A-T). Szansa biznesowa polega na budowaniu głębokiego autorytetu tematycznego i tworzeniu „cytowalnych" fragmentów treści, wspartych precyzyjną implementacją danych strukturalnych.</li>
                    
                    <li><strong>ChatGPT Search:</strong> Działając w oparciu o silnik wyszukiwania Bing i własny model językowy, ChatGPT jest idealny do generowania kompleksowych, kreatywnych lub konwersacyjnych odpowiedzi. W swoich rekomendacjach często polega na 2-3 najbardziej autorytatywnych, zewnętrznych źródłach. Oznacza to, że kluczowe staje się budowanie autorytetu marki poza własną stroną internetową – poprzez zdobywanie wzmianek na wysoko ocenianych portalach, w branżowych mediach czy na autorytatywnych listach typu „best of". Jest to potężna szansa dla strategicznych działań Digital PR.</li>
                    
                    <li><strong>Perplexity AI:</strong> Pozycjonuje się jako „silnik badawczy" dla profesjonalistów i researcherów. Jego główną cechą jest transparentność – każda informacja w odpowiedzi jest opatrzona wyraźnym cytatem i linkiem do źródła. Priorytetem dla Perplexity jest aktualność i wiarygodność faktograficzna. Dla marek, które chcą być postrzegane jako liderzy myśli (<em>thought leaders</em>) i eksperci w swojej dziedzinie, jest to idealna platforma. Sukces osiąga się tu poprzez publikowanie oryginalnych danych, badań, analiz i treści opartych na twardych faktach, które stają się niezbędnym źródłem dla innych.</li>
                  </ul>

                  <p className="text-lg leading-relaxed mb-6">
                    Poniższa tabela syntetyzuje kluczowe różnice między platformami, przekładając je na konkretne implikacje strategiczne dla biznesu. Pozwala to liderom zrozumieć, że podejście „jedna strategia dla wszystkich" jest przestarzałe i że wymagana jest zdywersyfikowana, wieloplatformowa obecność, aby w pełni wykorzystać potencjał ery AI.
                  </p>

                  {/* Platform Comparison Table */}
                  <Card className="my-8">
                    <CardHeader>
                      <CardTitle className="text-center">Implikacje strategiczne kluczowych platform typu „Answer Engine"</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-3 font-semibold">Cecha</th>
                              <th className="text-left p-3 font-semibold">Google AI Overviews / AI Mode</th>
                              <th className="text-left p-3 font-semibold">ChatGPT Search</th>
                              <th className="text-left p-3 font-semibold">Perplexity AI</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Główny cel dla użytkownika</td>
                              <td className="p-3">Szybkie, syntetyczne podsumowania i głęboka eksploracja tematów.</td>
                              <td className="p-3">Konwersacja, kreatywność, rozwiązywanie złożonych problemów.</td>
                              <td className="p-3">Badania, weryfikacja faktów, odpowiedzi z precyzyjnymi cytatami.</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Jak wybiera źródła?</td>
                              <td className="p-3">Kombinacja tradycyjnych sygnałów SEO (E-E-A-T, linki) i „cytowalności" treści.</td>
                              <td className="p-3">Silny nacisk na zewnętrzny autorytet marki i wzmianki w zaufanych źródłach trzecich.</td>
                              <td className="p-3">Priorytet dla aktualności, danych faktograficznych i źródeł o charakterze badawczym.</td>
                            </tr>
                            <tr className="border-b">
                              <td className="p-3 font-medium">Twoja kluczowa strategia</td>
                              <td className="p-3">Budowanie głębokiego autorytetu tematycznego i tworzenie „cytowalnych" fragmentów eksperckich na własnej domenie.</td>
                              <td className="p-3">Inwestycja w Digital PR i budowanie autorytetu na zewnętrznych, wysoko ocenianych portalach (recenzje, listy „best of").</td>
                              <td className="p-3">Publikowanie oryginalnych danych, badań i analiz, aby stać się niezbędnym źródłem faktów.</td>
                            </tr>
                            <tr>
                              <td className="p-3 font-medium">Klucz do sukcesu</td>
                              <td className="p-3">Holistyczne, dobrze ustrukturyzowane treści eksperckie.</td>
                              <td className="p-3">Silna reputacja marki, która istnieje również poza własną stroną internetową.</td>
                              <td className="p-3">Stanie się źródłem unikalnych, weryfikowalnych informacji.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Part III */}
          <div className="mb-16" data-section="part3">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center text-lg font-bold">III</div>
              GEO Playbook: twój plan działania na rzecz pozycji lidera rynku
            </h2>

            {/* Chapter 6 */}
            <Collapsible open={openChapters.chapter6} onOpenChange={() => toggleChapter('chapter6')}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow mb-6" data-section="chapter6">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">Rozdział 6: Nowa filozofia: od pozycji w rankingu do bycia cytowanym</span>
                      {openChapters.chapter6 ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Era wyszukiwania AI zaprasza do ewolucji myślenia o widoczności w internecie. Zamiast koncentrować się wyłącznie na zdobywaniu najwyższych pozycji, nowym celem staje się uczynienie treści marki kluczowym, cytowalnym źródłem dla systemów AI. To wymaga poszerzenia tradycyjnego podejścia znanego jako <strong>Search Engine Optimization (SEO)</strong> o nowe, bardziej wyspecjalizowane dyscypliny. Najszerszym z nowych pojęć jest <strong>Generative Engine Optimization (GEO)</strong>, które obejmuje kompleksową optymalizację pod kątem wszystkich platform generatywnej AI, w tym chatbotów i silników odpowiedzi. W ramach GEO wyróżniamy bardziej szczegółowe podejście, jakim jest <strong>Answer Engine Optimization (AEO)</strong>, skupiające się na platformach udzielających bezpośrednich odpowiedzi, jak Google AI Overviews. Czasem w branży używa się również ogólnego terminu <strong>AI Optimization (AIO)</strong>, który odnosi się do wszelkich działań mających na celu dostosowanie treści do algorytmów sztucznej inteligencji. Niezależnie od nazewnictwa, fundamentalna zmiana polega na przejściu od optymalizacji pod kątem rankingu do optymalizacji pod kątem bycia cytowanym.
                  </p>

                  {/* Interactive Visualization */}
                  <Card className="my-8 bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-teal-200">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-6 text-center">Ewolucja od SEO do GEO</h4>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-center">
                          <h5 className="font-semibold text-gray-700 mb-4">Stare podejście (SEO)</h5>
                          <div className="space-y-3">
                            <div className="p-3 bg-gray-100 rounded">Optymalizacja stron</div>
                            <div className="p-3 bg-gray-100 rounded">Słowa kluczowe</div>
                            <div className="p-3 bg-gray-100 rounded">Pozycja w rankingu</div>
                            <div className="p-3 bg-gray-100 rounded">Liczba kliknięć</div>
                          </div>
                        </div>
                        <div className="text-center">
                          <h5 className="font-semibold text-teal-700 mb-4">Nowe podejście (GEO)</h5>
                          <div className="space-y-3">
                            <div className="p-3 bg-teal-100 rounded">Optymalizacja fragmentów</div>
                            <div className="p-3 bg-teal-100 rounded">Encje i relacje</div>
                            <div className="p-3 bg-teal-100 rounded">Bycie cytowanym</div>
                            <div className="p-3 bg-teal-100 rounded">Jakość konwersji</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p className="text-lg leading-relaxed mb-6">
                    Nowa filozofia opiera się na dwóch fundamentalnych filarach:
                  </p>

                  <ol className="list-decimal list-inside space-y-4 text-lg leading-relaxed">
                    <li><strong>Od optymalizacji stron do optymalizacji fragmentów (passages):</strong> Systemy AI, aby udzielić odpowiedzi, często nie potrzebują analizować całej strony internetowej. Zamiast tego poszukują najbardziej trafnych, zwięzłych i autorytatywnych fragmentów – pojedynczych akapitów, list, definicji czy danych zawartych w tabeli. Zadaniem strategicznym staje się więc takie projektowanie treści, aby te „cytowalne fragmenty" były łatwe do zidentyfikowania, wyodrębnienia i ponownego wykorzystania przez algorytmy. Celem jest dostarczenie AI gotowych „klocków", z których może zbudować odpowiedź.</li>
                    
                    <li><strong>Od słów kluczowych do encji (entities):</strong> Wyszukiwarki AI myślą w kategoriach „rzeczy, a nie ciągów znaków". Rozumieją, że „Jacek Dukaj" to konkretna osoba (pisarz), a nie tylko zbitka liter, i że jest on powiązany z takimi encjami jak „Lód" (książka) czy „literatura science fiction" (gatunek). Dlatego budowanie silnej, rozpoznawalnej cyfrowo encji marki, produktu czy autora staje się fundamentem sukcesu. Chodzi o stworzenie spójnego, jednoznacznego obrazu autorytetu w całym internecie, który sztuczna inteligencja może zrozumieć i któremu może zaufać.</li>
                  </ol>

                  <p className="text-lg leading-relaxed">
                    Przyjęcie tej filozofii pozwala świadomie projektować zasoby cyfrowe, które nie tylko odpowiadają na potrzeby użytkowników, ale także stają się wysokiej jakości paliwem dla inteligentnych silników odpowiedzi, zapewniając marce centralne miejsce w nowym ekosystemie informacyjnym.
                  </p>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>

            {/* Chapter 7 */}
            <Collapsible open={openChapters.chapter7} onOpenChange={() => toggleChapter('chapter7')}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow mb-6" data-section="chapter7">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">Rozdział 7: Budowanie „cytadeli zaufania": treść i autorytet w erze AI</span>
                      {openChapters.chapter7 ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    W świecie, w którym sztuczna inteligencja może generować ogromne ilości treści, weryfikowalna wiedza ekspercka i autorytet (E-E-A-T) stają się najcenniejszymi aktywami biznesowymi. To one odróżniają wiarygodne źródła od szumu informacyjnego i decydują o tym, które marki zostaną zacytowane przez AI.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Koncepcja <strong>E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness – Doświadczenie, Ekspertyza, Autorytet, Wiarygodność)</strong> ewoluuje z wytycznej dla ludzkich oceniających jakość stron w zbiór konkretnych, mierzalnych sygnałów dla algorytmów AI. Aby zbudować autorytet, który maszyny mogą zrozumieć, należy skupić się na:
                  </p>

                  {/* E-E-A-T Visualization */}
                  <Card className="my-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-6 text-center">Filary E-E-A-T w erze AI</h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Users className="h-6 w-6 text-blue-600" />
                          </div>
                          <h5 className="font-semibold mb-2 text-blue-700">Experience</h5>
                          <p className="text-sm text-gray-600">Studia przypadku, testy pierwszej osoby</p>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Lightbulb className="h-6 w-6 text-purple-600" />
                          </div>
                          <h5 className="font-semibold mb-2 text-purple-700">Expertise</h5>
                          <p className="text-sm text-gray-600">Biogramy autorów, kwalifikacje</p>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <TrendingUp className="h-6 w-6 text-green-600" />
                          </div>
                          <h5 className="font-semibold mb-2 text-green-700">Authoritativeness</h5>
                          <p className="text-sm text-gray-600">Wzmianki w renomowanych publikacjach</p>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Target className="h-6 w-6 text-orange-600" />
                          </div>
                          <h5 className="font-semibold mb-2 text-orange-700">Trustworthiness</h5>
                          <p className="text-sm text-gray-600">Aktualizacje, transparentność, cytowania</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <ul className="space-y-4 text-lg leading-relaxed mb-6">
                    <li><strong>Doświadczenie (Experience):</strong> Publikowanie autentycznych studiów przypadku, testów produktów i treści pisanych z perspektywy pierwszej osoby („testowaliśmy", „sprawdziliśmy").</li>
                    <li><strong>Ekspertyza (Expertise):</strong> Tworzenie szczegółowych biogramów autorów, podkreślanie ich kwalifikacji i linkowanie do profili zawodowych (np. za pomocą danych strukturalnych schema:Person i sameAs).</li>
                    <li><strong>Autorytet (Authoritativeness):</strong> Zdobywanie wzmianek i linków zwrotnych z renomowanych, branżowych publikacji.</li>
                    <li><strong>Wiarygodność (Trustworthiness):</strong> Regularne aktualizowanie treści, transparentne podawanie danych kontaktowych i, co kluczowe, cytowanie wiarygodnych źródeł zewnętrznych (np. przy użyciu schema:Citation), co pokazuje, że marka jest częścią większego, wiarygodnego ekosystemu wiedzy.</li>
                  </ul>

                  <p className="text-lg leading-relaxed mb-6">
                    Idealnym modelem do budowania takiego postrzeganego autorytetu jest architektura treści <strong>Hub-and-Spoke</strong>. Systemy AI lepiej rozumieją i wyżej oceniają witryny, które wyczerpująco pokrywają dany temat. Model ten polega na stworzeniu centralnej, kompleksowej strony filarowej (Hub) na szeroki temat (np. „Kompletny przewodnik po marketingu cyfrowym") oraz serii szczegółowych artykułów klastrowych (Spokes) na powiązane podtematy (np. „Strategia SEO", „Reklama w social media"). Strategiczne linkowanie wewnętrzne – gdzie każda strona klastrowa linkuje do filaru, a filar do klastrów – tworzy silną sieć semantyczną, która jest dla AI jednoznacznym dowodem głębokiej ekspertyzy.
                  </p>

                  {/* Hub and Spoke Visualization */}
                  <Card className="my-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-6 text-center">Model Hub-and-Spoke</h4>
                      <div className="flex items-center justify-center">
                        <div className="relative">
                          {/* Central Hub */}
                          <div className="w-32 h-32 bg-orange-200 rounded-full flex items-center justify-center text-center p-4">
                            <span className="text-sm font-semibold">Hub<br/>Główny przewodnik</span>
                          </div>
                          
                          {/* Spokes */}
                          {[0, 1, 2, 3, 4, 5].map((i) => {
                            const angle = (i * 60) * (Math.PI / 180);
                            const x = Math.cos(angle) * 120;
                            const y = Math.sin(angle) * 120;
                            return (
                              <div key={i} className="absolute" style={{
                                left: `calc(50% + ${x}px - 2rem)`,
                                top: `calc(50% + ${y}px - 2rem)`
                              }}>
                                <div className="w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center">
                                  <span className="text-xs font-medium text-center">Spoke<br/>{i+1}</span>
                                </div>
                                {/* Connection line */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div 
                                    className="h-0.5 bg-gray-400"
                                    style={{
                                      width: '120px',
                                      transform: `rotate(${(i * 60) + 180}deg)`,
                                      transformOrigin: '0 50%'
                                    }}
                                  ></div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <p className="text-lg leading-relaxed">
                    Równie ważny jest sposób prezentacji treści. Aby zwiększyć szanse na bycie cytowanym, należy stosować proste, ale potężne zasady formatowania:
                  </p>

                  <ul className="space-y-4 text-lg leading-relaxed">
                    <li><strong>Odpowiedź na początku (BLUF - Bottom Line Up Front):</strong> Zaczynanie kluczowych sekcji od zwięzłej, bezpośredniej odpowiedzi na pytanie. AI preferuje takie gotowe do zacytowania fragmenty.</li>
                    <li><strong>Struktura dla skanowalności:</strong> Używanie klarownych nagłówków (H2, H3), list punktowanych i numerowanych oraz tabel. Te elementy są dla AI łatwe do sparsowania i ponownego wykorzystania w generowanych odpowiedziach.</li>
                  </ul>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>

            {/* Chapter 8 */}
            <Collapsible open={openChapters.chapter8} onOpenChange={() => toggleChapter('chapter8')}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow mb-6" data-section="chapter8">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">Rozdział 8: Fundament techniczny: jak uczynić markę zrozumiałą dla maszyn</span>
                      {openChapters.chapter8 ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Aby systemy AI mogły w pełni zrozumieć i docenić wartość treści, komunikacja z nimi musi odbywać się w ich języku – języku ustrukturyzowanych danych. Solidny fundament techniczny jest nie tyle opcją, co absolutną koniecznością, kluczem do odblokowania pełnego potencjału w strategii GEO.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Najważniejszym sojusznikiem w tym procesie są <strong>dane strukturalne (Schema.org)</strong>. Działają one jak precyzyjne etykiety, które tłumaczą nieustrukturyzowaną treść na stronie na format jednoznacznie zrozumiały dla maszyn. Zamiast zmuszać AI do domyślania się, czym jest dana informacja, można jej to wprost zakomunikować. Priorytetowe typy schema, które pozwalają wyróżnić się w wyszukiwaniu AI, to:
                  </p>

                  <ul className="space-y-3 text-lg leading-relaxed mb-6">
                    <li><strong>Article, BlogPosting:</strong> Sygnalizują autorytet i kontekst tematyczny treści.</li>
                    <li><strong>FAQPage, HowTo:</strong> Idealnie strukturyzują odpowiedzi i instrukcje, czyniąc je głównymi kandydatami do bycia zacytowanym w AI Overviews.</li>
                    <li><strong>Product, Offer, AggregateRating:</strong> Niezbędne dla e-commerce, dostarczają AI konkretnych danych o produktach, ich cenach, dostępności i opiniach.</li>
                    <li><strong>Organization, Person:</strong> Budują fundament pod cyfrową encję marki i autora, wzmacniając sygnały E-E-A-T.</li>
                    <li><strong>Citation:</strong> Nowy, potężny typ, który pozwala jawnie oznaczyć, że treść powołuje się na wiarygodne, zewnętrzne źródła, co dodatkowo buduje zaufanie w oczach AI.</li>
                  </ul>

                  <p className="text-lg leading-relaxed mb-6">
                    Wiele crawlerów AI, w tym te używane przez Google, ma ograniczony czas i zasoby na renderowanie skomplikowanego kodu JavaScript. Jeśli kluczowe treści i dane strukturalne są ładowane dopiero po wykonaniu skryptów po stronie klienta, istnieje ryzyko, że nie zostaną w ogóle odczytane. Dlatego kluczowe jest, aby najważniejsze informacje były renderowane po stronie serwera (<strong>Server-Side Rendering - SSR</strong>) i dostępne w początkowym kodzie HTML strony. Zapewnia to natychmiastowy dostęp do danych i maksymalizuje szanse na ich przetworzenie.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Poniższa checklista stanowi proste narzędzie do samooceny, pozwalające liderom biznesowym szybko zdiagnozować, czy ich firma jest technicznie przygotowana na erę AI. Przejście przez te pytania często ujawnia strategiczne i techniczne luki, które wymagają specjalistycznej interwencji.
                  </p>

                  {/* Technical Readiness Checklist */}
                  <Card className="my-8">
                    <CardHeader>
                      <CardTitle className="text-center">Checklista gotowości technicznej na GEO</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-lg mb-3 text-blue-700">Autorytet i treść</h4>
                          <div className="space-y-2 pl-4">
                            <div className="flex items-start gap-3">
                              <input type="checkbox" className="mt-1" />
                              <p className="text-gray-700">Czy posiadamy kompleksowe, eksperckie treści, które dogłębnie pokrywają nasze kluczowe tematy (model Hub-and-Spoke)?</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <input type="checkbox" className="mt-1" />
                              <p className="text-gray-700">Czy nasze artykuły są tworzone przez wiarygodnych ekspertów z widocznymi biografiami i kwalifikacjami?</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <input type="checkbox" className="mt-1" />
                              <p className="text-gray-700">Czy regularnie publikujemy oryginalne dane, badania lub unikalne studia przypadku?</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-lg mb-3 text-purple-700">Cytowalność i formatowanie</h4>
                          <div className="space-y-2 pl-4">
                            <div className="flex items-start gap-3">
                              <input type="checkbox" className="mt-1" />
                              <p className="text-gray-700">Czy nasze artykuły dostarczają bezpośrednich, zwięzłych odpowiedzi na popularne pytania na początku tekstu?</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <input type="checkbox" className="mt-1" />
                              <p className="text-gray-700">Czy nasze treści są dobrze ustrukturyzowane z użyciem nagłówków (H2, H3), list i tabel, aby ułatwić ich parsowanie przez AI?</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-lg mb-3 text-green-700">Fundament techniczny</h4>
                          <div className="space-y-2 pl-4">
                            <div className="flex items-start gap-3">
                              <input type="checkbox" className="mt-1" />
                              <p className="text-gray-700">Czy używamy danych strukturalnych (Schema Markup) do jednoznacznego definiowania kluczowych informacji (produktów, artykułów, FAQ, autorów)?</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <input type="checkbox" className="mt-1" />
                              <p className="text-gray-700">Czy nasze kluczowe treści i dane schema są dostępne w początkowym kodzie HTML (SSR), bez konieczności renderowania JavaScriptu?</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-lg mb-3 text-orange-700">Dostęp do ekosystemu AI</h4>
                          <div className="space-y-2 pl-4">
                            <div className="flex items-start gap-3">
                              <input type="checkbox" className="mt-1" />
                              <p className="text-gray-700">Czy nasz plik robots.txt jednoznacznie zezwala na dostęp kluczowym crawlerom AI (takim jak GPTBot, PerplexityBot)?</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Continue with remaining parts... */}
          {/* Part IV */}
          <div className="mb-16" data-section="part4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-lg flex items-center justify-center text-lg font-bold">IV</div>
              Dowody i rezultaty: strategie GEO w praktyce
            </h2>

            {/* Chapter 9 */}
            <Collapsible open={openChapters.chapter9} onOpenChange={() => toggleChapter('chapter9')}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow mb-6" data-section="chapter9">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">Rozdział 9: Obalanie mitów: oddzielenie hype'u AI od rzeczywistości biznesowej</span>
                      {openChapters.chapter9 ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Każda transformacja technologiczna rodzi niepewność i dezinformację. Przejście do ery wyszukiwania AI nie jest wyjątkiem. Zanim przeanalizujemy konkretne sukcesy, kluczowe jest rozprawienie się z najczęstszymi mitami, które mogą paraliżować proces decyzyjny i prowadzić do strategicznych błędów.
                  </p>

                  {/* Myth-busting Cards */}
                  <div className="space-y-6 my-8">
                    <Card className="border-l-4 border-l-red-500 bg-red-50">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-red-700 mb-3">Mit 1: „SEO umarło. Nikt już nie będzie potrzebował mojej strony."</h4>
                        <div className="bg-white p-4 rounded border-l-4 border-l-green-500">
                          <p className="text-gray-700 mb-2"><strong className="text-green-700">Rzeczywistość:</strong></p>
                          <p className="text-gray-700">To fundamentalne nieporozumienie. Sztuczna inteligencja nie tworzy wiedzy z próżni. AI Overviews to kompilacje informacji pochodzących z istniejących stron internetowych. Google, aby wygenerować swoje podsumowania, musi czerpać dane z witryn, które uzna za najbardziej wiarygodne, merytoryczne i najlepiej zoptymalizowane. Oznacza to, że fundamenty SEO, takie jak budowanie autorytetu poprzez sygnały E-E-A-T, są dziś ważniejsze niż kiedykolwiek. Aby AI w ogóle wzięło pod uwagę stronę jako źródło, musi ona być postrzegana jako ekspert w swojej dziedzinie. SEO nie umarło; ewoluowało w bardziej wymagającą i strategiczną dyscyplinę.</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500 bg-red-50">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-red-700 mb-3">Mit 2: „Użytkownicy przestaną klikać w linki."</h4>
                        <div className="bg-white p-4 rounded border-l-4 border-l-green-500">
                          <p className="text-gray-700 mb-2"><strong className="text-green-700">Rzeczywistość:</strong></p>
                          <p className="text-gray-700">AI Overviews są skuteczne w przypadku prostych, faktograficznych zapytań (np. „jaka jest stolica Australii?"). Jednak w przypadku zapytań złożonych, transakcyjnych lub wymagających głębokiej analizy, użytkownicy nadal będą poszukiwać bardziej szczegółowych treści. Nikt nie podejmie decyzji o zakupie samochodu na podstawie krótkiego podsumowania AI; będzie szukał recenzji, testów i opinii. Nikt nie nauczy się skomplikowanej umiejętności z listy punktowanej; będzie szukał poradników wideo i szczegółowych instrukcji. Co więcej, same AI Overviews często zawierają linki do źródeł. Bycie cytowanym źródłem to potężny sygnał autorytetu i szansa na pozyskanie bardzo wartościowego, już wstępnie poinformowanego ruchu.</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500 bg-red-50">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-red-700 mb-3">Mit 3: „Google karze treści generowane przez AI."</h4>
                        <div className="bg-white p-4 rounded border-l-4 border-l-green-500">
                          <p className="text-gray-700 mb-2"><strong className="text-green-700">Rzeczywistość:</strong></p>
                          <p className="text-gray-700">Oficjalne stanowisko Google jest jednoznaczne: firma nagradza treści wysokiej jakości, niezależnie od tego, jak zostały wyprodukowane. Google nie karze za użycie AI; karze za tworzenie spamerskich, niskiej jakości treści, które nie niosą wartości dla użytkownika. Sztuczna inteligencja jest narzędziem. Można jej użyć do stworzenia błyskotliwej analizy lub do wygenerowania tysięcy bezwartościowych artykułów. Ostateczna odpowiedzialność za jakość spoczywa na człowieku, który nadzoruje proces.</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>

            {/* Chapter 10 */}
            <Collapsible open={openChapters.chapter10} onOpenChange={() => toggleChapter('chapter10')}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow mb-6" data-section="chapter10">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">Rozdział 10: Studia przypadków: od teorii do wymiernego ROI</span>
                      {openChapters.chapter10 ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Teoria i strategie nabierają pełnego znaczenia, gdy widzimy je w działaniu. Analiza firm, które już zaadaptowały swoje działania do ery AI, dostarcza bezcennych dowodów na skuteczność podejścia GEO i pokazuje wymierne korzyści biznesowe.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Międzynarodowe przykłady pokazują skalę możliwych do osiągnięcia rezultatów. Firma z branży motoryzacyjnej, po wdrożeniu agresywnej optymalizacji pod kątem AI na zaledwie 15% swoich najważniejszych stron, odnotowała <strong>wzrost ruchu pochodzącego z referencji AI o imponujące 2,300%</strong> w ciągu kilku miesięcy. Kluczowe działania obejmowały restrukturyzację treści pod kątem czytelności dla AI, wzmocnienie sygnałów E-E-A-T oraz implementację zaawansowanych danych strukturalnych.
                  </p>

                  <p className="text-lg leading-relaxed mb-6">
                    Aby jednak w pełni zademonstrować znaczenie tych strategii dla polskiego rynku, kluczowe jest przyjrzenie się lokalnym przykładom sukcesu.
                  </p>

                  {/* Case Studies */}
                  <div className="space-y-8 my-8">
                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
                      <CardHeader>
                        <CardTitle className="text-blue-800">Studium przypadku e-commerce: zwycięstwo w konwersji i widoczności</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-blue-700 mb-2">Wyzwanie:</h5>
                            <p className="text-gray-700">Polski sklep internetowy z branży części samochodowych borykał się z niską konwersją i stagnacją ruchu organicznego, mimo szerokiego asortymentu.</p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-blue-700 mb-2">Wdrożone rozwiązania (na podstawie jednego z opublikowanych studiów przypadku):</h5>
                            <p className="text-gray-700">Zastosowano kompleksową strategię opartą na AI. Wdrożono systemy, które automatycznie rozbudowywały opisy produktów o dane techniczne i wskazówki montażowe, wykorzystując przetwarzanie języka naturalnego (NLP). Algorytmy rozpoznawania obrazu analizowały zdjęcia produktów, wzbogacając opisy i tagi alt. AI automatycznie dobierało słowa kluczowe i generowało unikalne meta tagi, jednocześnie weryfikując duplikację treści. Stworzono również inteligentny system kategoryzacji i rekomendacji produktów.</p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-blue-700 mb-2">Rezultaty:</h5>
                            <div className="grid md:grid-cols-3 gap-4">
                              <div className="text-center p-4 bg-white rounded-lg">
                                <div className="text-2xl font-bold text-green-600 mb-1">+62%</div>
                                <div className="text-sm text-gray-600">Wzrost ruchu organicznego</div>
                              </div>
                              <div className="text-center p-4 bg-white rounded-lg">
                                <div className="text-2xl font-bold text-green-600 mb-1">+35%</div>
                                <div className="text-sm text-gray-600">Wzrost konwersji</div>
                              </div>
                              <div className="text-center p-4 bg-white rounded-lg">
                                <div className="text-2xl font-bold text-green-600 mb-1">-41%</div>
                                <div className="text-sm text-gray-600">Redukcja porzuconych koszyków</div>
                              </div>
                            </div>
                            <p className="text-gray-700 mt-4">Ten przykład dobitnie pokazuje, że strategiczne wykorzystanie AI w e-commerce bezpośrednio przekłada się na wzrost przychodów.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                      <CardHeader>
                        <CardTitle className="text-green-800">Studium przypadku usługi niszowe: budowanie ruchu od zera</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-green-700 mb-2">Wyzwanie:</h5>
                            <p className="text-gray-700">Polska agencja edukacyjna posiadała stronę internetową, która nie generowała praktycznie żadnego ruchu ani zapytań z powodu całkowitego braku optymalizacji.</p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-green-700 mb-2">Wdrożone rozwiązania (na podstawie jednego z opublikowanych studiów przypadku):</h5>
                            <p className="text-gray-700">Wdrożono ustrukturyzowane podejście SEO/GEO. Przeprowadzono audyt techniczny, naprawiono błędy indeksacji, wdrożono prawidłową strukturę językową i tagi hreflang. Opracowano strategię contentową opartą na analizie słów kluczowych i intencji użytkowników, tworząc treści odpowiadające na potrzeby studentów na różnych etapach procesu decyzyjnego.</p>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-green-700 mb-2">Rezultaty:</h5>
                            <div className="text-center p-6 bg-white rounded-lg">
                              <div className="text-4xl font-bold text-green-600 mb-2">900%</div>
                              <div className="text-lg text-gray-600 mb-2">Wzrost ruchu organicznego</div>
                              <div className="text-sm text-gray-500">W ciągu zaledwie 6 miesięcy (lipiec 2024 - styczeń 2025)</div>
                            </div>
                            <p className="text-gray-700 mt-4">To studium przypadku dowodzi, że zasady GEO mają uniwersalne zastosowanie i przynoszą wymierne korzyści nie tylko w wielkoskalowym e-commerce, ale również w niszowych branżach usługowych.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Połączenie tych dwóch studiów przypadku – jednego skoncentrowanego na zaawansowanym e-commerce, a drugiego na usługach B2C – pokazuje uniwersalną moc i elastyczność strategii GEO. Dowodzi, że niezależnie od modelu biznesowego, adaptacja do ery wyszukiwania AI jest kluczem do wzrostu.
                  </p>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Part V */}
          <div className="mb-16" data-section="part5">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-lg font-bold">V</div>
              Droga naprzód: aktywacja strategii GEO
            </h2>

            {/* Chapter 11 */}
            <Collapsible open={openChapters.chapter11} onOpenChange={() => toggleChapter('chapter11')}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow mb-6" data-section="chapter11">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">Rozdział 11: Anatomia partnera GEO światowej klasy</span>
                      {openChapters.chapter11 ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Nowa era wymaga nowego rodzaju partnera strategicznego. Wybór agencji do prowadzenia działań w zakresie Generative Engine Optimization to decyzja, która będzie miała długofalowe skutki dla pozycji rynkowej firmy. Zamiast pytać „jak agencje sprzedają GEO?", liderzy biznesowi powinni pytać „jakich kompetencji i zdolności powinniśmy wymagać od naszego partnera?". Na podstawie analizy ofert wiodących polskich agencji, które już wdrożyły usługi GEO, można zdefiniować zestaw kluczowych cech idealnego partnera.
                  </p>

                  {/* Interactive Visualization */}
                  <Card className="my-8 bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-200">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-6 text-center">Cechy idealnego partnera GEO</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="p-4 bg-white rounded-lg shadow-sm">
                            <h5 className="font-semibold text-rose-700 mb-2">Szerszy zakres kompetencji</h5>
                            <p className="text-sm text-gray-600">Myślenie strategiczne poza tradycyjnym SEO, znajomość różnych platform AI</p>
                          </div>
                          <div className="p-4 bg-white rounded-lg shadow-sm">
                            <h5 className="font-semibold text-rose-700 mb-2">Zaawansowane narzędzia</h5>
                            <p className="text-sm text-gray-600">Autorskie rozwiązania analityczne do monitorowania widoczności w AI</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="p-4 bg-white rounded-lg shadow-sm">
                            <h5 className="font-semibold text-rose-700 mb-2">Nowe definicje sukcesu</h5>
                            <p className="text-sm text-gray-600">KPI takie jak AI Attribution Rate i Share of AI Voice</p>
                          </div>
                          <div className="p-4 bg-white rounded-lg shadow-sm">
                            <h5 className="font-semibold text-rose-700 mb-2">Holistyczny zespół</h5>
                            <p className="text-sm text-gray-600">Kompetencje SEO, content, data science i Digital PR</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <ul className="space-y-4 text-lg leading-relaxed">
                    <li><strong>Szerszy zakres kompetencji:</strong> Partner musi myśleć strategicznie poza tradycyjnym SEO. Powinien wykazywać się głębokim zrozumieniem niuansów działania różnych platform, takich jak ChatGPT, Perplexity czy Gemini, i potrafić opracować zdywersyfikowaną strategię obecności na każdej z nich.</li>
                    
                    <li><strong>Zaawansowane narzędzia i analityka:</strong> Wiodący partner nie może opierać się wyłącznie na standardowych narzędziach SEO. Powinien dysponować zaawansowanymi, często autorskimi rozwiązaniami analitycznymi, które pozwalają monitorować widoczność w odpowiedziach AI, identyfikować czynniki rankingowe specyficzne dla GEO i śledzić działania konkurencji w nowym ekosystemie.</li>
                    
                    <li><strong>Nowa definicja sukcesu (nowe KPI):</strong> Partner musi być w stanie mierzyć to, co teraz ma znaczenie. Zamiast skupiać się na przestarzałych metrykach, takich jak średnia pozycja, powinien raportować w oparciu o nowe wskaźniki efektywności, takie jak <strong>AI Attribution Rate</strong> (jaki procent odpowiedzi AI cytuje naszą markę), <strong>Share of AI Voice</strong> (nasz udział w odpowiedziach AI w porównaniu z konkurencją) oraz <strong>jakość ruchu</strong> pochodzącego z referencji AI. To pokazuje dojrzałość strategiczną i koncentrację na wynikach biznesowych.</li>
                    
                    <li><strong>Holistyczny, hybrydowy zespół:</strong> Skuteczne GEO wymaga interdyscyplinarnego podejścia. Idealny partner powinien dysponować zespołem, który łączy w sobie kompetencje z zakresu technicznego SEO, strategii contentowej, analizy danych (data science) oraz strategicznego Digital PR. Tylko taka synergia pozwala na budowanie autorytetu marki w sposób zrozumiały zarówno dla ludzi, jak i dla maszyn.</li>
                  </ul>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>

            {/* Chapter 12 */}
            <Collapsible open={openChapters.chapter12} onOpenChange={() => toggleChapter('chapter12')}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow mb-6" data-section="chapter12">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">Rozdział 12: Twoje pierwsze 30 dni: plan działania na nową erę</span>
                      {openChapters.chapter12 ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Wiedza bez działania jest bezwartościowa. Czas na adaptację jest teraz. Poniższy plan to pięć strategicznych kroków, które każdy lider biznesowy może podjąć w ciągu najbliższego miesiąca, aby rozpocząć transformację swojej firmy i przygotować ją na wyzwania ery wyszukiwania AI. Plan ten został zaadaptowany z wewnętrznych wytycznych dla agencji i przekształcony w empoweringowy schemat działania dla klienta.
                  </p>

                  {/* 30-Day Action Plan */}
                  <Card className="my-8 bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-violet-200">
                    <CardHeader>
                      <CardTitle className="text-center text-violet-800">Plan działania na pierwsze 30 dni</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {[
                          {
                            step: 1,
                            title: "Zwołaj strategiczną odprawę",
                            description: "Zbierz kluczowych liderów z działów marketingu, sprzedaży i rozwoju produktu. Przedstaw im kluczowe wnioski z tego raportu, koncentrując się na bezpośrednim wpływie zmian na Wasz model biznesowy i pozycję konkurencyjną. Celem jest zbudowanie wspólnego zrozumienia skali wyzwania.",
                            color: "blue"
                          },
                          {
                            step: 2,
                            title: "Przeprowadź bazowy „audyt widoczności w AI"",
                            description: "Wykonaj proste, ale otwierające oczy ćwiczenie. Ręcznie sprawdź widoczność swojej marki dla 10 najważniejszych zapytań komercyjnych w Google AI Overviews oraz na platformie Perplexity. Zapisz wyniki. Czy Twoja marka jest widoczna? Kto jest cytowany, jeśli nie Ty?",
                            color: "purple"
                          },
                          {
                            step: 3,
                            title: "Zidentyfikuj swój „klejnot koronny"",
                            description: "Wskaż jeden, najbardziej komprehensywny i ekspercki zasób treści, jaki posiada Twoja firma (np. flagowy poradnik, szczegółowe badanie, kluczowy artykuł filarowy). Wyznacz go jako projekt pilotażowy do pełnej optymalizacji pod kątem GEO. To pozwoli przetestować procesy na mniejszą skalę.",
                            color: "green"
                          },
                          {
                            step: 4,
                            title: "Zrewiduj swoje metryki",
                            description: "Dokonaj krytycznego przeglądu obecnych raportów marketingowych. Czy metryki, na które patrzysz, nadal adekwatnie odzwierciedlają sukces w erze, gdzie 60% wyszukiwań może nie generować kliknięć? Zacznij dyskusję na temat wprowadzenia nowych KPI, takich jak jakość leadów z AI czy udział w odpowiedziach.",
                            color: "orange"
                          },
                          {
                            step: 5,
                            title: "Zasięgnij eksperckiej diagnozy",
                            description: "Najważniejszym i najbardziej efektywnym pierwszym krokiem jest zaangażowanie specjalistycznego partnera w celu przeprowadzenia kompleksowego audytu GEO i opracowania strategicznej mapy drogowej. Samodzielna diagnoza może wskazać objawy, ale tylko dogłębna, zewnętrzna analiza odkryje przyczyny i wyznaczy najskuteczniejszą ścieżkę do osiągnięcia pozycji lidera w nowej erze wyszukiwania.",
                            color: "red"
                          }
                        ].map((item) => (
                          <div key={item.step} className="flex gap-4">
                            <div className={`w-12 h-12 bg-${item.color}-100 rounded-full flex items-center justify-center flex-shrink-0`}>
                              <span className={`text-lg font-bold text-${item.color}-700`}>{item.step}</span>
                            </div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-gray-800 mb-2">{item.title}</h5>
                              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Appendices */}
          <div className="mb-16" data-section="appendices">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-600 text-white rounded-lg flex items-center justify-center text-lg font-bold">+</div>
              Dodatki
            </h2>

            {/* Appendix A */}
            <Collapsible open={openChapters.appendixA} onOpenChange={() => toggleChapter('appendixA')}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow mb-6" data-section="appendixA">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">Dodatek A: Katalog elementów wizualnych Google AI Overviews</span>
                      {openChapters.appendixA ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Zrozumienie poszczególnych komponentów wizualnych, które pojawiają się w nowych formatach wyszukiwania, jest kluczowe do precyzyjnej optymalizacji. Poniżej znajduje się katalog najczęściej występujących elementów.
                  </p>

                  <ul className="space-y-4 text-lg leading-relaxed">
                    <li><strong>Podsumowania tekstowe (paragrafy, listy):</strong> Najbardziej powszechny format – blok tekstu lub lista punktowana/numerowana, która bezpośrednio odpowiada na zapytanie. Optymalizacja polega na tworzeniu zwięzłych odpowiedzi na początku treści i stosowaniu znaczników &lt;ul&gt;, &lt;ol&gt; oraz schema:FAQPage.</li>
                    
                    <li><strong>Tabele porównawcze:</strong> Ustrukturyzowane tabele porównujące cechy, specyfikacje lub ceny produktów. Wymagają stosowania semantycznego znacznika &lt;table&gt; i dostarczania twardych, faktograficznych danych.</li>
                    
                    <li><strong>Siatki i karuzele produktowe:</strong> Wizualne formaty prezentujące produkty z obrazami, cenami i ocenami. Kluczowa jest tu integracja z Google Merchant Center i wdrożenie szczegółowego schema:Product.</li>
                    
                    <li><strong>Lokalne podsumowania generowane przez AI:</strong> Akapit lub lista lokalnych firm w odpowiedzi na zapytania z intencją lokalną (np. „najlepsza restauracja w pobliżu"). Optymalizacja wymaga zadbanego Profilu Firmy w Google i zbierania szczegółowych, opisowych recenzji.</li>
                    
                    <li><strong>Formaty planistyczne i instruktażowe:</strong> Ustrukturyzowane plany (np. podróży, żywieniowe) z podziałem na etapy. Wymagają odpowiedniej struktury treści (nagłówki dla dni/kroków) i wdrożenia schema:HowTo.</li>
                    
                    <li><strong>Osadzone filmy wideo:</strong> Klipy wideo (często z YouTube) osadzone bezpośrednio w odpowiedzi AI. Optymalizacja obejmuje tworzenie krótkich filmów odpowiadających na konkretne pytania i wdrażanie schema:VideoObject.</li>
                    
                    <li><strong>Zakładki rozszerzające zapytanie:</strong> Dodatkowe zakładki sugerujące użytkownikowi kolejne, powiązane pytania. Aby się w nich pojawić, należy budować kompleksowe klastry tematyczne.</li>
                  </ul>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>

            {/* Appendix B */}
            <Collapsible open={openChapters.appendixB} onOpenChange={() => toggleChapter('appendixB')}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow mb-6" data-section="appendixB">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">Dodatek B: Słownik kluczowych terminów wyszukiwania AI</span>
                      {openChapters.appendixB ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Zrozumienie nowego języka jest pierwszym krokiem do opanowania nowej dyscypliny.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        term: "AEO (Answer Engine Optimization)",
                        definition: "Proces optymalizacji treści, aby stała się ona cytowalnym źródłem dla silników odpowiedzi, takich jak Google AI Overviews czy Perplexity."
                      },
                      {
                        term: "AIO (AI Optimization)",
                        definition: "Ogólny termin opisujący wszelkie działania mające na celu optymalizację treści, danych i zasobów cyfrowych tak, aby były one zrozumiałe, dostępne i preferowane przez algorytmy sztucznej inteligencji. Jest to pojęcie szersze i mniej sformalizowane niż GEO czy AEO."
                      },
                      {
                        term: "Encja (Entity)",
                        definition: "W kontekście SEO, to konkretny, unikalny obiekt lub koncepcja (np. osoba, firma, produkt), którą wyszukiwarki potrafią zidentyfikować i zrozumieć relacje między nimi."
                      },
                      {
                        term: "GEO (Generative Engine Optimization)",
                        definition: "Szersze pojęcie niż AEO, obejmujące optymalizację pod kątem wszystkich platform generatywnej AI, w tym chatbotów (ChatGPT, Claude) i silników odpowiedzi. Celem jest wpłynięcie na generowane przez nie treści."
                      },
                      {
                        term: "LLM (Large Language Model)",
                        definition: "Duży model językowy (np. Gemini, GPT-4), czyli zaawansowana sieć neuronowa wytrenowana na ogromnych ilościach danych, zdolna do rozumienia i generowania języka naturalnego."
                      },
                      {
                        term: "RAG (Retrieval-Augmented Generation)",
                        definition: "Proces technologiczny, w którym model językowy przed wygenerowaniem odpowiedzi aktywnie pobiera aktualne informacje z zewnętrznej bazy wiedzy (np. z internetu), aby jego odpowiedź była bardziej dokładna i oparta na faktach."
                      },
                      {
                        term: "Schema Markup (Dane Strukturalne)",
                        definition: "Ustandaryzowany format do oznaczania informacji na stronie internetowej, który pomaga wyszukiwarkom zrozumieć kontekst i znaczenie treści (np. co jest recenzją, co ceną, a co nazwiskiem autora)."
                      }
                    ].map((item, index) => (
                      <div key={index} className="border-l-4 border-l-gray-300 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-2">{item.term}</h4>
                        <p className="text-gray-600">{item.definition}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>

            {/* Appendix C */}
            <Collapsible open={openChapters.appendixC} onOpenChange={() => toggleChapter('appendixC')}>
              <CollapsibleTrigger asChild>
                <Card className="cursor-pointer hover:shadow-md transition-shadow mb-6" data-section="appendixC">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl">Dodatek C: Wybrane źródła i lektury uzupełniające</span>
                      {openChapters.appendixC ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <CardContent className="prose max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    Dla liderów pragnących pogłębić swoją wiedzę, poniższa lista stanowi punkt wyjścia do dalszych badań nad transformacją cyfrową w erze AI.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Raporty rynkowe:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Raporty dotyczące rynku reklamy i internetu w Polsce</li>
                        <li>Raporty dotyczące polskiego e-commerce</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3">Oficjalna dokumentacja Google:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Google Search Central: AI Features and Your Website</li>
                        <li>Google Search Central: AI Overviews and Your Website</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg mb-3">Kluczowe analizy i studia przypadków:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Analiza wpływu AI Overviews na ruch</li>
                        <li>Studia przypadku wdrożeń GEO</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* Footer */}
          <div className="text-center py-12 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              © 2025 Rewolucja AI Search - Przewodnik strategiczny dla polskich firm
            </p>
            <Button onClick={generatePDF} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto">
              <Download className="h-5 w-5" />
              Pobierz pełny przewodnik PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookPresentation;
