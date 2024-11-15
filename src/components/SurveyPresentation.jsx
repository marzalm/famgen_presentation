import React, { useState, useEffect, useRef } from 'react';
import { ArrowDownCircle, ArrowUpCircle, Menu, X } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const COLORS = {
  blue: '#4169E1',
  green: '#32CD32',
  pink: '#FF69B4'
};

const SurveyPresentation = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const slidesRef = useRef([]);

  const chartData = {
    couples: [
      { age: '25-34', femmes: 75, hommes: 58 },
      { age: '35-44', femmes: 81, hommes: 76 },
      { age: '45-54', femmes: 78, hommes: 83 },
      { age: '55-64', femmes: 71, hommes: 79 },
      { age: '65-80', femmes: 51, hommes: 76 }
    ],
    ageGap: [
      { name: 'Homme plus âgé', value: 54 },
      { name: 'Même âge', value: 31 },
      { name: 'Femme plus âgée', value: 15 }
    ],
    meeting: [
      {
        mode: 'Applications/sites',
        'Avant 2013': 5,
        '2013-2018': 15,
        '2019-2023': 26
      },
      {
        mode: 'Amis/connaissances',
        'Avant 2013': 25,
        '2013-2018': 25,
        '2019-2023': 26
      },
      {
        mode: 'École/travail',
        'Avant 2013': 23,
        '2013-2018': 21,
        '2019-2023': 19
      },
      {
        mode: 'Bars/discothèques',
        'Avant 2013': 17,
        '2013-2018': 13,
        '2019-2023': 9
      }
    ]
  };

  const sections = [
    {
      title: "Enquête sur les familles et les générations 2023",
      subtitle: "Résultats pour le canton de Genève",
      content: "Cette enquête quinquennale fournit des résultats sur l'état actuel et l'évolution des familles.",
      icon: "📊"
    },
    {
      title: "Les couples par âge et sexe",
      subtitle: "Proportion des personnes en couple",
      content: "À Genève, 68% des individus âgés de 18 à 80 ans sont en couple. Les femmes âgées de 35 à 44 ans sont celles qui sont le plus souvent en couple (81%).",
      chart: (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData.couples}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="age" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="femmes" stroke={COLORS.pink} strokeWidth={2} />
            <Line type="monotone" dataKey="hommes" stroke={COLORS.blue} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      ),
      icon: "📈"
    },
    {
      title: "Différence d'âge dans les couples",
      subtitle: "Répartition des écarts d'âge",
      content: "Dans 54% des couples hétérosexuels, l'homme est plus âgé que la femme, tandis que 31% des couples ont des partenaires d'âge similaire.",
      chart: (
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={chartData.ageGap}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name} (${value}%)`}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.ageGap.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={[COLORS.blue, COLORS.green, COLORS.pink][index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      ),
      icon: "🎯"
    },
    {
      title: "Mode de rencontre",
      subtitle: "Évolution des moyens de rencontre",
      content: "Les modes de rencontre des couples ont évolué au fil du temps. Les applications et sites de rencontre sont devenus aussi importants que les rencontres via les amis et connaissances.",
      chart: (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData.meeting}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mode" angle={-45} textAnchor="end" height={100} />
            <YAxis domain={[0, 30]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Avant 2013" fill={COLORS.green} />
            <Bar dataKey="2013-2018" fill={COLORS.blue} />
            <Bar dataKey="2019-2023" fill={COLORS.pink} />
          </BarChart>
        </ResponsiveContainer>
      ),
      icon: "📱"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      slidesRef.current.forEach((slide, index) => {
        if (slide) {
          const rect = slide.getBoundingClientRect();
          if (rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5) {
            setActiveSlide(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-8 right-8 z-50 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Side Navigation Menu */}
      <div className={`fixed right-0 top-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 z-40 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 pt-20">
          <h3 className="text-lg font-semibold mb-6">Navigation</h3>
          <div className="space-y-4">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => {
                  slidesRef.current[index].scrollIntoView({ behavior: 'smooth' });
                  setMenuOpen(false);
                }}
                className={`w-full text-left p-4 rounded-lg ${
                  activeSlide === index ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{section.icon}</span>
                  <div>
                    <div className="font-medium">{section.title}</div>
                    <div className="text-sm text-gray-500">{section.subtitle}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-2 z-30">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              slidesRef.current[index].scrollIntoView({ behavior: 'smooth' });
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSlide === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 space-y-4 z-30">
        <button
          onClick={() => {
            const prevIndex = Math.max(0, activeSlide - 1);
            slidesRef.current[prevIndex].scrollIntoView({ behavior: 'smooth' });
          }}
          className={`p-2 ${activeSlide === 0 ? 'text-gray-300' : 'text-gray-600 hover:text-blue-600'}`}
          disabled={activeSlide === 0}
        >
          <ArrowUpCircle size={32} />
        </button>
        <button
          onClick={() => {
            const nextIndex = Math.min(sections.length - 1, activeSlide + 1);
            slidesRef.current[nextIndex].scrollIntoView({ behavior: 'smooth' });
          }}
          className={`p-2 ${
            activeSlide === sections.length - 1 ? 'text-gray-300' : 'text-gray-600 hover:text-blue-600'
          }`}
          disabled={activeSlide === sections.length - 1}
        >
          <ArrowDownCircle size={32} />
        </button>
      </div>

      {/* Content Slides */}
      // Dans la section des slides, mettez à jour le style:
{sections.map((section, index) => (
  <div
    key={index}
    ref={el => slidesRef.current[index] = el}
    className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-white"
  >
    <div 
      className={`w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-12 transform transition-all duration-1000
      ${activeSlide === index 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-50 translate-y-8'
      }`}
    >
      <div className="flex flex-col items-center space-y-8">
        <div className="text-4xl md:text-6xl">{section.icon}</div>
        
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">{section.title}</h1>
          <h2 className="text-lg md:text-xl text-gray-600">{section.subtitle}</h2>
        </div>
        
        <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center max-w-2xl">
          {section.content}
        </p>

        {section.chart && (
          <div className="w-full mt-8 h-[400px]">
            {section.chart}
          </div>
        )}
      </div>
    </div>
  </div>
))}
    </div>
  );
};

export default SurveyPresentation;