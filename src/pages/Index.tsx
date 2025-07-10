import React, { useState, useEffect } from 'react';
import { ChevronRight, CheckCircle, XCircle, AlertTriangle, TrendingUp, Users, Zap, Shield, Target, Award, Eye, ChevronDown, ChevronUp, BarChart3, PieChart, LineChart, Cpu, Globe, Rocket, Star, AlertCircle, Info, Check, X, Lightbulb, Brain, Clock, DollarSign, Briefcase } from 'lucide-react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  LineChart as RechartsLineChart,
  Line,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

interface SectionData {
  id: string;
  title: string;
  level: number;
}

interface TOCProps {
  sections: SectionData[];
  activeSection: string;
}

const TableOfContents: React.FC<TOCProps> = ({ sections, activeSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-4 max-w-xs z-40 max-h-96 overflow-y-auto">
      <h3 className="font-semibold text-sm text-gray-800 mb-3">Spis treści</h3>
      <nav className="space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`block w-full text-left text-xs py-1 px-2 rounded transition-colors ${
              activeSection === section.id
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-600 hover:bg-gray-100'
            } ${section.level === 2 ? 'ml-3' : ''}`}
          >
            {section.title}
          </button>
        ))}
      </nav>
    </div>
  );
};

const ExpandableSection: React.FC<{
  id: string;
  title: string;
  children: React.ReactNode;
  level?: number;
}> = ({ id, title, children, level = 1 }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const headingClasses = level === 1 
    ? "text-3xl font-bold text-gray-900 mb-6"
    : "text-2xl font-semibold text-gray-800 mb-4";

  return (
    <section id={id} className="mb-12 scroll-mt-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left group hover:bg-gray-50 p-4 rounded-lg transition-colors"
      >
        <HeadingTag className={headingClasses}>
          {title}
        </HeadingTag>
        {isExpanded ? (
          <ChevronUp className="h-6 w-6 text-gray-500 group-hover:text-gray-700" />
        ) : (
          <ChevronDown className="h-6 w-6 text-gray-500 group-hover:text-gray-700" />
        )}
      </button>
      
      {isExpanded && (
        <div className="px-4 space-y-6">
          {children}
        </div>
      )}
    </section>
  );
};

// Enhanced Modern Table Component
const ModernTable: React.FC<{
  data: Array<Record<string, any>>;
  columns: Array<{ key: string; label: string; width?: string }>;
  title?: string;
}> = ({ data, columns, title }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
      {title && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider ${column.width || ''}`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200"
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-6 py-4 text-sm text-gray-800"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Enhanced Interactive Chart Component
const InteractiveChart: React.FC<{
  type: 'bar' | 'pie' | 'line' | 'radial';
  data: any[];
  title: string;
  description?: string;
  config?: any;
}> = ({ type, data, title, description, config = {} }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm">{description}</p>
        )}
      </div>
      <div className="h-80">
        <ChartContainer config={config}>
          <ResponsiveContainer width="100%" height="100%">
            {type === 'bar' && (
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12, fill: '#666' }}
                  axisLine={{ stroke: '#e5e5e5' }}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#666' }}
                  axisLine={{ stroke: '#e5e5e5' }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar 
                  dataKey="value" 
                  fill="url(#barGradient)"
                  radius={[4, 4, 0, 0]}
                />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>
              </BarChart>
            )}
            {type === 'pie' && (
              <RechartsPieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </RechartsPieChart>
            )}
            {type === 'line' && (
              <RechartsLineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12, fill: '#666' }}
                  axisLine={{ stroke: '#e5e5e5' }}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: '#666' }}
                  axisLine={{ stroke: '#e5e5e5' }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                />
              </RechartsLineChart>
            )}
            {type === 'radial' && (
              <RadialBarChart innerRadius="10%" outerRadius="80%" data={data}>
                <RadialBar
                  dataKey="value"
                  cornerRadius={10}
                  fill="url(#radialGradient)"
                />
                <defs>
                  <linearGradient id="radialGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <ChartTooltip content={<ChartTooltipContent />} />
              </RadialBarChart>
            )}
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

