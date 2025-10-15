import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [activeSection, setActiveSection] = useState<'history' | 'facts'>('history');

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-black/10 py-8 px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">
          Великий Новгород
        </h1>
        <p className="mt-2 text-muted-foreground font-light">
          Один из древнейших городов России
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <nav className="mb-16 animate-fade-in">
          <h2 className="text-sm font-heading font-semibold uppercase tracking-wider mb-6 text-muted-foreground">
            Навигация
          </h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-black">
                <th className="text-left py-4 px-6 font-heading font-semibold">Раздел</th>
                <th className="text-left py-4 px-6 font-heading font-semibold hidden md:table-cell">Описание</th>
                <th className="text-right py-4 px-6"></th>
              </tr>
            </thead>
            <tbody>
              <tr 
                className={`border-b border-black/10 cursor-pointer transition-all hover:bg-secondary/50 ${
                  activeSection === 'history' ? 'bg-secondary' : ''
                }`}
                onClick={() => setActiveSection('history')}
              >
                <td className="py-6 px-6 font-heading font-medium">
                  <div className="flex items-center gap-3">
                    <Icon name="BookOpen" size={20} />
                    История
                  </div>
                </td>
                <td className="py-6 px-6 text-muted-foreground hidden md:table-cell">
                  Исторические факты и события
                </td>
                <td className="py-6 px-6 text-right">
                  <Button variant="ghost" size="sm">
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </td>
              </tr>
              <tr 
                className={`border-b border-black/10 cursor-pointer transition-all hover:bg-secondary/50 ${
                  activeSection === 'facts' ? 'bg-secondary' : ''
                }`}
                onClick={() => setActiveSection('facts')}
              >
                <td className="py-6 px-6 font-heading font-medium">
                  <div className="flex items-center gap-3">
                    <Icon name="Lightbulb" size={20} />
                    Интересные факты
                  </div>
                </td>
                <td className="py-6 px-6 text-muted-foreground hidden md:table-cell">
                  Удивительные особенности города
                </td>
                <td className="py-6 px-6 text-right">
                  <Button variant="ghost" size="sm">
                    <Icon name="ArrowRight" size={16} />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </nav>

        <main className="animate-fade-in">
          {activeSection === 'history' && (
            <article className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  История Великого Новгорода
                </h2>
                <div className="w-16 h-0.5 bg-black"></div>
              </div>

              <div className="aspect-[16/9] w-full overflow-hidden bg-secondary">
                <img 
                  src="https://cdn.poehali.dev/projects/b8bf4c70-9323-49ad-8454-6c1427461d48/files/c2dd2503-397e-4192-b235-b7f428dfe6d1.jpg"
                  alt="Новгородский Кремль"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-foreground/90 leading-relaxed">
                <div className="space-y-4">
                  <p>
                    Великий Новгород — один из древнейших и знаменитых городов России. 
                    Официальной датой возникновения города считается 859 год, упоминание 
                    в летописи «Повесть временных лет».
                  </p>
                  <p>
                    В средние века Новгород был центром Новгородской республики — одного 
                    из крупнейших государственных образований средневековой Европы. Город 
                    играл ключевую роль в торговле между Востоком и Западом.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Новгород не подвергся монгольскому нашествию, благодаря чему сохранил 
                    уникальные памятники древнерусской архитектуры домонгольского периода.
                  </p>
                  <p>
                    В 1478 году Новгород потерял независимость и был присоединён к 
                    Московскому государству. Сегодня Великий Новгород — важный культурный 
                    и исторический центр России с богатым наследием.
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-black/10">
                <h3 className="font-heading font-semibold mb-4">Ключевые даты:</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="font-heading font-bold">859</span>
                    <span>Первое летописное упоминание</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-heading font-bold">1136</span>
                    <span>Образование Новгородской республики</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-heading font-bold">1478</span>
                    <span>Присоединение к Московскому государству</span>
                  </li>
                </ul>
              </div>
            </article>
          )}

          {activeSection === 'facts' && (
            <article className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  Интересные факты о Великом Новгороде
                </h2>
                <div className="w-16 h-0.5 bg-black"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary p-8 space-y-3">
                  <div className="w-12 h-12 bg-black flex items-center justify-center text-white font-heading font-bold text-xl">
                    01
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Берестяные грамоты</h3>
                  <p className="text-sm text-foreground/80">
                    В Новгороде найдено более 1000 берестяных грамот XI–XV веков — 
                    уникальных документов повседневной письменности Древней Руси.
                  </p>
                </div>

                <div className="bg-secondary p-8 space-y-3">
                  <div className="w-12 h-12 bg-black flex items-center justify-center text-white font-heading font-bold text-xl">
                    02
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Новгородское вече</h3>
                  <p className="text-sm text-foreground/80">
                    Новгородская республика управлялась вечем — народным собранием, 
                    где решались важнейшие вопросы. Это был уникальный опыт демократии в средневековой Руси.
                  </p>
                </div>

                <div className="bg-secondary p-8 space-y-3">
                  <div className="w-12 h-12 bg-black flex items-center justify-center text-white font-heading font-bold text-xl">
                    03
                  </div>
                  <h3 className="font-heading font-semibold text-lg">София Новгородская</h3>
                  <p className="text-sm text-foreground/80">
                    Софийский собор, построенный в 1045–1050 годах, — древнейший 
                    храм России и один из старейших в Европе.
                  </p>
                </div>

                <div className="bg-secondary p-8 space-y-3">
                  <div className="w-12 h-12 bg-black flex items-center justify-center text-white font-heading font-bold text-xl">
                    04
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Ганзейский союз</h3>
                  <p className="text-sm text-foreground/80">
                    Новгород был единственным русским городом, входившим в Ганзейский 
                    торговый союз, что подчёркивает его международное значение.
                  </p>
                </div>

                <div className="bg-secondary p-8 space-y-3">
                  <div className="w-12 h-12 bg-black flex items-center justify-center text-white font-heading font-bold text-xl">
                    05
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Деревянные мостовые</h3>
                  <p className="text-sm text-foreground/80">
                    При раскопках обнаружены древние деревянные мостовые, 
                    насчитывающие до 30 ярусов — свидетельство высокой культуры градостроительства.
                  </p>
                </div>

                <div className="bg-secondary p-8 space-y-3">
                  <div className="w-12 h-12 bg-black flex items-center justify-center text-white font-heading font-bold text-xl">
                    06
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Всеобщая грамотность</h3>
                  <p className="text-sm text-foreground/80">
                    Берестяные грамоты показывают, что грамотность в средневековом 
                    Новгороде была распространена даже среди простого населения.
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-black/10 bg-secondary p-8 md:p-12">
                <blockquote className="text-xl md:text-2xl font-heading font-light italic">
                  «Где София, там и Новгород» — древняя новгородская поговорка
                </blockquote>
              </div>
            </article>
          )}
        </main>
      </div>

      <footer className="border-t border-black/10 py-8 px-6 md:px-12 mt-24">
        <p className="text-sm text-muted-foreground text-center">
          Великий Новгород — культурная столица России 2024
        </p>
      </footer>
    </div>
  );
};

export default Index;
