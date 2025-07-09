
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Search, TrendingUp, Brain, Globe, Zap, Target, BarChart, Users, ArrowRight, BookOpen, Lightbulb, Shield, CheckCircle, AlertTriangle, Award, Settings, FileText, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [activeSection, setActiveSection] = useState('');
  const [expandedSections, setExpandedSections] = useState(new Set());

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          current = section.getAttribute('data-section') || '';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const AISearchEvolutionVisual = () => (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ewolucja wyszukiwania: od linków do odpowiedzi</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400">
            <h4 className="font-semibold text-gray-800 mb-2">Era tradycyjna</h4>
            <p className="text-sm text-gray-600">10 niebieskich linków</p>
            <p className="text-sm text-gray-600">Użytkownik musi przeszukiwać</p>
          </div>
          <ArrowRight className="mx-auto text-blue-500" size={32} />
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400">
            <h4 className="font-semibold text-gray-800 mb-2">Era AI</h4>
            <p className="text-sm text-gray-600">Natychmiastowe odpowiedzi</p>
            <p className="text-sm text-gray-600">Synteza z wielu źródeł</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
            <p className="text-sm text-gray-600 mb-4">wzrost rynku chatbotów AI</p>
            <div className="text-3xl font-bold text-green-600 mb-2">34x</div>
            <p className="text-sm text-gray-600">więcej wizyt w tradycyjnych wyszukiwarkach</p>
          </div>
        </div>
      </div>
    </div>
  );

  const CustomerJourneyVisual = () => (
    <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-xl mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Nowa podróż klienta</h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <Search className="text-white" size={24} />
          </div>
          <h4 className="font-semibold mb-2">Zapytanie</h4>
          <p className="text-sm text-gray-600">Użytkownik zadaje pytanie</p>
        </div>
        <ArrowRight className="text-purple-400" size={24} />
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <Brain className="text-white" size={24} />
          </div>
          <h4 className="font-semibold mb-2">AI Analiza</h4>
          <p className="text-sm text-gray-600">60% kończy się bez kliknięcia</p>
        </div>
        <ArrowRight className="text-purple-400" size={24} />
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <Target className="text-white" size={24} />
          </div>
          <h4 className="font-semibold mb-2">Wysokiej jakości kliknięcia</h4>
          <p className="text-sm text-gray-600">Lepsze konwersje</p>
        </div>
      </div>
    </div>
  );

  const PolishEcommerceVisual = () => (
    <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Polski e-commerce w liczbach</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">44,56%</div>
            <p className="text-sm text-gray-600">ruchu organicznego</p>
            <p className="text-xs text-gray-500 mt-2">Dominujący kanał pozyskiwania klientów</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">30%</div>
            <p className="text-sm text-gray-600">firm z wzrostem</p>
            <p className="text-xs text-gray-500 mt-2">Tylko 295 z 1000 firm odnotowało wzrost</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">38%</div>
            <p className="text-sm text-gray-600">niewidocznych w AI</p>
            <p className="text-xs text-gray-500 mt-2">Brak obecności w odpowiedziach AI</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const AIEngineVisual = () => (
    <div className="bg-gradient-to-br from-cyan-50 to-blue-100 p-8 rounded-xl mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Jak myśli sztuczna inteligencja</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="text-white" size={32} />
          </div>
          <h4 className="font-semibold mb-2">LLM</h4>
          <p className="text-sm text-gray-600">Zaawansowane modele językowe rozumiejące kontekst</p>
        </div>
        <div className="text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Database className="text-white" size={32} />
          </div>
          <h4 className="font-semibold mb-2">RAG</h4>
          <p className="text-sm text-gray-600">Pobieranie aktualnych informacji z internetu</p>
        </div>
        <div className="text-center">
          <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe className="text-white" size={32} />
          </div>
          <h4 className="font-semibold mb-2">Grafy wiedzy</h4>
          <p className="text-sm text-gray-600">Rozumienie encji i relacji między nimi</p>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
        <h4 className="font-semibold mb-3">Query Fan-out - jak AI rozkłada zapytania</h4>
        <div className="text-center">
          <div className="bg-blue-100 p-3 rounded-lg mb-4">
            <p className="text-sm font-medium">"Jaki jest najlepszy aparat dla początkującego fotografa podróżniczego?"</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-xs">łatwe w obsłudze aparaty</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-xs">lekkie aparaty na podróż</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <p className="text-xs">recenzje aparatów do 5000 zł</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PlatformComparisonVisual = () => (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-8 rounded-xl mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Arena gigantów AI</h3>
      </div>
      <Tabs defaultValue="google" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="google">Google AI</TabsTrigger>
          <TabsTrigger value="chatgpt">ChatGPT</TabsTrigger>
          <TabsTrigger value="perplexity">Perplexity</TabsTrigger>
        </TabsList>
        <TabsContent value="google" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="text-blue-500" size={24} />
                Google AI Overviews & AI Mode
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Ewolucja tradycyjnego wyszukiwania z głęboką integracją systemów rankingowych.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Kluczowa strategia:</h4>
                  <p className="text-sm text-gray-600">Budowanie głębokiego autorytetu tematycznego i tworzenie "cytowalnych" fragmentów eksperckich</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Klucz do sukcesu:</h4>
                  <p className="text-sm text-gray-600">Holistyczne, dobrze ustrukturyzowane treści eksperckie</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="chatgpt" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="text-green-500" size={24} />
                ChatGPT Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Idealny do kompleksowych, kreatywnych odpowiedzi z naciskiem na zewnętrzny autorytet.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Kluczowa strategia:</h4>
                  <p className="text-sm text-gray-600">Inwestycja w Digital PR i budowanie autorytetu na zewnętrznych portalach</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Klucz do sukcesu:</h4>
                  <p className="text-sm text-gray-600">Silna reputacja marki poza własną stroną internetową</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="perplexity" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="text-purple-500" size={24} />
                Perplexity AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Silnik badawczy dla profesjonalistów z naciskiem na transparentność i cytowania.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Kluczowa strategia:</h4>
                  <p className="text-sm text-gray-600">Publikowanie oryginalnych danych, badań i analiz</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Klucz do sukcesu:</h4>
                  <p className="text-sm text-gray-600">Stanie się źródłem unikalnych, weryfikowalnych informacji</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const PhilosophyVisual = () => (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-100 p-8 rounded-xl mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Nowa filozofia optymalizacji</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <BarChart className="text-white" size={24} />
            </div>
            <h4 className="font-semibold">Stare podejście</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Optymalizacja całych stron</li>
            <li>• Słowa kluczowe</li>
            <li>• Pozycje w rankingu</li>
            <li>• Ilość kliknięć</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="text-white" size={24} />
            </div>
            <h4 className="font-semibold">Nowe podejście (GEO)</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Optymalizacja fragmentów</li>
            <li>• Encje i relacje</li>
            <li>• Bycie cytowanym</li>
            <li>• Jakość konwersji</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const AuthorityVisual = () => (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-100 p-8 rounded-xl mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Budowanie "cytadeli zaufania"</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <Shield className="text-blue-500" size={20} />
            E-E-A-T Framework
          </h4>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h5 className="font-medium text-blue-600">Experience</h5>
              <p className="text-sm text-gray-600">Autentyczne studia przypadku i testy</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h5 className="font-medium text-green-600">Expertise</h5>
              <p className="text-sm text-gray-600">Szczegółowe biografie autorów</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h5 className="font-medium text-purple-600">Authoritativeness</h5>
              <p className="text-sm text-gray-600">Wzmianki w renomowanych publikacjach</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h5 className="font-medium text-orange-600">Trustworthiness</h5>
              <p className="text-sm text-gray-600">Cytowanie wiarygodnych źródeł</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <Target className="text-green-500" size={20} />
            Model Hub-and-Spoke
          </h4>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-white" size={32} />
              </div>
              <h5 className="font-medium mb-2">Hub (Filar)</h5>
              <p className="text-sm text-gray-600 mb-4">Kompleksowy przewodnik główny</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                  <FileText className="text-white" size={16} />
                </div>
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                  <FileText className="text-white" size={16} />
                </div>
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                  <FileText className="text-white" size={16} />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Spokes (Artykuły klastrowe)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TechnicalFoundationVisual = () => (
    <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-8 rounded-xl mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Fundament techniczny</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <Settings className="text-blue-500" size={20} />
            Kluczowe Schema Types
          </h4>
          <div className="space-y-2">
            {[
              { name: 'Article, BlogPosting', desc: 'Autorytet treści' },
              { name: 'FAQPage, HowTo', desc: 'Strukturyzowane odpowiedzi' },
              { name: 'Product, Offer', desc: 'Dane e-commerce' },
              { name: 'Organization, Person', desc: 'Encje marki' },
              { name: 'Citation', desc: 'Zewnętrzne źródła' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center">
                <span className="font-medium text-sm">{item.name}</span>
                <span className="text-xs text-gray-600">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Checklista gotowości technicznej</h4>
          <div className="space-y-3">
            {[
              'Kompleksowe treści eksperckie (Hub-and-Spoke)',
              'Autorzy z widocznymi biografiami',
              'Oryginalne dane i badania',
              'Bezpośrednie odpowiedzi na pytania',
              'Dobrze ustrukturyzowane treści',
              'Dane strukturalne (Schema Markup)',
              'Server-Side Rendering (SSR)',
              'Dostęp dla crawlerów AI'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const MythBustingVisual = () => (
    <div className="bg-gradient-to-br from-red-50 to-pink-100 p-8 rounded-xl mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Obalanie mitów AI</h3>
      </div>
      <div className="space-y-6">
        {[
          {
            myth: 'SEO umarło. Nikt już nie będzie potrzebował mojej strony.',
            reality: 'AI potrzebuje wiarygodnych źródeł. SEO ewoluowało w bardziej wymagającą dyscyplinę.',
            icon: <AlertTriangle className="text-red-500" size={24} />
          },
          {
            myth: 'Użytkownicy przestaną klikać w linki.',
            reality: 'AI Overviews generują ruch wyższej jakości - lepiej poinformowani użytkownicy.',
            icon: <Users className="text-blue-500" size={24} />
          },
          {
            myth: 'Google karze treści generowane przez AI.',
            reality: 'Google nagradza wysokiej jakości treści, niezależnie od sposobu ich tworzenia.',
            icon: <Award className="text-green-500" size={24} />
          }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="bg-red-50 p-3 rounded-lg mb-3">
                  <h4 className="font-semibold text-red-700 mb-1">Mit:</h4>
                  <p className="text-sm text-red-600">{item.myth}</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-1">Rzeczywistość:</h4>
                  <p className="text-sm text-green-600">{item.reality}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CaseStudiesVisual = () => (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-xl mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Studia przypadków - wymierny ROI</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="text-green-500" size={24} />
              E-commerce - części samochodowe
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">62%</div>
                <p className="text-sm text-gray-600">wzrost ruchu organicznego</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">35%</div>
                  <p className="text-xs text-gray-600">wzrost konwersji</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">41%</div>
                  <p className="text-xs text-gray-600">mniej porzuconych koszyków</p>
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-600">Wdrożono systemy AI do automatycznego rozbudowywania opisów produktów i inteligentną kategoryzację.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="text-orange-500" size={24} />
              Agencja edukacyjna
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">9x</div>
                <p className="text-sm text-gray-600">wzrost ruchu organicznego</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-blue-600">6 miesięcy</div>
                <p className="text-xs text-gray-600">czas osiągnięcia rezultatów</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p class

="text-xs text-gray-600">Od prawie zerowego ruchu do stabilnej widoczności przez kompleksową strategię SEO/GEO.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const ActionPlanVisual = () => (
    <div className="bg-gradient-to-br from-violet-50 to-purple-100 p-8 rounded-xl mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Twoje pierwsze 30 dni</h3>
      </div>
      <div className="space-y-4">
        {[
          {
            step: 1,
            title: 'Zwołaj strategiczną odprawę',
            desc: 'Przedstaw kluczowe wnioski zespołowi',
            time: 'Dzień 1-3'
          },
          {
            step: 2,
            title: 'Audyt widoczności w AI',
            desc: 'Sprawdź obecność w AI Overviews i Perplexity',
            time: 'Dzień 4-7'
          },
          {
            step: 3,
            title: 'Zidentyfikuj "klejnot koronny"',
            desc: 'Wybierz najlepszy zasób do optymalizacji',
            time: 'Dzień 8-14'
          },
          {
            step: 4,
            title: 'Zrewiduj metryki',
            desc: 'Wprowadź nowe KPI dla ery AI',
            time: 'Dzień 15-21'
          },
          {
            step: 5,
            title: 'Zasięgnij eksperckiej diagnozy',
            desc: 'Kompleksowy audyt GEO i mapa drogowa',
            time: 'Dzień 22-30'
          }
        ].map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              {item.step}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
            <Badge variant="outline">{item.time}</Badge>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">Rewolucja AI Search</h1>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">Przewodnik 2025</Badge>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Pobierz PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rewolucja AI Search
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Przewodnik dla polskich firm po optymalizacji pod sztuczną inteligencję
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Rozpocznij lekturę
            </Button>
            <Button size="lg" variant="outline">
              Przejdź do spisu treści
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Część I */}
        <section data-section="part1" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-blue-100 text-blue-800">Część I</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nieunikniona zmiana: dlaczego dotychczasowe zasady przestały obowiązywać
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ta część ustanawia fundamentalne „dlaczego". Tworzy poczucie pilności, wykazując, że rewolucja w wyszukiwaniu opartym na sztucznej inteligencji nie jest odległym trendem, lecz obecną rzeczywistością, która bezpośrednio wpływa na polski rynek.
              </p>
            </div>
          </div>

          {/* Rozdział 1 */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Rozdział 1: Koniec wyszukiwania, początek ery odpowiedzi – i nowego wzrostu</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection('chapter1')}
                  >
                    {expandedSections.has('chapter1') ? <ChevronDown /> : <ChevronRight />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {expandedSections.has('chapter1') && (
                <CardContent className="pt-0">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Jesteśmy świadkami jednej z najbardziej fundamentalnych transformacji w funkcjonowaniu internetu od dziesięcioleci. Era, w której sukces biznesowy w sieci definiowała obecność na liście dziesięciu niebieskich linków, bezpowrotnie ustępuje miejsca nowemu paradygmatowi. Wyszukiwarka, jaką znaliśmy, ewoluuje w inteligentny „silnik odpowiedzi" (ang. <em>answer engine</em>), napędzany przez generatywną sztuczną inteligencję. Użytkownicy – a więc i klienci – coraz rzadziej poszukują linków. Oczekują natychmiastowych, skondensowanych odpowiedzi, generowanych w czasie rzeczywistym, bezpośrednio na stronie wyników.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Pojawienie się chatbotów i wyszukiwania AI wywołało falę spekulacji o „śmierci SEO". Jednak najnowsze, twarde dane rynkowe pokazują obraz zgoła odmienny: to nie jest gra o sumie zerowej. Obserwujemy nie zastąpienie, a dynamiczny, równoległy wzrost obu ekosystemów. W ciągu ostatnich dwóch lat (kwiecień 2023 - marzec 2025) rynek chatbotów AI odnotował <strong>eksplozyjny wzrost o ponad 80%, osiągając 55,2 miliarda wizyt</strong>. Mimo to, w tym samym okresie, tradycyjne wyszukiwarki zdominowały ruch internetowy, generując <strong>1863 miliardy wizyt – czyli 34 razy więcej</strong>. Nawet lider rynku AI, ChatGPT, notuje 26 razy mniej codziennych wizyt niż Google.
                    </p>

                    <AISearchEvolutionVisual />

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Co więcej, po początkowym, niewielkim spadku, ruch w wyszukiwarkach na początku 2025 roku zaczął ponownie rosnąć, napędzany właśnie przez integrację funkcji AI, takich jak AI Overviews. To dowodzi, że SEO nie umiera – ewoluuje i staje się kluczowym elementem w jeszcze większym i bardziej zdywersyfikowanym ekosystemie.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Ten globalny trend ma bezpośrednie przełożenie na polski rynek. <strong>Oficjalne uruchomienie funkcji AI Overviews w Polsce nastąpiło 26 marca 2025 roku</strong>, co czyni adaptację do nowych warunków palącą kwestią dla każdego polskiego przedsiębiorstwa. Ignorowanie tej zmiany nie jest już opóźnieniem w adaptacji do globalnych innowacji; jest świadomym pomijaniem fundamentalnej zmiany, która już zaszła na rodzimym rynku. Przy <strong>20-procentowym wzroście wartości rynku reklamy online w Polsce rok do roku</strong>, staje się jasne, że cały ekosystem cyfrowy dynamicznie przesuwa się w kierunku rozwiązań opartych na AI. Firmy, które nie dostosują swoich strategii, nie tylko pozostają w tyle za globalnym trendem, ale aktywnie ignorują zmianę, która już teraz redefiniuje sposób, w jaki polscy konsumenci wchodzą w interakcję z markami w internecie.
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Rozdział 2 */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Rozdział 2: Nowa podróż klienta: od kliknięć do konwersacji</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection('chapter2')}
                  >
                    {expandedSections.has('chapter2') ? <ChevronDown /> : <ChevronRight />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {expandedSections.has('chapter2') && (
                <CardContent className="pt-0">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Zmiana w sposobie prezentacji wyników wyszukiwania w naturalny sposób przekształca interakcje użytkowników. Obserwujemy zjawisko, które można nazwać „przesunięciem uwagi" – od nawykowego klikania w linki w kierunku konsumpcji gotowych, wygenerowanych przez AI odpowiedzi. Szacuje się, że nawet do <strong>60% wyszukiwań w Google może kończyć się bez kliknięcia w jakikolwiek tradycyjny link organiczny</strong>. Użytkownicy otrzymują skondensowaną wiedzę bezpośrednio na stronie wyników, co fundamentalnie zmienia dynamikę i cel generowania ruchu na stronach internetowych.
                    </p>

                    <CustomerJourneyVisual />

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Obecność AI Overviews wpływa na liczbę kliknięć w linki, szczególnie w przypadku zapytań o charakterze informacyjnym. Niektóre analizy wskazują na potencjalne spadki ruchu dla tego typu treści sięgające od 18% do nawet 64%. Taka perspektywa może budzić obawy o zmniejszenie widoczności i utratę cennego źródła leadów. Jednakże w tej nowej rzeczywistości pojawia się fascynująca szansa biznesowa. Google aktywnie promuje koncepcję <strong>„kliknięć wyższej jakości"</strong>. Użytkownik, który zapoznał się z syntetyczną odpowiedzią AI i mimo to decyduje się przejść na stronę źródłową, robi to z o wiele silniejszą intencją. Jest już wstępnie poinformowany, a jego celem jest pogłębienie wiedzy, porównanie szczegółów lub dokonanie transakcji.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Oznacza to, że ruch pochodzący z odnośników w AI Overviews staje się bardziej wartościowy. Użytkownicy ci są lepiej przygotowani, bardziej zaangażowani i, co kluczowe z perspektywy biznesowej, bardziej skłonni do konwersji. To prowadzi nas do fundamentalnej zmiany w mierzeniu sukcesu. Spadek ogólnej liczby sesji na stronie może iść w parze ze wzrostem jakości generowanych leadów i współczynnika konwersji. Narracja strategiczna przesuwa się z metryk ilościowych (liczba kliknięć) na jakościowe (wartość konwersji, ROI), które realnie przekładają się na wyniki biznesowe. Nowa era wyszukiwania nagradza marki, które potrafią budować autorytet i dostarczać wartość jeszcze zanim użytkownik kliknie w link, przyciągając tym samym najbardziej zdecydowanych klientów.
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Rozdział 3 */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Rozdział 3: Polska arena e-commerce: nowe szanse i wyzwania</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection('chapter3')}
                  >
                    {expandedSections.has('chapter3') ? <ChevronDown /> : <ChevronRight />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {expandedSections.has('chapter3') && (
                <CardContent className="pt-0">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Dla polskiego sektora e-commerce, którego rentowność jest nierozerwalnie związana z widocznością w wyszukiwarkach, Generative Engine Optimization (GEO) nie jest jedynie kolejną taktyką optymalizacyjną. Staje się kluczowym elementem strategii, pozwalającym utrzymać udział w rynku i zdobyć mocną pozycję na nowej, zredefiniowanej przez AI arenie.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Dane z jednego z kluczowych raportów branżowych, „SEO i AI w polskim e-commerce 2025", malują obraz rynku o wysokiej zależności i jednocześnie niepokojąco niskim poziomie przygotowania na nadchodzące zmiany. Analiza ta dostarcza trzech kluczowych wniosków, które powinny być strategicznym sygnałem dla każdego lidera w polskim e-commerce:
                    </p>

                    <PolishEcommerceVisual />

                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <h4 className="font-semibold mb-4">Kluczowe wnioski:</h4>
                      <ol className="space-y-3 text-gray-700">
                        <li><strong>1. Organiczna linia życia:</strong> Ruch organiczny jest absolutnie dominującym kanałem pozyskiwania klientów, odpowiadając za <strong>44,56% całego ruchu</strong> w polskim e-commerce. Jest to więcej niż jakikolwiek inny kanał, w tym wejścia bezpośrednie (36,06%) czy ruch płatny (7,7%). Ta dana jednoznacznie pokazuje, jak krytyczna jest widoczność w Google dla stabilności i wzrostu przychodów.</li>
                        
                        <li><strong>2. Stagnacja większości:</strong> Mimo tak ogromnej zależności, przytłaczająca większość firm nie jest w stanie efektywnie wykorzystać tego kanału. Z 1000 przebadanych polskich firm e-commerce, <strong>tylko 295 – czyli mniej niż 30% – odnotowało jakikolwiek wzrost ruchu organicznego rok do roku</strong>. Oznacza to, że ponad 70% rynku już teraz ma trudności z utrzymaniem status quo, jeszcze przed pełnym wpływem rewolucji AI.</li>
                        
                        <li><strong>3. Kryzys niewidzialności:</strong> Najbardziej znaczącym sygnałem jest fakt, że znaczna część polskich marek jest już teraz całkowicie niewidoczna w nowym ekosystemie odpowiedzi. Aż <strong>38% polskich firm e-commerce nie pojawia się w odpowiedziach generowanych przez AI</strong> dla typowych zapytań transakcyjnych, takich jak „najlepszy smartwatch do 1000 zł". Ich oferta, nawet jeśli jest konkurencyjna cenowo i produktowo, po prostu nie istnieje w miejscu, gdzie coraz częściej zapadają decyzje zakupowe.</li>
                      </ol>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      Połączenie tych trzech czynników – ogromnej zależności od kanału, który ulega transformacji, powszechnej stagnacji w jego dotychczasowej formie oraz masowej niewidzialności w jego nowej odsłonie – tworzy poważne wyzwanie biznesowe. To nie jest już kwestia technicznej optymalizacji SEO, lecz strategicznego wyzwania dla ciągłości działania i utrzymania przychodów. Firmy, które zignorują tę nową przestrzeń konkurencyjną, mogą nie tylko stracić pozycję w rankingu, ale całkowicie zniknąć z pola widzenia swoich potencjalnych klientów.
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </section>

        {/* Część II */}
        <section data-section="part2" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-green-100 text-green-800">Część II</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dekodowanie rewolucji: przewodnik lidera po nowym ekosystemie AI
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ta część wyjaśnia „co". Demistyfikuje technologię w kategoriach biznesowych i mapuje nowy krajobraz konkurencyjny, dostarczając liderom wiedzy niezbędnej do podejmowania strategicznych decyzji.
              </p>
            </div>
          </div>

          {/* Rozdział 4 */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Rozdział 4: Wewnątrz „silnika odpowiedzi": jak myśli sztuczna inteligencja</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection('chapter4')}
                  >
                    {expandedSections.has('chapter4') ? <ChevronDown /> : <ChevronRight />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {expandedSections.has('chapter4') && (
                <CardContent className="pt-0">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Aby wygrać w nowej erze, należy zrozumieć jej fundamentalne zasady. Oznacza to zrozumienie mechanizmów, za pomocą których modele AI przetwarzają informacje, aby formułować inteligentne i trafne odpowiedzi. U podstaw tej ewolucji leżą trzy kluczowe technologie, które należy postrzegać nie jako techniczne detale, lecz jako nowe reguły gry.
                    </p>

                    <AIEngineVisual />

                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <h4 className="font-semibold mb-4">Trzy filary technologii AI:</h4>
                      <ol className="space-y-4 text-gray-700">
                        <li><strong>1. Zaawansowane modele językowe (LLM):</strong> Sercem systemów takich jak Google AI Mode czy ChatGPT są potężne modele z rodziny Gemini (Google) i GPT (OpenAI). Można je postrzegać jako niezwykle zaawansowane silniki rozumienia języka, wytrenowane na ogromnych zbiorach danych. Ich zadaniem jest nie tylko wyszukiwanie, ale inteligentna synteza informacji – potrafią rozumieć, podsumowywać, tłumaczyć i generować tekst w sposób naśladujący ludzką logikę i mowę.</li>
                        
                        <li><strong>2. Retrieval-Augmented Generation (RAG):</strong> Jest to mechanizm, który stanowi pomost między wiedzą posiadaną przez model a aktualnością internetu. Działa on na zasadzie „egzaminu z otwartą książką". Zamiast polegać wyłącznie na swojej wstępnie wytrenowanej, statycznej wiedzy, system RAG w odpowiedzi na zapytanie aktywnie przeszukuje sieć w poszukiwaniu świeżych, wiarygodnych informacji. Następnie wykorzystuje te znalezione dane, aby „ugruntować" generowaną odpowiedź w weryfikowalnych, aktualnych faktach. Dzięki RAG, odpowiedzi AI są znacznie bardziej wiarygodne i adekwatne do bieżącej sytuacji.</li>
                        
                        <li><strong>3. Grafy wiedzy (Knowledge Graphs):</strong> Zarówno Google, jak i inne platformy, intensywnie korzystają z grafów wiedzy. Są to gigantyczne bazy danych, które przechowują informacje nie o słowach, ale o <strong>encjach</strong> – konkretnych obiektach, takich jak ludzie, miejsca, organizacje, produkty – oraz o relacjach między nimi. Graf wiedzy rozumie, że „Apple" to firma technologiczna, a nie owoc, i że jest ona powiązana z takimi encjami jak „iPhone" czy „Tim Cook". Optymalizacja pod kątem encji (Entity SEO) staje się kluczowa, ponieważ pomaga AI zrozumieć, kim jest dana marka, jaki jest jej autorytet i w jakiej dziedzinie się specjalizuje.</li>
                      </ol>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      Te technologie napędzają proces znany jako <strong>„query fan-out"</strong>. Kiedy użytkownik wprowadza złożone zapytanie, na przykład „Jaki jest najlepszy aparat dla początkującego fotografa podróżniczego?", system AI autonomicznie rozkłada je na szereg ukrytych, jednoczesnych pod-zapytań, takich jak „łatwe w obsłudze aparaty", „lekkie aparaty na podróż" czy „recenzje aparatów do 5000 zł". Następnie pobiera informacje z najlepszych źródeł dla każdego z tych pod-zapytań i syntetyzuje je w jedną, spójną odpowiedź. Z perspektywy biznesowej oznacza to, że aby zostać zacytowanym, treść marki musi być autorytetem nie tylko w szerokim temacie, ale także w wielu powiązanych z nim, bardziej szczegółowych aspektach.
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Rozdział 5 */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Rozdział 5: Arena gigantów: przewodnik po kluczowych platformach AI</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection('chapter5')}
                  >
                    {expandedSections.has('chapter5') ? <ChevronDown /> : <ChevronRight />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {expandedSections.has('chapter5') && (
                <CardContent className="pt-0">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Monopol jednego silnika wyszukiwania ulega fragmentacji. Widoczność marki musi być teraz budowana w sposób strategiczny w całym, zdywersyfikowanym ekosystemie „silników odpowiedzi". Każda z głównych platform oferuje unikalne możliwości i inaczej ocenia treści, co wymaga dostosowania strategii.
                    </p>

                    <PlatformComparisonVisual />

                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <h4 className="font-semibold mb-4">Kluczowe platformy AI:</h4>
                      <ul className="space-y-4 text-gray-700">
                        <li><strong>Google AI Overviews & AI Mode:</strong> Stanowią one ewolucję tradycyjnego wyszukiwania. AI Overviews to syntetyczne podsumowania pojawiające się nad wynikami organicznymi, podczas gdy AI Mode oferuje w pełni immersyjne, konwersacyjne doświadczenie. Obie funkcje są głęboko zintegrowane z podstawowymi systemami rankingowymi Google, co oznacza, że nadal nagradzają pomocne, wiarygodne i dobrze zoptymalizowane treści (E-E-A-T). Szansa biznesowa polega na budowaniu głębokiego autorytetu tematycznego i tworzeniu „cytowalnych" fragmentów treści, wspartych precyzyjną implementacją danych strukturalnych.</li>
                        
                        <li><strong>ChatGPT Search:</strong> Działając w oparciu o silnik wyszukiwania Bing i własny model językowy, ChatGPT jest idealny do generowania kompleksowych, kreatywnych lub konwersacyjnych odpowiedzi. W swoich rekomendacjach często polega na 2-3 najbardziej autorytatywnych, zewnętrznych źródłach. Oznacza to, że kluczowe staje się budowanie autorytetu marki poza własną stroną internetową – poprzez zdobywanie wzmianek na wysoko ocenianych portalach, w branżowych mediach czy na autorytatywnych listach typu „best of". Jest to potężna szansa dla strategicznych działań Digital PR.</li>
                        
                        <li><strong>Perplexity AI:</strong> Pozycjonuje się jako „silnik badawczy" dla profesjonalistów i researcherów. Jego główną cechą jest transparentność – każda informacja w odpowiedzi jest opatrzona wyraźnym cytatem i linkiem do źródła. Priorytetem dla Perplexity jest aktualność i wiarygodność faktograficzna. Dla marek, które chcą być postrzegane jako liderzy myśli (<em>thought leaders</em>) i eksperci w swojej dziedzinie, jest to idealna platforma. Sukces osiąga się tu poprzez publikowanie oryginalnych danych, badań, analiz i treści opartych na twardych faktach, które stają się niezbędnym źródłem dla innych.</li>
                      </ul>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      Poniższa tabela syntetyzuje kluczowe różnice między platformami, przekładając je na konkretne implikacje strategiczne dla biznesu. Pozwala to liderom zrozumieć, że podejście „jedna strategia dla wszystkich" jest przestarzałe i że wymagana jest zdywersyfikowana, wieloplatformowa obecność, aby w pełni wykorzystać potencjał ery AI.
                    </p>

                    <div className="bg-white border rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold">Cecha</th>
                            <th className="px-4 py-3 text-left font-semibold">Google AI Overviews / AI Mode</th>
                            <th className="px-4 py-3 text-left font-semibold">ChatGPT Search</th>
                            <th className="px-4 py-3 text-left font-semibold">Perplexity AI</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-4 py-3 font-medium">Główny cel dla użytkownika</td>
                            <td className="px-4 py-3 text-sm">Szybkie, syntetyczne podsumowania i głęboka eksploracja tematów.</td>
                            <td className="px-4 py-3 text-sm">Konwersacja, kreatywność, rozwiązywanie złożonych problemów.</td>
                            <td className="px-4 py-3 text-sm">Badania, weryfikacja faktów, odpowiedzi z precyzyjnymi cytatami.</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium">Jak wybiera źródła?</td>
                            <td className="px-4 py-3 text-sm">Kombinacja tradycyjnych sygnałów SEO (E-E-A-T, linki) i „cytowalności" treści.</td>
                            <td className="px-4 py-3 text-sm">Silny nacisk na zewnętrzny autorytet marki i wzmianki w zaufanych źródłach trzecich.</td>
                            <td className="px-4 py-3 text-sm">Priorytet dla aktualności, danych faktograficznych i źródeł o charakterze badawczym.</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium">Twoja kluczowa strategia</td>
                            <td className="px-4 py-3 text-sm">Budowanie głębokiego autorytetu tematycznego i tworzenie „cytowalnych" fragmentów eksperckich na własnej domenie.</td>
                            <td className="px-4 py-3 text-sm">Inwestycja w Digital PR i budowanie autorytetu na zewnętrznych, wysoko ocenianych portalach (recenzje, listy „best of").</td>
                            <td className="px-4 py-3 text-sm">Publikowanie oryginalnych danych, badań i analiz, aby stać się niezbędnym źródłem faktów.</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 font-medium">Klucz do sukcesu</td>
                            <td className="px-4 py-3 text-sm">Holistyczne, dobrze ustrukturyzowane treści eksperckie.</td>
                            <td className="px-4 py-3 text-sm">Silna reputacja marki, która istnieje również poza własną stroną internetową.</td>
                            <td className="px-4 py-3 text-sm">Stanie się źródłem unikalnych, weryfikowalnych informacji.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </section>

        {/* Część III */}
        <section data-section="part3" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-purple-100 text-purple-800">Część III</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                GEO Playbook: twój plan działania na rzecz pozycji lidera rynku
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ta część szczegółowo omawia „jak". Dostarcza strategicznego, praktycznego schematu działania, który pozwala liderom biznesowym zrozumieć, jakie konkretne kroki należy podjąć, aby dostosować swoją organizację do nowej rzeczywistości.
              </p>
            </div>
          </div>

          {/* Rozdział 6 */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Rozdział 6: Nowa filozofia: od pozycji w rankingu do bycia cytowanym</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection('chapter6')}
                  >
                    {expandedSections.has('chapter6') ? <ChevronDown /> : <ChevronRight />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {expandedSections.has('chapter6') && (
                <CardContent className="pt-0">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Era wyszukiwania AI zaprasza do ewolucji myślenia o widoczności w internecie. Zamiast koncentrować się wyłącznie na zdobywaniu najwyższych pozycji, nowym celem staje się uczynienie treści marki kluczowym, cytowalnym źródłem dla systemów AI. To wymaga poszerzenia tradycyjnego podejścia znanego jako <strong>Search Engine Optimization (SEO)</strong> o nowe, bardziej wyspecjalizowane dyscypliny. Najszerszym z nowych pojęć jest <strong>Generative Engine Optimization (GEO)</strong>, które obejmuje kompleksową optymalizację pod kątem wszystkich platform generatywnej AI, w tym chatbotów i silników odpowiedzi. W ramach GEO wyróżniamy bardziej szczegółowe podejście, jakim jest <strong>Answer Engine Optimization (AEO)</strong>, skupiające się na platformach udzielających bezpośrednich odpowiedzi, jak Google AI Overviews. Czasem w branży używa się również ogólnego terminu <strong>AI Optimization (AIO)</strong>, który odnosi się do wszelkich działań mających na celu dostosowanie treści do algorytmów sztucznej inteligencji. Niezależnie od nazewnictwa, fundamentalna zmiana polega na przejściu od optymalizacji pod kątem rankingu do optymalizacji pod kątem bycia cytowanym.
                    </p>

                    <PhilosophyVisual />

                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <h4 className="font-semibold mb-4">Nowa filozofia opiera się na dwóch fundamentalnych filarach:</h4>
                      <ol className="space-y-4 text-gray-700">
                        <li><strong>1. Od optymalizacji stron do optymalizacji fragmentów (passages):</strong> Systemy AI, aby udzielić odpowiedzi, często nie potrzebują analizować całej strony internetowej. Zamiast tego poszukują najbardziej trafnych, zwięzłych i autorytatywnych fragmentów – pojedynczych akapitów, list, definicji czy danych zawartych w tabeli. Zadaniem strategicznym staje się więc takie projektowanie treści, aby te „cytowalne fragmenty" były łatwe do zidentyfikowania, wyodrębnienia i ponownego wykorzystania przez algorytmy. Celem jest dostarczenie AI gotowych „klocków", z których może zbudować odpowiedź.</li>
                        
                        <li><strong>2. Od słów kluczowych do encji (entities):</strong> Wyszukiwarki AI myślą w kategoriach „rzeczy, a nie ciągów znaków". Rozumieją, że „Jacek Dukaj" to konkretna osoba (pisarz), a nie tylko zbitka liter, i że jest on powiązany z takimi encjami jak „Lód" (książka) czy „literatura science fiction" (gatunek). Dlatego budowanie silnej, rozpoznawalnej cyfrowo encji marki, produktu czy autora staje się fundamentem sukcesu. Chodzi o stworzenie spójnego, jednoznacznego obrazu autorytetu w całym internecie, który sztuczna inteligencja może zrozumieć i któremu może zaufać.</li>
                      </ol>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      Przyjęcie tej filozofii pozwala świadomie projektować zasoby cyfrowe, które nie tylko odpowiadają na potrzeby użytkowników, ale także stają się wysokiej jakości paliwem dla inteligentnych silników odpowiedzi, zapewniając marce centralne miejsce w nowym ekosystemie informacyjnym.
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Rozdział 7 */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Rozdział 7: Budowanie „cytadeli zaufania": treść i autorytet w erze AI</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection('chapter7')}
                  >
                    {expandedSections.has('chapter7') ? <ChevronDown /> : <ChevronRight />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {expandedSections.has('chapter7') && (
                <CardContent className="pt-0">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      W świecie, w którym sztuczna inteligencja może generować ogromne ilości treści, weryfikowalna wiedza ekspercka i autorytet (E-E-A-T) stają się najcenniejszymi aktywami biznesowymi. To one odróżniają wiarygodne źródła od szumu informacyjnego i decydują o tym, które marki zostaną zacytowane przez AI.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Koncepcja <strong>E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness – Doświadczenie, Ekspertyza, Autorytet, Wiarygodność)</strong> ewoluuje z wytycznej dla ludzkich oceniających jakość stron w zbiór konkretnych, mierzalnych sygnałów dla algorytmów AI. Aby zbudować autorytet, który maszyny mogą zrozumieć, należy skupić się na:
                    </p>

                    <AuthorityVisual />

                    <div className="bg-green-50 p-6 rounded-lg mb-6">
                      <h4 className="font-semibold mb-4">Jak budować E-E-A-T dla AI:</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li><strong>Doświadczenie (Experience):</strong> Publikowanie autentycznych studiów przypadku, testów produktów i treści pisanych z perspektywy pierwszej osoby („testowaliśmy", „sprawdziliśmy").</li>
                        <li><strong>Ekspertyza (Expertise):</strong> Tworzenie szczegółowych biogramów autorów, podkreślanie ich kwalifikacji i linkowanie do profili zawodowych (np. za pomocą danych strukturalnych schema:Person i sameAs).</li>
                        <li><strong>Autorytet (Authoritativeness):</strong> Zdobywanie wzmianek i linków zwrotnych z renomowanych, branżowych publikacji.</li>
                        <li><strong>Wiarygodność (Trustworthiness):</strong> Regularne aktualizowanie treści, transparentne podawanie danych kontaktowych i, co kluczowe, cytowanie wiarygodnych źródeł zewnętrznych (np. przy użyciu schema:Citation), co pokazuje, że marka jest częścią większego, wiarygodnego ekosystemu wiedzy.</li>
                      </ul>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Idealnym modelem do budowania takiego postrzeganego autorytetu jest architektura treści <strong>Hub-and-Spoke</strong>. Systemy AI lepiej rozumieją i wyżej oceniają witryny, które wyczerpująco pokrywają dany temat. Model ten polega na stworzeniu centralnej, kompleksowej strony filarowej (Hub) na szeroki temat (np. „Kompletny przewodnik po marketingu cyfrowym") oraz serii szczegółowych artykułów klastrowych (Spokes) na powiązane podtematy (np. „Strategia SEO", „Reklama w social media"). Strategiczne linkowanie wewnętrzne – gdzie każda strona klastrowa linkuje do filaru, a filar do klastrów – tworzy silną sieć semantyczną, która jest dla AI jednoznacznym dowodem głębokiej ekspertyzy.
                    </p>

                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-4">Zasady formatowania dla AI:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>Odpowiedź na początku (BLUF - Bottom Line Up Front):</strong> Zaczynanie kluczowych sekcji od zwięzłej, bezpośredniej odpowiedzi na pytanie. AI preferuje takie gotowe do zacytowania fragmenty.</li>
                        <li><strong>Struktura dla skanowalności:</strong> Używanie klarownych nagłówków (H2, H3), list punktowanych i numerowanych oraz tabel. Te elementy są dla AI łatwe do sparsowania i ponownego wykorzystania w generowanych odpowiedziach.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Rozdział 8 */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Rozdział 8: Fundament techniczny: jak uczynić markę zrozumiałą dla maszyn</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection('chapter8')}
                  >
                    {expandedSections.has('chapter8') ? <ChevronDown /> : <ChevronRight />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {expandedSections.has('chapter8') && (
                <CardContent className="pt-0">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Aby systemy AI mogły w pełni zrozumieć i docenić wartość treści, komunikacja z nimi musi odbywać się w ich języku – języku ustrukturyzowanych danych. Solidny fundament techniczny jest nie tyle opcją, co absolutną koniecznością, kluczem do odblokowania pełnego potencjału w strategii GEO.
                    </p>

                    <TechnicalFoundationVisual />

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Najważniejszym sojusznikiem w tym procesie są <strong>dane strukturalne (Schema.org)</strong>. Działają one jak precyzyjne etykiety, które tłumaczą nieustrukturyzowaną treść na stronie na format jednoznacznie zrozumiały dla maszyn. Zamiast zmuszać AI do domyślania się, czym jest dana informacja, można jej to wprost zakomunikować. Priorytetowe typy schema, które pozwalają wyróżnić się w wyszukiwaniu AI, to:
                    </p>

                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <h4 className="font-semibold mb-4">Kluczowe typy Schema.org dla GEO:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li><strong>Article, BlogPosting:</strong> Sygnalizują autorytet i kontekst tematyczny treści.</li>
                        <li><strong>FAQPage, HowTo:</strong> Idealnie strukturyzują odpowiedzi i instrukcje, czyniąc je głównymi kandydatami do bycia zacytowanym w AI Overviews.</li>
                        <li><strong>Product, Offer, AggregateRating:</strong> Niezbędne dla e-commerce, dostarczają AI konkretnych danych o produktach, ich cenach, dostępności i opiniach.</li>
                        <li><strong>Organization, Person:</strong> Budują fundament pod cyfrową encję marki i autora, wzmacniając sygnały E-E-A-T.</li>
                        <li><strong>Citation:</strong> Nowy, potężny typ, który pozwala jawnie oznaczyć, że treść powołuje się na wiarygodne, zewnętrzne źródła, co dodatkowo buduje zaufanie w oczach AI.</li>
                      </ul>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Wiele crawlerów AI, w tym te używane przez Google, ma ograniczony czas i zasoby na renderowanie skomplikowanego kodu JavaScript. Jeśli kluczowe treści i dane strukturalne są ładowane dopiero po wykonaniu skryptów po stronie klienta, istnieje ryzyko, że nie zostaną w ogóle odczytane. Dlatego kluczowe jest, aby najważniejsze informacje były renderowane po stronie serwera (<strong>Server-Side Rendering - SSR</strong>) i dostępne w początkowym kodzie HTML strony. Zapewnia to natychmiastowy dostęp do danych i maksymalizuje szanse na ich przetworzenie.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Poniższa checklista stanowi proste narzędzie do samooceny, pozwalające liderom biznesowym szybko zdiagnozować, czy ich firma jest technicznie przygotowana na erę AI. Przejście przez te pytania często ujawnia strategiczne i techniczne luki, które wymagają specjalistycznej interwencji.
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </section>

        {/* Część IV */}
        <section data-section="part4" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-orange-100 text-orange-800">Część IV</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Dowody i rezultaty: strategie GEO w praktyce
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ta część dostarcza „dowodów". Przezwycięża sceptycyzm za pomocą twardych danych i pokazuje wymierny zwrot z inwestycji poprzez analizę rzeczywistych przykładów, obalając jednocześnie najczęstsze mity.
              </p>
            </div>
          </div>

          {/* Rozdział 9 */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Rozdział 9: Obalanie mitów: oddzielenie hype'u AI od rzeczywistości biznesowej</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection('chapter9')}
                  >
                    {expandedSections.has('chapter9') ? <ChevronDown /> : <ChevronRight />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {expandedSections.has('chapter9') && (
                <CardContent className="pt-0">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Każda transformacja technologiczna rodzi niepewność i dezinformację. Przejście do ery wyszukiwania AI nie jest wyjątkiem. Zanim przeanalizujemy konkretne sukcesy, kluczowe jest rozprawienie się z najczęstszymi mitami, które mogą paraliżować proces decyzyjny i prowadzić do strategicznych błędów.
                    </p>

                    <MythBustingVisual />

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-4">Najczęstsze mity o AI i rzeczywistość:</h4>
                      <div className="space-y-6">
                        <div>
                          <h5 className="font-semibold text-red-600 mb-2">Mit 1: „SEO umarło. Nikt już nie będzie potrzebował mojej strony."</h5>
                          <p className="text-gray-700 text-sm mb-2"><strong>Rzeczywistość:</strong> To fundamentalne nieporozumienie. Sztuczna inteligencja nie tworzy wiedzy z próżni. AI Overviews to kompilacje informacji pochodzących z istniejących stron internetowych. Google, aby wygenerować swoje podsumowania, musi czerpać dane z witryn, które uzna za najbardziej wiarygodne, merytoryczne i najlepiej zoptymalizowane. Oznacza to, że fundamenty SEO, takie jak budowanie autorytetu poprzez sygnały E-E-A-T, są dziś ważniejsze niż kiedykolwiek. Aby AI w ogóle wzięło pod uwagę stronę jako źródło, musi ona być postrzegana jako ekspert w swojej dziedzinie. SEO nie umarło; ewoluowało w bardziej wymagającą i strategiczną dyscyplinę.</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-red-600 mb-2">Mit 2: „Użytkownicy przestaną klikać w linki."</h5>
                          <p className="text-gray-700 text-sm mb-2"><strong>Rzeczywistość:</strong> AI Overviews są skuteczne w przypadku prostych, faktograficznych zapytań (np. „jaka jest stolica Australii?"). Jednak w przypadku zapytań złożonych, transakcyjnych lub wymagających głębokiej analizy, użytkownicy nadal będą poszukiwać bardziej szczegółowych treści. Nikt nie podejmie decyzji o zakupie samochodu na podstawie krótkiego podsumowania AI; będzie szukał recenzji, testów i opinii. Nikt nie nauczy się skomplikowanej umiejętności z listy punktowanej; będzie szukał poradników wideo i szczegółowych instrukcji. Co więcej, same AI Overviews często zawierają linki do źródeł. Bycie cytowanym źródłem to potężny sygnał autorytetu i szansa na pozyskanie bardzo wartościowego, już wstępnie poinformowanego ruchu.</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-red-600 mb-2">Mit 3: „Google karze treści generowane przez AI."</h5>
                          <p className="text-gray-700 text-sm"><strong>Rzeczywistość:</strong> Oficjalne stanowisko Google jest jednoznaczne: firma nagradza treści wysokiej jakości, niezależnie od tego, jak zostały wyprodukowane. Google nie karze za użycie AI; karze za tworzenie spamerskich, niskiej jakości treści, które nie niosą wartości dla użytkownika. Sztuczna inteligencja jest narzędziem. Można jej użyć do stworzenia błyskotliwej analizy lub do wygenerowania tysięcy bezwartościowych artykułów. Ostateczna odpowiedzialność za jakość spoczywa na człowieku, który nadzoruje proces.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Rozdział 10 */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Rozdział 10: Studia przypadków: od teorii do wymiernego ROI</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection('chapter10')}
                  >
                    {expandedSections.has('chapter10') ? <ChevronDown /> : <ChevronRight />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {expandedSections.has('chapter10') && (
                <CardContent className="pt-0">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Teoria i strategie nabierają pełnego znaczenia, gdy widzimy je w działaniu. Analiza firm, które już zaadaptowały swoje działania do ery AI, dostarcza bezcennych dowodów na skuteczność podejścia GEO i pokazuje wymierne korzyści biznesowe.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      Międzynarodowe przykłady pokazują skalę możliwych do osiągnięcia rezultatów. Firma z branży motoryzacyjnej, po wdrożeniu agresywnej optymalizacji pod kątem AI na zaledwie 15% swoich najważniejszych stron, odnotowała <strong>wzrost ruchu pochodzącego z referencji AI o imponujące 2,300%</strong> w ciągu kilku miesięcy. Kluczowe działania obejmowały restrukturyzację treści pod kątem czytelności dla AI, wzmocnienie sygnałów E-E-A-T oraz implementację zaawansowanych danych strukturalnych.
                    </p>

                    <CaseStudiesVisual />

                    <div className="bg-green-50 p-6 rounded-lg mb-6">
                      <h4 className="font-semibold mb-4">Polskie studia przypadków:</h4>
                      
                      <div className="mb-6">
                        <h5 className="font-semibold text-green-700 mb-3">Studium przypadku e-commerce: zwycięstwo w konwersji i widoczności</h5>
                        <p className="text-sm text-gray-700 mb-2"><strong>Wyzwanie:</strong> Polski sklep internetowy z branży części samochodowych borykał się z niską konwersją i stagnacją ruchu organicznego, mimo szerokiego asortymentu.</p>
                        <p className="text-sm text-gray-700 mb-2"><strong>Wdrożone rozwiązania:</strong> Zastosowano kompleksową strategię opartą na AI. Wdrożono systemy, które automatycznie rozbudowywały opisy produktów o dane techniczne i wskazówki montażowe, wykorzystując przetwarzanie języka naturalnego (NLP). Algorytmy rozpoznawania obrazu analizowały zdjęcia produktów, wzbogacając opisy i tagi alt. AI automatycznie dobierało słowa kluczowe i generowało unikalne meta tagi, jednocześnie weryfikując duplikację treści. Stworzono również inteligentny system kategoryzacji i rekomendacji produktów.</p>
                        <p className="text-sm text-gray-700"><strong>Rezultaty:</strong> Wdrożenie tych działań przyniosło spektakularne rezultaty biznesowe: <strong>wzrost ruchu organicznego o 62%</strong>, <strong>wzrost ogólnego współczynnika konwersji o 35%</strong> oraz <strong>redukcję współczynnika porzuconych koszyków o 41%</strong>. Ten przykład dobitnie pokazuje, że strategiczne wykorzystanie AI w e-commerce bezpośrednio przekłada się na wzrost przychodów.</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-blue-700 mb-3">Studium przypadku usługi niszowe: budowanie ruchu od zera</h5>
                        <p className="text-sm text-gray-700 mb-2"><strong>Wyzwanie:</strong> Polska agencja edukacyjna posiadała stronę internetową, która nie generowała praktycznie żadnego ruchu ani zapytań z powodu całkowitego braku optymalizacji.</p>
                        <p className="text-sm text-gray-700 mb-2"><strong>Wdrożone rozwiązania:</strong> Wdrożono ustrukturyzowane podejście SEO/GEO. Przeprowadzono audyt techniczny, naprawiono błędy indeksacji, wdrożono prawidłową strukturę językową i tagi hreflang. Opracowano strategię contentową opartą na analizie słów kluczowych i intencji użytkowników, tworząc treści odpowiadające na potrzeby studentów na różnych etapach procesu decyzyjnego.</p>
                        <p className="text-sm text-gray-700"><strong>Rezultaty:</strong> W ciągu zaledwie sześciu miesięcy (od lipca 2024 do stycznia 2025) <strong>ruch organiczny na stronie wzrósł dziewięciokrotnie</strong>, a klient osiągnął stabilną widoczność dla kluczowych zapytań. To studium przypadku dowodzi, że zasady GEO mają uniwersalne zastosowanie i przynoszą wymierne korzyści nie tylko w wielkoskalowym e-commerce, ale również w niszowych branżach usługowych.</p>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      Połączenie tych dwóch studiów przypadku – jednego skoncentrowanego na zaawansowanym e-commerce, a drugiego na usługach B2C – pokazuje uniwersalną moc i elastyczność strategii GEO. Dowodzi, że niezależnie od modelu biznesowego, adaptacja do ery wyszukiwania AI jest kluczem do wzrostu.
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </section>

        {/* Część V */}
        <section data-section="part5" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-red-100 text-red-800">Część V</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Droga naprzód: aktywacja strategii GEO
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ta ostatnia część stanowi „wezwanie do działania". Prowadzi czytelnika od wiedzy do konkretnych kroków, jakie może podjąć, i subtelnie pozycjonuje agencję jako idealnego partnera w tej transformacji.
              </p>
            </div>
          </div>

          {/* Rozdział 11 */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Rozdział 11: Anatomia partnera GEO światowej klasy</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection('chapter11')}
                  >
                    {expandedSections.has('chapter11') ? <ChevronDown /> : <ChevronRight />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {expandedSections.has('chapter11') && (
                <CardContent className="pt-0">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Nowa era wymaga nowego rodzaju partnera strategicznego. Wybór agencji do prowadzenia działań w zakresie Generative Engine Optimization to decyzja, która będzie miała długofalowe skutki dla pozycji rynkowej firmy. Zamiast pytać „jak agencje sprzedają GEO?", liderzy biznesowi powinni pytać „jakich kompetencji i zdolności powinniśmy wymagać od naszego partnera?". Na podstawie analizy ofert wiodących polskich agencji, które już wdrożyły usługi GEO, można zdefiniować zestaw kluczowych cech idealnego partnera.
                    </p>

                    <div className="bg-gradient-to-br from-indigo-50 to-blue-100 p-8 rounded-xl mb-8">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Cechy partnera GEO światowej klasy</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                                <Globe className="text-white" size={24} />
                              </div>
                              <h4 className="font-semibold">Szerszy zakres kompetencji</h4>
                            </div>
                            <p className="text-sm text-gray-600">Partner musi myśleć strategicznie poza tradycyjnym SEO. Powinien wykazywać się głębokim zrozumieniem niuansów działania różnych platform AI.</p>
                          </div>
                          
                          <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                <BarChart className="text-white" size={24} />
                              </div>
                              <h4 className="font-semibold">Zaawansowane narzędzia</h4>
                            </div>
                            <p className="text-sm text-gray-600">Wiodący partner powinien dysponować zaawansowanymi, często autorskimi rozwiązaniami analitycznymi do monitorowania widoczności w AI.</p>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                                <Target className="text-white" size={24} />
                              </div>
                              <h4 className="font-semibold">Nowe KPI</h4>
                            </div>
                            <p className="text-sm text-gray-600">Partner musi mierzyć AI Attribution Rate, Share of AI Voice oraz jakość ruchu pochodzącego z referencji AI.</p>
                          </div>
                          
                          <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                <Users className="text-white" size={24} />
                              </div>
                              <h4 className="font-semibold">Hybrydowy zespół</h4>
                            </div>
                            <p className="text-sm text-gray-600">Skuteczne GEO wymaga zespołu łączącego kompetencje z SEO, content strategy, data science i Digital PR.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-4">Kluczowe cechy idealnego partnera GEO:</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li><strong>Szerszy zakres kompetencji:</strong> Partner musi myśleć strategicznie poza tradycyjnym SEO. Powinien wykazywać się głębokim zrozumieniem niuansów działania różnych platform, takich jak ChatGPT, Perplexity czy Gemini, i potrafić opracować zdywersyfikowaną strategię obecności na każdej z nich.</li>
                        
                        <li><strong>Zaawansowane narzędzia i analityka:</strong> Wiodący partner nie może opierać się wyłącznie na standardowych narzędziach SEO. Powinien dysponować zaawansowanymi, często autorskimi rozwiązaniami analitycznymi, które pozwalają monitorować widoczność w odpowiedziach AI, identyfikować czynniki rankingowe specyficzne dla GEO i śledzić działania konkurencji w nowym ekosystemie.</li>
                        
                        <li><strong>Nowa definicja sukcesu (nowe KPI):</strong> Partner musi być w stanie mierzyć to, co teraz ma znaczenie. Zamiast skupiać się na przestarzałych metrykach, takich jak średnia pozycja, powinien raportować w oparciu o nowe wskaźniki efektywności, takie jak <strong>AI Attribution Rate</strong> (jaki procent odpowiedzi AI cytuje naszą markę), <strong>Share of AI Voice</strong> (nasz udział w odpowiedziach AI w porównaniu z konkurencją) oraz <strong>jakość ruchu</strong> pochodzącego z referencji AI. To pokazuje dojrzałość strategiczną i koncentrację na wynikach biznesowych.</li>
                        
                        <li><strong>Holistyczny, hybrydowy zespół:</strong> Skuteczne GEO wymaga interdyscyplinarnego podejścia. Idealny partner powinien dysponować zespołem, który łączy w sobie kompetencje z zakresu technicznego SEO, strategii contentowej, analizy danych (data science) oraz strategicznego Digital PR. Tylko taka synergia pozwala na budowanie autorytetu marki w sposób zrozumiały zarówno dla ludzi, jak i dla maszyn.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Rozdział 12 */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Rozdział 12: Twoje pierwsze 30 dni: plan działania na nową erę</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection('chapter12')}
                  >
                    {expandedSections.has('chapter12') ? <ChevronDown /> : <ChevronRight />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {expandedSections.has('chapter12') && (
                <CardContent className="pt-0">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Wiedza bez działania jest bezwartościowa. Czas na adaptację jest teraz. Poniższy plan to pięć strategicznych kroków, które każdy lider biznesowy może podjąć w ciągu najbliższego miesiąca, aby rozpocząć transformację swojej firmy i przygotować ją na wyzwania ery wyszukiwania AI. Plan ten został zaadaptowany z wewnętrznych wytycznych dla agencji i przekształcony w empoweringowy schemat działania dla klienta.
                    </p>

                    <ActionPlanVisual />

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-4">Szczegółowy plan działania na pierwsze 30 dni:</h4>
                      <ol className="space-y-4 text-gray-700">
                        <li><strong>1. Zwołaj strategiczną odprawę:</strong> Zbierz kluczowych liderów z działów marketingu, sprzedaży i rozwoju produktu. Przedstaw im kluczowe wnioski z tego raportu, koncentrując się na bezpośrednim wpływie zmian na Wasz model biznesowy i pozycję konkurencyjną. Celem jest zbudowanie wspólnego zrozumienia skali wyzwania.</li>
                        
                        <li><strong>2. Przeprowadź bazowy „audyt widoczności w AI":</strong> Wykonaj proste, ale otwierające oczy ćwiczenie. Ręcznie sprawdź widoczność swojej marki dla 10 najważniejszych zapytań komercyjnych w Google AI Overviews oraz na platformie Perplexity. Zapisz wyniki. Czy Twoja marka jest widoczna? Kto jest cytowany, jeśli nie Ty?</li>
                        
                        <li><strong>3. Zidentyfikuj swój „klejnot koronny":</strong> Wskaż jeden, najbardziej kompleksowy i ekspercki zasób treści, jaki posiada Twoja firma (np. flagowy poradnik, szczegółowe badanie, kluczowy artykuł filarowy). Wyznacz go jako projekt pilotażowy do pełnej optymalizacji pod kątem GEO. To pozwoli przetestować procesy na mniejszą skalę.</li>
                        
                        <li><strong>4. Zrewiduj swoje metryki:</strong> Dokonaj krytycznego przeglądu obecnych raportów marketingowych. Czy metryki, na które patrzysz, nadal adekwatnie odzwierciedlają sukces w erze, gdzie 60% wyszukiwań może nie generować kliknięć? Zacznij dyskusję na temat wprowadzenia nowych KPI, takich jak jakość leadów z AI czy udział w odpowiedziach.</li>
                        
                        <li><strong>5. Zasięgnij eksperckiej diagnozy:</strong> Najważniejszym i najbardziej efektywnym pierwszym krokiem jest zaangażowanie specjalistycznego partnera w celu przeprowadzenia kompleksowego audytu GEO i opracowania strategicznej mapy drogowej. Samodzielna diagnoza może wskazać objawy, ale tylko dogłębna, zewnętrzna analiza odkryje przyczyny i wyznaczy najskuteczniejszą ścieżkę do osiągnięcia pozycji lidera w nowej erze wyszukiwania.</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </section>

        {/* Dodatki */}
        <section data-section="appendix" className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gray-100 text-gray-800">Dodatki</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Materiały uzupełniające</h2>
            </div>
          </div>

          {/* Dodatek A */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Dodatek A: Katalog elementów wizualnych Google AI Overviews</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection('appendixA')}
                  >
                    {expandedSections.has('appendixA') ? <ChevronDown /> : <ChevronRight />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {expandedSections.has('appendixA') && (
                <CardContent className="pt-0">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Zrozumienie poszczególnych komponentów wizualnych, które pojawiają się w nowych formatach wyszukiwania, jest kluczowe do precyzyjnej optymalizacji. Poniżej znajduje się katalog najczęściej występujących elementów.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Podsumowania tekstowe",
                          desc: "Bloki tekstu lub listy punktowane/numerowane odpowiadające na zapytanie. Optymalizacja: schema:FAQPage."
                        },
                        {
                          title: "Tabele porównawcze", 
                          desc: "Strukturyzowane tabele z cechami, specyfikacjami lub cenami. Wymagają semantycznego <table>."
                        },
                        {
                          title: "Siatki produktowe",
                          desc: "Wizualne formaty z obrazami, cenami i ocenami. Kluczowa integracja z Google Merchant Center."
                        },
                        {
                          title: "Lokalne podsumowania",
                          desc: "Listy lokalnych firm. Wymagają zadbanego Profilu Firmy w Google i szczegółowych recenzji."
                        },
                        {
                          title: "Formaty instruktażowe",
                          desc: "Strukturyzowane plany z podziałem na etapy. Wymagają schema:HowTo."
                        },
                        {
                          title: "Osadzone filmy",
                          desc: "Klipy video (często z YouTube). Wymagają schema:VideoObject."
                        }
                      ].map((item, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Dodatek B */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Dodatek B: Słownik kluczowych terminów wyszukiwania AI</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection('appendixB')}
                  >
                    {expandedSections.has('appendixB') ? <ChevronDown /> : <ChevronRight />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {expandedSections.has('appendixB') && (
                <CardContent className="pt-0">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
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
                          definition: "Ogólny termin opisujący wszelkie działania mające na celu optymalizację treści, danych i zasobów cyfrowych tak, aby były one zrozumiałe, dostępne i preferowane przez algorytmy sztucznej inteligencji."
                        },
                        {
                          term: "Encja (Entity)",
                          definition: "W kontekście SEO, to konkretny, unikalny obiekt lub koncepcja (np. osoba, firma, produkt), którą wyszukiwarki potrafią zidentyfikować i zrozumieć relacje między nimi."
                        },
                        {
                          term: "GEO (Generative Engine Optimization)",
                          definition: "Szersze pojęcie niż AEO, obejmujące optymalizację pod kątem wszystkich platform generatywnej AI, w tym chatbotów (ChatGPT, Claude) i silników odpowiedzi."
                        },
                        {
                          term: "LLM (Large Language Model)",
                          definition: "Duży model językowy (np. Gemini, GPT-4), czyli zaawansowana sieć neuronowa wytrenowana na ogromnych ilościach danych, zdolna do rozumienia i generowania języka naturalnego."
                        },
                        {
                          term: "RAG (Retrieval-Augmented Generation)",
                          definition: "Proces technologiczny, w którym model językowy przed wygenerowaniem odpowiedzi aktywnie pobiera aktualne informacje z zewnętrznej bazy wiedzy."
                        },
                        {
                          term: "Schema Markup (Dane Strukturalne)",
                          definition: "Ustandaryzowany format do oznaczania informacji na stronie internetowej, który pomaga wyszukiwarkom zrozumieć kontekst i znaczenie treści."
                        }
                      ].map((item, index) => (
                        <div key={index} className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 mb-2">{item.term}</h4>
                          <p className="text-sm text-gray-700">{item.definition}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>

          {/* Dodatek C */}
          <div className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Dodatek C: Wybrane źródła i lektury uzupełniające</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSection('appendixC')}
                  >
                    {expandedSections.has('appendixC') ? <ChevronDown /> : <ChevronRight />}
                  </Button>
                </CardTitle>
              </CardHeader>
              {expandedSections.has('appendixC') && (
                <CardContent className="pt-0">
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Dla liderów pragnących pogłębić swoją wiedzę, poniższa lista stanowi punkt wyjścia do dalszych badań nad transformacją cyfrową w erze AI.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Raporty rynkowe:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Raporty dotyczące rynku reklamy i internetu w Polsce</li>
                          <li>• Raporty dotyczące polskiego e-commerce</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Oficjalna dokumentacja Google:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Google Search Central: AI Features and Your Website</li>
                          <li>• Google Search Central: AI Overviews and Your Website</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Kluczowe analizy i studia przypadków:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Analiza wpływu AI Overviews na ruch</li>
                          <li>• Studia przypadku wdrożeń GEO</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Rozpocznij swoją transformację już dziś</h2>
          <p className="text-xl mb-6 opacity-90">
            Nie czekaj, aż konkurencja przejmie inicjatywę w erze AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Skontaktuj się z ekspertem
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Pobierz kompletny przewodnik
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
