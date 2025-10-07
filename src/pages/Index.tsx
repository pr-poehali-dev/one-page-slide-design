import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const services = [
    {
      icon: "Target",
      title: "Стратегическое планирование",
      description: "Разработка долгосрочной стратегии развития компании с учётом рыночных трендов и внутренних ресурсов.",
    },
    {
      icon: "TrendingUp",
      title: "Операционная эффективность",
      description: "Оптимизация бизнес-процессов и повышение производительности для достижения целей.",
    },
    {
      icon: "Users",
      title: "Организационное развитие",
      description: "Построение эффективной структуры управления и развитие корпоративной культуры.",
    },
    {
      icon: "BarChart",
      title: "Финансовое моделирование",
      description: "Создание финансовых моделей для прогнозирования и принятия обоснованных решений.",
    },
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Экспертность",
      description: "Более 15 лет опыта в стратегическом консалтинге",
    },
    {
      icon: "Zap",
      title: "Результативность",
      description: "Рост эффективности бизнеса в среднем на 40%",
    },
    {
      icon: "Handshake",
      title: "Партнёрство",
      description: "Индивидуальный подход к каждому клиенту",
    },
  ];

  const testimonials = [
    {
      name: "Александр Петров",
      position: "CEO, TechCorp",
      text: "Благодаря новой стратегии мы увеличили выручку на 65% за год. Команда продемонстрировала глубокое понимание нашей отрасли.",
      rating: 5,
    },
    {
      name: "Мария Соколова",
      position: "Директор по развитию, RetailGroup",
      text: "Профессиональный подход и конкретные результаты. Оптимизация процессов позволила сократить издержки на 30%.",
      rating: 5,
    },
    {
      name: "Дмитрий Волков",
      position: "Основатель, StartupHub",
      text: "Получили чёткий план развития на 3 года. Особенно ценно, что консультанты учли специфику нашего стартапа.",
      rating: 5,
    },
  ];

  const cases = [
    {
      company: "Производственная компания",
      industry: "Промышленность",
      result: "+45% операционной прибыли",
      description: "Реструктуризация производства и внедрение системы управления качеством",
      metrics: ["12 месяцев", "45% рост", "8 заводов"],
    },
    {
      company: "Сеть розничных магазинов",
      industry: "Ритейл",
      result: "Выход в топ-3 рынка",
      description: "Разработка стратегии омниканального присутствия и digital-трансформации",
      metrics: ["18 месяцев", "120+ точек", "3x трафик"],
    },
  ];

  const stats = [
    {
      value: "200+",
      label: "Реализованных проектов",
      icon: "Briefcase",
    },
    {
      value: "15",
      label: "Лет на рынке",
      icon: "Calendar",
    },
    {
      value: "94%",
      label: "Клиентов возвращаются",
      icon: "ThumbsUp",
    },
    {
      value: "50+",
      label: "Экспертов в команде",
      icon: "Users",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
      <section className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-primary/5"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-slate-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-block mb-6 px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
              <span className="text-primary font-semibold">🚀 Стратегический консалтинг нового поколения</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="text-foreground">
                Стратегический
              </span>
              <br />
              <span className="text-primary">менеджмент</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto font-medium">
              Трансформируем вызовы в возможности. Создаём стратегии, которые работают.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-7 h-auto shadow-lg group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Получить консультацию
                <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="glass text-lg px-10 py-7 h-auto border-2 hover:border-primary/40 hover:bg-primary/5 group"
              >
                Смотреть кейсы
                <Icon name="PlayCircle" className="ml-2 group-hover:scale-110 transition-transform" size={20} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary/50" />
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-5"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4 inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-20 h-20 bg-primary rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                    <Icon name={stat.icon as any} size={32} className="text-white" />
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2 text-primary">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Почему <span className="text-primary">выбирают нас</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Доказанная экспертиза в стратегическом консалтинге
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="group glass border-2 border-transparent hover:border-primary/30 transition-all duration-500 animate-slide-up overflow-hidden relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-10 text-center relative z-10">
                  <div className="relative mb-8 inline-block">
                    <div className="absolute inset-0 bg-primary rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <div className="relative w-20 h-20 bg-primary rounded-3xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                      <Icon name={advantage.icon as any} size={36} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Наши <span className="text-primary">услуги</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для развития вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group glass border-2 border-transparent hover:border-primary/30 transition-all duration-500 animate-slide-up hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-primary rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
                      <div className="relative w-16 h-16 bg-primary rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                        <Icon name={service.icon as any} size={30} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Успешные <span className="text-primary">кейсы</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseItem, index) => (
              <Card 
                key={index}
                className="group glass border-2 border-transparent hover:border-accent/40 transition-all duration-500 animate-slide-up overflow-hidden hover:scale-[1.02] glow-accent"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="inline-block px-4 py-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full text-sm font-bold text-accent mb-3">
                        {caseItem.industry}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {caseItem.company}
                      </h3>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>
                      <div className="relative w-14 h-14 bg-accent rounded-full flex items-center justify-center">
                        <Icon name="TrendingUp" size={26} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="text-4xl font-bold mb-3 text-primary">
                      {caseItem.result}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {caseItem.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-6 border-t border-border/50">
                    {caseItem.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-sm font-medium text-foreground">
                        <Icon name="CheckCircle2" size={16} className="text-accent" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Отзывы</span> клиентов
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нашей работе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="group glass border-2 border-transparent hover:border-primary/30 transition-all duration-500 animate-slide-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={22} className="text-accent fill-accent animate-pulse-slow" style={{ animationDelay: `${i * 100}ms` }} />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-8 text-base">
                    <span className="text-4xl text-primary/20 leading-none">"</span>
                    {testimonial.text}
                    <span className="text-4xl text-primary/20 leading-none">"</span>
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Свяжитесь <span className="text-primary">с нами</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и мы обсудим возможности сотрудничества
            </p>
          </div>
          
          <Card className="glass border-2 border-primary/20 glow">
            <CardContent className="p-10 md:p-14">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Ваше имя *
                    </label>
                    <Input
                      id="name"
                      required
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="ivan@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-32 resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full md:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-12 py-7 h-auto text-lg font-semibold glow group"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="relative bg-gradient-to-br from-foreground via-foreground to-primary text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-30"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-white to-white/80">
                Strategic Management
              </h3>
              <p className="text-white/70 leading-relaxed">
                Профессиональный стратегический консалтинг для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Контакты</h4>
              <div className="space-y-3 text-white/70">
                <p className="flex items-center gap-3 hover:text-white transition-colors">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" size={16} />
                  </div>
                  info@strategy.ru
                </p>
                <p className="flex items-center gap-3 hover:text-white transition-colors">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={16} />
                  </div>
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <a href="#" className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300 transform hover:scale-110">
                  <Icon name="Facebook" size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300 transform hover:scale-110">
                  <Icon name="Linkedin" size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300 transform hover:scale-110">
                  <Icon name="Twitter" size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50">
            <p>&copy; 2024 Strategic Management. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;