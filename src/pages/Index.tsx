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
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-primary via-primary to-[#2C4C7E] text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Стратегический менеджмент для роста вашего бизнеса
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
              Трансформируем вызовы в возможности. Создаём стратегии, которые работают.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 h-auto shadow-2xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Получить консультацию
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-primary via-[#2C4C7E] to-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Icon name={stat.icon as any} size={28} className="text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={advantage.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Наши услуги
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Комплексные решения для развития вашего бизнеса
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Icon name={service.icon as any} size={28} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
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

      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Кейсы
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Реальные результаты наших клиентов
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseItem, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-accent/30 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm text-accent font-semibold mb-1">
                        {caseItem.industry}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {caseItem.company}
                      </h3>
                    </div>
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="TrendingUp" size={24} className="text-accent" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-accent mb-2">
                      {caseItem.result}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {caseItem.description}
                    </p>
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-border">
                    {caseItem.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
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

      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Отзывы клиентов
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Что говорят о нашей работе
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
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

      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-secondary/50 to-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Свяжитесь с нами
            </h2>
            <p className="text-muted-foreground text-lg">
              Оставьте заявку, и мы обсудим возможности сотрудничества
            </p>
          </div>
          
          <Card className="shadow-2xl border-none">
            <CardContent className="p-8 md:p-12">
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
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-12 py-6 h-auto text-lg"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Strategic Management</h3>
              <p className="text-white/80">
                Профессиональный стратегический консалтинг для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@strategy.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 Strategic Management. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;