// Enhanced Checklist Component
const TechnicalReadinessChecklist: React.FC = () => {
  const checklistItems = [
    { icon: <Cpu className="h-5 w-5" />, text: "Infrastruktura techniczna gotowa do wdrożenia AI", category: "Technologia" },
    { icon: <Shield className="h-5 w-5" />, text: "Systemy bezpieczeństwa i compliance", category: "Bezpieczeństwo" },
    { icon: <Users className="h-5 w-5" />, text: "Zespół przygotowany na transformację", category: "Ludzie" },
    { icon: <Target className="h-5 w-5" />, text: "Jasno zdefiniowane cele biznesowe", category: "Strategia" },
    { icon: <BarChart3 className="h-5 w-5" />, text: "Metryki i KPI do pomiaru sukcesu", category: "Pomiar" },
    { icon: <Globe className="h-5 w-5" />, text: "Integracja z istniejącymi systemami", category: "Integracja" },
    { icon: <Rocket className="h-5 w-5" />, text: "Plan wdrożenia i harmonogram", category: "Wdrożenie" },
    { icon: <DollarSign className="h-5 w-5" />, text: "Budżet i zasoby finansowe", category: "Finanse" }
  ];

  const categories = [...new Set(checklistItems.map(item => item.category))];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Checklista gotowości technicznej
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div key={category} className="bg-white rounded-lg p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">{category}</h4>
            <div className="space-y-3">
              {checklistItems
                .filter(item => item.category === category)
                .map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Myths Debunking Table
const MythsDebunkingTable: React.FC = () => {
  const myths = [
    {
      myth: "AI zastąpi wszystkich pracowników",
      reality: "AI wspiera i wzmacnia ludzkie możliwości",
      icon: <Users className="h-5 w-5 text-blue-500" />
    },
    {
      myth: "Wdrożenie AI jest zbyt kosztowne",
      reality: "ROI może być osiągnięty w ciągu 6-12 miesięcy",
      icon: <DollarSign className="h-5 w-5 text-green-500" />
    },
    {
      myth: "AI to tylko dla dużych korporacji",
      reality: "Dostępne rozwiązania dla firm każdej wielkości",
      icon: <Briefcase className="h-5 w-5 text-purple-500" />
    },
    {
      myth: "AI jest zbyt skomplikowane",
      reality: "Nowoczesne narzędzia są intuicyjne i łatwe w użyciu",
      icon: <Lightbulb className="h-5 w-5 text-yellow-500" />
    },
    {
      myth: "Wdrożenie zajmuje lata",
      reality: "Pierwsze rezultaty widoczne w ciągu tygodni",
      icon: <Clock className="h-5 w-5 text-red-500" />
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
      <div className="bg-gradient-to-r from-red-50 to-orange-50 px-6 py-4 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center">
          <AlertTriangle className="h-6 w-6 text-orange-500 mr-2" />
          Obalanie mitów o AI
        </h3>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {myths.map((item, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 border-l-4 border-blue-500">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 text-sm mb-1">MIT</h4>
                    <p className="text-gray-700 text-sm">{item.myth}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 text-sm mb-1">RZECZYWISTOŚĆ</h4>
                    <p className="text-gray-700 text-sm flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.reality}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Index() {
  const [activeSection, setActiveSection] = useState('');

  const sections: SectionData[] = [
    { id: 'intro', title: 'Wprowadzenie', level: 1 },
    { id: 'chapter1', title: 'Rozdział 1: Przyszłość już tu jest', level: 1 },
    { id: 'chapter2', title: 'Rozdział 2: Nowa era komunikacji', level: 1 },
    { id: 'chapter3', title: 'Rozdział 3: Technologia jako przewaga konkurencyjna', level: 1 },
    { id: 'chapter4', title: 'Rozdział 4: Wewnątrz „silnika odpowiedzi"', level: 1 },
    { id: 'chapter5', title: 'Rozdział 5: Rewolucja w obsłudze klienta', level: 1 },
    { id: 'chapter6', title: 'Rozdział 6: Personalizacja na niespotykaną skalę', level: 1 },
    { id: 'chapter7', title: 'Rozdział 7: Automatyzacja procesów biznesowych', level: 1 },
    { id: 'chapter8', title: 'Rozdział 8: Gotowość techniczna', level: 1 },
    { id: 'chapter9', title: 'Rozdział 9: Obalanie mitów', level: 1 },
    { id: 'chapter10', title: 'Rozdział 10: Studia przypadków', level: 1 },
    { id: 'chapter11', title: 'Rozdział 11: Strategia wdrożenia', level: 1 },
    { id: 'conclusion', title: 'Podsumowanie', level: 1 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen">
      <TableOfContents sections={sections} activeSection={activeSection} />
      
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* Header */}
        <header className="text-center space-y-6 bg-white rounded-2xl shadow-xl p-12 border border-gray-200">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
            <Brain className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Przewodnik po AI dla biznesu
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kompleksowy przewodnik po transformacji cyfrowej z wykorzystaniem sztucznej inteligencji
          </p>
        </header>

        {/* Introduction */}
        <ExpandableSection id="intro" title="Wprowadzenie">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Żyjemy w epoce, w której sztuczna inteligencja przestaje być futurystyczną wizją, a staje się codzienną rzeczywistością biznesową. Firmy, które potrafią skutecznie wykorzystać potencjał AI, zyskują przewagę konkurencyjną na niespotykaną wcześniej skalę.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ten przewodnik został stworzony, aby pomóc liderom biznesu w zrozumieniu i praktycznym wdrożeniu technologii AI w ich organizacjach.
            </p>
          </div>
        </ExpandableSection>

        {/* Chapter 1 */}
        <ExpandableSection id="chapter1" title="Rozdział 1: Przyszłość już tu jest - Rewolucja AI w biznesie">
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              Sztuczna inteligencja nie jest już domeną laboratoriów badawczych czy gigantów technologicznych. Stała się dostępnym narzędziem, które małe i średnie przedsiębiorstwa mogą wykorzystać do osiągnięcia wcześniej niemożliwych rezultatów.
            </p>

            <InteractiveChart
              type="bar"
              data={[
                { name: 'Obsługa klienta', value: 45 },
                { name: 'Automatyzacja', value: 38 },
                { name: 'Analityka', value: 32 },
                { name: 'Personalizacja', value: 28 },
                { name: 'Optymalizacja', value: 25 }
              ]}
              title="Najczęstsze zastosowania AI w biznesie"
              description="Procentowy udział firm wykorzystujących AI w różnych obszarach"
            />

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
                Kluczowe statystyki rynku AI
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">73%</div>
                  <p className="text-gray-700 text-sm">firm planuje wdrożenie AI w 2024</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                  <p className="text-gray-700 text-sm">wzrost produktywności po wdrożeniu</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">6-12</div>
                  <p className="text-gray-700 text-sm">miesięcy do pierwszego ROI</p>
                </div>
              </div>
            </div>
          </div>
        </ExpandableSection>

        {/* Chapter 2 */}
        <ExpandableSection id="chapter2" title="Rozdział 2: Nowa era komunikacji - Chatboty i asystenci AI">
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              Komunikacja z klientami przechodzi fundamentalną transformację. Chatboty AI stają się pierwszą linią kontaktu, oferując natychmiastowe, spersonalizowane odpowiedzi 24/7.
            </p>

            <InteractiveChart
              type="line"
              data={[
                { name: '2020', value: 15 },
                { name: '2021', value: 28 },
                { name: '2022', value: 45 },
                { name: '2023', value: 67 },
                { name: '2024', value: 85 }
              ]}
              title="Wzrost adopcji chatbotów AI"
              description="Procent firm wykorzystujących chatboty w obsłudze klienta"
            />

            <ModernTable
              title="Porównanie tradycyjnej obsługi z AI"
              columns={[
                { key: 'aspect', label: 'Aspekt', width: 'w-1/3' },
                { key: 'traditional', label: 'Tradycyjna obsługa', width: 'w-1/3' },
                { key: 'ai', label: 'Obsługa AI', width: 'w-1/3' }
              ]}
              data={[
                {
                  aspect: 'Dostępność',
                  traditional: '8-16 godzin dziennie',
                  ai: '24/7 bez przerw'
                },
                {
                  aspect: 'Czas odpowiedzi',
                  traditional: '5-15 minut',
                  ai: 'Natychmiastowa'
                },
                {
                  aspect: 'Koszt obsługi',
                  traditional: '15-25 zł/interakcja',
                  ai: '0.50-2 zł/interakcja'
                },
                {
                  aspect: 'Skalowalność',
                  traditional: 'Ograniczona zasobami',
                  ai: 'Nieograniczona'
                },
                {
                  aspect: 'Personalizacja',
                  traditional: 'Podstawowa',
                  ai: 'Zaawansowana'
                }
              ]}
            />
          </div>
        </ExpandableSection>

        {/* Chapter 3 */}
        <ExpandableSection id="chapter3" title="Rozdział 3: Technologia jako przewaga konkurencyjna">
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              W dzisiejszym świecie technologia nie jest tylko wsparciem - to podstawowy element przewagi konkurencyjnej. Firmy, które potrafią skutecznie wykorzystać AI, wyprzedzają konkurencję o lata.
            </p>

            <InteractiveChart
              type="pie"
              data={[
                { name: 'Automatyzacja procesów', value: 35 },
                { name: 'Analiza danych', value: 25 },
                { name: 'Obsługa klienta', value: 20 },
                { name: 'Personalizacja', value: 15 },
                { name: 'Inne', value: 5 }
              ]}
              title="Rozkład inwestycji w AI"
              description="Na co firmy wydają najwięcej środków w kontekście AI"
            />

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                  Korzyści wdrożenia AI
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Wzrost produktywności o 40-60%
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Redukcja kosztów operacyjnych o 30%
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Poprawa satysfakcji klientów
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Lepsze podejmowanie decyzji
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                  Ryzyko braku wdrożenia
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <XCircle className="h-5 w-5 text-red-500 mr-3" />
                    Utrata przewagi konkurencyjnej
                  </li>
                  <li className="flex items-center text-gray-700">
                    <XCircle className="h-5 w-5 text-red-500 mr-3" />
                    Wyższe koszty operacyjne
                  </li>
                  <li className="flex items-center text-gray-700">
                    <XCircle className="h-5 w-5 text-red-500 mr-3" />
                    Słabsza pozycja na rynku
                  </li>
                  <li className="flex items-center text-gray-700">
                    <XCircle className="h-5 w-5 text-red-500 mr-3" />
                    Trudności w skalowaniu
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ExpandableSection>

        {/* Chapter 4 */}
        <ExpandableSection id="chapter4" title="Rozdział 4: Wewnątrz „silnika odpowiedzi" - jak myśli sztuczna inteligencja">
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              Aby wygrać w nowej erze, należy zrozumieć jej fundamentalne zasady. Oznacza to zrozumienie mechanizmów, za pomocą których modele AI przetwarzają informacje, aby formułować inteligentne i trafne odpowiedzi.
            </p>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                Architektura systemu AI
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Percepcja</h4>
                  <p className="text-gray-600 text-sm">System analizuje i interpretuje dane wejściowe</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Przetwarzanie</h4>
                  <p className="text-gray-600 text-sm">Algorytmy analizują wzorce i kontekst</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Generowanie</h4>
                  <p className="text-gray-600 text-sm">Tworzenie odpowiedzi i rekomendacji</p>
                </div>
              </div>
            </div>
          </div>
        </ExpandableSection>

        {/* Chapter 5 */}
        <ExpandableSection id="chapter5" title="Rozdział 5: Rewolucja w obsłudze klienta">
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              Obsługa klienta to obszar, w którym AI osiąga najbardziej spektakularne rezultaty. Inteligentne systemy potrafią nie tylko odpowiadać na pytania, ale także antycypować potrzeby klientów i proaktywnie oferować rozwiązania.
            </p>

            <InteractiveChart
              type="radial"
              data={[
                { name: 'Satysfakcja klientów', value: 85 },
                { name: 'Czas odpowiedzi', value: 95 },
                { name: 'Efektywność kosztowa', value: 78 },
                { name: 'Dostępność 24/7', value: 100 }
              ]}
              title="Wskaźniki efektywności AI w obsłudze klienta"
              description="Porównanie z tradycyjnymi metodami (100% = ideał)"
            />

            <ModernTable
              title="Ewolucja obsługi klienta"
              columns={[
                { key: 'era', label: 'Era', width: 'w-1/4' },
                { key: 'method', label: 'Metoda', width: 'w-1/4' },
                { key: 'response_time', label: 'Czas odpowiedzi', width: 'w-1/4' },
                { key: 'personalization', label: 'Personalizacja', width: 'w-1/4' }
              ]}
              data={[
                {
                  era: 'Lata 90.',
                  method: 'Telefon/Fax',
                  response_time: '24-48 godzin',
                  personalization: 'Brak'
                },
                {
                  era: 'Lata 2000',
                  method: 'Email',
                  response_time: '4-8 godzin',
                  personalization: 'Podstawowa'
                },
                {
                  era: 'Lata 2010',
                  method: 'Live Chat',
                  response_time: '5-15 minut',
                  personalization: 'Średnia'
                },
                {
                  era: 'Dziś',
                  method: 'AI Chatbot',
                  response_time: 'Natychmiastowa',
                  personalization: 'Zaawansowana'
                }
              ]}
            />
          </div>
        </ExpandableSection>

        {/* Chapter 6 */}
        <ExpandableSection id="chapter6" title="Rozdział 6: Personalizacja na niespotykaną skalę">
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              AI umożliwia personalizację na masową skalę - każdy klient może otrzymać indywidualnie dostosowane doświadczenie, rekomendacje i komunikację, bez zwiększania kosztów operacyjnych.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Poziomy personalizacji</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">Podstawowa (imię, lokalizacja)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">Behawioralna (historia zakupów)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">Predykcyjna (przewidywanie potrzeb)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">Adaptacyjna (uczenie w czasie rzeczywistym)</span>
                  </div>
                </div>
              </div>
              <InteractiveChart
                type="bar"
                data={[
                  { name: 'Email marketing', value: 42 },
                  { name: 'Rekomendacje produktów', value: 67 },
                  { name: 'Ceny dynamiczne', value: 35 },
                  { name: 'Treści na stronie', value: 58 },
                  { name: 'Obsługa klienta', value: 73 }
                ]}
                title="Wpływ personalizacji na konwersje"
                description="Wzrost konwersji (%) po wdrożeniu personalizacji AI"
              />
            </div>
          </div>
        </ExpandableSection>

        {/* Chapter 7 */}
        <ExpandableSection id="chapter7" title="Rozdział 7: Automatyzacja procesów biznesowych">
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              Automatyzacja procesów biznesowych z wykorzystaniem AI pozwala na eliminację powtarzalnych zadań i skoncentrowanie się na działaniach o wyższej wartości dodanej.
            </p>

            <InteractiveChart
              type="line"
              data={[
                { name: 'Przed AI', value: 100 },
                { name: 'Miesiąc 1', value: 85 },
                { name: 'Miesiąc 3', value: 65 },
                { name: 'Miesiąc 6', value: 45 },
                { name: 'Miesiąc 12', value: 30 }
              ]}
              title="Redukcja czasu pracy manualnej"
              description="Percentage of manual work over time after AI implementation"
            />

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Procesy idealne do automatyzacji
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Przetwarzanie faktur</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Zarządzanie zapasami</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Rekrutacja i HR</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Analizy finansowe</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Obsługa zamówień</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Monitoring jakości</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Planowanie dostaw</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Raporty sprzedażowe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ExpandableSection>

        {/* Chapter 8 */}
        <ExpandableSection id="chapter8" title="Rozdział 8: Gotowość techniczna - lista kontrolna">
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              Sukces wdrożenia AI zależy od odpowiedniego przygotowania organizacji pod kątem technicznym, procesowym i kulturowym.
            </p>

            <TechnicalReadinessChecklist />

            <ModernTable
              title="Etapy przygotowania do wdrożenia AI"
              columns={[
                { key: 'phase', label: 'Etap', width: 'w-1/4' },
                { key: 'duration', label: 'Czas trwania', width: 'w-1/4' },
                { key: 'activities', label: 'Kluczowe działania', width: 'w-1/2' }
              ]}
              data={[
                {
                  phase: 'Analiza',
                  duration: '2-4 tygodnie',
                  activities: 'Audit procesów, identyfikacja obszarów do automatyzacji'
                },
                {
                  phase: 'Planowanie',
                  duration: '3-6 tygodni',
                  activities: 'Wybór technologii, budżetowanie, harmonogram'
                },
                {
                  phase: 'Przygotowanie',
                  duration: '4-8 tygodni',
                  activities: 'Przygotowanie infrastruktury, szkolenia zespołu'
                },
                {
                  phase: 'Wdrożenie',
                  duration: '6-12 tygodni',
                  activities: 'Implementacja, testy, optymalizacja'
                },
                {
                  phase: 'Optymalizacja',
                  duration: 'Ciągła',
                  activities: 'Monitoring, dostosowania, rozwój'
                }
              ]}
            />
          </div>
        </ExpandableSection>

        {/* Chapter 9 */}
        <ExpandableSection id="chapter9" title="Rozdział 9: Obalanie mitów o sztucznej inteligencji">
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              Wokół AI narosło wiele mitów i błędnych przekonań, które hamują adopcję tej technologii. Czas je rozwikłać i przedstawić rzeczywisty obraz możliwości i ograniczeń AI.
            </p>

            <MythsDebunkingTable />

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Info className="h-6 w-6 text-blue-600 mr-2" />
                Fakty o AI w biznesie
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">✅ Co AI może zrobić</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Automatyzować powtarzalne zadania</li>
                    <li>• Analizować duże zbiory danych</li>
                    <li>• Personalizować doświadczenia</li>
                    <li>• Wspierać podejmowanie decyzji</li>
                    <li>• Optymalizować procesy</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">❌ Czego AI nie może</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Zastąpić ludzkiej kreatywności</li>
                    <li>• Podejmować decyzji etycznych</li>
                    <li>• Pracować bez nadzoru</li>
                    <li>• Rozumieć emocji jak człowiek</li>
                    <li>• Być w 100% bezbłędna</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ExpandableSection>

        {/* Chapter 10 */}
        <ExpandableSection id="chapter10" title="Rozdział 10: Studia przypadków - sukces AI w praktyce">
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              Prawdziwa wartość AI najlepiej widoczna jest w konkretnych przykładach wdrożeń, które przyniosły wymierne korzyści biznesowe.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Award className="h-5 w-5 text-yellow-500 mr-2" />
                  Sklep e-commerce
                </h4>
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm">
                    <strong>Wyzwanie:</strong> Niska konwersja i wysokie koszty obsługi klienta
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Rozwiązanie:</strong> Chatbot AI + rekomendacje produktów
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Rezultaty:</strong>
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600 ml-4">
                    <li>• 35% wzrost konwersji</li>
                    <li>• 60% redukcja kosztów obsługi</li>
                    <li>• 24/7 dostępność wsparcia</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Star className="h-5 w-5 text-blue-500 mr-2" />
                  Firma produkcyjna
                </h4>
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm">
                    <strong>Wyzwanie:</strong> Nieefektywne planowanie produkcji
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Rozwiązanie:</strong> AI do prognozowania popytu
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Rezultaty:</strong>
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600 ml-4">
                    <li>• 25% redukcja zapasów</li>
                    <li>• 40% poprawa terminowości</li>
                    <li>• 15% wzrost rentowności</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Kluczowe czynniki sukcesu w wdrożeniach AI
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h5 className="font-semibold text-gray-700 mb-2">Jasne cele</h5>
                  <p className="text-gray-600 text-xs">Precyzyjne zdefiniowanie oczekiwanych rezultatów</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h5 className="font-semibold text-gray-700 mb-2">Zespół</h5>
                  <p className="text-gray-600 text-xs">Zaangażowanie i przeszkolenie pracowników</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <h5 className="font-semibold text-gray-700 mb-2">Podejście</h5>
                  <p className="text-gray-600 text-xs">Stopniowe wdrażanie i iteracyjne ulepszenia</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Studium przypadku: Firma kurierska - optymalizacja tras
              </h4>
              <p className="text-gray-700 mb-4">
                Średnia firma kurierska obsługująca 500 przesyłek dziennie wdrożyła system AI do optymalizacji tras i planowania dostaw.
              </p>
              
              <ModernTable
                columns={[
                  { key: 'metric', label: 'Wskaźnik', width: 'w-1/3' },
                  { key: 'before', label: 'Przed AI', width: 'w-1/3' },
                  { key: 'after', label: 'Po AI', width: 'w-1/3' }
                ]}
                data={[
                  {
                    metric: 'Średni czas dostawy',
                    before: '4.5 godziny',
                    after: '2.8 godziny'
                  },
                  {
                    metric: 'Zużycie paliwa',
                    before: '120 l/dzień',
                    after: '85 l/dzień'
                  },
                  {
                    metric: 'Satysfakcja klientów',
                    before: '74%',
                    after: '91%'
                  },
                  {
                    metric: 'Koszt operacyjny',
                    before: '2,400 zł/dzień',
                    after: '1,680 zł/dzień'
                  }
                ]}
              />

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-800 font-semibold text-sm">
                  ROI: 340% w ciągu pierwszego roku
                </p>
                <p className="text-green-700 text-sm mt-1">
                  Oszczędności roczne: 262,800 zł przy koszcie wdrożenia 77,000 zł
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Studium przypadku: E-commerce - personalizacja doświadczeń
              </h4>
              <p className="text-gray-700 mb-4">
                Sklep internetowy z branży modowej z rocznym obrotem 5 mln zł wdrożył system rekomendacji AI i personalizacji treści.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">Wdrożone rozwiązania:</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• System rekomendacji produktów</li>
                    <li>• Personalizacja stron produktowych</li>
                    <li>• Dynamiczne ceny i promocje</li>
                    <li>• Chatbot do obsługi klienta</li>
                    <li>• Email marketing z AI</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 mb-3">Rezultaty po 6 miesiącach:</h5>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <span className="text-green-600 font-semibold">+42%</span> konwersja</li>
                    <li>• <span className="text-green-600 font-semibold">+28%</span> średnia wartość koszyka</li>
                    <li>• <span className="text-green-600 font-semibold">+65%</span> powracający klienci</li>
                    <li>• <span className="text-green-600 font-semibold">-35%</span> koszty obsługi</li>
                    <li>• <span className="text-green-600 font-semibold">+15%</span> NPS (Net Promoter Score)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 font-semibold text-sm">
                  Wzrost przychodów: 1,850,000 zł rocznie
                </p>
                <p className="text-blue-700 text-sm mt-1">
                  Koszt wdrożenia: 180,000 zł | ROI: 927% w pierwszym roku
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Studium przypadku: Firma montażowa - kontrola jakości
              </h4>
              <p className="text-gray-700 mb-4">
                Średnia firma montażowa produkująca komponenty elektroniczne wdrożyła system wizyjnej kontroli jakości oparty na AI.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <h5 className="font-semibold text-red-700 mb-2">Problem</h5>
                  <p className="text-red-600 text-sm">8% wadliwych produktów wykrywanych przez klientów</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <h5 className="font-semibold text-yellow-700 mb-2">Rozwiązanie</h5>
                  <p className="text-yellow-600 text-sm">AI vision system + automated quality control</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-700 mb-2">Rezultat</h5>
                  <p className="text-green-600 text-sm">0.3% wadliwych produktów + 60% szybsza kontrola</p>
                </div>
              </div>

              <InteractiveChart
                type="bar"
                data={[
                  { name: 'Wykrycie wad', value: 99.7 },
                  { name: 'Szybkość kontroli', value: 160 },
                  { name: 'Satysfakcja klientów', value: 145 },
                  { name: 'Redukcja kosztów', value: 35 }
                ]}
                title="Poprawa wskaźników jakości"
                description="Wartości względem stanu początkowego (100% = baseline)"
              />
            </div>
          </div>
        </ExpandableSection>

        {/* Chapter 11 */}
        <ExpandableSection id="chapter11" title="Rozdział 11: Strategia wdrożenia AI - plan działania">
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              Skuteczne wdrożenie AI wymaga przemyślanej strategii, która uwzględnia specyfikę organizacji, jej cele biznesowe i możliwości techniczne.
            </p>

            <InteractiveChart
              type="line"
              data={[
                { name: 'Planowanie', value: 0 },
                { name: 'Pilot', value: 25 },
                { name: 'Wdrożenie', value: 60 },
                { name: 'Optymalizacja', value: 85 },
                { name: 'Skalowanie', value: 100 }
              ]}
              title="Roadmap wdrożenia AI"
              description="Postęp implementacji w czasie (% realizacji strategii)"
            />

            <ModernTable
              title="Harmonogram wdrożenia AI - 12 miesięcy"
              columns={[
                { key: 'phase', label: 'Faza', width: 'w-1/4' },
                { key: 'duration', label: 'Czas', width: 'w-1/6' },
                { key: 'activities', label: 'Kluczowe działania', width: 'w-1/2' },
                { key: 'deliverables', label: 'Rezultaty', width: 'w-1/6' }
              ]}
              data={[
                {
                  phase: '1. Strategia i analiza',
                  duration: '4-6 tyg.',
                  activities: 'Analiza potrzeb, wybór przypadków użycia, ROI analysis',
                  deliverables: 'Strategia AI'
                },
                {
                  phase: '2. Przygotowanie',
                  duration: '6-8 tyg.',
                  activities: 'Wybór technologii, przygotowanie danych, szkolenia',
                  deliverables: 'Ready infrastructure'
                },
                {
                  phase: '3. Projekt pilotażowy',
                  duration: '8-12 tyg.',
                  activities: 'Implementacja MVP, testy, optymalizacja',
                  deliverables: 'Working prototype'
                },
                {
                  phase: '4. Wdrożenie produkcyjne',
                  duration: '6-10 tyg.',
                  activities: 'Full deployment, monitoring, user training',
                  deliverables: 'Production system'
                },
                {
                  phase: '5. Optymalizacja',
                  duration: 'Ciągła',
                  activities: 'Performance tuning, feature enhancement, scaling',
                  deliverables: 'Optimized AI'
                }
              ]}
            />

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                Framework wdrożenia AI
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Discover</h4>
                  <p className="text-gray-600 text-sm">Identyfikacja możliwości i celów biznesowych</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Design</h4>
                  <p className="text-gray-600 text-sm">Projektowanie rozwiązania i architektury</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Deploy</h4>
                  <p className="text-gray-600 text-sm">Wdrożenie i uruchomienie systemu</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Deliver</h4>
                  <p className="text-gray-600 text-sm">Optymalizacja i skalowanie rozwiązania</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Czynniki sukcesu
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">Jasno zdefiniowane cele biznesowe</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">Zaangażowanie kierownictwa</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">Wysokiej jakości dane</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">Odpowiednie kompetencje zespołu</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">Stopniowe podejście do wdrożenia</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  Pułapki do uniknięcia
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">Brak jasnych celów biznesowych</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">Niedocenianie jakości danych</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">Zbyt ambitne pierwsze projekty</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">Ignorowanie aspektów etycznych</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">Brak planu zarządzania zmianą</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ExpandableSection>

        {/* Conclusion */}
        <ExpandableSection id="conclusion" title="Podsumowanie: Przyszłość należy do tych, którzy działają dziś">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Sztuczna inteligencja nie jest już technologią przyszłości - to narzędzie dostępne tu i teraz. Firmy, które zrozumieją jej potencjał i wdrożą ją skutecznie, zyskają przewagę konkurencyjną na lata.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Kluczowe wnioski</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div>
                  <div className="text-4xl font-bold mb-2">85%</div>
                  <p className="text-blue-100">firm planuje wdrożenie AI</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">40%</div>
                  <p className="text-blue-100">wzrost produktywności</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">12</div>
                  <p className="text-blue-100">miesięcy do pełnego ROI</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-center">
              <strong>Czas działać to dziś.</strong> Każdy dzień zwłoki to stracona możliwość poprawy efektywności, redukcji kosztów i zwiększenia satysfakcji klientów.
            </p>
          </div>
        </ExpandableSection>
      </div>
    </div>
  );
}
